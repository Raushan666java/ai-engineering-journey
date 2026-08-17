"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[976],{

/***/ 90215
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_cyber_security_21_social_media_security_md_804_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-cyber-security-21-social-media-security-md-804.json
const site_docs_courses_cyber_security_21_social_media_security_md_804_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/cyber-security/21-social-media-security","title":"Chapter 21: Social Media Security & Account Takeover Prevention","description":"Prereq: Chapters 1-2 (Fundamentals, Cryptography) — authentication concepts, encryption, MFA","source":"@site/docs/courses/cyber-security/21-social-media-security.md","sourceDirName":"courses/cyber-security","slug":"/cyber-security/21-social-media-security","permalink":"/ai-engineering-journey/cyber-security/21-social-media-security","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"id":"21-social-media-security","slug":"/cyber-security/21-social-media-security","title":"Chapter 21: Social Media Security & Account Takeover Prevention","sidebar_label":"Chapter 21: Social Media Security & Account Takeover Prevention","sidebar_position":20},"sidebar":"course-cyber-security","previous":{"title":"Chapter 20: Zero Trust & Enterprise Security Architecture","permalink":"/ai-engineering-journey/cyber-security/20-zero-trust-architecture"},"next":{"title":"CS 410: Comprehensive Cyber Security (Expanded Edition)","permalink":"/ai-engineering-journey/cyber-security"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/cyber-security/21-social-media-security.md


const frontMatter = {
	id: '21-social-media-security',
	slug: '/cyber-security/21-social-media-security',
	title: 'Chapter 21: Social Media Security & Account Takeover Prevention',
	sidebar_label: 'Chapter 21: Social Media Security & Account Takeover Prevention',
	sidebar_position: 20
};
const contentTitle = 'Chapter 21: Social Media Security & Account Takeover Prevention';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "1. Account Takeover Attack Taxonomy",
  "id": "1-account-takeover-attack-taxonomy",
  "level": 2
}, {
  "value": "2. Social Engineering Deep Dive",
  "id": "2-social-engineering-deep-dive",
  "level": 2
}, {
  "value": "2.1 Phishing — The #1 Account Takeover Vector",
  "id": "21-phishing--the-1-account-takeover-vector",
  "level": 3
}, {
  "value": "2.2 Pretexting — Building a Believable Cover Story",
  "id": "22-pretexting--building-a-believable-cover-story",
  "level": 3
}, {
  "value": "2.3 Business Email Compromise (BEC) &amp; CEO Fraud",
  "id": "23-business-email-compromise-bec--ceo-fraud",
  "level": 3
}, {
  "value": "2.4 OSINT Reconnaissance — How Attackers Research You",
  "id": "24-osint-reconnaissance--how-attackers-research-you",
  "level": 3
}, {
  "value": "2.5 Deepfake Social Engineering — The AI-Powered Threat",
  "id": "25-deepfake-social-engineering--the-ai-powered-threat",
  "level": 3
}, {
  "value": "2.6 The Psychology of Social Engineering — Cialdini&#39;s 6 Principles",
  "id": "26-the-psychology-of-social-engineering--cialdinis-6-principles",
  "level": 3
}, {
  "value": "2.7 Social Engineering Countermeasures",
  "id": "27-social-engineering-countermeasures",
  "level": 3
}, {
  "value": "3. Credential Attacks",
  "id": "3-credential-attacks",
  "level": 2
}, {
  "value": "3.1 Credential Stuffing — The Reuse Epidemic",
  "id": "31-credential-stuffing--the-reuse-epidemic",
  "level": 3
}, {
  "value": "3.2 Password Attacks Comparison",
  "id": "32-password-attacks-comparison",
  "level": 3
}, {
  "value": "4. Session Hijacking &amp; MFA Bypass",
  "id": "4-session-hijacking--mfa-bypass",
  "level": 2
}, {
  "value": "4.1 Session Hijacking — The Hidden Threat",
  "id": "41-session-hijacking--the-hidden-threat",
  "level": 3
}, {
  "value": "4.2 MFA Bypass Techniques &amp; Countermeasures",
  "id": "42-mfa-bypass-techniques--countermeasures",
  "level": 3
}, {
  "value": "5. SIM Swapping — The Most Devastating Attack",
  "id": "5-sim-swapping--the-most-devastating-attack",
  "level": 2
}, {
  "value": "5.1 How SIM Swapping Works",
  "id": "51-how-sim-swapping-works",
  "level": 3
}, {
  "value": "5.2 SIM Swap Prevention",
  "id": "52-sim-swap-prevention",
  "level": 3
}, {
  "value": "6. Google Account Security — The Master Key to Your Digital Life",
  "id": "6-google-account-security--the-master-key-to-your-digital-life",
  "level": 2
}, {
  "value": "6.1 Google Account Takeover Attack Taxonomy",
  "id": "61-google-account-takeover-attack-taxonomy",
  "level": 3
}, {
  "value": "6.2 Google Account Recovery Process — Step by Step",
  "id": "62-google-account-recovery-process--step-by-step",
  "level": 3
}, {
  "value": "6.3 Google Advanced Protection Program (APP)",
  "id": "63-google-advanced-protection-program-app",
  "level": 3
}, {
  "value": "6.4 Gmail Security — The Password Reset Hub",
  "id": "64-gmail-security--the-password-reset-hub",
  "level": 3
}, {
  "value": "6.5 YouTube Channel Security",
  "id": "65-youtube-channel-security",
  "level": 3
}, {
  "value": "6.6 Google One Dark Web Report",
  "id": "66-google-one-dark-web-report",
  "level": 3
}, {
  "value": "7. Platform-Specific Forensics",
  "id": "7-platform-specific-forensics",
  "level": 2
}, {
  "value": "6.1 Instagram Forensics",
  "id": "61-instagram-forensics",
  "level": 3
}, {
  "value": "6.2 Platform Forensics Reference",
  "id": "62-platform-forensics-reference",
  "level": 3
}, {
  "value": "6.3 WhatsApp Forensics",
  "id": "63-whatsapp-forensics",
  "level": 3
}, {
  "value": "6.4 Discord Forensics",
  "id": "64-discord-forensics",
  "level": 3
}, {
  "value": "6.5 TikTok Forensics",
  "id": "65-tiktok-forensics",
  "level": 3
}, {
  "value": "6.6 Snapchat Forensics",
  "id": "66-snapchat-forensics",
  "level": 3
}, {
  "value": "6.7 Telegram Forensics",
  "id": "67-telegram-forensics",
  "level": 3
}, {
  "value": "6.8 Signal Forensics",
  "id": "68-signal-forensics",
  "level": 3
}, {
  "value": "6.9 Amazon Account Forensics",
  "id": "69-amazon-account-forensics",
  "level": 3
}, {
  "value": "6.10 GitHub / Microsoft Account Forensics",
  "id": "610-github--microsoft-account-forensics",
  "level": 3
}, {
  "value": "6.11 Facebook / Meta Forensics",
  "id": "611-facebook--meta-forensics",
  "level": 3
}, {
  "value": "8. Personal Defense Architecture",
  "id": "8-personal-defense-architecture",
  "level": 2
}, {
  "value": "7.1 The Layered Defense Model",
  "id": "71-the-layered-defense-model",
  "level": 3
}, {
  "value": "7.2 Account Security Scanner — TypeScript",
  "id": "72-account-security-scanner--typescript",
  "level": 3
}, {
  "value": "9. Incident Response Playbook",
  "id": "9-incident-response-playbook",
  "level": 2
}, {
  "value": "8.1 Immediate Action — The First 15 Minutes",
  "id": "81-immediate-action--the-first-15-minutes",
  "level": 3
}, {
  "value": "8.2 Platform-Specific Recovery",
  "id": "82-platform-specific-recovery",
  "level": 3
}, {
  "value": "8.3 Post-Recovery Hardening Checklist",
  "id": "83-post-recovery-hardening-checklist",
  "level": 3
}, {
  "value": "10. Real-World Case Studies",
  "id": "10-real-world-case-studies",
  "level": 2
}, {
  "value": "9.1 Twitter Bitcoin Scam 2020 — The Ultimate Social Engineering Attack",
  "id": "91-twitter-bitcoin-scam-2020--the-ultimate-social-engineering-attack",
  "level": 3
}, {
  "value": "9.2 Telegram OAuth Hijacking — The Authentication Proxy Attack",
  "id": "92-telegram-oauth-hijacking--the-authentication-proxy-attack",
  "level": 3
}, {
  "value": "9.3 SIM Swap Ring — The Crypto Investor Targeted Attack",
  "id": "93-sim-swap-ring--the-crypto-investor-targeted-attack",
  "level": 3
}, {
  "value": "9.4 Google Account Takeover — The Recovery Nightmare",
  "id": "94-google-account-takeover--the-recovery-nightmare",
  "level": 3
}, {
  "value": "9.5 Discord Token Logger — The Fake Tool That Steals Your Account",
  "id": "95-discord-token-logger--the-fake-tool-that-steals-your-account",
  "level": 3
}, {
  "value": "9.6 WhatsApp Social Engineering Hijack — The &quot;I Need The Code&quot; Scam",
  "id": "96-whatsapp-social-engineering-hijack--the-i-need-the-code-scam",
  "level": 3
}, {
  "value": "9.7 TikTok Journalist Account Takeover — The Targeted Disinformation Attack",
  "id": "97-tiktok-journalist-account-takeover--the-targeted-disinformation-attack",
  "level": 3
}, {
  "value": "9.8 Business Email Compromise (BEC) — The $50 Billion Heist",
  "id": "98-business-email-compromise-bec--the-50-billion-heist",
  "level": 3
}, {
  "value": "9.9 Deepfake CEO Fraud — The $25 Million Video Call",
  "id": "99-deepfake-ceo-fraud--the-25-million-video-call",
  "level": 3
}, {
  "value": "11. Monitoring Tools &amp; Services",
  "id": "11-monitoring-tools--services",
  "level": 2
}, {
  "value": "12. Password Manager Setup Guide",
  "id": "12-password-manager-setup-guide",
  "level": 2
}, {
  "value": "11.1 Recommended Password Managers",
  "id": "111-recommended-password-managers",
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
  "value": "Review Questions",
  "id": "review-questions",
  "level": 3
}, {
  "value": "Practical Exercises",
  "id": "practical-exercises",
  "level": 3
}, {
  "value": "Application Problems",
  "id": "application-problems",
  "level": 3
}, {
  "value": "Challenge Problems",
  "id": "challenge-problems",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    details: "details",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "chapter-21-social-media-security--account-takeover-prevention",
        children: "Chapter 21: Social Media Security & Account Takeover Prevention"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prereq:"
        }), " Chapters 1-2 (Fundamentals, Cryptography) — authentication concepts, encryption, MFA\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " None — capstone chapter\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Target Audience:"
        }), " All users, security-conscious individuals, SOC analysts, digital forensics investigators"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify and classify 12+ modern account takeover attack techniques across social engineering, technical exploitation, and physical methods."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform a full forensic investigation of a compromised Instagram/Twitter/LinkedIn account using platform-specific evidence sources."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a multi-layered defense strategy combining 2FA, hardware security keys, password managers, and OPSEC."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a personal incident response playbook for account compromise with SLA-driven recovery steps."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze real-world attack case studies (Twitter 2020 Bitcoin scam, Telegram OAuth hijacking, SIM swap rings) with root cause mapping."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy monitoring tools for credential leaks, session hijacking detection, and dark web exposure alerts."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a TypeScript-based account security scanner and threat detection engine."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[\"Social Media<br/>Attack Surface\"] --> B[\"Credential<br/>Attacks\"]\n    A --> C[\"Social<br/>Engineering\"]\n    A --> D[\"Session<br/>Hijacking\"]\n    A --> E[\"MFA<br/>Bypass\"]\n    A --> F[\"Platform<br/>Exploits\"]\n    B --> B1[\"Phishing\"]\n    B --> B2[\"Credential Stuffing\"]\n    B --> B3[\"Password Spraying\"]\n    C --> C1[\"Pretexting\"]\n    C --> C2[\"BEC\"]\n    C --> C3[\"Deepfakes\"]\n    D --> D1[\"Session Token Theft\"]\n    D --> D2[\"OAuth Token Abuse\"]\n    E --> E1[\"SIM Swapping\"]\n    E --> E2[\"Push Fatigue\"]\n    F --> F1[\"API Abuse\"]\n    F --> F2[\"Zero-Day Exploits\"]\n    style A fill:#1a1a2e,stroke:#e94560,color:#fff\n    style E1 fill:#e94560,stroke:#fff,color:#fff\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Matters"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Account Takeover Attack Taxonomy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 attack vectors classified by method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Know your enemy — every attack exploits one of these"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Social Engineering Deep Dive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phishing, spear phishing, vishing, SMiShing, deepfakes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "82% of breaches involve the human element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Credential Attacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stuffing, spraying, password reuse, hash cracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Your password is likely already compromised"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Session Hijacking & MFA Bypass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cookie theft, OAuth abuse, MFA fatigue, SIM swap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Passwords alone are useless; MFA alone is not enough"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIM Swapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Social engineering mobile carriers, insider threats"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The most devastating personal attack vector"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Platform-Specific Forensics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instagram, Twitter/X, Facebook, LinkedIn, Google, Apple"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each platform leaves different forensic breadcrumbs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Investigation Toolkit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TypeScript forensics engine, log parsers, session analyzers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated evidence collection saves hours"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Personal Defense Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Password managers, hardware keys, OPSEC, recovery codes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A complete system for account security"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Incident Response Playbook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step-by-step recovery with SLAs for each platform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You need a plan BEFORE you get hacked"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Case Studies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Twitter 2020, Telegram OAuth, SIM swap rings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real attacks reveal real weaknesses"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-account-takeover-attack-taxonomy",
      children: "1. Account Takeover Attack Taxonomy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Account takeover (ATO) attacks fall into six categories. Every real-world attack uses one or more of these vectors."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ACCOUNT TAKEOVER ATTACK CLASSIFICATION\n═══════════════════════════════════════════════════\n├── 1. CREDENTIAL-BASED (52% of ATO)\n│   ├── Credential Stuffing — leaked passwords reused across services\n│   ├── Password Spraying — common passwords against many accounts\n│   ├── Brute Force — systematic guessing with rate-limit bypass\n│   └── Credential Phishing — fake login pages harvesting passwords\n│\n├── 2. SOCIAL ENGINEERING (24%)\n│   ├── Spear Phishing — targeted emails impersonating support\n│   ├── Vishing — phone calls pretending to be security team\n│   ├── SMiShing — SMS with malicious links\n│   └── Deepfake Voice/Video — AI-generated identity theft\n│\n├── 3. SESSION-BASED (12%)\n│   ├── Session Hijacking — stealing cookies/tokens from browser\n│   ├── OAuth Abuse — malicious third-party app authorization\n│   └── Token Replay — captured authentication tokens reused\n│\n├── 4. MFA CIRCUMVENTION (7%)\n│   ├── MFA Fatigue — spamming push notifications until user accepts\n│   ├── SIM Swap — attacker ports your number to their SIM\n│   ├── Backup Code Theft — recovery codes stolen from email/cloud\n│   └── SS7 Exploit — intercepting SMS 2FA at protocol level\n│\n├── 5. SESSION FIXATION (3%)\n│   ├── Attacker sets a known session ID, victim authenticates with it\n│   └── Rare but devastating against platforms with poor session hygiene\n│\n└── 6. PHYSICAL (2%)\n    ├── Device Theft — unlocked phone with saved sessions\n    └── Shoulder Surfing — observing password/PIN entry in public\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack Vector Severity Matrix:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Difficulty"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detectability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frequency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prevention"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Credential Stuffing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Password Manager + 2FA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Phishing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware Key (FIDO2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIM Swap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carrier PIN + Google Voice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MFA Fatigue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Growing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number Matching + Rate Limit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Session Hijacking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session Binding + HTTPS Only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OAuth Abuse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Review Apps Monthly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deepfake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verification Code Word"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SS7 Exploit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App-based 2FA, not SMS"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-social-engineering-deep-dive",
      children: "2. Social Engineering Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-phishing--the-1-account-takeover-vector",
      children: "2.1 Phishing — The #1 Account Takeover Vector"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Phishing accounts for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "82% of breaches"
      }), " involving a human element (Verizon DBIR 2024). Modern phishing is no longer obvious — attackers use cloned login pages, real SSL certificates, and urgency tactics."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Modern Phishing Techniques:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detection"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Clone Phishing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legitimate email cloned, link replaced with malicious URL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare headers, check sender domain carefully"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Spear Phishing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highly personalized using OSINT about the target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unusual request even from known contacts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Whaling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Targeting executives/C-suite with fake legal/financial emails"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify via separate channel before acting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SMiShing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMS with fake security alert + link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never click links in SMS — use app directly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Vishing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone call impersonating support asking for verification code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hang up, call back on official number"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Angler Phishing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fake customer support accounts on social media replying to complaints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check verified badge, official website links"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Quid Pro Quo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker offers a service in exchange for credentials"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No legitimate service asks for your password"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Watering Hole"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compromising a site the target regularly visits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use ad-blockers, script blockers, keep software updated"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phishing Detection Algorithm — TypeScript:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// phish-detector.ts — URL and Email Phishing Detection Engine\n\ninterface EmailMessage {\n  from: string;\n  fromDomain: string;\n  replyTo: string;\n  returnPath: string;\n  subject: string;\n  body: string;\n  links: string[];\n  headers: Record<string, string>;\n  attachments: Attachment[];\n}\n\ninterface Attachment {\n  filename: string;\n  extension: string;\n  size: number;\n}\n\ninterface PhishingScore {\n  totalScore: number; // 0-100\n  risk: 'safe' | 'suspicious' | 'high' | 'critical';\n  factors: PhishingFactor[];\n}\n\ninterface PhishingFactor {\n  name: string;\n  score: number; // 0-100\n  detail: string;\n}\n\nclass PhishingDetector {\n  private readonly KNOWN_BRANDS = new Map<string, string[]>([\n    ['instagram', ['instagram.com', 'cdninstagram.com', 'ig.me']],\n    ['facebook', ['facebook.com', 'fb.com', 'fbcdn.net']],\n    ['google', ['google.com', 'gmail.com', 'youtube.com', 'accounts.google.com']],\n    ['twitter', ['twitter.com', 'x.com', 't.co']],\n    ['linkedin', ['linkedin.com', 'licdn.com']],\n    ['apple', ['apple.com', 'icloud.com']],\n    ['microsoft', ['microsoft.com', 'live.com', 'outlook.com', 'office365.com']],\n    ['paypal', ['paypal.com', 'paypalobjects.com']],\n  ]);\n\n  private readonly SUSPICIOUS_TLDS = new Set([\n    '.tk', '.ml', '.ga', '.cf', '.gq', '.xyz', '.top', '.club',\n    '.work', '.bid', '.date', '.men', '.loan', '.download',\n  ]);\n\n  private readonly PHISHING_KEYWORDS = [\n    'verify', 'verification', 'account', 'suspended', 'limited',\n    'unauthorized', 'unusual', 'login', 'sign in', 'password',\n    'credential', 'security alert', 'urgent', 'immediate action',\n    'confirm your', 'update your', 'reactivate', 'restore',\n    'unlock', 'unauthorized login', 'suspicious activity',\n  ];\n\n  analyzeEmail(email: EmailMessage): PhishingScore {\n    const factors: PhishingFactor[] = [];\n    let totalScore = 0;\n\n    // Factor 1: Sender domain mismatch\n    const senderFactor = this.checkSenderDomain(email);\n    factors.push(senderFactor);\n    totalScore += senderFactor.score;\n\n    // Factor 2: Reply-to mismatch\n    const replyFactor = this.checkReplyTo(email);\n    factors.push(replyFactor);\n    totalScore += replyFactor.score;\n\n    // Factor 3: Link domain analysis\n    const linkFactor = this.checkLinks(email);\n    factors.push(linkFactor);\n    totalScore += linkFactor.score;\n\n    // Factor 4: Suspicious keywords in subject/body\n    const keywordFactor = this.checkKeywords(email);\n    factors.push(keywordFactor);\n    totalScore += keywordFactor.score;\n\n    // Factor 5: Urgency indicators\n    const urgencyFactor = this.checkUrgency(email);\n    factors.push(urgencyFactor);\n    totalScore += urgencyFactor.score;\n\n    // Factor 6: Attachment risk\n    const attachmentFactor = this.checkAttachments(email);\n    factors.push(attachmentFactor);\n    totalScore += attachmentFactor.score;\n\n    // Factor 7: SPF/DKIM/DMARC auth results\n    const authFactor = this.checkEmailAuth(email);\n    factors.push(authFactor);\n    totalScore += authFactor.score;\n\n    // Normalize to 0-100\n    totalScore = Math.min(Math.round(totalScore / 7), 100);\n\n    return {\n      totalScore,\n      risk: totalScore >= 70 ? 'critical' : totalScore >= 50 ? 'high' : totalScore >= 30 ? 'suspicious' : 'safe',\n      factors,\n    };\n  }\n\n  private checkSenderDomain(email: EmailMessage): PhishingFactor {\n    for (const [brand, domains] of this.KNOWN_BRANDS) {\n      // Check if email claims to be from a brand but domain doesn't match\n      if (email.body.toLowerCase().includes(brand) || email.subject.toLowerCase().includes(brand)) {\n        const isLegitimateDomain = domains.some(d => email.fromDomain === d || email.fromDomain.endsWith('.' + d));\n        if (!isLegitimateDomain) {\n          return {\n            name: 'Sender Domain Mismatch',\n            score: 90,\n            detail: `Claims to be from ${brand} but sent from ${email.fromDomain}`,\n          };\n        }\n      }\n    }\n\n    // Check for lookalike domains (homograph attack)\n    const lookalike = this.detectLookalikeDomain(email.fromDomain);\n    if (lookalike) {\n      return {\n        name: 'Lookalike Domain',\n        score: 95,\n        detail: `Domain ${email.fromDomain} mimics ${lookalike}`,\n      };\n    }\n\n    // Check suspicious TLDs\n    if (this.SUSPICIOUS_TLDS.has('.' + email.fromDomain.split('.').pop())) {\n      return {\n        name: 'Suspicious TLD',\n        score: 60,\n        detail: `Domain uses suspicious TLD: ${email.fromDomain}`,\n      };\n    }\n\n    return { name: 'Sender Domain', score: 0, detail: 'Domain appears legitimate' };\n  }\n\n  private detectLookalikeDomain(domain: string): string | null {\n    // Homograph detection — replaces lookalike characters\n    const homographMap: Record<string, string> = {\n      '0': 'o', '1': 'l', '3': 'e', '4': 'a', '5': 's',\n      '7': 't', '8': 'b', '@': 'a', 'rn': 'm', 'rn': 'm',\n    };\n    const normalized = domain.toLowerCase();\n\n    for (const [brand, domains] of this.KNOWN_BRANDS) {\n      for (const legitDomain of domains) {\n        let normalizedLegit = legitDomain;\n        for (const [char, replacement] of Object.entries(homographMap)) {\n          normalizedLegit = normalizedLegit.replaceAll(char, replacement);\n        }\n        let normalizedDomain = normalized;\n        for (const [char, replacement] of Object.entries(homographMap)) {\n          normalizedDomain = normalizedDomain.replaceAll(char, replacement);\n        }\n\n        if (normalizedDomain !== normalized && normalizedDomain === normalizedLegit) {\n          return legitDomain;\n        }\n\n        // Check for subdomain tricks: instagram.com.security-alert.xyz\n        if (domain.includes(legitDomain.replace('.', '\\\\.')) && !domain.endsWith(legitDomain)) {\n          return legitDomain;\n        }\n      }\n    }\n    return null;\n  }\n\n  private checkReplyTo(email: EmailMessage): PhishingFactor {\n    if (email.replyTo && email.replyTo !== email.from) {\n      return {\n        name: 'Reply-To Mismatch',\n        score: 70,\n        detail: `Reply-To (${email.replyTo}) differs from From (${email.from})`,\n      };\n    }\n    return { name: 'Reply-To', score: 0, detail: 'Reply-To matches sender' };\n  }\n\n  private checkLinks(email: EmailMessage): PhishingFactor {\n    let suspiciousCount = 0;\n\n    for (const link of email.links) {\n      try {\n        const url = new URL(link);\n        // Check for IP address instead of domain\n        if (/\\d+\\.\\d+\\.\\d+\\.\\d+/.test(url.hostname)) {\n          suspiciousCount += 2;\n        }\n        // Check for mismatched display text vs actual URL\n        if (url.protocol !== 'https:') suspiciousCount++;\n        // Check for encoded URLs\n        if (link.includes('%')) suspiciousCount++;\n        // Check for URL shorteners\n        if (['bit.ly', 'tinyurl.com', 't.co', 'goo.gl', 'rb.gy', 'shorturl.at'].includes(url.hostname)) {\n          suspiciousCount++;\n        }\n      } catch {\n        suspiciousCount += 3; // Malformed URL\n      }\n    }\n\n    if (suspiciousCount >= 3) {\n      return {\n        name: 'Suspicious Links',\n        score: 85,\n        detail: `${suspiciousCount} suspicious indicators in links`,\n      };\n    }\n    if (suspiciousCount > 0) {\n      return {\n        name: 'Suspicious Links',\n        score: 40,\n        detail: `${suspiciousCount} minor suspicious link indicators`,\n      };\n    }\n    return { name: 'Links', score: 0, detail: 'All links appear legitimate' };\n  }\n\n  private checkKeywords(email: EmailMessage): PhishingFactor {\n    const text = `${email.subject} ${email.body}`.toLowerCase();\n    const found = this.PHISHING_KEYWORDS.filter(k => text.includes(k.toLowerCase()));\n\n    if (found.length >= 5) {\n      return {\n        name: 'Phishing Keywords',\n        score: 75,\n        detail: `Found ${found.length} phishing keywords: ${found.slice(0, 5).join(', ')}`,\n      };\n    }\n    if (found.length >= 2) {\n      return {\n        name: 'Phishing Keywords',\n        score: 30,\n        detail: `Found ${found.length} phishing keywords`,\n      };\n    }\n    return { name: 'Keywords', score: 0, detail: 'No phishing keywords detected' };\n  }\n\n  private checkUrgency(email: EmailMessage): PhishingFactor {\n    const urgencyPatterns = [\n      /\\b(urgent|immediately|asap|right away|without delay)\\b/i,\n      /\\b(24 hours|48 hours|within 24|expires?|deadline)\\b/i,\n      /\\b(action required|response required|must respond)\\b/i,\n      /\\b(final warning|last notice|account will be (closed|suspended|deleted|terminated))\\b/i,\n      /❗|⚠️|🔴|🚨|🔐/,\n    ];\n\n    const urgencyCount = urgencyPatterns.filter(p => p.test(`${email.subject} ${email.body}`)).length;\n\n    if (urgencyCount >= 3) {\n      return {\n        name: 'Urgency Pressure',\n        score: 70,\n        detail: `High urgency pressure detected (${urgencyCount} indicators)`,\n      };\n    }\n    if (urgencyCount >= 1) {\n      return {\n        name: 'Urgency Pressure',\n        score: 20,\n        detail: `Some urgency indicators found`,\n      };\n    }\n    return { name: 'Urgency', score: 0, detail: 'No urgency pressure' };\n  }\n\n  private checkAttachments(email: EmailMessage): PhishingFactor {\n    const dangerousExtensions = new Set(['.exe', '.msi', '.bat', '.cmd', '.vbs', '.ps1', '.scr', '.jar', '.js', '.wsf']);\n\n    if (email.attachments.length === 0) {\n      return { name: 'Attachments', score: 0, detail: 'No attachments' };\n    }\n\n    for (const att of email.attachments) {\n      if (dangerousExtensions.has(att.extension.toLowerCase())) {\n        return {\n          name: 'Dangerous Attachment',\n          score: 90,\n          detail: `Attachment ${att.filename} is an executable type`,\n        };\n      }\n      // Office documents with macros\n      if (['.docm', '.xlsm', '.pptm'].includes(att.extension.toLowerCase())) {\n        return {\n          name: 'Macro-Enabled Document',\n          score: 70,\n          detail: `Attachment ${att.filename} may contain macros`,\n        };\n      }\n      // Archived executables\n      if (['.zip', '.rar', '.7z'].includes(att.extension.toLowerCase())) {\n        return {\n          name: 'Archived Attachment',\n          score: 30,\n          detail: 'Archive files can contain malicious payloads',\n        };\n      }\n    }\n\n    return { name: 'Attachments', score: 0, detail: 'No dangerous attachments' };\n  }\n\n  private checkEmailAuth(email: EmailMessage): PhishingFactor {\n    const authResults = email.headers['authentication-results'] || '';\n    const spfPass = authResults.includes('spf=pass');\n    const dkimPass = authResults.includes('dkim=pass');\n    const dmarcPass = authResults.includes('dmarc=pass');\n\n    if (!spfPass && !dkimPass && !dmarcPass) {\n      return {\n        name: 'Email Authentication Failed',\n        score: 85,\n        detail: 'SPF, DKIM, and DMARC all failed — email may be spoofed',\n      };\n    }\n    if (!dmarcPass) {\n      return {\n        name: 'DMARC Failed',\n        score: 50,\n        detail: 'DMARC policy check failed — domain may be impersonated',\n      };\n    }\n    return { name: 'Email Auth', score: 0, detail: 'SPF, DKIM, DMARC passed' };\n  }\n}\n\n// ─── Instagram-Specific Phishing Detection ───\n\nclass InstagramPhishDetector extends PhishingDetector {\n  private readonly INSTAGRAM_PHISHING_PATTERNS = [\n    // Fake login pages\n    /instagram[^\\.]*\\.(tk|ml|ga|cf|gq|xyz|top|club)/i,\n    // Common phishing URL patterns\n    /instagram.*(?:verify|login|auth|secure|confirm)/i,\n    /instagram.*(?:challenge|restricted|violation|copyright)/i,\n    // Fake support emails\n    /support@.*instagram.*(?!\\.com)/i,\n    /instagram.*help.*center/i,\n    // Verification scams\n    /verified|verification.*badge|blue.*tick/i,\n    // Fake giveaway\n    /winner|giveaway|congratulations.*selected|free.*followers/i,\n  ];\n\n  analyzeInstagramSpecific(url: string, senderEmail: string): PhishingFactor[] {\n    const factors: PhishingFactor[] = [];\n\n    // Check URL\n    for (const pattern of this.INSTAGRAM_PHISHING_PATTERNS) {\n      if (pattern.test(url)) {\n        factors.push({\n          name: 'Instagram Phishing Pattern',\n          score: 95,\n          detail: `URL matches known Instagram phishing pattern: ${pattern}`,\n        });\n      }\n    }\n\n    // Check sender\n    if (senderEmail && !senderEmail.endsWith('@instagram.com') && !senderEmail.endsWith('@support.instagram.com') && !senderEmail.endsWith('@mail.instagram.com') && !senderEmail.endsWith('@facebook.com')) {\n      factors.push({\n        name: 'Non-Instagram Sender',\n        score: 80,\n        detail: `Official Instagram emails come from @instagram.com, @support.instagram.com, or @mail.instagram.com, not ${senderEmail.split('@')[1] || 'unknown'}`,\n      });\n    }\n\n    return factors;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-pretexting--building-a-believable-cover-story",
      children: "2.2 Pretexting — Building a Believable Cover Story"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pretexting is the most sophisticated form of social engineering because the attacker creates an entire fictional scenario (the \"pretext\") to manipulate the target. Unlike a simple phishing email, pretexting involves research, role-playing, and multiple interaction points."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Pretexting Playbook:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PRETEXTING FRAMEWORK\n═══════════════════════════════════════════════════\nSTEP 1: TARGET SELECTION\n  └── Identify high-value target (executive, IT admin, finance)\n  └── Gather OSINT: LinkedIn, Facebook, Instagram, Twitter, company website\n\nSTEP 2: PRETEXT CONSTRUCTION\n  └── Choose role: IT support, vendor, auditor, recruiter, journalist\n  └── Create backstory based on target's context\n  └── Prepare documents: fake ID, fake ticket number, fake company email\n\nSTEP 3: CONTACT ESTABLISHMENT\n  └── First touch: low-stakes request (survey, calendar invite)\n  └── Build rapport over multiple interactions (days/weeks)\n  └── Use name-dropping: \"I was just talking to [manager's name]\"\n\nSTEP 4: INFORMATION EXTRACTION\n  └── Escalate requests progressively\n  └── Each request is reasonable on its own\n  └── Exploit authority: \"CEO needs this done urgently\"\n\nSTEP 5: COVER CLOSURE\n  └── Thank target profusely\n  └── Leave behind plausible deniability\n  └── Cover tracks: delete emails, fake account deactivation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real Pretexting Scripts:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Attacker Role"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Script Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Psychological Lever"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IT Support"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Help desk calling about \"suspicious login\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Hi [Name], this is Mark from IT Security. We detected an unusual login attempt from Russia at 3 AM. I need to verify your account — can you confirm your username and the last password you remember?\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fear + Authority"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Vendor Auditor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Third-party security auditor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"I'm conducting our quarterly vendor security audit. Your CEO signed the authorization. I need your VPN credentials and a list of all internal systems you have access to.\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authority + Legitimacy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recruiter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Headhunter with \"amazing opportunity\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Hi [Name], I found your profile on LinkedIn. I'm recruiting for a Director role at [Competitor]. Before I share details, I need to verify your background — what projects have you worked on recently?\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greed + Ego"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Journalist"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reporter writing about the company"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"I'm doing a feature on [Company] for Forbes. Your CEO recommended I speak with you. Can you walk me through your team structure and the tools you use?\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flattery + Authority"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fake Customer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Angry customer demanding resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"I've been trying to get my account fixed for THREE WEEKS. Your support is useless. I want a supervisor NOW or I'm posting this on Twitter.\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anger + Time Pressure"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-business-email-compromise-bec--ceo-fraud",
      children: "2.3 Business Email Compromise (BEC) & CEO Fraud"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BEC is the most financially damaging social engineering attack — the FBI reports ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "$50+ billion in losses"
      }), " since 2013. Unlike phishing (casting a wide net), BEC is surgical, targeting specific individuals with specific roles."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "BEC Attack Types:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Average Loss"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CEO Fraud"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker impersonates CEO requesting urgent wire transfer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"I'm in a meeting, need $50K wired to vendor immediately\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$130,000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Invoice Fraud"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fake invoice from legitimate-looking vendor with updated bank details"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Our banking information has changed, please pay next invoice to new account\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$85,000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Account Compromise"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real employee email account is hacked, used to request payments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"HR Director's actual email sends W-2 requests to all employees\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$100,000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Attorney Impersonation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fake lawyer about \"time-sensitive legal matter\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"This is a confidential legal matter requiring immediate funds transfer\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$200,000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Theft"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HR impersonated to steal W-2 data for tax fraud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"I need all employee W-2s for annual audit by Friday\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$50,000 (per 1000 employees)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "BEC Attack Chain — TypeScript:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// bec-detector.ts — Business Email Compromise Detection Engine\n\ninterface EmailContext {\n  senderEmail: string;\n  senderDomain: string;\n  senderName: string;\n  recipientEmail: string;\n  recipientRole: string;\n  subject: string;\n  body: string;\n  urgency: number; // 0-100\n  containsWireTransfer: boolean;\n  containsInvoice: boolean;\n  containsPII: boolean;\n  hasExternalReplyTo: boolean;\n  replyToDomain: string;\n  ipOrigin: string;\n  previousEmails: PreviousEmail[];\n  timeSinceLastContact: number; // days\n}\n\ninterface PreviousEmail {\n  sender: string;\n  date: Date;\n  subject: string;\n}\n\ninterface BECRiskScore {\n  score: number; // 0-100\n  risk: 'low' | 'medium' | 'high' | 'critical';\n  indicators: string[];\n  recommendedAction: 'allow' | 'warn' | 'block' | 'verify_out_of_band';\n}\n\nclass BECDetector {\n  private readonly EXECUTIVE_TITLES = ['CEO', 'CFO', 'COO', 'CTO', 'President', 'VP', 'Director', 'Controller'];\n  private readonly FINANCE_ROLES = ['accounting', 'finance', 'accounts payable', 'controller', 'treasury'];\n\n  detect(email: EmailContext): BECRiskScore {\n    const indicators: string[] = [];\n    let score = 0;\n\n    // 1. Financial request to non-executive\n    if (email.containsWireTransfer || email.containsInvoice) {\n      score += 25;\n      indicators.push('Email contains wire transfer or invoice request');\n    }\n\n    // 2. External sender pretending to be executive\n    const senderLooksExecutive = this.EXECUTIVE_TITLES.some(t => email.senderName.includes(t));\n    if (senderLooksExecutive && !this.isInternalDomain(email.senderDomain)) {\n      score += 30;\n      indicators.push(`External sender claims to be ${email.senderName} but domain is ${email.senderDomain}`);\n    }\n\n    // 3. Reply-To domain mismatch\n    if (email.replyToDomain && email.replyToDomain !== email.senderDomain) {\n      score += 25;\n      indicators.push(`Reply-To (${email.replyToDomain}) differs from sender (${email.senderDomain})`);\n    }\n\n    // 4. High urgency + financial request\n    if (email.urgency > 70 && (email.containsWireTransfer || email.containsInvoice)) {\n      score += 20;\n      indicators.push('High urgency paired with financial request — common BEC tactic');\n    }\n\n    // 5. PII harvesting attempt\n    if (email.containsPII) {\n      score += 30;\n      indicators.push('Email requests personally identifiable information (W-2, SSN, bank details)');\n    }\n\n    // 6. No previous relationship\n    const hasPriorContact = email.previousEmails.some(e => e.sender === email.senderEmail);\n    if (!hasPriorContact) {\n      score += 15;\n      indicators.push('No prior email history with this sender');\n    }\n\n    // 7. Time pressure phrases\n    const pressurePhrases = /\\b(urgent|immediately|asap|today|end of day|right now|past due|overdue)\\b/gi;\n    const pressureMatch = email.body.match(pressurePhrases);\n    if (pressureMatch && pressureMatch.length > 2) {\n      score += 15;\n      indicators.push(`Time pressure language: \"${pressureMatch.slice(0, 3).join(', ')}\"`);\n    }\n\n    // 8. Recipient in finance/accounting\n    const recipientIsFinance = this.FINANCE_ROLES.some(r => email.recipientRole.toLowerCase().includes(r));\n    if (recipientIsFinance && email.containsWireTransfer) {\n      score += 20;\n      indicators.push(`Finance role targeted with wire transfer request`);\n    }\n\n    // 9. Domain impersonation\n    const impersonated = this.detectDomainImpersonation(email.senderDomain);\n    if (impersonated) {\n      score += 35;\n      indicators.push(`Domain ${email.senderDomain} impersonates ${impersonated}`);\n    }\n\n    return {\n      score: Math.min(score, 100),\n      risk: score >= 60 ? 'critical' : score >= 40 ? 'high' : score >= 20 ? 'medium' : 'low',\n      indicators,\n      recommendedAction: score >= 60 ? 'block' : score >= 40 ? 'verify_out_of_band' : score >= 20 ? 'warn' : 'allow',\n    };\n  }\n\n  private isInternalDomain(domain: string): boolean {\n    // In production: check against company's domain list\n    return false;\n  }\n\n  private detectDomainImpersonation(domain: string): string | null {\n    // Check for typosquatted domains: goog1e.com, micr0soft.com\n    const lookalikeMap: Record<string, string[]> = {\n      'company.com': ['cornpany.com', 'c0mpany.com', 'company.co', 'cornpany.net'],\n    };\n\n    for (const [real, variants] of Object.entries(lookalikeMap)) {\n      if (variants.includes(domain.toLowerCase())) {\n        return real;\n      }\n    }\n    return null;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-osint-reconnaissance--how-attackers-research-you",
      children: "2.4 OSINT Reconnaissance — How Attackers Research You"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before any targeted attack, the attacker spends time gathering information (Open Source INTelligence). Everything you post publicly is ammunition."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "OSINT Sources for Account Takeover:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Source"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Attackers Find"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It's Dangerous"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LinkedIn"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Job title, employer, email format, colleagues, skills"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables spear phishing with context (\"saw you work on X project\")"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Facebook"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full name, DOB, family members, pets, hometown, school"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security questions: \"mother's maiden name\", \"first pet\", \"elementary school\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Instagram"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Location tags, travel plans, device type (from story quality), friends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIM swap timing (attack when you're traveling), relationship mapping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Twitter/X"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tech stack, tools used, third-party services, work habits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tech support pretexting using actual tools you use"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GitHub"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email addresses, personal projects, work schedule, API keys in commits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct credential theft from leaked API keys/env files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "WhatsApp/Telegram"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Profile photo, last seen, phone number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone number used for SIM swap pretext"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Discord"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gaming habits, friend groups, voice chat patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Social engineering through trusted communities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Strava/Fitness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Running routes, home location, schedule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical attacks, knowing when you're away from home"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Venmo/Zelle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction patterns, contacts, public notes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Financial pretexting with real transaction references"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Breaches"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Passwords, emails, phone numbers, credit cards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Credential stuffing across ALL your services"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "OSINT Reconnaissance Toolchain (What Attackers Use):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How Attackers Use It"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "theHarvester"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email & domain enumeration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find all email addresses associated with your domain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sherlock"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Username search across 400+ platforms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Map your single username across all social networks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Holmes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-platform identity correlation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Link your profiles across platforms by same person matching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Google Dorking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced search operators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find exposed files, documents, and information on your domain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Maltego"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relationship mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visual graph of your connections, organizations, and infrastructure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Shodan"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internet-connected device search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find exposed cameras, servers, and IoT devices you own"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Have I Been Pwned"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Breach database search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find your leaked passwords from known breaches"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SpiderFoot"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated OSINT collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatically gather 200+ data points about you or your domain"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "OSINT Self-Defense Checklist:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OSINT REDUCTION CHECKLIST\n═══════════════════════════════════════════════════\n□ Remove DOB from all social media profiles\n□ Remove hometown, high school, college from public profiles\n□ Change pet names, mother's maiden name to FICTIONAL answers\n□ Set LinkedIn visibility to \"Only Connections\" for profile details\n□ Make Instagram private + remove location tags\n□ Make Twitter archive old tweets + delete location metadata\n□ Remove personal info from GitHub commits (name, email)\n□ Disable Strava/Fitness public activity\n□ Make Venmo/Zelle transactions private\n□ Remove yourself from people-search sites (BeenVerified, Whitepages, Spokeo)\n□ Use different usernames across platforms (don't link them)\n□ Delete unused accounts (they become breach targets)\n□ Never post travel plans in real-time (post AFTER returning)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-deepfake-social-engineering--the-ai-powered-threat",
      children: "2.5 Deepfake Social Engineering — The AI-Powered Threat"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deepfakes take social engineering to a new level by using AI to impersonate someone's voice or appearance. This is now accessible to any attacker — no longer just nation-states."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deepfake Attack Types:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Technology"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Realism"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Voice Cloning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-second audio sample → full voice model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "95%+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free-$10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Call from CEO\" requesting wire transfer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Video Deepfake"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-second video → full lip-sync"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90%+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$50-$500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Zoom call from CFO\" confirming payment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-Time Voice"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Live voice modifier on phone calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "85%+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$100-$500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Call from family member\" in distress"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Image Deepfake"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Face swap on ID documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "95%+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fake passport/driver's license for SIM swap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Text Generation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LLM writing emails in target's style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "95%+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Help me, I lost my phone\" text from \"friend\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Famous Deepfake Attacks:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Year"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loss"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2019"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UK Energy Firm CEO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Voice cloning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$243,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CEO's voice cloned via TED talk audio; caller impersonated CEO requesting transfer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UAE Bank Manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Voice deepfake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$35 million"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker used voice cloning to impersonate a company director authorizing transfers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "US School Principal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Racist audio deepfake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arrested"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Principal falsely accused of racist comments via AI-generated audio — caused riots, death threats"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HK Multinational Finance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Video deepfake meeting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$25 million"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Employee attended video call where EVERY participant was a deepfake — approved $25M transfer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indian Journalist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Voice deepfake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reputation destroyed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fake call from \"colleague\" discussing corruption — recorded and leaked"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deepfake Detection — TypeScript:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// deepfake-detector.ts — AI-Powered Social Engineering Detection\n\ninterface VoiceCallData {\n  callerNumber: string;\n  callerName: string;\n  claimedIdentity: string;\n  requestType: 'wire_transfer' | 'password_reset' | 'personal_info' | 'emergency_money';\n  urgency: 'low' | 'medium' | 'high' | 'critical';\n  knownNumber: boolean;\n  // Audio analysis fields (from ML model)\n  audioAnomalyScore: number; // 0-100, higher = more likely deepfake\n  audioDuration: number; // seconds\n}\n\ninterface DeepfakeResponse {\n  isSuspicious: boolean;\n  confidence: number;\n  riskFactors: string[];\n  recommendedAction: string;\n}\n\nclass DeepfakeSocialEngineeringDetector {\n  detectVoiceAttack(call: VoiceCallData): DeepfakeResponse {\n    const riskFactors: string[] = [];\n    let risk = 0;\n\n    // 1. Unknown number claiming to be known person\n    if (!call.knownNumber && call.claimIdentity !== 'unknown') {\n      risk += 25;\n      riskFactors.push(`Unknown number claiming to be ${call.claimIdentity}`);\n    }\n\n    // 2. High urgency + financial request\n    if (call.urgency === 'critical' && \n        (call.requestType === 'wire_transfer' || call.requestType === 'emergency_money')) {\n      risk += 30;\n      riskFactors.push('High urgency financial request — classic vishing pattern');\n    }\n\n    // 3. Audio anomaly detected (from ML model)\n    if (call.audioAnomalyScore > 70) {\n      risk += 35;\n      riskFactors.push(`Audio analysis indicates ${call.audioAnomalyScore}% likelihood of synthetic voice`);\n    }\n\n    // 4. Password reset request\n    if (call.requestType === 'password_reset') {\n      risk += 20;\n      riskFactors.push('Call requesting password reset — no legitimate service does this');\n    }\n\n    // 5. Very short audio sample\n    if (call.audioDuration < 10 && call.audioAnomalyScore > 50) {\n      risk += 15;\n      riskFactors.push('Short audio duration + high anomaly score = likely deepfake');\n    }\n\n    const isSuspicious = risk >= 50;\n    return {\n      isSuspicious,\n      confidence: Math.min(risk, 100),\n      riskFactors,\n      recommendedAction: isSuspicious\n        ? 'HANG UP IMMEDIATELY. Verify identity by calling back on a known, trusted number.'\n        : 'No deepfake indicators detected. But always verify sensitive requests out-of-band.',\n    };\n  }\n\n  deepfakePreventionRules(): string[] {\n    return [\n      'Establish a family/business CODE WORD — verify identity by asking for it',\n      'Hang up and call back on a known number — never trust incoming caller ID',\n      'For wire transfers: require TWO-PERSON approval with in-person verification',\n      'For urgent requests: require video call with known movement (wave hand, turn head)',\n      'Store voice samples of family/business leaders for comparison',\n      'Use a secret verification phrase: \"What did we talk about last Tuesday?\"',\n    ];\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-the-psychology-of-social-engineering--cialdinis-6-principles",
      children: "2.6 The Psychology of Social Engineering — Cialdini's 6 Principles"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every social engineering attack exploits one or more of Dr. Robert Cialdini's 6 principles of persuasion. Understanding these principles makes you immune to manipulation."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Principle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How Attackers Use It"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Defense"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reciprocity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "People feel obligated to return favors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker sends a \"gift\" (free report, coffee card) then asks for \"a small favor\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recognize when a favor comes with strings attached"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scarcity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "People want what's limited/rare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Only 2 hours left to verify your account\" \"Limited spots for the security upgrade\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scarcity + urgency = manipulation. Slow down."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Authority"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "People obey authority figures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"I'm calling from the Security Department\" \"This is the CEO's office\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify authority independently. Call the official number."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "People stick with their commitments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"You agreed to the security policy, now you must install this software\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Your past commitment doesn't require blind obedience"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Liking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "People say yes to those they like"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker researches your interests: \"I love your photography!\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Be aware that flattery can be manipulation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Social Proof"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "People follow what others do"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"All your coworkers have already completed the training\" \"1,000 people fell for this\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Popularity ≠ legitimacy. Verify independently."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Dark Triad in Social Engineering:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Attackers who excel at social engineering typically exhibit three personality traits:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Trait"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How It Helps Attackers"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Narcissism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grandiose sense of self-importance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confident enough to cold-call and pressure targets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Machiavellianism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manipulative, cynical, strategic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plans pretexts meticulously, exploits vulnerabilities ruthlessly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Psychopathy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lack of empathy, callousness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No guilt about ruining someone's life or financial security"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Psychological Defense — The S.T.O.P. Framework:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "S — SLOW DOWN\n  Attackers create urgency to bypass your rational brain.\n  Take 3 deep breaths before responding to any urgent request.\n\nT — THINK\n  \"Does this make sense? Why would [platform] ask ME for MY password?\"\n  Examine the request logically, not emotionally.\n\nO — OBSERVE\n  Look for inconsistencies: wrong domain, strange phrasing, mismatched details.\n  Your subconscious often detects anomalies before your conscious mind does.\n\nP — PROCEED WITH CAUTION\n  If anything feels off, VERIFY OUT-OF-BAND.\n  Call the official number. Open a new browser tab (don't click the link).\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "27-social-engineering-countermeasures",
      children: "2.7 Social Engineering Countermeasures"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For Individuals:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Countermeasure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How It Stops Attacks"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Verify out-of-band"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Call the person on a known number, not the one in the email"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use hardware security keys"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2/U2F keys cannot be phished — they bind to the real domain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Check URLs before clicking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hover over links, examine the actual domain, not the display text"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Enable DMARC rejection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configure email to reject messages that fail DMARC (p=reject)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use a password manager"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It auto-fills only on the correct domain — won't fill on phishing sites"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Code word"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Establish a secret code word with family for phone verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Slow down"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attackers create urgency — pause and verify independently"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For Organizations:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Control"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DMARC Reject Policy"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "p=reject"
            }), " in DNS TXT record — prevents domain spoofing"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BIMI"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Brand Indicators for Message Identification — display verified logos"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Phishing Simulation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regular simulated phishing campaigns with training"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security Key Enforcement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mandate FIDO2 hardware keys for all employees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Report Button"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy one-click phish reporting integrated into email client"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Take-Down Service"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Commercial service that identifies and shuts down lookalike domains"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-credential-attacks",
      children: "3. Credential Attacks"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-credential-stuffing--the-reuse-epidemic",
      children: "3.1 Credential Stuffing — The Reuse Epidemic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " Attackers take username/password pairs from data breaches and try them on other services. With 10+ billion credentials available in public breach databases, most accounts have been tested."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Scale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Average person uses ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "191 services"
        }), " but only ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "25 unique passwords"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "65%"
        }), " of people reuse passwords across multiple sites"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A single breach can expose credentials that work on 3-5 other services"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "8 billion"
        }), " credential pairs available in public paste sites (2024)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Credential Stuffing Prevention — TypeScript:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// credential-stuffing-prevention.ts — Detect and Block Credential Stuffing\n\ninterface LoginAttempt {\n  timestamp: Date;\n  ip: string;\n  username: string;\n  password: string;\n  userAgent: string;\n  success: boolean;\n  country: string;\n  isp: string;\n}\n\ninterface StuffingDetectionResult {\n  isAttack: boolean;\n  confidence: number; // 0-100\n  indicators: string[];\n  recommendedAction: 'allow' | 'challenge' | 'block' | 'ratelimit';\n}\n\nclass CredentialStuffingDetector {\n  private recentAttempts: Map<string, LoginAttempt[]> = new Map();\n  private readonly WINDOW_MS = 300000; // 5 minutes\n  private readonly MAX_ATTEMPTS_PER_IP = 10;\n  private readonly MAX_ATTEMPTS_PER_USER = 5;\n\n  analyze(attempt: LoginAttempt): StuffingDetectionResult {\n    this.trackAttempt(attempt);\n    const indicators: string[] = [];\n    let score = 0;\n\n    // 1. High velocity from single IP\n    const attemptsFromIP = this.getAttemptsInWindow(a => a.ip === attempt.ip);\n    if (attemptsFromIP.length > this.MAX_ATTEMPTS_PER_IP) {\n      score += 30;\n      indicators.push(`High velocity: ${attemptsFromIP.length} attempts from ${attempt.ip} in 5min`);\n    }\n\n    // 2. Multiple different usernames from same IP\n    const uniqueUsers = new Set(attemptsFromIP.map(a => a.username));\n    if (uniqueUsers.size > 5) {\n      score += 30;\n      indicators.push(`Multiple targets: ${uniqueUsers.size} different usernames from same IP`);\n    }\n\n    // 3. All attempts failing (stuffing rarely succeeds on first try)\n    const allFailed = attemptsFromIP.length > 5 && attemptsFromIP.every(a => !a.success);\n    if (allFailed) {\n      score += 20;\n      indicators.push('Zero success rate — typical of automated stuffing');\n    }\n\n    // 4. Unusual user-agent or missing headers\n    if (!attempt.userAgent || attempt.userAgent.length < 10 || attempt.userAgent.includes('curl') || attempt.userAgent.includes('python')) {\n      score += 15;\n      indicators.push(`Suspicious user-agent: ${attempt.userAgent || 'missing'}`);\n    }\n\n    // 5. Known breached credentials\n    if (this.isKnownBreachedCredential(attempt.username, attempt.password)) {\n      score += 25;\n      indicators.push('Credentials found in known breach database');\n    }\n\n    // 6. High attempt rate on single user\n    const userAttempts = this.getAttemptsInWindow(a => a.username === attempt.username);\n    if (userAttempts.length > this.MAX_ATTEMPTS_PER_USER) {\n      score += 20;\n      indicators.push(`Brute force on user ${attempt.username}: ${userAttempts.length} attempts in 5min`);\n    }\n\n    // 7. Geographic anomalies\n    const previousIPs = this.getAttemptsInWindow(a => a.username === attempt.username && a.ip !== attempt.ip);\n    const uniqueCountries = new Set(previousIPs.map(a => a.country));\n    if (uniqueCountries.size > 2) {\n      score += 15;\n      indicators.push(`Login attempts from ${uniqueCountries.size} different countries for same user`);\n    }\n\n    // 8. Velocity-based IP reputation\n    const ipReputation = this.checkIPReputation(attempt.ip);\n    if (ipReputation < 0.3) {\n      score += 20;\n      indicators.push(`Low IP reputation score: ${ipReputation}`);\n    }\n\n    return {\n      isAttack: score >= 50,\n      confidence: Math.min(score, 100),\n      indicators,\n      recommendedAction: score >= 70 ? 'block' : score >= 50 ? 'challenge' : score >= 30 ? 'ratelimit' : 'allow',\n    };\n  }\n\n  private trackAttempt(attempt: LoginAttempt): void {\n    const key = attempt.ip;\n    if (!this.recentAttempts.has(key)) {\n      this.recentAttempts.set(key, []);\n    }\n    this.recentAttempts.get(key)!.push(attempt);\n\n    // Clean old entries\n    const cutoff = Date.now() - this.WINDOW_MS;\n    this.recentAttempts.get(key)!.filter(a => a.timestamp.getTime() > cutoff);\n  }\n\n  private getAttemptsInWindow(filter: (a: LoginAttempt) => boolean): LoginAttempt[] {\n    const cutoff = Date.now() - this.WINDOW_MS;\n    const all: LoginAttempt[] = [];\n    for (const attempts of this.recentAttempts.values()) {\n      for (const a of attempts) {\n        if (a.timestamp.getTime() > cutoff && filter(a)) {\n          all.push(a);\n        }\n      }\n    }\n    return all;\n  }\n\n  private isKnownBreachedCredential(username: string, password: string): boolean {\n    // In production: query HIBP API or local breach database\n    // Return true if the credential pair is found in known breaches\n    return false; // Placeholder\n  }\n\n  private checkIPReputation(ip: string): number {\n    // In production: query AbuseIPDB, VirusTotal, or internal threat intel\n    // Return 0.0 (malicious) to 1.0 (clean)\n    return 0.8; // Placeholder\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-password-attacks-comparison",
      children: "3.2 Password Attacks Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detection"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prevention"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dictionary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Try words from a wordlist (rockyou.txt)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Millions/sec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy (rate limiting)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex passphrase, not dictionary word"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Brute Force"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Try all possible character combinations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slows exponentially with length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy (rate limiting, lockout)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16+ character passwords"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stuffing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Try known pairs across services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Platform dependent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (velocity + IP analysis)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique password per service"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Spraying"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Try common passwords against many users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow, evades lockout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard (low-and-slow detection)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong unique passwords + MFA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mask"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Brute force with known pattern (Summer2024!)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast for known patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid patterns, dates, names"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rainbow Table"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precomputed hash lookup for common passwords"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy (use salted hashes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Salts make rainbow tables useless"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hybrid"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dictionary + mutations (leet speak, append digits)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid common substitutions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Password Strength Estimation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// password-strength.ts — Entropy-Based Password Strength Calculator\n\ninterface PasswordStrength {\n  score: number; // 0-100\n  entropy: number; // bits\n  crackTime: string; // estimated time to crack\n  feedback: string[];\n  breachesFound: number;\n}\n\nclass PasswordStrengthCalculator {\n  private readonly COMMON_PASSWORDS = new Set([\n    '123456', 'password', '12345678', 'qwerty', '123456789',\n    '12345', '1234', '111111', '1234567', 'sunshine', 'qwerty123',\n    'iloveyou', 'princess', 'admin', 'welcome', '666666', 'abc123',\n    'football', '123123', 'monkey', '654321', '!@#$%^&*', 'charlie',\n    'aa123456', 'donald', 'password1', 'qwerty12345',\n  ]);\n\n  private readonly COMMON_PATTERNS = [\n    /^(19|20)\\d{2}$/, // Years\n    /^[a-z]+$/, // Lowercase only\n    /^[A-Z]+$/, // Uppercase only\n    /^\\d+$/, // Digits only\n    /^(password|pass|admin|user|guest|temp)\\d*$/i,\n    /^(\\d)\\1{5,}$/, // Repeated digits\n    /^([a-z])\\1{5,}$/i, // Repeated letters\n    /^(qwerty|asdfgh|zxcvbn|azerty)/i, // Keyboard patterns\n    /^(123|234|345|456|567|678|789|890)/, // Sequential\n    /^(abc|bcd|cde|def|efg)/i, // Sequential letters\n  ];\n\n  calculate(password: string): PasswordStrength {\n    const feedback: string[] = [];\n    let score = 0;\n\n    // Check common passwords\n    if (this.COMMON_PASSWORDS.has(password.toLowerCase())) {\n      feedback.push('This is one of the most common passwords — instantly guessed');\n      return {\n        score: 0, entropy: 0, crackTime: 'instant',\n        feedback, breachesFound: 1000000,\n      };\n    }\n\n    // Pattern penalties\n    for (const pattern of this.COMMON_PATTERNS) {\n      if (pattern.test(password)) {\n        feedback.push('Password follows a predictable pattern');\n        score -= 20;\n      }\n    }\n\n    // Length scoring\n    if (password.length < 8) {\n      feedback.push('Password is too short. Use at least 12 characters');\n      score += password.length * 4;\n    } else if (password.length < 12) {\n      score += password.length * 5;\n      feedback.push('Consider using 14+ characters for strong security');\n    } else if (password.length < 16) {\n      score += password.length * 6;\n    } else {\n      score += password.length * 7;\n    }\n\n    // Character diversity\n    const hasLower = /[a-z]/.test(password);\n    const hasUpper = /[A-Z]/.test(password);\n    const hasDigit = /\\d/.test(password);\n    const hasSpecial = /[^a-zA-Z0-9]/.test(password);\n\n    const charTypes = [hasLower, hasUpper, hasDigit, hasSpecial].filter(Boolean).length;\n    score += charTypes * 10;\n\n    if (!hasUpper) feedback.push('Add uppercase letters');\n    if (!hasDigit) feedback.push('Add digits');\n    if (!hasSpecial) feedback.push('Add special characters (!@#$%^&*)');\n\n    // Entropy calculation\n    let charset = 0;\n    if (hasLower) charset += 26;\n    if (hasUpper) charset += 26;\n    if (hasDigit) charset += 10;\n    if (hasSpecial) charset += 32;\n    if (charset === 0) charset = 26; // fallback\n\n    const entropy = Math.log2(Math.pow(charset, password.length));\n\n    // Crack time estimation\n    const guessesPerSecond = 10000000000; // 10 billion/s (modern GPU cluster)\n    const combinations = Math.pow(charset, password.length);\n    const secondsToCrack = combinations / guessesPerSecond;\n\n    let crackTime: string;\n    if (secondsToCrack < 1) crackTime = 'instant';\n    else if (secondsToCrack < 60) crackTime = `${Math.round(secondsToCrack)} seconds`;\n    else if (secondsToCrack < 3600) crackTime = `${Math.round(secondsToCrack / 60)} minutes`;\n    else if (secondsToCrack < 86400) crackTime = `${Math.round(secondsToCrack / 3600)} hours`;\n    else if (secondsToCrack < 31536000) crackTime = `${Math.round(secondsToCrack / 86400)} days`;\n    else if (secondsToCrack < 315360000) crackTime = `${Math.round(secondsToCrack / 31536000)} months`;\n    else crackTime = `${Math.round(secondsToCrack / 31536000)} years`;\n\n    // Normalize score to 0-100\n    score = Math.max(0, Math.min(100, score));\n\n    if (score >= 80) feedback.push('Strong password — excellent entropy');\n    else if (score >= 60) feedback.push('Good password — consider making it longer');\n    else if (score >= 40) feedback.push('Weak password — add length and complexity');\n    else feedback.push('Very weak password — change immediately');\n\n    return {\n      score: Math.round(score),\n      entropy: Math.round(entropy * 10) / 10,\n      crackTime,\n      feedback,\n      breachesFound: 0,\n    };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-session-hijacking--mfa-bypass",
      children: "4. Session Hijacking & MFA Bypass"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-session-hijacking--the-hidden-threat",
      children: "4.1 Session Hijacking — The Hidden Threat"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Modern platforms use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "session tokens"
      }), " (cookies, JWTs) stored in your browser. If an attacker steals these tokens, they can access your account ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "without needing your password or MFA"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Session Hijacking Vectors:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Vector"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How It Works"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prevalence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Platform Risk"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Malicious Browser Extension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extension reads cookies from document.cookie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All web platforms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "XSS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-site scripting steals localStorage session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sites with injection vulns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Session Fixation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker sets session ID, victim auths with it"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy platforms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Network Sniffing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capture cookies over unencrypted HTTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (HTTPS is default)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public Wi-Fi"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Token Leakage in Logs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OAuth tokens in URL params logged by proxies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any OAuth2 app"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Malware with Cookie Stealer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Steals browser cookie database files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Desktop platforms"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Session Hijacking Detection — TypeScript:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// session-security.ts — Session Hijacking Detection and Prevention\n\ninterface SessionInfo {\n  id: string;\n  userId: string;\n  createdAt: Date;\n  lastActivity: Date;\n  ip: string;\n  userAgent: string;\n  deviceFingerprint: string;\n  location: { city: string; country: string };\n  isCurrentSession: boolean;\n}\n\ninterface SessionAnomaly {\n  type: 'new_location' | 'new_device' | 'new_ip' | 'impossible_travel' | 'ua_change' | 'fingerprint_change';\n  severity: 'low' | 'medium' | 'high' | 'critical';\n  description: string;\n  timestamp: Date;\n}\n\nclass SessionSecurityMonitor {\n  private readonly MAX_TRAVEL_SPEED_KMH = 1100; // Max possible travel speed\n\n  detectAnomalies(currentSession: SessionInfo, previousSessions: SessionInfo[]): SessionAnomaly[] {\n    const anomalies: SessionAnomaly[] = [];\n\n    // 1. Impossible Travel Detection\n    for (const prev of previousSessions) {\n      if (prev.id === currentSession.id) continue;\n\n      const timeDiff = Math.abs(currentSession.lastActivity.getTime() - prev.lastActivity.getTime());\n      const hoursDiff = timeDiff / (1000 * 60 * 60);\n\n      if (hoursDiff < 1) {\n        // Same hour — check if locations are different\n        const distance = this.calculateDistance(\n          prev.location, currentSession.location\n        );\n\n        if (distance > 100 && hoursDiff > 0) {\n          const speed = distance / hoursDiff;\n          if (speed > this.MAX_TRAVEL_SPEED_KMH) {\n            anomalies.push({\n              type: 'impossible_travel',\n              severity: 'critical',\n              description: `Session activity from ${prev.location.city} and ${currentSession.location.city} within ${Math.round(hoursDiff * 60)} minutes — impossible travel speed of ${Math.round(speed)} km/h`,\n              timestamp: new Date(),\n            });\n          }\n        }\n      }\n    }\n\n    // 2. User-Agent Change\n    const consistentUA = previousSessions.some(\n      s => s.userAgent === currentSession.userAgent && s.id !== currentSession.id\n    );\n    if (!consistentUA && previousSessions.length > 2) {\n      anomalies.push({\n        type: 'ua_change',\n        severity: 'medium',\n        description: `User-Agent changed from \"${previousSessions[0].userAgent.substring(0, 50)}...\" to \"${currentSession.userAgent.substring(0, 50)}...\"`,\n        timestamp: new Date(),\n      });\n    }\n\n    // 3. Device Fingerprint Change\n    const consistentFP = previousSessions.some(\n      s => s.deviceFingerprint === currentSession.deviceFingerprint && s.id !== currentSession.id\n    );\n    if (!consistentFP && previousSessions.length > 0) {\n      anomalies.push({\n        type: 'fingerprint_change',\n        severity: 'high',\n        description: 'Device fingerprint differs from previous sessions — possible token theft',\n        timestamp: new Date(),\n      });\n    }\n\n    // 4. New IP / Location\n    const knownIPs = new Set(previousSessions.map(s => s.ip));\n    if (!knownIPs.has(currentSession.ip)) {\n      anomalies.push({\n        type: 'new_ip',\n        severity: 'medium',\n        description: `New IP address: ${currentSession.ip} (${currentSession.location.city}, ${currentSession.location.country})`,\n        timestamp: new Date(),\n      });\n    }\n\n    return anomalies;\n  }\n\n  private calculateDistance(loc1: { city: string; country: string }, loc2: { city: string; country: string }): number {\n    // Simplified — in production use lat/lng coordinates\n    if (loc1.country !== loc2.country) return 1000; // Different countries\n    if (loc1.city !== loc2.city) return 200; // Different city, same country\n    return 0; // Same location\n  }\n}\n\n// ─── Session Token Security Utilities ───\n\nclass SessionSecurityUtils {\n  static generateSessionId(): string {\n    const bytes = crypto.getRandomValues(new Uint8Array(32));\n    return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');\n  }\n\n  static isSessionExpired(createdAt: Date, maxAgeMs: number): boolean {\n    return Date.now() - createdAt.getTime() > maxAgeMs;\n  }\n\n  static computeDeviceFingerprint(navigator: any): string {\n    const components = [\n      navigator.userAgent || '',\n      navigator.language || '',\n      navigator.platform || '',\n      screen.width || '',\n      screen.height || '',\n      screen.colorDepth || '',\n      navigator.hardwareConcurrency || '',\n      navigator.deviceMemory || '',\n    ];\n    // Simple hash (in production use SHA-256)\n    const fingerprint = components.join('|||');\n    let hash = 0;\n    for (let i = 0; i < fingerprint.length; i++) {\n      const char = fingerprint.charCodeAt(i);\n      hash = ((hash << 5) - hash) + char;\n      hash |= 0; // Convert to 32bit integer\n    }\n    return Math.abs(hash).toString(16);\n  }\n\n  static bindSessionToDevice(session: SessionInfo): void {\n    // Store device fingerprint in session\n    // On each request, verify fingerprint matches\n    // If mismatch → require re-authentication\n    console.log(`Session ${session.id} bound to device ${session.deviceFingerprint}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-mfa-bypass-techniques--countermeasures",
      children: "4.2 MFA Bypass Techniques & Countermeasures"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Bypass Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How It Works"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effectiveness"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prevention"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MFA Fatigue"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeated push notifications until user accepts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number matching, rate limiting push to 3/hr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SIM Swap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port victim's number to attacker's SIM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carrier PIN, port freeze, Google Voice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OAuth Token Theft"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Steal OAuth access/refresh tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short-lived tokens, PKCE, token binding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Backup Code Theft"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recovery codes stolen from cloud storage/email"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store offline, never in cloud"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SS7 Exploit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intercept SMS at protocol level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High (targeted)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App-based TOTP, not SMS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MFA Proxy (evilginx)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse proxy harvesting both password + MFA token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2 hardware keys (phishing-resistant)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Session Token Reuse"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use stolen session token (bypasses MFA entirely)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short session expiry, device binding"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Hierarchy of MFA Security:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "WEAKEST\n┌────────────────────────────────────────────┐\n│ SMS / Voice Call 2FA                      │ ← SS7, SIM swap, phishing\n├────────────────────────────────────────────┤\n│ TOTP (Google Auth, Authy, Microsoft Auth)  │ ← Phishing, malware\n├────────────────────────────────────────────┤\n│ Push Notification (Duo, Okta)              │ ← MFA fatigue\n├────────────────────────────────────────────┤\n│ FIDO2/WebAuthn (software)                  │ ← Phishing-resistant\n├────────────────────────────────────────────┤\n│ FIDO2 Hardware Key (YubiKey)              │ ← Phishing-resistant, hardware-bound\n└────────────────────────────────────────────┘\nSTRONGEST\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-sim-swapping--the-most-devastating-attack",
      children: "5. SIM Swapping — The Most Devastating Attack"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-how-sim-swapping-works",
      children: "5.1 How SIM Swapping Works"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SIM swapping (also called SIM hijacking, SIM splitting, or port-out scam) is when an attacker convinces your mobile carrier to transfer your phone number to a SIM card they control."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant A as Attacker\n    participant OSINT as OSINT Sources\n    participant Carrier as Mobile Carrier\n    participant Victim as Victim\n    participant Platforms as Social Platforms\n\n    A->>OSINT: Gather PII (name, DOB, SSN, address)\n    A->>Carrier: Call/chat support impersonating victim\n    Carrier->>A: Verify with PII details\n    A->>Carrier: Confirm PII, request SIM transfer\n    Carrier-->>Victim: Original SIM deactivated\n    Carrier-->>A: New SIM activated with victim's number\n    Victim->>Victim: Phone shows \"No Service\"\n    A->>Platforms: Request password reset via SMS\n    Platforms->>A: SMS OTP sent to attacker's phone\n    A->>Platforms: Enter OTP, reset password\n    A->>Platforms: Change email, enable 2FA, lock out victim\n    Note over A,Platforms: Account fully compromised in under 30 minutes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SIM swapping (also called SIM hijacking, SIM splitting, or port-out scam) is when an attacker convinces your mobile carrier to transfer your phone number to a SIM card they control."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complete Attack Chain:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PHASE 1: RECONNAISSANCE\n──────────────────────────────────────────────\n1. Attacker gathers personal information via OSINT:\n   - Full name, DOB, address (data breaches)\n   - Mother's maiden name (social media)\n   - Last 4 digits of SSN (breach data)\n   - Account number (bank statement in trash)\n   - Recent transactions (phishing)\n\nPHASE 2: SOCIAL ENGINEERING CARRIER\n──────────────────────────────────────────────\n2. Attacker calls mobile carrier's customer service\n3. Attacker impersonates the victim using collected info\n4. OR attacker bribes/coerces an employee (insider threat)\n5. OR attacker visits a store with fake ID\n\nPHASE 3: SIM ACTIVATION\n──────────────────────────────────────────────\n6. Carrier deactivates victim's SIM\n7. Victim's number is ported to attacker's SIM\n8. Victim's phone shows \"No Service\" / \"SOS Only\"\n\nPHASE 4: ACCOUNT TAKEOVER\n──────────────────────────────────────────────\n9. Attacker uses \"Forgot Password\" on victim's accounts\n10. SMS 2FA code sent to attacker's phone\n11. Attacker resets passwords, locks out victim\n12. Attack happens FAST — within 10-30 minutes\n\nPHASE 5: EXFILTRATION\n──────────────────────────────────────────────\n13. Crypto wallets drained\n14. Bank accounts emptied\n15. Email accessed for additional password resets\n16. Social media accounts locked/held for ransom\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Impact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Average financial loss from SIM swap: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "$150,000+"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Crypto investors targeted heavily (Twitter crypto elite SIM swap ring, 2023)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Michael Terpin"
        }), " lost $24M in crypto to a SIM swap (AT&T was found liable for $225M)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "2024: SIM swap attacks increased 400% year-over-year (FBI IC3 report)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-sim-swap-prevention",
      children: "5.2 SIM Swap Prevention"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Protection"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effectiveness"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Carrier PIN / Account PIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set a PIN/password required for any account changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stops most social engineering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Port Freeze / No-Port"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request carrier to lock number from being ported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very effective against porting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use Google Voice"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward Google Voice number; port protect via Google"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Remove SMS 2FA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never use SMS for 2FA — use TOTP or hardware keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Separate Phone Line"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use a separate cheap phone/plan for 2FA only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recommended for high-value targets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Contact Carrier Immediately"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If phone loses service, call carrier immediately"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limits damage window"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prepaid SIM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prepaid carriers are harder to social-engineer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Carrier Security Checklist:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// sim-swap-prevention.ts — SIM Swap Risk Assessment\n\ninterface CarrierAccount {\n  carrier: string;\n  phoneNumber: string;\n  hasPin: boolean;\n  pinType: 'none' | 'numeric' | 'alphanumeric';\n  portFreeze: boolean;\n  onlineAccountPassword: string;\n  securityQuestions: boolean;\n  insiderThreatProtection: boolean; // Carrier notifies of employee access\n}\n\ninterface SIMSwapRisk {\n  riskScore: number; // 0-100\n  riskLevel: 'low' | 'medium' | 'high' | 'critical';\n  missingProtections: string[];\n  recommendations: string[];\n}\n\nclass SIMSwapProtectionAudit {\n  audit(account: CarrierAccount): SIMSwapRisk {\n    const missing: string[] = [];\n    const recommendations: string[] = [];\n    let riskScore = 100;\n\n    // PIN protection\n    if (!account.hasPin) {\n      missing.push('Account PIN not set');\n      riskScore -= 0; // Keep high risk\n    } else {\n      riskScore -= 30;\n    }\n    if (account.hasPin && account.pinType === 'numeric') {\n      recommendations.push('Use alphanumeric PIN instead of numeric');\n    }\n\n    // Port freeze\n    if (!account.portFreeze) {\n      missing.push('Port freeze not enabled');\n    } else {\n      riskScore -= 30;\n    }\n\n    // Online account password\n    if (!account.onlineAccountPassword || account.onlineAccountPassword.length < 8) {\n      missing.push('Weak or missing online account password');\n    } else {\n      riskScore -= 10;\n    }\n\n    // Security questions\n    if (account.securityQuestions) {\n      recommendations.push('Use fictional answers for security questions — not real data');\n      riskScore -= 5;\n    }\n\n    // Insider threat protection\n    if (!account.insiderThreatProtection) {\n      recommendations.push('Ask carrier if they offer employee access notifications');\n    } else {\n      riskScore -= 10;\n    }\n\n    riskScore = Math.max(0, riskScore);\n\n    return {\n      riskScore,\n      riskLevel: riskScore >= 70 ? 'critical' : riskScore >= 40 ? 'high' : riskScore >= 20 ? 'medium' : 'low',\n      missingProtections: missing,\n      recommendations,\n    };\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-google-account-security--the-master-key-to-your-digital-life",
      children: "6. Google Account Security — The Master Key to Your Digital Life"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Your Google account is the single most important account you own. It controls: Gmail (password resets for everything), YouTube, Google Drive (all your files), Google Photos, Android device sync, Google Pay, Google Authenticator (cloud sync), Chrome saved passwords, Google Play purchases, Google Voice (phone number for 2FA), and Google Workspace (business data)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "If your Google account is taken over, the attacker can access EVERYTHING."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-google-account-takeover-attack-taxonomy",
      children: "6.1 Google Account Takeover Attack Taxonomy"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack Vector"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How It Works"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Google-Specific Risk"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prevalence"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Password Reuse"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Password leaked in breach → tried on Google"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VERY HIGH — Google accounts targeted by every credential stuffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60% of Google account takeovers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SIM Swap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number ported → SMS 2FA intercepted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMS is a recovery option for Google accounts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Phishing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fake Google login page"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google login pages are the MOST cloned phishing targets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OAuth Abuse"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malicious third-party app with Google permissions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Users approve without reading permissions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Backup Code Theft"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recovery codes stolen from cloud storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Users store backup codes in Google Drive (ironically)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Session Hijacking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cookie/token theft from browser"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google cookies persist across sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1%"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-google-account-recovery-process--step-by-step",
      children: "6.2 Google Account Recovery Process — Step by Step"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you lose access to your Google account, the recovery process is notoriously difficult. You MUST have your recovery options set up BEFORE an attack."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Google Account Recovery Flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GOOGLE ACCOUNT RECOVERY\n═══════════════════════════════════════════════════\nSTEP 1: Go to g.co/recover\nSTEP 2: Enter your Gmail address\nSTEP 3: Enter the LAST PASSWORD you remember\n         └── Even a partial/old password helps\n         └── Google asks increasingly specific questions\n\nRECOVERY QUESTIONS GOOGLE MAY ASK:\n┌─────────────────────────────────────────────────────┐\n│ □ When did you create this account? (approx date)   │\n│ □ What recovery email did you set?                   │\n│ □ What recovery phone did you set?                   │\n│ □ What labels/folders exist in your Gmail?           │\n│ □ Name of a recent email you sent/received           │\n│ □ What Google services have you used (YouTube,       │\n│   Drive, Photos, etc.)?                              │\n│ □ When did you last access your account?             │\n│ □ What device did you use to create the account?     │\n└─────────────────────────────────────────────────────┘\n\nOUTCOMES:\n  ✅ Recovery email accessible → Code sent → Account recovered\n  ✅ Recovery phone accessible → SMS sent → Account recovered  \n  ✅ Old password known → Automated recovery flow\n  ❌ No recovery options → MANUAL REVIEW (days to weeks)\n  ❌ No useful answers → ACCOUNT LOST PERMANENTLY\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical: Google Account Recovery Settings Checklist:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GOOGLE RECOVERY SETUP\n═══════════════════════════════════════════════════\n□ Recovery email: Set a DIFFERENT email (not your Gmail)\n  └── Use ProtonMail / Outlook / iCloud — NOT another Gmail\n  └── If attacker gets your Gmail, they get recovery@Gmail too\n\n□ Recovery phone: Set your mobile number\n  └── BUT: enable Google's \"Skip password when possible\" = OFF\n  └── Because: if phone is SIM swapped, attacker can skip password\n\n□ 2-Step Verification: ENABLED with Hardware Key\n  └── Google Prompt (push to phone) = Good\n  └── Google Authenticator (TOTP) = Better\n  └── Titan / YubiKey (FIDO2) = BEST\n\n□ Google Advanced Protection: ENABLED\n  └── Requires TWO hardware keys\n  └── Blocks all third-party app access (except Google & Microsoft)\n  └── Blocks account recovery via phone/SMS\n  └── Blocks all phishing attempts (FIDO2 only)\n\n□ 10 Recovery Codes: PRINTED + stored OFFLINE\n  └── NOT in Google Drive\n  └── NOT in email drafts\n  └── Physical paper in a safe or safety deposit box\n\n□ Security Checkup: RUN MONTHLY\n  └── go to myaccount.google.com/security-checkup\n  └── Review devices, sessions, third-party apps\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-google-advanced-protection-program-app",
      children: "6.3 Google Advanced Protection Program (APP)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What it is:"
      }), " Google's highest security tier, designed for journalists, activists, politicians, and high-value targets. It's free but restrictive."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What APP blocks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All phishing attempts (only FIDO2 hardware keys work for login)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All third-party app access (except Google and Microsoft apps)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Account recovery via automated phone/SMS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SIM swap attacks (SMS recovery is disabled)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What APP requires:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two physical FIDO2 security keys (Titan Keys from Google, or YubiKeys)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use keys on all devices (phone, tablet, computer)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Going through a stricter account recovery process if you lose both keys"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How to sign up:"
      }), " myaccount.google.com → Security → Advanced Protection"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// google-account-security.ts — Google Account Security Posture Check\n\ninterface GoogleAccountConfig {\n  advancedProtectionEnabled: boolean;\n  hardwareKeysRegistered: number; // 0, 1, 2+\n  twoStepVerification: boolean;\n  twoStepMethod: 'none' | 'prompt' | 'totp' | 'hardware';\n  recoveryEmail: string;\n  recoveryEmailDifferentDomain: boolean;\n  recoveryPhone: string;\n  skipPasswordWhenPossible: boolean;\n  recoveryCodesSaved: boolean;\n  recoveryCodesOffline: boolean;\n  thirdPartyAppsCount: number;\n  activeSessions: number;\n  lastSecurityCheckup: Date;\n  googleOneDarkWebReport: boolean;\n}\n\ninterface GoogleSecurityScore {\n  overallScore: number; // 0-100\n  tier: 'basic' | 'standard' | 'strong' | 'advanced_protection';\n  categories: {\n    authentication: number;\n    recovery: number;\n    appEcosystem: number;\n    monitoring: number;\n  };\n  criticalFindings: string[];\n  recommendations: string[];\n}\n\nclass GoogleSecurityAuditor {\n  audit(config: GoogleAccountConfig): GoogleSecurityScore {\n    const categories = {\n      authentication: this.scoreAuthentication(config),\n      recovery: this.scoreRecovery(config),\n      appEcosystem: this.scoreApps(config),\n      monitoring: this.scoreMonitoring(config),\n    };\n\n    const overall = Math.round(\n      categories.authentication * 0.35 +\n      categories.recovery * 0.30 +\n      categories.appEcosystem * 0.15 +\n      categories.monitoring * 0.20\n    );\n\n    const findings: string[] = [];\n    const recommendations: string[] = [];\n\n    // Critical findings\n    if (!config.twoStepVerification) {\n      findings.push('CRITICAL: 2-Step Verification is NOT enabled');\n      recommendations.push('Enable 2-Step Verification IMMEDIATELY');\n    }\n    if (config.hardwareKeysRegistered === 0 && config.twoStepVerification) {\n      findings.push('2-Step uses SMS or Prompt — vulnerable to SIM swap and phishing');\n      recommendations.push('Register at least 1 hardware security key (buy 2: one is backup)');\n    }\n    if (!config.advancedProtectionEnabled && config.hardwareKeysRegistered >= 2) {\n      recommendations.push('You have the keys — enable Google Advanced Protection for maximum security');\n    }\n    if (config.recoveryEmail && !config.recoveryEmailDifferentDomain) {\n      findings.push('Recovery email is another Gmail — single point of failure');\n      recommendations.push('Use a DIFFERENT email provider for recovery (ProtonMail, Outlook, iCloud)');\n    }\n    if (config.skipPasswordWhenPossible) {\n      findings.push('WARNING: \"Skip password when possible\" is enabled — SIM swap attacker can bypass password');\n      recommendations.push('Disable \"Skip password when possible\" in Google Account settings');\n    }\n    if (!config.recoveryCodesSaved) {\n      findings.push('No recovery codes saved — you could lose permanent access');\n      recommendations.push('Generate 10 recovery codes and PRINT them. Store OFFLINE in a safe.');\n    }\n    if (config.recoveryCodesSaved && !config.recoveryCodesOffline) {\n      findings.push('Recovery codes stored in Google Drive/Cloud — attacker can access them');\n      recommendations.push('Delete cloud copies. Store recovery codes on PAPER only.');\n    }\n    if (config.thirdPartyAppsCount > 10) {\n      findings.push(`${config.thirdPartyAppsCount} third-party apps have Google access — high attack surface`);\n      recommendations.push('Revoke all unused third-party app access. Audit permissions monthly.');\n    }\n    if (config.thirdPartyAppsCount > 0) {\n      for (const app of this.getHighRiskApps()) {\n        findings.push(`High-risk app \"${app}\" has Google account access — can read email, access Drive, etc.`);\n        recommendations.push(`Revoke \"${app}\" access immediately — consider alternative with fewer permissions`);\n      }\n    }\n    if (!config.googleOneDarkWebReport) {\n      recommendations.push('Enable Google One Dark Web Report to monitor your info on the dark web');\n    }\n    if (config.activeSessions > 10) {\n      findings.push(`${config.activeSessions} active sessions — more than 10 is excessive`);\n      recommendations.push('Review and remove old sessions. Log out of devices you no longer use.');\n    }\n    const monthsSinceCheckup = (Date.now() - config.lastSecurityCheckup.getTime()) / (30 * 24 * 60 * 60 * 1000);\n    if (monthsSinceCheckup > 3) {\n      findings.push(`Last Security Checkup was ${Math.round(monthsSinceCheckup)} months ago`);\n      recommendations.push('Run Google Security Checkup (myaccount.google.com/security-checkup) monthly');\n    }\n\n    return {\n      overallScore: overall,\n      tier: this.determineTier(config, overall),\n      categories,\n      criticalFindings: findings.filter(f => f.startsWith('CRITICAL')),\n      recommendations: [...new Set(recommendations)],\n    };\n  }\n\n  private determineTier(config: GoogleAccountConfig, score: number): 'basic' | 'standard' | 'strong' | 'advanced_protection' {\n    if (config.advancedProtectionEnabled) return 'advanced_protection';\n    if (score >= 80 && config.hardwareKeysRegistered >= 1) return 'strong';\n    if (score >= 50) return 'standard';\n    return 'basic';\n  }\n\n  private scoreAuthentication(config: GoogleAccountConfig): number {\n    let score = 0;\n    if (config.twoStepVerification) score += 25;\n    if (config.twoStepMethod === 'hardware') score += 50;\n    else if (config.twoStepMethod === 'totp') score += 35;\n    else if (config.twoStepMethod === 'prompt') score += 20;\n    score += Math.min(config.hardwareKeysRegistered * 15, 30);\n    if (config.advancedProtectionEnabled) score += 20;\n    return Math.min(score, 100);\n  }\n\n  private scoreRecovery(config: GoogleAccountConfig): number {\n    let score = 20; // Base\n    if (config.recoveryEmail && config.recoveryEmailDifferentDomain) score += 25;\n    if (config.recoveryPhone) score += 15;\n    if (config.recoveryCodesSaved && config.recoveryCodesOffline) score += 30;\n    if (!config.skipPasswordWhenPossible) score += 10;\n    return Math.min(score, 100);\n  }\n\n  private scoreApps(config: GoogleAccountConfig): number {\n    if (config.thirdPartyAppsCount === 0) return 100;\n    if (config.thirdPartyAppsCount <= 5) return 80;\n    if (config.thirdPartyAppsCount <= 15) return 50;\n    return 20;\n  }\n\n  private scoreMonitoring(config: GoogleAccountConfig): number {\n    let score = 30; // Base\n    const monthsSinceCheckup = (Date.now() - config.lastSecurityCheckup.getTime()) / (30 * 24 * 60 * 60 * 1000);\n    if (monthsSinceCheckup <= 1) score += 40;\n    else if (monthsSinceCheckup <= 3) score += 20;\n    else score -= 20;\n    if (config.googleOneDarkWebReport) score += 30;\n    return Math.max(0, Math.min(score, 100));\n  }\n\n  private getHighRiskApps(): string[] {\n    // Apps known to be risky or have had breaches\n    return [\n      'Crypto wallet extensions', 'VPN browser extensions',\n      'Unknown photo editors', 'Fake Google Drive clones',\n      'Survey/marketing platforms requesting Gmail access',\n    ];\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-gmail-security--the-password-reset-hub",
      children: "6.4 Gmail Security — The Password Reset Hub"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Since your Gmail controls password resets for most other services, Gmail itself must be hardened."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gmail-Specific Attack Vectors:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How It Works"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detection"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prevention"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Email Forwarding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker sets forwarding to their email — they get ALL your emails including password resets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check Settings → Forwarding (top of page)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disable all forwarding. Check it weekly."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Filter Hijacking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker creates filters that DELETE incoming security notifications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filters are hidden — check Settings → Filters section"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Review all filters monthly. Look for auto-delete rules."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IMAP Access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker connects via IMAP using leaked credentials"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Less secure app access\", \"App passwords\" in security log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disable IMAP if not needed. Use Gmail web interface only."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OAuth App Permissions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malicious extension reads all email"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Third-party apps with \"Read, compose, send email\" permission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Review myaccount.google.com/permissions regularly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Google Takeout Abuse"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If attacker has access, they download ALL your data via takeout.google.com"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check Security → Recent security events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable Advanced Protection (blocks Takeout without keys)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gmail Security Audit — TypeScript:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// gmail-security-audit.ts — Audit Gmail Settings for Compromise Indicators\n\ninterface GmailSettings {\n  forwardingAddress: string;\n  forwardingEnabled: boolean;\n  imapEnabled: boolean;\n  popEnabled: boolean;\n  filters: GmailFilter[];\n  delegatedAccounts: string[];\n  appPasswords: number;\n  autoReplyEnabled: boolean;\n  signature: string;\n}\n\ninterface GmailFilter {\n  name: string;\n  from: string;\n  hasTheWords: string;\n  doesNotHave: string;\n  action: string[]; // ['delete', 'forward', 'archive', 'markread', 'star']\n}\n\ninterface GmailAuditResult {\n  hasCompromiseIndicators: boolean;\n  riskLevel: 'safe' | 'suspicious' | 'compromised';\n  findings: string[];\n  suspiciousFilters: GmailFilter[];\n  score: number; // 0-100, 0 = fully compromised\n}\n\nclass GmailSecurityAudit {\n  audit(settings: GmailSettings): GmailAuditResult {\n    const findings: string[] = [];\n    const suspiciousFilters: GmailFilter[] = [];\n    let score = 100;\n\n    // 1. Check unauthorized forwarding\n    if (settings.forwardingEnabled) {\n      const forwardingDomain = settings.forwardingAddress.split('@')[1];\n      if (!this.isTrustedDomain(forwardingDomain)) {\n        findings.push(`SUSPICIOUS: Email forwarding to UNKNOWN domain: ${forwardingDomain}`);\n        score -= 50;\n      } else {\n        findings.push(`Note: Email forwarding set to ${settings.forwardingAddress}`);\n        score -= 10;\n      }\n    }\n\n    // 2. Check for malicious filters\n    for (const filter of settings.filters) {\n      const hasDeleteAction = filter.action.includes('delete') || filter.action.includes('trash');\n      const hasForwardAction = filter.action.includes('forward');\n      const targetsSecurityEmails = /security|alert|login|password|2fa|mfa|verification|recovery|reset/i.test(filter.hasTheWords);\n      const targetsNotifications = /notifications?|@instagram|@facebook|@twitter|no-reply|noreply/i.test(filter.from || filter.hasTheWords);\n\n      if ((hasDeleteAction || hasForwardAction) && (targetsSecurityEmails || targetsNotifications)) {\n        suspiciousFilters.push(filter);\n        findings.push(`ALERT: Filter \"${filter.name}\" auto-${hasDeleteAction ? 'DELETES' : 'FORWARDS'} security emails! This is an attacker's technique.`);\n        score -= 40;\n      }\n    }\n\n    // 3. Check delegated/impersonated accounts\n    if (settings.delegatedAccounts.length > 0) {\n      for (const acct of settings.delegatedAccounts) {\n        findings.push(`Delegated account has access: ${acct}`);\n      }\n      score -= settings.delegatedAccounts.length * 15;\n    }\n\n    // 4. Check app passwords (legacy auth)\n    if (settings.appPasswords > 0) {\n      findings.push(`${settings.appPasswords} app passwords active — legacy auth bypasses 2FA`);\n      score -= settings.appPasswords * 10;\n    }\n\n    // 5. Check IMAP/POP\n    if (settings.imapEnabled) {\n      findings.push('IMAP enabled — allows email access from third-party email clients');\n      score -= 5;\n    }\n    if (settings.popEnabled) {\n      findings.push('POP enabled — allows email download from third-party clients');\n      score -= 10;\n    }\n\n    score = Math.max(0, score);\n\n    return {\n      hasCompromiseIndicators: findings.some(f => f.startsWith('ALERT') || f.startsWith('SUSPICIOUS')),\n      riskLevel: score <= 20 ? 'compromised' : score <= 60 ? 'suspicious' : 'safe',\n      findings,\n      suspiciousFilters,\n      score,\n    };\n  }\n\n  private isTrustedDomain(domain: string): boolean {\n    const trustedDomains = [\n      'gmail.com', 'googlemail.com', 'outlook.com', 'hotmail.com',\n      'yahoo.com', 'icloud.com', 'protonmail.com', 'proton.me',\n      'fastmail.com', 'hey.com', 'tutanota.com',\n    ];\n    return trustedDomains.includes(domain.toLowerCase());\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-youtube-channel-security",
      children: "6.5 YouTube Channel Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "YouTube channels with subscriber bases are prime targets. Attackers steal channels to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Livestream crypto scams (most common)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sell the channel on black markets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Delete content as ransom"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the channel's authority to promote malware"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Top YouTube Channel Hijacking Methods:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prevalence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How It Works"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Phishing \"Sponsorship\" Emails"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fake brand partnership email → fake login page → steal Google credentials"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Malicious Browser Extensions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extension promises video analytics → steals session cookies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SIM Swap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Swap phone → SMS 2FA bypass → reset Google password"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Old/Inactive Account"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find old channel with no recovery options → social engineer Google support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Employee/Partner Access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Former editor/manager still has access or gets phished"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "YouTube Channel Security Checklist:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "YOUTUBE CHANNEL SECURITY\n═══════════════════════════════════════════════════\n□ Enable Google Advanced Protection (2 hardware keys)\n□ Verify your channel (blue checkmark) — harder to impersonate\n□ Set up Brand Account with separate permissions for editors\n  └── Grant MINIMUM permissions: Manager (all) vs Editor (content only)\n  └── Never share your personal Google account password with editors\n□ Remove old channel managers / editors quarterly\n□ Never click \"sponsorship\" emails without verifying sender\n  └── Real sponsors email from the company domain, not Gmail\n  └── Check: is the brand really running this campaign? Contact them directly\n□ Enable 2-Step Verification on the Google account (hardware key)\n□ Check Brand Account permissions: myaccount.google.com/brand-accounts\n□ Monitor for phishing in YouTube Studio → Settings → Permissions → Review\n□ Backup videos: Download original files to external drive\n□ Set up channel recovery contacts: YouTube Studio → Settings → Channel → Advanced\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "66-google-one-dark-web-report",
      children: "6.6 Google One Dark Web Report"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Google's free (with Google One subscription) dark web monitoring scans for your personal information across the dark web including:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Email addresses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Phone numbers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Social Security numbers (US)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Credit card numbers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bank account numbers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Passwords"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How to enable:"
      }), " Google One app → Dark Web Report → Start monitoring"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What to do when alerted:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Change the compromised password IMMEDIATELY"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the same password is used elsewhere, change it there too"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable 2FA on the affected account"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run Google Security Checkup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check if that service has a known breach (haveibeenpwned.com)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-platform-specific-forensics",
      children: "7. Platform-Specific Forensics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-instagram-forensics",
      children: "6.1 Instagram Forensics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence Sources:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Source"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Reveals"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How to Access"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Login Activity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device, location, IP, timestamp, browser"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Settings → Security → Login Activity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Email Notifications"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Password changes, email changes, new logins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check email inbox for security notifications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Download Your Data"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full account history including IP logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Settings → Your Activity → Download Your Info → JSON format"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Emails from Instagram"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Headers show sender IP, DMARC results"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View full email headers in Gmail/Outlook"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Login Sessions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active sessions with device info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Settings → Security → Login Activity → See All"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Instagram Data Download — Extracting Evidence:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// instagram-forensics.ts — Parse Instagram Data Download for Evidence\n\ninterface InstagramDataExport {\n  account_information: AccountInfo;\n  security_and_login_information: LoginInfo;\n  recent_login_activity: LoginEntry[];\n  account_based_in: AccountLocation;\n}\n\ninterface AccountInfo {\n  username: string;\n  email: string;\n  phone_number: string;\n  linked_accounts: LinkedAccount[];\n  email_change_history: EmailChangeEvent[];\n  phone_change_history: PhoneChangeEvent[];\n}\n\ninterface EmailChangeEvent {\n  old_email: string;\n  new_email: string;\n  changed_at: string;\n  changed_from_ip: string;\n}\n\ninterface LoginInfo {\n  login_activity: LoginEntry[];\n  devices: DeviceInfo[];\n}\n\ninterface LoginEntry {\n  timestamp: string;\n  ip_address: string;\n  device: string;\n  browser: string;\n  location: string;\n  login_type: string; // \"password\", \"saved\", \"session\"\n  cookie_used: boolean;\n}\n\ninterface DeviceInfo {\n  name: string;\n  os_version: string;\n  last_login: string;\n  is_trusted: boolean;\n}\n\nclass InstagramForensicsEngine {\n  parseExport(jsonData: string): InstagramForensicReport {\n    const data = JSON.parse(jsonData) as InstagramDataExport;\n    const report = new InstagramForensicReport();\n\n    // Extract login activity\n    report.logins = data.recent_login_activity?.map(e => ({\n      timestamp: new Date(e.timestamp),\n      ip: e.ip_address,\n      device: e.device,\n      browser: e.browser,\n      location: e.location,\n    })) || [];\n\n    // Detect geographic anomalies\n    report.anomalies = this.detectAnomalies(report.logins);\n\n    // Extract email changes\n    report.emailChanges = data.account_information?.email_change_history?.map(e => ({\n      oldEmail: e.old_email,\n      newEmail: e.new_email,\n      timestamp: new Date(e.changed_at),\n      sourceIP: e.changed_from_ip,\n    })) || [];\n\n    // Extract linked accounts\n    report.linkedAccounts = data.account_information?.linked_accounts?.map(a => ({\n      platform: a.platform,\n      accountId: a.account_id,\n      linkedDate: a.linked_at,\n    })) || [];\n\n    // Device analysis\n    report.devices = data.security_and_login_information?.devices?.map(d => ({\n      name: d.name,\n      os: d.os_version,\n      lastLogin: new Date(d.last_login),\n      trusted: d.is_trusted,\n    })) || [];\n\n    // Risk scoring\n    report.riskScore = this.calculateRiskScore(report);\n\n    return report;\n  }\n\n  private detectAnomalies(logins: LoginEntry[]): ForensicAnomaly[] {\n    const anomalies: ForensicAnomaly[] = [];\n    const ipSet = new Set<string>();\n    const locationSet = new Set<string>();\n\n    for (const login of logins) {\n      if (ipSet.has(login.ip)) continue;\n      ipSet.add(login.ip);\n\n      // Check for VPN/Proxy IPs\n      if (this.isVPNIP(login.ip)) {\n        anomalies.push({\n          type: 'vpn_detected',\n          severity: 'medium',\n          description: `Login from VPN/proxy IP: ${login.ip} at ${login.location}`,\n          timestamp: login.timestamp,\n          ip: login.ip,\n        });\n      }\n    }\n\n    // Multiple locations in short time\n    const sorted = [...logins].sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());\n    for (let i = 1; i < sorted.length; i++) {\n      const prev = sorted[i - 1];\n      const curr = sorted[i];\n      const hoursDiff = (curr.timestamp.getTime() - prev.timestamp.getTime()) / (1000 * 3600);\n      if (hoursDiff < 2 && prev.location !== curr.location) {\n        anomalies.push({\n          type: 'rapid_location_change',\n          severity: 'high',\n          description: `Login from ${prev.location} then ${curr.location} in ${Math.round(hoursDiff * 60)} minutes`,\n          timestamp: curr.timestamp,\n          ip: curr.ip,\n        });\n      }\n    }\n\n    return anomalies;\n  }\n\n  private calculateRiskScore(report: InstagramForensicReport): number {\n    let score = 0;\n    if (report.anomalies.some(a => a.severity === 'critical')) score += 40;\n    if (report.anomalies.some(a => a.severity === 'high')) score += 25;\n    if (report.emailChanges.length > 0) score += 30;\n    if (report.logins.some(l => !l.browser || l.browser === 'Unknown')) score += 15;\n    return Math.min(score, 100);\n  }\n\n  private isVPNIP(ip: string): boolean {\n    // Check against known VPN/Proxy IP ranges\n    // In production: use IP geolocation + reputation services\n    return false;\n  }\n}\n\nclass InstagramForensicReport {\n  logins: LoginEntry[] = [];\n  anomalies: ForensicAnomaly[] = [];\n  emailChanges: EmailChange[] = [];\n  linkedAccounts: LinkedAccount[] = [];\n  devices: DeviceInfo[] = [];\n  riskScore = 0;\n\n  generateSummary(): string {\n    return `\nINSTAGRAM FORENSIC REPORT\n═══════════════════════════════════════════════════\nGenerated: ${new Date().toISOString()}\n\nSUMMARY\n───────────────────────────────────────────────────\nTotal Login Sessions: ${this.logins.length}\nAnomalies Detected:   ${this.anomalies.length}\nEmail Changes:        ${this.emailChanges.length}\nKnown Devices:        ${this.devices.length}\nRisk Score:           ${this.riskScore}/100\n\n${this.anomalies.length > 0 ? `\nANOMALIES:\n${this.anomalies.map(a => `  [${a.severity.toUpperCase()}] ${a.description}`).join('\\n')}` : ''}\n\n${this.emailChanges.length > 0 ? `\nEMAIL CHANGES:\n${this.emailChanges.map(e => `  ${e.timestamp.toISOString()}: ${e.oldEmail} → ${e.newEmail} from IP ${e.sourceIP}`).join('\\n')}` : ''}\n\nDEVICES:\n${this.devices.map(d => `  ${d.name} (${d.os}) - Last: ${d.lastLogin.toISOString()} ${d.trusted ? '[Trusted]' : '[Untrusted]'}`).join('\\n')}\n\nRECOMMENDATIONS:\n${this.riskScore >= 50 ? '  ■ Account likely compromised — follow IR playbook immediately' : ''}\n${this.anomalies.length > 0 ? '  ■ Review all anomalous logins and revoke unrecognized sessions' : ''}\n${this.emailChanges.length > 0 ? '  ■ Email was changed — recover email account first' : ''}\n  ■ Log out of all sessions\n  ■ Enable 2FA with authenticator app\n  ■ Revoke all third-party app access\n  ■ Change password to a unique 20+ character passphrase\n`;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-platform-forensics-reference",
      children: "6.2 Platform Forensics Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Platform"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Export"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Forensic Fields"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Download Path"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Instagram"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON download"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ip_address"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "device"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "login_type"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "email_change_history"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Settings → Your Activity → Download Your Info"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Twitter/X"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ZIP/TAR archive"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ipAddress"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "loginTime"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "device"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "oauthApps"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Settings → Your Account → Download Archive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Facebook"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON download"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ip_address"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "browser"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "device"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "login_history"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "session"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Settings → Your Facebook Info → Download"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LinkedIn"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ZIP archive"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "loginIp"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "loginTimestamp"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "userAgent"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Settings → Data Privacy → Get Copy of Data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Google"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Takeout (JSON)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ip"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "device"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "signInId"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "oauthClientId"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "recoveryEmail"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "takeout.google.com"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Apple"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data & Privacy"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "deviceInfo"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ipAddress"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "signInTime"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "accountChange"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "privacy.apple.com"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Telegram"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Export from desktop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "session"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ip"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "device"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "activeSessions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Settings → Privacy → Active Sessions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Discord"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Privacy Request"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ip"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "userAgent"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sessionStart"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "oauthApps"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Settings → Privacy → Request Data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-whatsapp-forensics",
      children: "6.3 WhatsApp Forensics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WhatsApp is end-to-end encrypted, but metadata and cloud backups reveal significant forensic evidence."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence Sources:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Source"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Reveals"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How to Access"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "WhatsApp Web Sessions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active browser sessions, devices, last activity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WhatsApp → Linked Devices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Chat Export"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contact information, message metadata (not content if encrypted backup)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Settings → Chats → Chat History → Export Chat"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Account Info"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone number, last seen, profile photo changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Settings → Account → Privacy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Google Drive Backup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "iCloud/Google Drive backup metadata shows when backup was last done"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check cloud storage account"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Two-Step Verification Settings"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whether PIN is enabled, email for PIN reset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Settings → Account → Two-Step Verification"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "WhatsApp Account Takeover Methods:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prevalence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prevention"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SIM Swap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port number → receive WhatsApp verification SMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable 2-Step Verification PIN + carrier PIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Verification Code Phishing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker triggers WhatsApp registration, sends fake code request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIUM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never share 6-digit code with anyone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "WhatsApp Web Hijack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan QR code from attacker's screenshot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIUM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log out of all web sessions after use"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cloud Backup Breach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker accesses unencrypted cloud backup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable end-to-end encrypted backups (Apple/Google)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Social Engineering"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker impersonates friend needing verification code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VERY HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Know that any 6-digit code SHARED = account lost"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "WhatsApp Forensic Response:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "WHATSAPP COMPROMISE RESPONSE\n═══════════════════════════════════════════════════\nIMMEDIATE:\n  1. Check WhatsApp → Settings → Linked Devices\n  2. Log out ALL linked devices\n  3. Check if 2-Step PIN is still YOURS (not changed by attacker)\n  4. If PIN is changed, you have 7 days before WhatsApp erases account\n     → Submit email to support@support.whatsapp.com with subject \"Lost/Stolen Phone\"\n\nEVIDENCE COLLECTION:\n  ■ Screenshot Linked Devices list before logging out\n  ■ Check phone's call log for unknown numbers\n  ■ Export chat with the attacker (if they messaged you)\n  ■ Note timestamps of when you lost access\n\nRECOVERY:\n  1. Insert your SIM (if SIM swapped, go to carrier first)\n  2. Open WhatsApp → Verify with SMS code\n  3. Enter your 2-Step PIN (if not changed by attacker)\n  4. If PIN changed → wait 7 days → account auto-deletes → re-register\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-discord-forensics",
      children: "6.4 Discord Forensics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Discord is a major target for account takeover because compromised accounts are used to spread malware and crypto scams through trusted DMs."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Discord Attack Vectors:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Warning Signs"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prevention"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Token Logger"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malicious \"tool\" or \"crack\" that steals Discord auth token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suspicious DMs, account posting scam links in servers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never run untrusted executables, use Discord in browser with reduced permissions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Nitro Scam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fake \"free Discord Nitro\" links → steal credentials"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Messages from \"Discord\" with suspicious domains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify official Discord is discord.com only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "QR Code Phishing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Verify your age\" QR code → links to Discord auth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Servers requiring QR \"verification\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never scan QR codes from untrusted sources"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OAuth App Abuse"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malicious bot requesting \"join servers for you\" permission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unknown authorization screen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read permissions carefully before authorizing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Session Cookie Theft"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malicious browser extension steals Discord session"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unknown login from new device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use separate browser profile for Discord"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Discord Forensics — TypeScript:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// discord-forensics.ts — Discord Account Compromise Investigation\n\ninterface DiscordDataExport {\n  user: {\n    id: string;\n    username: string;\n    email: string;\n    phone: string;\n    mfaEnabled: boolean;\n    createdAt: string;\n  };\n  sessions: DiscordSession[];\n  authorizedApps: DiscordOAuthApp[];\n  guilds: DiscordGuild[];\n  dms: DiscordDM[];\n}\n\ninterface DiscordSession {\n  id: string;\n  ip: string;\n  userAgent: string;\n  location: string;\n  created: string;\n  lastUsed: string;\n  active: boolean;\n}\n\ninterface DiscordOAuthApp {\n  name: string;\n  id: string;\n  permissions: string[];\n  authorizedAt: string;\n  lastUsed: string;\n}\n\ninterface DiscordGuild {\n  id: string;\n  name: string;\n  joinedAt: string;\n  owner: boolean;\n  permissions: string;\n}\n\ninterface DiscordDM {\n  userId: string;\n  username: string;\n  lastMessageAt: string;\n}\n\ninterface DiscordForensicReport {\n  compromiseIndicators: string[];\n  suspiciousSessions: DiscordSession[];\n  suspiciousApps: DiscordOAuthApp[];\n  attackTimeline: ForensicEvent[];\n  riskScore: number;\n  recommendations: string[];\n}\n\ninterface ForensicEvent {\n  timestamp: string;\n  description: string;\n  severity: 'info' | 'warning' | 'critical';\n}\n\nclass DiscordForensicEngine {\n  analyze(exportData: DiscordDataExport): DiscordForensicReport {\n    const suspiciousSessions: DiscordSession[] = [];\n    const suspiciousApps: DiscordOAuthApp[] = [];\n    const indicators: string[] = [];\n    const timeline: ForensicEvent[] = [];\n\n    // 1. Check for suspicious sessions\n    for (const session of exportData.sessions) {\n      // Session from data center / VPN IP\n      if (this.isDataCenterIP(session.ip)) {\n        suspiciousSessions.push(session);\n        indicators.push(`Session from data center IP: ${session.ip} (${session.location})`);\n        timeline.push({\n          timestamp: session.created,\n          description: `Suspicious session created from ${session.location} (data center IP)`,\n          severity: 'critical',\n        });\n      }\n\n      // Session from unusual location\n      const userCountry = this.guessUserCountry(exportData.sessions);\n      if (userCountry && session.location && !session.location.includes(userCountry)) {\n        suspiciousSessions.push(session);\n        indicators.push(`Session from unexpected country: ${session.location}`);\n        timeline.push({\n          timestamp: session.created,\n          description: `Session from unexpected location: ${session.location}`,\n          severity: 'warning',\n        });\n      }\n\n      // Session with unusual user agent\n      const commonAgents = ['Discord', 'Electron', 'Chrome', 'Firefox', 'Safari', 'Edge'];\n      const isCommonAgent = commonAgents.some(a => session.userAgent.includes(a));\n      if (!isCommonAgent && session.userAgent.length > 0) {\n        suspiciousSessions.push(session);\n        indicators.push(`Unusual user agent: ${session.userAgent.substring(0, 60)}`);\n        timeline.push({\n          timestamp: session.created,\n          description: `Login from unusual browser/client: ${session.userAgent.substring(0, 40)}`,\n          severity: 'warning',\n        });\n      }\n    }\n\n    // 2. Check for malicious OAuth apps\n    const highRiskPermissions = ['guilds.join', 'messages.read', 'connections', 'email'];\n    for (const app of exportData.authorizedApps) {\n      const hasHighRiskPerm = app.permissions.some(p => highRiskPermissions.includes(p));\n      if (hasHighRiskPerm) {\n        suspiciousApps.push(app);\n        indicators.push(`Suspicious app \"${app.name}\" has high-risk permissions: ${app.permissions.join(', ')}`);\n        timeline.push({\n          timestamp: app.authorizedAt,\n          description: `High-risk app \"${app.name}\" was authorized`,\n          severity: 'warning',\n        });\n      }\n    }\n\n    // 3. Check for account creation / impersonation\n    if (exportData.user.email && !this.isExpectedEmail(exportData.user.email)) {\n      indicators.push(`Account email may have been changed to ${exportData.user.email}`);\n      timeline.push({\n        timestamp: exportData.user.createdAt,\n        description: 'Possible email change detected',\n        severity: 'critical',\n      });\n    }\n\n    // 4. DM-based phishing analysis\n    for (const dm of exportData.dms) {\n      if (this.isKnownPhishingAccount(dm.username)) {\n        indicators.push(`Recent DM from known phishing account: ${dm.username}`);\n        timeline.push({\n          timestamp: dm.lastMessageAt,\n          description: `DM from suspected phishing account: ${dm.username}`,\n          severity: 'warning',\n        });\n      }\n    }\n\n    // Risk scoring\n    const criticalCount = timeline.filter(e => e.severity === 'critical').length;\n    const warningCount = timeline.filter(e => e.severity === 'warning').length;\n    const riskScore = Math.min(100, criticalCount * 30 + warningCount * 10);\n\n    return {\n      compromiseIndicators: indicators,\n      suspiciousSessions,\n      suspiciousApps,\n      attackTimeline: timeline.sort((a, b) =>\n        new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()\n      ),\n      riskScore,\n      recommendations: riskScore >= 50 ? [\n        'ACCOUNT LIKELY COMPROMISED — follow IR playbook immediately',\n        'Revoke ALL OAuth app authorizations immediately',\n        'Change Discord password to a unique 20+ char password',\n        'Enable 2FA with authenticator app (Discord supports TOTP)',\n        'Log out of all sessions: Settings → Log Out Of All Known Devices',\n        'Check for unauthorized server joins and new DMs sent',\n        'Contact Discord Trust & Safety: https://dis.gd/request',\n      ] : [\n        'Enable 2FA (TOTP) on your Discord account',\n        'Review authorized apps regularly: Settings → Authorized Apps',\n        'Never run unverified executables that claim to be Discord tools',\n        'Use Discord in browser with uBlock Origin for additional security',\n      ],\n    };\n  }\n\n  private isDataCenterIP(ip: string): boolean {\n    // Check against known data center / cloud provider IP ranges\n    // In production: use IP geolocation API with is_datacenter flag\n    const dataCenterIPs = ['104.28.', '172.64.', '162.158.'];\n    return dataCenterIPs.some(range => ip.startsWith(range));\n  }\n\n  private guessUserCountry(sessions: DiscordSession[]): string | null {\n    // Return most common country among sessions\n    const countryCounts = new Map<string, number>();\n    for (const s of sessions) {\n      if (s.location) {\n        countryCounts.set(s.location, (countryCounts.get(s.location) || 0) + 1);\n      }\n    }\n    let maxCount = 0;\n    let maxCountry: string | null = null;\n    for (const [country, count] of countryCounts) {\n      if (count > maxCount) {\n        maxCount = count;\n        maxCountry = country;\n      }\n    }\n    return maxCountry;\n  }\n\n  private isExpectedEmail(email: string): boolean {\n    // Check if email matches known patterns\n    return email.length > 5 && email.includes('@') && !email.includes('temp') && !email.includes('throwaway');\n  }\n\n  private isKnownPhishingAccount(username: string): boolean {\n    const phishingPatterns = [\n      /free.*nitro/i, /discord.*giveaway/i, /steam.*gift/i,\n      /verif.*bot/i, /age.*verif/i, /claim.*reward/i,\n      /airdrop|crypto.*giveaway/i,\n    ];\n    return phishingPatterns.some(p => p.test(username));\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-tiktok-forensics",
      children: "6.5 TikTok Forensics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TikTok accounts are hijacked for: crypto scams, spreading disinformation, account selling, and content ransom."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TikTok Attack Vectors:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Vector"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Signs"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prevention"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Phishing via DMs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fake \"TikTok Support\" DM asking for verification code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DMs from \"tiktok\" accounts, urgent language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never share verification codes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SIM Swap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port number → SMS bypass of 2FA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone loses service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove phone 2FA, use TOTP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Malicious Link"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Get verified\" / \"Free followers\" links"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Third-party login page"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only use official TikTok login"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Session Hijacking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cookie theft from browser"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unknown login from new device"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log out after use, clear cookies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "API Abuse"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Third-party apps with excessive permissions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unauthorized posts, follows, likes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Revoke unused third-party app access"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TikTok Data Download:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Data Point"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Shows"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How to Get It"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Login History"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP, device, location, timestamp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Settings → Account → Download Data → JSON"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Active Sessions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Devices currently logged in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Settings → Security → Manage Devices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Third-Party Apps"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connected apps with permissions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Settings → Security → Authorized Apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Account Changes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email/phone/password change history"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Download data → JSON → account_changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reported Content"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content flagged for violations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Settings → Account → Report History"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TikTok Forensics Response:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TIKTOK COMPROMISE RESPONSE\n═══════════════════════════════════════════════════\nIMMEDIATE:\n  1. Go to Settings → Security → Manage Devices\n  2. Remove ALL devices you don't recognize\n  3. Check email for TikTok security notifications\n  4. Try \"Forgot Password\" → reset via email (TikTok does NOT use SMS)\n  5. Report account hijacking: tiktok.com/legal/report/hacked\n\nRECOVERY:\n  ■ TikTok support requires: username, email used for registration, date of birth\n  ■ Submit ID verification if applicable\n  ■ Response time: 24-72 hours\n\nFORENSIC COLLECTION:\n  ■ Download data JSON before logging out attacker's sessions\n  ■ Extract IPs and devices from login_history.json\n  ■ Screenshot any attacker activity (posts, DMs, follows)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "66-snapchat-forensics",
      children: "6.6 Snapchat Forensics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Snapchat's disappearing content makes it a preferred platform for sensitive communication, making account takeovers particularly dangerous."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Snapchat Attack Vectors:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Risk"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prevention"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Phishing \"My Story\" Login"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fake Snapchat login page"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only use official Snapchat app"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Third-Party Client Apps"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unofficial Snapchat apps (SnapTools, etc.)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VERY HIGH — account gets PERMANENTLY locked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never use third-party Snapchat clients"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SIM Swap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port number → SMS 2FA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove SMS as recovery option"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Phone Number Enumeration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker uses phone number to find account"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIUM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disable \"Let others find me by phone\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Friend Impersonation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker creates fake friend account"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIUM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify identity before sharing sensitive content"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Snapchat Data Request:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Data"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fields"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How to Access"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Login History"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP, device, OS, timestamp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Submit privacy request at support.snapchat.com"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Account History"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email changes, phone changes, deactivations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Snapchat Data Request (takes 2-4 weeks)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "My Data"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitmoji history, friend list, memories count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Settings → My Data (limited)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "67-telegram-forensics",
      children: "6.7 Telegram Forensics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Telegram accounts are hijacked through SIM swap + verification SMS, or through Telegram's cloud sync feature."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Telegram Attack Vectors:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Warning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prevention"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SIM Swap + SMS Code"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker swaps SIM → requests Telegram code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Login code\" SMS you didn't request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable 2-Step Verification (cloud password)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Telegram Session Hijack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker accesses your saved sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New login notification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check active sessions: Settings → Privacy → Active Sessions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Social Engineering \"Code\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker impersonates support asks for login code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unknown person asking for Telegram code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No legitimate support asks for your code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "QR Code Scan"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malicious QR code linking to Telegram web"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unknown Telegram Web login"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always verify QR code origin before scanning"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Telegram 2-Step Verification (Cloud Password):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is the single most important Telegram security setting. Without it, anyone with your SIM can take over your account."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// telegram-security.ts — Telegram Account Security Assessment\n\ninterface TelegramSecurityConfig {\n  twoStepPasswordEnabled: boolean;\n  twoStepPasswordEmail: string; // Recovery email for password reset\n  activeSessions: number;\n  activeSessionLocations: string[];\n  phoneNumber: string;\n  username: string;\n  lastSeenMode: 'everybody' | 'contacts' | 'nobody';\n  profilePhotoMode: 'everybody' | 'contacts' | 'nobody';\n  groupsAndChannels: string[]; // Who can add you\n  phoneNumberVisibility: 'everybody' | 'contacts' | 'nobody';\n}\n\ninterface TelegramSecurityScore {\n  score: number;\n  level: 'weak' | 'moderate' | 'strong' | 'excellent';\n  vulnerabilities: string[];\n  recommendations: string[];\n}\n\nclass TelegramSecurityAudit {\n  audit(config: TelegramSecurityConfig): TelegramSecurityScore {\n    const vulnerabilities: string[] = [];\n    const recommendations: string[] = [];\n    let score = 50; // Start at medium\n\n    // 1. Two-Step Verification (critical)\n    if (!config.twoStepPasswordEnabled) {\n      vulnerabilities.push('CRITICAL: 2-Step Verification (Cloud Password) is NOT enabled');\n      recommendations.push('Enable 2-Step Verification: Settings → Privacy → 2-Step Verification');\n      score -= 30;\n    } else {\n      score += 25;\n      if (config.twoStepPasswordEmail && !this.isSecureEmail(config.twoStepPasswordEmail)) {\n        vulnerabilities.push('Recovery email for 2-Step Verification may be insecure');\n        recommendations.push('Use a dedicated, secure email for Telegram password recovery');\n      }\n    }\n\n    // 2. Active sessions\n    if (config.activeSessions > 5) {\n      vulnerabilities.push(`${config.activeSessions} active sessions — excessive`);\n      recommendations.push('Terminate old sessions: Settings → Privacy → Active Sessions → Terminate All Other Sessions');\n      score -= 10;\n    }\n\n    // 3. Multiple session locations\n    const uniqueLocations = new Set(config.activeSessionLocations);\n    if (uniqueLocations.size > 3) {\n      vulnerabilities.push(`Sessions from ${uniqueLocations.size} different locations`);\n      recommendations.push('Review each active session — terminate unrecognized ones');\n      score -= 10;\n    }\n\n    // 4. Privacy settings\n    if (config.phoneNumberVisibility !== 'nobody') {\n      vulnerabilities.push('Phone number is visible — anyone can find you by number');\n      recommendations.push('Set \"Phone Number\" to Nobody in Privacy Settings');\n      score -= 10;\n    }\n    if (config.lastSeenMode !== 'nobody') {\n      recommendations.push('Set \"Last Seen & Online\" to Nobody for maximum privacy');\n      score -= 5;\n    }\n    if (config.profilePhotoMode !== 'contacts') {\n      recommendations.push('Set \"Profile Photo\" to My Contacts');\n      score -= 5;\n    }\n    if (config.groupsAndChannels.includes('everybody')) {\n      vulnerabilities.push('Anyone can add you to groups — potential for scam group invites');\n      recommendations.push('Set \"Groups & Channels\" to My Contacts');\n      score -= 5;\n    }\n\n    // 5. Username\n    if (!config.username) {\n      recommendations.push('Set a Telegram username — if not set, your phone number is the only identifier');\n    }\n\n    score = Math.max(0, Math.min(100, score));\n\n    return {\n      score,\n      level: score >= 80 ? 'excellent' : score >= 60 ? 'strong' : score >= 40 ? 'moderate' : 'weak',\n      vulnerabilities,\n      recommendations,\n    };\n  }\n\n  private isSecureEmail(email: string): boolean {\n    const domain = email.split('@')[1]?.toLowerCase() || '';\n    const insecureProviders = ['mail.ru', 'yandex.ru', 'rambler.ru', 'temp-mail.org', 'guerrillamail.com', '10minutemail.com'];\n    return !insecureProviders.some(d => domain.includes(d));\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "68-signal-forensics",
      children: "6.8 Signal Forensics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Signal is the most secure messaging platform, but it's not immune to account takeover. Signal's primary attack vector is phone number-based (SIM swap or number recycling)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Signal Attack Vectors:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Feasibility"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prevention"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SIM Swap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port number → register Signal on new phone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable Signal Registration Lock PIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Number Recycling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIUM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carrier reassigns old number → new owner gets Signal account"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set Registration Lock PIN + unlink from old number"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Screenshot Backups"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIUM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker accesses unlocked phone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set Screen Security (blurs previews in app switcher)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Phishing Registration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker spoofs Signal registration process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registration Lock PIN blocks without PIN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Desktop Session Theft"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malware steals Signal Desktop SQLite database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use full-disk encryption, don't save passwords"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Signal Registration Lock (PIN):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is Signal's most important security feature. It prevents anyone from registering your number on a new device without your PIN."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SIGNAL REGISTRATION LOCK SETUP\n═══════════════════════════════════════════════════\n1. Open Signal → Settings → Account\n2. Enable \"Registration Lock\" \n3. Set a 6+ digit PIN\n4. REMEMBER THIS PIN. Signal does NOT offer PIN recovery.\n5. If you forget the PIN and lose your phone → account is gone permanently.\n6. Optional: Set PIN reminder interval (2 days — recommended)\n\nWHAT IT PROTECTS:\n  SIM swap → attacker inserts your number → tries to register Signal\n  → Signal asks for Registration Lock PIN → attacker doesn't have it\n  → Attacker CANNOT register your number on Signal\n  → Account is safe\n\nWHAT IT DOESN'T PROTECT:\n  Password/credential theft (Signal doesn't use passwords for login)\n  Device theft (if attacker has your unlocked phone, they CAN read messages)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "69-amazon-account-forensics",
      children: "6.9 Amazon Account Forensics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Amazon account takeovers mean the attacker can order items, view saved credit cards, access Alexa recordings, and change delivery addresses."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Amazon Attack Vectors:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Common Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prevention"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Credential Stuffing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Orders placed, addresses changed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leaked password reused on Amazon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique Amazon password + MFA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Phishing \"Account Suspended\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Login credential theft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email claiming account restriction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check in app, not via email link"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SIM Swap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMS 2FA bypass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Port number → reset Amazon password"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOTP 2FA (Amazon supports authenticator apps)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Session Hijacking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Orders without login"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cookie theft from browser"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log out after use, use 2FA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Customer Service Social Engineering"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account access via phone support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attacker impersonates you to Amazon Support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set account PIN for support calls"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Amazon Account Security Checklist:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AMAZON SECURITY CHECKLIST\n═══════════════════════════════════════════════════\n□ Enable 2-Step Verification: Account → Login & Security → 2-Step Verification\n  └── Use Authenticator App (TOTP) — NOT SMS\n□ Set Amazon Account PIN: Account → Login & Security → Advanced Security Settings\n  └── Required for ANY customer service interaction\n□ Review Devices: Account → Digital Content → Manage Your Content & Devices\n  └── Remove old devices, Kindles, Alexa devices\n□ Review Addresses: Account → Your Addresses\n  └── Remove old addresses, check for unknown addresses\n□ Check Saved Cards: Account → Your Payments\n  └── Remove stored cards not in use\n□ Check Gift Card Balance: Account → Gift Cards\n  └── Attacker may have redeemed stolen codes\n□ Review Orders: Account → Your Orders\n  └── Look for unauthorized orders\n□ Amazon Household: Account → Amazon Household\n  └── Remove members you don't recognize\n□ Alexa Privacy: Settings → Alexa Privacy\n  └── Review voice history, delete recordings\n□ Check Login History: Account → Login & Security → Recent Activity\n  └── Review all recent login attempts\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "610-github--microsoft-account-forensics",
      children: "6.10 GitHub / Microsoft Account Forensics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Developer accounts (GitHub, Azure, Microsoft) are high-value targets because they provide access to source code, infrastructure, and CI/CD pipelines."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Account Takeover — The \"Supply Chain\" Attack:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prevention"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Password Theft"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access to private repos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Credential stuffing, phishing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique strong password + 2FA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OAuth Token Theft"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API access without password"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malicious CI tool, compromised personal access token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use fine-grained tokens, rotate regularly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SSH Key Theft"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Git push access without 2FA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malware steals ~/.ssh/id_rsa"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use SSH keys with passphrase + hardware key"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Phishing \"GitHub Login\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full account access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fake GitHub OAuth login page"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2 hardware key (GitHub supports)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Session Cookie Theft"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web access to repos"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Browser extension / XSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log out after each session"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Forensics — TypeScript:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// github-forensics.ts — GitHub Account Security Audit\n\ninterface GitHubAccount {\n  username: string;\n  email: string;\n  twoFactorEnabled: boolean;\n  twoFactorMethod: 'totp' | 'sms' | 'hardware' | 'none';\n  recoveryCodesSaved: boolean;\n  personalAccessTokens: GitHubToken[];\n  sshKeys: GitHubSSHKey[];\n  authorizedOAuthApps: GitHubOAuthApp[];\n  activeSessions: number;\n  organizationMemberships: string[];\n  verifiedEmails: string[];\n}\n\ninterface GitHubToken {\n  name: string;\n  scopes: string[];\n  created: string;\n  lastUsed: string;\n  expiresAt: string | null;\n}\n\ninterface GitHubSSHKey {\n  title: string;\n  key: string;\n  created: string;\n  lastUsed: string;\n}\n\ninterface GitHubOAuthApp {\n  name: string;\n  owner: string;\n  scopes: string[];\n  authorizedAt: string;\n}\n\nclass GitHubSecurityAudit {\n  audit(account: GitHubAccount): GitHubAuditReport {\n    const findings: string[] = [];\n    const criticals: string[] = [];\n    let score = 100;\n\n    // 1. 2FA check (critical)\n    if (!account.twoFactorEnabled) {\n      criticals.push('CRITICAL: 2FA is NOT enabled on GitHub');\n      score -= 50;\n    } else if (account.twoFactorMethod === 'sms') {\n      findings.push('2FA uses SMS — upgrade to TOTP or hardware key');\n      score -= 15;\n    } else if (account.twoFactorMethod === 'hardware') {\n      score += 10; // Bonus for hardware key\n    }\n\n    // 2. Personal Access Tokens\n    const oldTokens = account.personalAccessTokens.filter(t => {\n      if (!t.lastUsed) return false;\n      const monthsSinceUse = (Date.now() - new Date(t.lastUsed).getTime()) / (30 * 24 * 60 * 60 * 1000);\n      return monthsSinceUse > 6;\n    });\n    if (oldTokens.length > 0) {\n      findings.push(`${oldTokens.length} Personal Access Tokens unused for 6+ months — security risk`);\n      score -= oldTokens.length * 5;\n    }\n\n    // Token with excessive scopes\n    for (const token of account.personalAccessTokens) {\n      if (token.scopes.includes('repo') && token.scopes.includes('admin')) {\n        findings.push(`Token \"${token.name}\" has full repo + admin access — extremely powerful`);\n        score -= 10;\n      }\n      if (token.scopes.includes('delete_repo')) {\n        findings.push(`Token \"${token.name}\" can DELETE repositories`);\n        score -= 5;\n      }\n    }\n\n    // 3. SSH keys\n    const oldSSHKeys = account.sshKeys.filter(k => {\n      const monthsSince = (Date.now() - new Date(k.created).getTime()) / (30 * 24 * 60 * 60 * 1000);\n      return monthsSince > 12;\n    });\n    if (oldSSHKeys.length > 0) {\n      findings.push(`${oldSSHKeys.length} SSH keys created over a year ago — review and remove unused`);\n      score -= oldSSHKeys.length * 5;\n    }\n\n    // 4. OAuth apps\n    for (const app of account.authorizedOAuthApps) {\n      // High-risk scopes\n      if (app.scopes.includes('repo') && app.scopes.includes('workflow')) {\n        findings.push(`OAuth app \"${app.name}\" has repo + workflow access — can modify CI/CD pipelines`);\n        score -= 15;\n      }\n      if (app.scopes.includes('admin:org')) {\n        findings.push(`OAuth app \"${app.name}\" has organization admin access`);\n        score -= 10;\n      }\n    }\n\n    // 5. Multiple unverified emails\n    if (account.verifiedEmails.length === 0) {\n      findings.push('No verified email on GitHub account — account recovery impossible');\n      score -= 20;\n    }\n\n    // 6. Active sessions\n    if (account.activeSessions > 5) {\n      findings.push(`${account.activeSessions} active sessions — review and remove old ones`);\n      score -= 5;\n    }\n\n    score = Math.max(0, score);\n\n    return {\n      overallScore: score,\n      level: score >= 80 ? 'secure' : score >= 50 ? 'needs_improvement' : 'critical',\n      criticals,\n      warnings: findings,\n      recommendations: this.generateRecommendations(account, score),\n    };\n  }\n\n  private generateRecommendations(account: GitHubAccount, score: number): string[] {\n    const recs: string[] = [];\n    if (!account.twoFactorEnabled) recs.push('Enable 2FA: Settings → Password and authentication → Two-factor authentication');\n    if (account.twoFactorMethod === 'sms') recs.push('Switch to TOTP (authenticator app) or register a FIDO2 hardware key');\n    recs.push('Use fine-grained Personal Access Tokens with minimum required permissions only');\n    recs.push('Rotate SSH keys annually — GitHub → Settings → SSH and GPG keys');\n    recs.push('Review authorized OAuth apps: Settings → Applications → Authorized OAuth Apps');\n    recs.push('Set up recovery methods: Settings → Password and authentication → Recovery methods');\n    recs.push('Enable login alerts: Settings → Notifications → Login alerts');\n    if (account.organizationMemberships.length > 0) {\n      recs.push('Review organization access for each org: GitHub requires SAML SSO or 2FA for org access');\n    }\n    if (score < 50) {\n      recs.push('CRITICAL: Take immediate action to secure your GitHub account before it is compromised');\n    }\n    return recs;\n  }\n}\n\ninterface GitHubAuditReport {\n  overallScore: number;\n  level: 'secure' | 'needs_improvement' | 'critical';\n  criticals: string[];\n  warnings: string[];\n  recommendations: string[];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "611-facebook--meta-forensics",
      children: "6.11 Facebook / Meta Forensics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Facebook accounts (now under Meta) are targeted for: account ransom, spreading malware through friend networks, running fake ads with saved payment methods, and identity theft."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Facebook Attack Vectors:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Red Flags"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prevention"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Phishing \"Security Alert\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fake Facebook security notification email"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spoofed email address, urgency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use facebook.com only, never click email links"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Malicious Browser Extension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extension claiming to change Facebook theme"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unknown login activity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Install extensions only from official stores"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Friend Account Compromise"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compromised friend sends malicious link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unexpected DM from friend with link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confirm with friend out-of-band"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OAuth Quiz/App"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Third-party quiz app harvesting data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Personality test\" requesting permissions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never authorize unknown apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SIM Swap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone number ported → SMS 2FA bypass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone loses service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use 2FA with authenticator app, not SMS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Session Hijacking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cookie theft from browser"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unknown device in login history"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log out of Facebook after every session"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Facebook Security Checklist:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FACEBOOK SECURITY SETTINGS\n═══════════════════════════════════════════════════\nTWO-FACTOR AUTHENTICATION:\n  □ Enable 2FA: Settings → Security → Two-Factor Authentication\n  □ Use Authenticator App (TOTP) — NOT SMS\n  □ Register YubiKey (FIDO2) as additional 2FA method\n  □ Save recovery codes OFFLINE\n\nLOGIN ACTIVITY:\n  □ Check Where You're Logged In: Settings → Security → Where You're Logged In\n  □ Log out of unrecognized sessions\n  □ Review devices in your \"Recognized Devices\" list\n\nTHIRD-PARTY ACCESS:\n  □ Review Apps & Websites: Settings → Apps & Websites\n  □ Remove all apps you don't actively use\n  □ Check: \"Apps others use\" — limit what friends' apps can see\n\nPRIVACY:\n  □ Set profile to \"Friends Only\" \n  □ Remove DOB, hometown, school from public profile\n  □ Turn off location history\n  □ Disable facial recognition\n  □ Review tagged photos — un-tag yourself from unwanted tags\n\nRECOVERY:\n  □ Set up Trusted Contacts: Settings → Security → Trusted Contacts (3-5 friends)\n  □ Set legacy contact (someone who can manage your account after you)\n  □ Verify recovery email and phone number are CURRENT\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-personal-defense-architecture",
      children: "8. Personal Defense Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-the-layered-defense-model",
      children: "7.1 The Layered Defense Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph L1[\"Layer 1 &mdash; Password Hygiene\"]\n        PM[Password Manager<br/>Bitwarden/1Password]\n        UP[Unique 20+ char<br/>passwords]\n        BF[Breach Monitoring<br/>HIBP Integration]\n    end\n    subgraph L2[\"Layer 2 &mdash; Two-Factor Auth\"]\n        HSK[Hardware Key<br/>YubiKey FIDO2]\n        TOTP[\"TOTP App<br/>Authy/Ente\"]\n        NO_SMS[\"&#10060; SMS as Primary\"]\n    end\n    subgraph L3[\"Layer 3 &mdash; Session Management\"]\n        BP[Separate Browser<br/>Profiles]\n        SE[Session Expiry<br/>Auto-logout]\n        CI[Container Isolation<br/>Multi-Account]\n    end\n    subgraph L4[\"Layer 4 &mdash; Recovery\"]\n        DE[Dedicated Recovery<br/>Email]\n        RC[Recovery Codes<br/>Offline Backup]\n        PI[PIN &amp; Security<br/>Questions]\n    end\n    subgraph L5[\"Layer 5 &mdash; OPSEC\"]\n        CD[Communication<br/>Discipline]\n        SF[Social Media<br/>Footprint Reduction]\n        DP[Deepfake &amp; Phishing<br/>Awareness]\n    end\n    subgraph L6[\"Layer 6 &mdash; Monitoring\"]\n        AM[Account Activity<br/>Monitoring]\n        AL[Alerts &amp;<br/>Notifications]\n        AR[Automated<br/>Remediation]\n    end\n    L1 --> L2 --> L3 --> L4 --> L5 --> L6\n    style L1 fill:#1b4332,stroke:#fff,color:#fff\n    style L2 fill:#2d6a4f,stroke:#fff,color:#fff\n    style L3 fill:#40916c,stroke:#fff,color:#fff\n    style L4 fill:#52b788,stroke:#fff,color:#fff\n    style L5 fill:#74c69d,stroke:#fff,color:#fff\n    style L6 fill:#95d5b2,stroke:#fff,color:#222\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "LAYER 1 — PASSWORD HYGIENE\n═══════════════════════════════════════════════════\n■ Password Manager (Bitwarden/1Password/Proton Pass)\n  → Unique 20+ char random password for every service\n  → Auto-fill prevents phishing (only fills on correct domain)\n  → Breach monitoring alerts (Have I Been Pwned integration)\n\nLAYER 2 — TWO-FACTOR AUTHENTICATION\n═══════════════════════════════════════════════════\n■ Hardware Security Key (YubiKey 5 Series) — Primary 2FA\n  → FIDO2/WebAuthn — phishing-resistant, domain-bound\n  → Works on: Google, GitHub, Twitter, Facebook, Microsoft, Apple\n  → Buy 2 keys: main + backup (store backup in safe/offsite)\n■ TOTP Authenticator — Secondary 2FA (when hardware not supported)\n  → Use Authy (encrypted backup) or Ente Auth (open source)\n  → NEVER use SMS-based 2FA as primary\n\nLAYER 3 — SESSION MANAGEMENT\n═══════════════════════════════════════════════════\n■ Use separate browser profiles for personal vs sensitive accounts\n  → Chrome profile for social media\n  → Firefox profile for banking/finance\n  → Brave profile for work/email\n■ Disable browser extensions on sensitive sites\n■ Log out of sessions when not in use\n■ Never click \"Remember this device\" on public computers\n\nLAYER 4 — EMAIL SECURITY\n═══════════════════════════════════════════════════\n■ Use a dedicated email for account recovery (not daily email)\n■ Enable 2FA on email account with hardware key\n■ DMARC reject policy on custom domains\n■ Check Have I Been Pwned weekly for email breaches\n\nLAYER 5 — COMMUNICATION OPSEC\n═══════════════════════════════════════════════════\n■ Never share 2FA codes with anyone (including \"support\")\n■ Verify identity out-of-band before sharing sensitive info\n■ Use Signal for sensitive conversations\n■ Treat every call/SMS claiming to be support as suspicious\n\nLAYER 6 — MONITORING\n═══════════════════════════════════════════════════\n■ Google Account: Check \"Security Checkup\" monthly\n■ Instagram: Check Login Activity weekly\n■ Apple ID: Check \"Device List\" monthly\n■ Have I Been Pwned: Monitor all email addresses\n■ Credit freeze (US) / Credit monitoring (all countries)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-account-security-scanner--typescript",
      children: "7.2 Account Security Scanner — TypeScript"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// account-security-scanner.ts — Scan Your Account Security Posture\n\ninterface AccountConfig {\n  platform: string;\n  has2FA: boolean;\n  twoFAType: 'none' | 'sms' | 'totp' | 'push' | 'fido2' | 'hardware';\n  passwordLength: number;\n  passwordReused: boolean;\n  uniquePassword: boolean;\n  hardwareKeyRegistered: boolean;\n  recoveryCodesSaved: boolean;\n  recoveryCodesOffline: boolean;\n  activeSessions: number;\n  sessionCountry: boolean; // same country always?\n  linkedApps: number;\n  emailLoggedIn: boolean;\n  phoneAttached: boolean;\n}\n\ninterface SecurityScore {\n  overall: number; // 0-100\n  level: 'poor' | 'fair' | 'good' | 'excellent';\n  byCategory: {\n    authentication: number;\n    credentials: number;\n    sessions: number;\n    recovery: number;\n    ecosystem: number;\n  };\n  recommendations: string[];\n}\n\nclass AccountSecurityScanner {\n  scan(config: AccountConfig): SecurityScore {\n    const scores = {\n      authentication: this.scoreAuthentication(config),\n      credentials: this.scoreCredentials(config),\n      sessions: this.scoreSessions(config),\n      recovery: this.scoreRecovery(config),\n      ecosystem: this.scoreEcosystem(config),\n    };\n\n    const overall = Math.round(\n      (scores.authentication * 0.30) +\n      (scores.credentials * 0.25) +\n      (scores.sessions * 0.15) +\n      (scores.recovery * 0.15) +\n      (scores.ecosystem * 0.15)\n    );\n\n    const recommendations: string[] = [];\n\n    if (!config.has2FA) recommendations.push('Enable 2FA immediately');\n    if (config.twoFAType === 'sms') recommendations.push('Replace SMS 2FA with TOTP or hardware key — SMS is vulnerable to SIM swap');\n    if (config.passwordReused) recommendations.push('Stop reusing passwords — use a password manager');\n    if (config.passwordLength < 12) recommendations.push('Use passwords 14+ characters');\n    if (config.activeSessions > 5) recommendations.push('Revoke old sessions');\n    if (config.linkedApps > 10) recommendations.push('Review and revoke unused third-party app access');\n    if (!config.recoveryCodesSaved) recommendations.push('Save recovery codes offline');\n    if (!config.recoveryCodesOffline) recommendations.push('Recovery codes must be stored OFFLINE (not in Google Drive/iCloud)');\n\n    return {\n      overall,\n      level: overall >= 80 ? 'excellent' : overall >= 60 ? 'good' : overall >= 40 ? 'fair' : 'poor',\n      byCategory: scores,\n      recommendations,\n    };\n  }\n\n  private scoreAuthentication(config: AccountConfig): number {\n    let score = 0;\n    if (config.has2FA) score += 30;\n    if (config.twoFAType === 'fido2') score += 50;\n    else if (config.twoFAType === 'hardware') score += 50;\n    else if (config.twoFAType === 'totp') score += 35;\n    else if (config.twoFAType === 'push') score += 25;\n    else if (config.twoFAType === 'sms') score += 10;\n    if (config.hardwareKeyRegistered) score += 20;\n    return Math.min(score, 100);\n  }\n\n  private scoreCredentials(config: AccountConfig): number {\n    let score = 0;\n    if (config.passwordLength >= 20) score += 40;\n    else if (config.passwordLength >= 14) score += 30;\n    else if (config.passwordLength >= 10) score += 15;\n    if (!config.passwordReused) score += 40;\n    if (config.uniquePassword) score += 20;\n    return Math.min(score, 100);\n  }\n\n  private scoreSessions(config: AccountConfig): number {\n    let score = 50; // Start at medium\n    if (config.activeSessions <= 3) score += 20;\n    else if (config.activeSessions <= 8) score += 10;\n    else score -= 10;\n    if (config.sessionCountry) score += 20;\n    return Math.max(0, Math.min(score, 100));\n  }\n\n  private scoreRecovery(config: AccountConfig): number {\n    let score = 0;\n    if (config.recoveryCodesSaved) score += 40;\n    if (config.recoveryCodesOffline) score += 40;\n    if (config.emailLoggedIn) score -= 10; // Bad — email is single point of failure\n    if (config.phoneAttached) score -= 5; // Phone is attack vector for SIM swap\n    return Math.max(0, Math.min(score, 100));\n  }\n\n  private scoreEcosystem(config: AccountConfig): number {\n    let score = 60;\n    if (config.linkedApps <= 5) score += 20;\n    else if (config.linkedApps <= 15) score += 10;\n    else score -= 10;\n    return Math.max(0, Math.min(score, 100));\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-incident-response-playbook",
      children: "9. Incident Response Playbook"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-immediate-action--the-first-15-minutes",
      children: "8.1 Immediate Action — The First 15 Minutes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When you discover your account is compromised, time is critical. Follow this exact sequence:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─────────────────────────────────────────────────────┐\n│ ⚠️  ACCOUNT COMPROMISED — EMERGENCY RESPONSE        │\n├─────────────────────────────────────────────────────┤\n│                                                     │\n│  MINUTE 0-2: CONFIRM COMPROMISE                     │\n│  ├── Can you still log in?                          │\n│  ├── Email changed? Check inbox for notification    │\n│  └── Password changed? Try reset via email/phone     │\n│                                                     │\n│  MINUTE 2-5: SECURE WHAT YOU CAN                    │\n│  ├── Try \"Forgot Password\" → reset                  │\n│  ├── Check if recovery email/phone still yours      │\n│  └── Submit platform recovery form (see below)      │\n│                                                     │\n│  MINUTE 5-10: CONTAIN THE ATTACK                    │\n│  ├── Check linked financial accounts                 │\n│  ├── Notify bank if financial info is at risk        │\n│  └── Change email password FIRST (if still have it) │\n│                                                     │\n│  MINUTE 10-15: DOCUMENT                             │\n│  ├── Screenshot EVERYTHING before it's lost          │\n│  ├── Note timestamps of notifications               │\n│  └── Record attacker activity from your account      │\n│                                                     │\n└─────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-platform-specific-recovery",
      children: "8.2 Platform-Specific Recovery"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Platform"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recovery URL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Process"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Time"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Instagram"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "instagram.com/hacked"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email/phone verification → submit ID → wait"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-5 days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Facebook"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "facebook.com/hacked"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify friends → ID upload → security code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-3 days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Twitter/X"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "twitter.com/account/access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email verification → ID upload → appeal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-7 days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Google"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "g.co/recover"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account recovery questions → email → phone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hours to 3 days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Apple ID"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "iforgot.apple.com"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email + phone verification → security questions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hours to 2 days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Microsoft"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "account.live.com/acsr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recovery form → automated verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hours to 2 days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LinkedIn"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "linkedin.com/help"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email verification → report compromise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-2 days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Telegram"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App → Settings → Privacy → Security → Active Sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminate sessions immediately"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Discord"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "discord.com/account-recovery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email verification → ticket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hours to 1 day"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-post-recovery-hardening-checklist",
      children: "8.3 Post-Recovery Hardening Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// recovery-checklist.ts — Post-Compromise Hardening Checklist\n\ninterface RecoveryStep {\n  id: string;\n  category: 'password' | '2fa' | 'sessions' | 'apps' | 'email' | 'monitoring' | 'legal';\n  description: string;\n  priority: 'critical' | 'high' | 'medium' | 'low';\n  estimatedTime: string;\n  completed: boolean;\n}\n\nclass PostRecoveryChecklist {\n  generate(): RecoveryStep[] {\n    return [\n      // Password\n      { id: 'P1', category: 'password', description: 'Change password — unique 20+ chars, never used before', priority: 'critical', estimatedTime: '5 min', completed: false },\n      { id: 'P2', category: 'password', description: 'Update password in password manager', priority: 'critical', estimatedTime: '2 min', completed: false },\n      { id: 'P3', category: 'password', description: 'Check password for OTHER accounts where password was reused', priority: 'critical', estimatedTime: '15 min', completed: false },\n\n      // 2FA\n      { id: '2F1', category: '2fa', description: 'Enable 2FA with authenticator app (not SMS)', priority: 'critical', estimatedTime: '5 min', completed: false },\n      { id: '2F2', category: '2fa', description: 'Register hardware security key (YubiKey)', priority: 'high', estimatedTime: '5 min', completed: false },\n      { id: '2F3', category: '2fa', description: 'Generate and save new recovery codes OFFLINE', priority: 'critical', estimatedTime: '3 min', completed: false },\n      { id: '2F4', category: '2fa', description: 'Remove old 2FA method (especially SMS)', priority: 'high', estimatedTime: '2 min', completed: false },\n\n      // Sessions\n      { id: 'S1', category: 'sessions', description: 'Log out of all active sessions', priority: 'critical', estimatedTime: '2 min', completed: false },\n      { id: 'S2', category: 'sessions', description: 'Review login activity — document attacker IPs and device info', priority: 'high', estimatedTime: '10 min', completed: false },\n      { id: 'S3', category: 'sessions', description: 'Remove unknown devices from trusted device list', priority: 'high', estimatedTime: '3 min', completed: false },\n\n      // Apps\n      { id: 'A1', category: 'apps', description: 'Revoke ALL third-party application access', priority: 'critical', estimatedTime: '5 min', completed: false },\n      { id: 'A2', category: 'apps', description: 'Re-authorize only apps you actively use and recognize', priority: 'medium', estimatedTime: '10 min', completed: false },\n\n      // Email\n      { id: 'E1', category: 'email', description: 'Change email account password', priority: 'critical', estimatedTime: '5 min', completed: false },\n      { id: 'E2', category: 'email', description: 'Enable 2FA on email account with hardware key', priority: 'critical', estimatedTime: '5 min', completed: false },\n      { id: 'E3', category: 'email', description: 'Check email forwarding rules (attacker may have set forwarding)', priority: 'high', estimatedTime: '5 min', completed: false },\n      { id: 'E4', category: 'email', description: 'Check email filters (attacker may have created \"delete\" filters)', priority: 'high', estimatedTime: '5 min', completed: false },\n      { id: 'E5', category: 'email', description: 'Check account recovery email/phone — ensure it is YOURS', priority: 'critical', estimatedTime: '3 min', completed: false },\n\n      // Monitoring\n      { id: 'M1', category: 'monitoring', description: 'Check Have I Been Pwned for all email addresses', priority: 'high', estimatedTime: '5 min', completed: false },\n      { id: 'M2', category: 'monitoring', description: 'Set up breach alerts (Firefox Monitor, Google Dark Web Report)', priority: 'medium', estimatedTime: '5 min', completed: false },\n      { id: 'M3', category: 'monitoring', description: 'Monitor financial accounts for unusual transactions (next 30 days)', priority: 'high', estimatedTime: '30 min/week', completed: false },\n      { id: 'M4', category: 'monitoring', description: 'Check credit report for unauthorized accounts', priority: 'medium', estimatedTime: '15 min', completed: false },\n\n      // Legal\n      { id: 'L1', category: 'legal', description: 'File cyber crime report at local police station / cyber cell', priority: 'high', estimatedTime: '1-2 hours', completed: false },\n      { id: 'L2', category: 'legal', description: 'Report to platform — submit evidence of compromise', priority: 'medium', estimatedTime: '30 min', completed: false },\n      { id: 'L3', category: 'legal', description: 'If financial loss > $5K: file FBI IC3 complaint (ic3.gov)', priority: 'medium', estimatedTime: '30 min', completed: false },\n      { id: 'L4', category: 'legal', description: 'Preserve all evidence: screenshots, emails, logs', priority: 'high', estimatedTime: '15 min', completed: false },\n    ];\n  }\n\n  printReport(checklist: RecoveryStep[]): string {\n    const categories = [...new Set(checklist.map(c => c.category))];\n\n    let report = `\nPOST-COMPROMISE RECOVERY CHECKLIST\n═══════════════════════════════════════════════════\nDate: ${new Date().toISOString().split('T')[0]}\n\n`;\n    for (const cat of categories) {\n      const items = checklist.filter(c => c.category === cat);\n      const completed = items.filter(c => c.completed).length;\n      report += `[${cat.toUpperCase()}] ${completed}/${items.length} complete\\n`;\n      for (const item of items) {\n        report += `  [${item.completed ? '✓' : ' '}] ${item.priority.toUpperCase()}: ${item.description}\\n`;\n      }\n      report += '\\n';\n    }\n\n    report += `OVERALL: ${checklist.filter(c => c.completed).length}/${checklist.length} steps completed\\n`;\n    return report;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-real-world-case-studies",
      children: "10. Real-World Case Studies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-twitter-bitcoin-scam-2020--the-ultimate-social-engineering-attack",
      children: "9.1 Twitter Bitcoin Scam 2020 — The Ultimate Social Engineering Attack"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Date:"
        }), " July 15, 2020"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " 130+ high-profile accounts compromised (Barack Obama, Elon Musk, Joe Biden, Bill Gates, Kanye West, Apple, Uber)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Financial:"
        }), " $118,000 in Bitcoin stolen (in 12 minutes)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Method:"
        }), " Social engineering of Twitter employees + internal tool access"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Full Attack Chain:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PHASE 1: RECONNAISSANCE\n───────────────────────────────────────────────\nAttacker (17-year-old in Florida, \"Kirk\") and two accomplices\nTarget: Twitter's internal admin tools (\"agent\" tools)\nMethod: Social media research on Twitter employees working remotely\n\nPHASE 2: INITIAL ACCESS  \n───────────────────────────────────────────────\nKirk calls Twitter employees, impersonates IT support\nUses COVID-19 remote work context as cover\nPhrases: \"I'm from IT, we're testing the VPN\"\n1 employee gives credentials → Kirk accesses Twitter VPN\n\nPHASE 3: INTERNAL RECONNAISSANCE\n───────────────────────────────────────────────\nKirk discovers Twitter's internal admin Slack channel\nFinds reference to \"agent\" — internal tool for account control\nAccesses internal tool via VPN with stolen credentials\n\nPHASE 4: ACCOUNT TAKEOVER\n───────────────────────────────────────────────\nUses \"agent\" tool to:\n  → Reset 2FA on target accounts\n  → Change associated email\n  → Take over account completely\nTargets high-profile accounts specifically\n\nPHASE 5: BITCOIN SCAM\n───────────────────────────────────────────────\nFrom each hijacked account, tweets identical message:\n  \"I am giving back to my community. All Bitcoin sent to\n   my address below will be sent back doubled. ...\n   Address: bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh\"\n\nBitcoin address is attacker-controlled\n~$118,000 sent within 12 minutes before Twitter deletes tweets\n\nPHASE 6: AFTERMATH\n───────────────────────────────────────────────\nFBI arrests Kirk (17) and accomplices\nTwitter share price drops 4% next day\nCongressional hearings on security\nKirk sentenced to 3 years in prison\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Failure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happened"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Correct Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No MFA on VPN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Employee gave password → full VPN access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MFA + hardware key required for VPN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No IP allowlist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Admin tools accessible from any IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restrict admin tools to corporate office IPs only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No admin tool segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One tool could reset 2FA and change email"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split critical operations across 2+ roles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No anomaly detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Employee accessed admin tools at 3 AM from unknown IP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detect and block unusual access patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No separation of duties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same tool could both initiate and approve changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Require second person approval for sensitive actions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COVID-19 workarounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote work led to reduced security controls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintain security standards even during crisis"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Modern Twitter Security Improvements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FIDO2 hardware keys mandatory for all employees"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Admin tool access requires 2-person approval"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI-based anomaly detection on admin tool access"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Account recovery now takes 24+ hours for high-profile accounts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-telegram-oauth-hijacking--the-authentication-proxy-attack",
      children: "9.2 Telegram OAuth Hijacking — The Authentication Proxy Attack"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview:"
      }), "\nAttacker sets up a fake Telegram login page using OAuth proxy tool (evilginx2). When the victim logs in, the proxy captures both the password AND the SMS/Telegram 2FA code, giving the attacker full session access."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack Setup:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "VICTIM → clicks phishing link\n       → arrives at lookalike Telegram login at telegram-.xyz\n       → enters phone number\n       → enters Telegram code (SMS or Telegram app)\n       → proxy forwards to real Telegram\n       → VICTIM sees: \"New login from Chrome on Windows\" in Telegram\n       → Victim thinks it's their own login → approves\n       → ATTACKER captures: session token, can access account forever\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always check the domain in the address bar before logging in"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable \"Show sensitive content\" warnings in Telegram"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check active sessions regularly in Telegram Settings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use hardware security keys where supported (Telegram doesn't support FIDO2 yet)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-sim-swap-ring--the-crypto-investor-targeted-attack",
      children: "9.3 SIM Swap Ring — The Crypto Investor Targeted Attack"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview (Michael Terpin vs. AT&T, 2018):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Victim: Michael Terpin, cryptocurrency investor"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Attacker: SIM swap ring targeting high-net-worth crypto investors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Method: Attacker paid AT&T employee $1,000 to swap Terpin's number"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Loss: $24 million in cryptocurrency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Legal: AT&T found grossly negligent, jury awarded $225M (reduced to $7.5M on appeal)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack Execution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Day 1: Attacker gathers personal info on Terpin via public records\nDay 2: Attacker contacts AT&T store, impersonates Terpin\nDay 3: AT&T employee performs SIM swap (for $1,000 bribe)\nDay 4: Terpin's phone shows \"No Service\" at 2 AM\nDay 4 (2:15 AM): Attacker resets Terpin's crypto exchange passwords\nDay 4 (2:16 AM): SMS 2FA codes sent to attacker's SIM\nDay 4 (2:30 AM): $24M in cryptocurrency transferred out\nDay 4 (8:00 AM): Terpin wakes up to \"No Service\" — too late\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-google-account-takeover--the-recovery-nightmare",
      children: "9.4 Google Account Takeover — The Recovery Nightmare"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Victim:"
        }), " Alex, a journalist with 15 years of Google data (Gmail, Drive, Photos, YouTube channel with 50K subscribers)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Attack Method:"
        }), " Credential stuffing + SMS 2FA bypass"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Loss:"
        }), " Complete digital life — emails, documents, photos, YouTube channel earning $2K/month"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recovery:"
        }), " FAILED — account permanently lost"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Full Attack Timeline:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GOOGLE ACCOUNT TAKEOVER — THE COMPLETE STORY\n═══════════════════════════════════════════════════\n\nMONTH 1-6: RECONNAISSANCE PHASE\n────────────────────────────────────────────────\nAttackers (credential stuffing botnet) acquire Alex's email + password\nfrom a 2018 LastPass credential database breach.\nPassword: reused from a forum account\n\nMONTH 7: CREDENTIAL STUFFING\n────────────────────────────────────────────────\nBotnet tries Alex's email + password combination on:\n  □ Google Gmail → SUCCESS (no 2FA at the time)\n  □ Facebook → SUCCESS (same password)\n  □ Twitter → SUCCESS (same password)\n  □ Instagram → SUCCESS (same password)\n  \nAlex is on holiday — doesn't notice Google login alerts\n\nMONTH 7-8: SILENT ACCESS\n────────────────────────────────────────────────\nAttacker maintains access to Gmail, silently:\n  ■ Sets up email forwarding to attacker's email\n  ■ Creates a filter: \"Delete all emails containing 'security' or 'login'\"\n  ■ Downloads 15 years of emails via Google Takeout\n  ■ Views all Google Photos\n  ■ Exports Google Contacts\n  ■ Views Google Drive documents (containing tax returns, passports, contracts)\n\nDAY OF ATTACK — 00:00 HOURS\n────────────────────────────────────────────────\n00:01 — Attacker initiates Google password change\n00:02 — Google sends \"Security Alert\" to recovery email  \n        → Alex's recovery email is ANOTHER GMAIL (same account)\n        → Recovery code goes to compromised Gmail\n        → Filter deletes the notification\n00:03 — Attacker changes Google password\n00:05 — Attacker changes Gmail password\n00:10 — Attacker removes Alex's phone number from account\n00:12 — Attacker removes Alex's recovery email from account\n00:15 — Alex is PERMANENTLY LOCKED OUT\n\nDAY OF ATTACK — 08:00 HOURS\n────────────────────────────────────────────────\nAlex wakes up → tries to check Gmail → \"Incorrect password\"\n→ Tries \"Forgot Password\"\n→ Google asks: \"What recovery email?\"\n→ Alex enters recovery email → \"That email is not associated with this account\"\n→ Google asks: \"Enter a recovery phone number\"\n→ Alex enters phone → \"That number is not associated with this account\" \n→ Alex is trapped in Google's recovery loop\n\nDAY 1-3: RECOVERY ATTEMPTS\n────────────────────────────────────────────────\nAlex submits Google Account Recovery form (g.co/recover)\nGoogle asks questions:\n  □ \"When did you create this account?\" — 2009, approximate\n  □ \"What labels exist in your Gmail?\" — Alex doesn't remember\n  □ \"Name a recent email you sent\" — Attacker deleted everything\n  → Google rejects the recovery attempt\n\nAlex tries repeatedly → each rejection extends the waiting period\nAttacker meanwhile:\n  ■ Changes YouTube channel name → uses it for crypto scam livestreams\n  ■ YouTube channel gets flagged → permanently terminated\n  ■ Uploads ransom note to Google Drive folder Alex can see\n  ■ Sends Facebook messages to Alex's contacts: \"I'm stranded, send money\"\n\nDAY 7: FINAL OUTCOME\n────────────────────────────────────────────────\nGoogle's automated recovery system permanently denies Alex's claim\nRealization: Alex never set up 2FA, never saved recovery codes,\nand used the same Gmail as both primary AND recovery email\n\nATTACKER OUTCOME:\n  YouTube channel: sold on dark web for $3,000\n  Personal data: sold for identity theft\n  Google Photos: intimate photos leaked on revenge porn sites\n  Google Drive: business contracts = competitive intelligence sold\n\nVICTIM OUTCOME:\n  15 years of data: LOST FOREVER\n  50K YouTube channel: LOST\n  Identity theft cleanup: 2+ YEARS\n  Emotional toll: severe anxiety, depression\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause Analysis:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Failure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happened"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Correct Implementation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No 2FA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account had NO 2FA enabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable 2FA with hardware key IMMEDIATELY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Same email as recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recovery = another Gmail in same account"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use DIFFERENT email provider for recovery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No recovery codes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No offline backup of recovery codes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Print 10 recovery codes and store in safe"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Password reuse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same password across 10+ services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Password manager with unique 20+ char passwords"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Undetected silent access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No monitoring of Gmail filters/forwarding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weekly Gmail security check: Filters → Forwarding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No Google Advanced Protection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full account access via password-only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable APP — blocks password-only login"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lessons: Your Google account is the master key. If you lose it, you lose EVERYTHING."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "95-discord-token-logger--the-fake-tool-that-steals-your-account",
      children: "9.5 Discord Token Logger — The Fake Tool That Steals Your Account"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Victim:"
        }), " Teenage Discord user in a gaming community"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Loss:"
        }), " Discord account (used for 3 years), membership in 12 private servers, $500 in Discord Nitro gifts, trust of 200+ friends"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Method:"
        }), " Fake \"Discord Token Logger\" tool promising to show who blocked you"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Human Cost:"
        }), " Account used to scam friends out of $3,000 total across the friend group"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Full Story:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DISCORD TOKEN LOGGER — THE TRUST EXPLOIT\n═══════════════════════════════════════════════════\n\nDAY 1: THE BAIT\n────────────────────────────────────────────────\nAlex (14) is in a Discord server for their favorite game.\nA user with \"Moderator\" role posts:\n  \"New tool: Token Checker — see who blocked you, who deleted you,\n   and the exact time they did it. Only 500 downloads before it's patched.\"\n\nThe tool has:\n  ✓ Professional-looking GitHub repository (stolen code + custom README)\n  ✓ 5 fake 5-star reviews from sockpuppet accounts\n  ✓ Screenshots of fake output (impressive graphs)\n  ✓ \"VirusTotal shows 0 detections\" (the logger is packed/obfuscated)\n\nAlex downloads and runs TokenChecker.exe\n\nDAY 1: THE EXECUTION\n────────────────────────────────────────────────\nWhen run, the executable:\n  1. Locates Discord's Local Storage folder on the PC:\n     %APPDATA%\\discord\\Local Storage\\leveldb\\\n  2. Extracts the Discord authentication token from:\n     - localStorage (contains token as \"token\" key)\n     - leveldb log files (Discord caches tokens there)\n  3. Sends the token via HTTP request to attacker's server\n     (disguised as analytics data)\n  4. Meanwhile, shows a FAKE loading animation for 30 seconds\n  5. Displays message: \"No users have blocked you! Check back later.\"\n  6. Alex thinks: \"The tool works, nobody blocked me. Great!\"\n  7. Alex recommends the tool to 3 friends\n\nDAY 1: IMMEDIATE AFTERMATH\n────────────────────────────────────────────────\nAttacker now has Alex's Discord token (equivalent to having their \npassword + bypassing 2FA — tokens don't require 2FA).\n\nWith the token, attacker can:\n  ■ Read ALL DMs and server messages Alex can see\n  ■ Send messages as Alex in ALL servers\n  ■ Join/leave servers as Alex\n  ■ Change Alex's account settings\n  ■ View Alex's email, phone number, billing info\n  ■ Send friend requests as Alex\n\nAttacker immediately:\n  → Sends DMs to Alex's 10 closest friends:\n    \"Hey! I'm trying to win a game tournament. Can you vote for me?\n     https://free-nitro-generator.xyz/vote [actually credential phishing]\"\n  → 3 friends trust Alex → click link → enter Discord credentials → LOST\n\nDAY 1: ESCALATION\n────────────────────────────────────────────────\nThe 3 compromised accounts are used to:\n  → DM their friends with the same scam\n  → 12 more accounts compromised within 2 hours\n  → Each asks for \"Nitro gift\" to \"help Alex win the tournament\"\n  → $500 in stolen Nitro gifts sent to attacker's accounts\n  → 2 accounts enter credit card info on fake \"Nitro verification\" page\n  → $2,500 in fraudulent charges on stolen cards\n\nDAY 2: DETECTION\n────────────────────────────────────────────────\nAlex tries to log into Discord → \"Session expired\" → logs in\n→ Sees DMs they didn't send → realizes what happened\n→ Changes password → but the TOKEN IS STILL VALID\n→ Has to go to Settings → Log Out of All Known Devices\n→ Reports to Discord Trust & Safety\n\nAFTERMATH\n────────────────────────────────────────────────\n■ Alex permanently loses trust of friends in the server\n■ 3 friends blame Alex for the scam\n■ Alex is banned from 2 servers (server admins blame the compromised account)\n■ $3,000 total stolen from the friend group — none recoverable\n■ Credit card info stolen → identity theft protection needed for 2 years\n■ Attacker: never caught (uses VPN, cryptocurrency payments)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technical Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// discord-token-theft-analysis.ts — How Token Loggers Work\n\nclass DiscordTokenTheftAnalyzer {\n  // Discord stores tokens in these locations:\n  private readonly TOKEN_LOCATIONS = [\n    '%APPDATA%\\\\discord\\\\Local Storage\\\\leveldb\\\\*.log',\n    '%APPDATA%\\\\discord\\\\Local Storage\\\\leveldb\\\\*.ldb',\n    '%APPDATA%\\\\discord\\\\Local Storage\\\\https_discord.com_0.localstorage',\n    '%APPDATA%\\\\discordptb\\\\Local Storage\\\\leveldb\\\\*.log',\n    '%APPDATA%\\\\discordcanary\\\\Local Storage\\\\leveldb\\\\*.log',\n    '%APPDATA%\\\\discorddevelopment\\\\Local Storage\\\\leveldb\\\\*.log',\n    '%LOCALAPPDATA%\\\\Google\\\\Chrome\\\\User Data\\\\Default\\\\Local Storage\\\\leveldb\\\\',\n  ];\n\n  static readonly TOKEN_PATTERN = /mfa\\.[\\w-]{84}|[\\w-]{24}\\.[\\w-]{6}\\.[\\w-]{27}/;\n\n  analyzeTheftMethod(method: string): string {\n    const methods: Record<string, string> = {\n      'executable': 'Fake gaming tool, cheat, crack, or \"checker\" .exe file',\n      'browser_ext': 'Malicious browser extension claiming to enhance Discord',\n      'qr_code': '\"Age verification\" QR code that links to Discord OAuth',\n      'webhook': 'Fake Discord webhook that prompt for \"re-authentication\"',\n      'phishing_page': 'Fake Discord login page that captures both password AND token',\n    };\n    return methods[method] || 'Unknown method';\n  }\n\n  generatePreventionReport(): string {\n    return `\nDISCORD TOKEN THEFT PREVENTION\n═══════════════════════════════════════════════════\n1. NEVER run .exe files claiming to be Discord tools\n   └── Legitimate Discord utilities are web-based or Python, never random EXEs\n   \n2. Discord tokens are ALREADY on your computer\n   └── Any program you run can read them (there is NO protection)\n   └── Solution: Keep your computer clean AND use a separate browser profile for Discord\n\n3. Run Discord in your browser, not the app\n   └── Browser isolates Discord from other apps\n   └── Use Chrome/Firefox profile dedicated to Discord only\n   └── DON'T install browser extensions with Discord permissions\n\n4. Enable 2FA on Discord\n   └── 2FA doesn't protect against token theft (tokens bypass 2FA)\n   └── BUT: 2FA makes account recovery MUCH easier after token theft\n\n5. Check active sessions weekly\n   └── Settings → Authorized Apps → check for unknown apps\n\n6. Periodically force logout ALL sessions\n   └── Settings → Log Out Of All Known Devices\n   └── This invalidates all existing tokens\n   └── Do this every 30 days\n\n7. Use anti-token-protection\n   └── No legitimate script or tool can protect your token\n   └── Any tool claiming to \"protect your token\" IS the scam\n`;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "96-whatsapp-social-engineering-hijack--the-i-need-the-code-scam",
      children: "9.6 WhatsApp Social Engineering Hijack — The \"I Need The Code\" Scam"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target demographic:"
        }), " Families, friend groups, non-technical users"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Method:"
        }), " Social engineering through compromised friend accounts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scale:"
        }), " Millions of WhatsApp accounts compromised annually through this exact method"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Financial impact:"
        }), " Average $2,000 per victim (wiring money to \"friend in need\")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Complete Attack Chain:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "WHATSAPP SOCIAL ENGINEERING TAKEOVER\n═══════════════════════════════════════════════════\n\nSTEP 1: INITIAL COMPROMISE\n────────────────────────────────────────────────\nAttacker gets access to Person A's WhatsApp account\n(through SIM swap OR the verification code trick — see below)\n\nSTEP 2: THE CODE TRICK — HOW IT STARTS\n────────────────────────────────────────────────\nAttacker triggers WhatsApp registration on THEIR phone using\nPerson B's phone number (someone from Person A's contact list).\n\nWhatsApp sends a 6-digit verification code via SMS to Person B.\n\nPerson B receives the SMS: \"Your WhatsApp code is 123-456\"\n\nSTEP 3: THE SOCIAL ENGINEERING PLAY\n────────────────────────────────────────────────\nAttacker DMs Person B from Person A's (hacked) account:\n\nPerson A (hacked): \"Hey! I accidentally registered my number,\n                    can you send me the code that was sent to you?\"\nPerson B:           \"What code?\"\nPerson A (hacked):  \"The 6-digit code you just received\"\nPerson B:           \"Oh okay, it's 123-456\"\n\nSTEP 4: ACCOUNT TAKEOVER\n────────────────────────────────────────────────\nPerson B just shared their WhatsApp verification code.\nAttacker enters the code → BAM → Person B's WhatsApp is now on\nthe attacker's phone.\n\nPerson B's phone:   WhatsApp shows \"This account is now registered on\n                    a different device\" → Person B is logged out.\nPerson B realizes:  Oh no. I just lost my WhatsApp.\n\nSTEP 5: THE EXTRACTION\n────────────────────────────────────────────────\nFrom Person B's hijacked WhatsApp, attacker:\n  ■ Reads through Person B's DMs to identify family relationships\n  ■ Finds Person B's mother/father/spouse contacts labeled \"Mom\", \"Dad\", \"Husband\"\n  ■ DMs the family member from Person B's account:\n    \"Mom! I'm in trouble. I lost my phone and I need to pay\n     something urgently. Can you send ₹10,000 to this UPI ID?\n     I'll pay you back tonight, I promise.\"\n  ■ The message comes from Person B's REAL WhatsApp account\n  ■ No reason to suspect → Mom sends the money\n\nSTEP 6: CASCADE\n────────────────────────────────────────────────\nEach compromised account leads to more:\n  Person A → Person B → Person B's Mom → Person B's Mom's contacts\n  Person B's Mom → her sister → her sister's husband → etc.\n  \nWithin 48 hours, potentially 100+ accounts compromised\nthrough trust cascades.\n\nAFTERMATH\n────────────────────────────────────────────────\nVictim's bank: \"The transaction was authorized by you.\"\nWhatsApp: \"There's nothing we can do — you shared the code.\"\nPolice: \"We'll file a report but these scams originate overseas.\"\nMoney: NEVER RECOVERED.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Prevention Rule That Saves Everyone:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "THE GOLDEN RULE OF WHATSAPP SECURITY\n═══════════════════════════════════════════════════\nYOUR WHATSAPP VERIFICATION CODE IS YOUR IDENTITY.\n\nNever share it with ANYONE, for ANY reason, EVER.\n\nNO ONE — not your friend, not your family, not WhatsApp support —\nwill EVER need your WhatsApp verification code.\n\nIf someone asks for your WhatsApp code:\n  └── They are trying to steal your account.\n  └── Period. No exceptions. No \"but my friend really needs it.\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "97-tiktok-journalist-account-takeover--the-targeted-disinformation-attack",
      children: "9.7 TikTok Journalist Account Takeover — The Targeted Disinformation Attack"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Victim:"
        }), " Independent journalist with 200K TikTok followers covering political corruption"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Attackers:"
        }), " Politically motivated group"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Method:"
        }), " Targeted spear phishing + social engineering of TikTok support"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Loss:"
        }), " Account used to spread disinformation before journalist regained control"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact:"
        }), " Reputation damaged, death threats, had to relocate"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Full Story:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TIKTOK JOURNALIST TAKEOVER — TARGETED DISINFORMATION\n═══════════════════════════════════════════════════\n\nPHASE 1: RECONNAISSANCE (2 WEEKS)\n────────────────────────────────────────────────\nAttackers research the journalist:\n  ■ Email address (found on \"Contact\" page of website)\n  ■ Phone number (found in WHOIS records of personal domain)\n  ■ Birthday (public Instagram post)\n  ■ Mother's maiden name (Facebook — privacy setting was \"Friends\" but attacker \n    compromised a friend's account to view it)\n  ■ Device type (iPhone 14 Pro — from TikTok video metadata)\n  ■ Travel patterns (regular coffee shop posting location-tagged content)\n\nPHASE 2: SPEAR PHISHING\n────────────────────────────────────────────────\nAttackers craft a convincing email:\n  From: \"TikTok Creator Team\" <creator-support@tiktok-verify.xyz>\n  Subject: \"URGENT: Your account will be terminated for copyright violations\"\n  Body: \"We've received 3 copyright strikes against your account.\n         You must appeal within 24 hours or your account will be deleted.\n         Click here to verify your identity: [malicious link]\"\n  \nThe link goes to a near-perfect clone of TikTok's login page.\nJournalist enters email + password → credentials stolen.\n\nPHASE 3: INITIAL ACCESS\n────────────────────────────────────────────────\nAttackers log into the TikTok account.\nTikTok sends login notification to journalist's email.\nBUT: Journalist is in a meeting — doesn't check email for 2 hours.\n\nPHASE 4: 2FA BYPASS VIA SUPPORT\n────────────────────────────────────────────────\nTikTok 2FA is enabled (SMS-based).\nAttackers CAN'T bypass it → they call TikTok support.\n\nSupport call script:\n  \"Hi, I'm [Journalist's Name]. My number was stolen in a SIM swap\n   and I need to update my recovery number. My account is\n   @[journalist_handle]. I can verify my identity:\n   - Email on account: [journalist's email]\n   - Phone on account: [journalist's phone]\n   - Device: iPhone 14 Pro\n   - Account creation date: [correct date from OSINT]\"\n\nTikTok Support: \"We need you to verify via an email we'll send.\"\n  → Support sends verification to journalist's email\n  → Attackers have email access from step 2\n  → Attackers confirm the verification\n  → Support changes phone number → 2FA phone is now attacker's!\n\nPHASE 5: FULL TAKEOVER\n────────────────────────────────────────────────\nWith the phone number changed:\n  → Password reset → SMS goes to attacker\n  → Account is now fully under attacker's control\n  → Journalist's 2FA is useless (phone number was changed)\n\nPHASE 6: DISINFORMATION CAMPAIGN (24 HOURS)\n────────────────────────────────────────────────\nAttackers use the journalist's account to:\n  ■ Post 12 videos in 24 hours:\n    - \"I was wrong about [political figure]. Here's the truth.\"\n    - \"I've been paid by [foreign govt]. I'm coming clean.\"\n    - \"My sources were fabricated. I apologize.\"\n  ■ Reply to comments with fake admission details\n  ■ Delete all critical investigative content (50+ videos gone)\n  ■ Change profile photo and bio to match new narrative\n  ■ Turn on Live → talk for 30 minutes about \"how I was wrong\"\n  ■ Unfollow all legitimate accounts → follow bot accounts\n\nPHASE 7: AFTERMATH\n────────────────────────────────────────────────\nJournalist regains access after 3 days (via ID verification with TikTok).\nBut the damage is done:\n  ■ Lost 80K followers (people who thought the journalist flipped)\n  ■ 50 investigative videos permanently deleted (no backup)\n  ■ Media articles published: \"[Journalist] admits fabricating stories\"\n  ■ Death threats from both sides: people who believed the scam AND\n    people who didn't believe the journalist's \"I was hacked\" explanation\n  ■ Career destroyed — news outlets won't work with a compromised journalist\n  ■ Journalist moves to a different city for safety\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Attack Prevention for High-Profile Accounts:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HIGH-PROFILE ACCOUNT SECURITY CHECKLIST\n═══════════════════════════════════════════════════\n□ NEVER use SMS 2FA — use TOTP or hardware key\n□ Separate email for social media accounts (NOT the one on your website)\n□ Register for Creator Support BEFORE an attack happens\n  └── TikTok Creator Support is separate from normal support\n  └── Have a direct contact person you can call\n□ Use a different phone number for 2FA than your personal number\n  └── Google Voice number for 2FA (port protected)\n  └── Separate prepaid SIM for social media accounts\n□ Record account creation date, device info, and IP addresses\n  └── Needed for account recovery proofs\n□ Set up recovery contacts on all platforms\n□ Regularly backup content (download videos to external drive)\n□ Never click links in \"security alert\" emails\n  └── Open the app directly to check\n□ Use a password manager with auto-fill only on exact domain\n□ Monitor for impersonation accounts — report them\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "98-business-email-compromise-bec--the-50-billion-heist",
      children: "9.8 Business Email Compromise (BEC) — The $50 Billion Heist"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " Medium-sized US manufacturing company (500 employees)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Attackers:"
        }), " Nigerian cybercrime ring (part of a larger BEC operation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Financial Loss:"
        }), " $1.2 million single wire transfer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Total BEC losses globally (2013-2024):"
        }), " $50+ billion (FBI IC3)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Complete Attack Story:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BEC TAKEOVER — THE $1.2M WIRE TRANSFER\n═══════════════════════════════════════════════════\n\nPHASE 1: INTELLIGENCE GATHERING (1 MONTH)\n────────────────────────────────────────────────\nAttackers identify the company through LinkedIn:\n  ■ CEO: John M., active on LinkedIn, mentions upcoming international trip\n  ■ CFO: Sarah K., email format: s.k@company.com\n  ■ AP Manager: David L., manages wire transfers\n  ■ Bank: Mentioned in 3-year-old press release\n\nAttackers gather:\n  ┌─────────────────────────────────────────────┐\n  │ □ CEO's travel schedule (LinkedIn posts)     │\n  │ □ Company email format (confirmed via Hunter) │\n  │ □ Email signature templates (Glassdoor)       │\n  │ □ Vendor details (SEC filings)                │\n  │ □ Wire transfer authority (LinkedIn roles)    │\n  └─────────────────────────────────────────────┘\n\nPHASE 2: INITIAL ACCESS\n────────────────────────────────────────────────\nAttackers send CEO a spear phishing email:\n  From: \"LinkedIn\" <notification@linkedin-secure.net>\n  Subject: \"You have 3 new connection requests\"\n  Body: \"Click to view\" → leads to credential harvesting page\n\nCEO is busy preparing for trip → enters LinkedIn credentials\n→ BUT the page also asks \"Re-enter your work email and password\n   to verify your identity\" → CEO enters it\n→ Company email credentials are now compromised\n\nPHASE 3: EMAIL MONITORING\n────────────────────────────────────────────────\nAttacker silently accesses CEO's email via IMAP.\nCreates mailbox rules:\n  ■ Move any email from CFO/AP Manager to a hidden folder\n  ■ Forward all internal finance emails to attacker's Gmail\n  ■ Delete security alerts from IT\n\nAttacker studies CEO's communication style:\n  ┌─────────────────────────────────────────────┐\n  │ ■ Signature format                          │\n  │ ■ Common phrases (\"Let's circle back\",       │\n  │   \"Per our discussion\", \"FYI\")               │\n  │ ■ Response times                             │\n  │ ■ Typical email structure                   │\n  │ ■ Known vendors and ongoing deals           │\n  └─────────────────────────────────────────────┘\n\nPHASE 4: THE EXECUTION (CEO IS FLYING)\n────────────────────────────────────────────────\nAttacker knows CEO has a 14-hour flight to Tokyo.\nDuring this window, CEO is unreachable by phone or email.\n\nAttacker sends email \"from CEO\" to AP Manager:\n  From: CEO's actual email account\n  To: AP Manager\n  Subject: Urgent wire transfer — vendor payment\n\n  \"David,\n  \n  I'm finalizing the [Vendor Name] acquisition during my trip.\n  Their banking information has changed since the original contract.\n  Please process the deposit to their NEW account immediately.\n  \n  Amount: $1,200,000\n  Reference: #ACQ-2024-0342\n  \n  Updated wire instructions attached.\n  \n  I'm unreachable by phone for the next 8 hours due to flight.\n  Sarah (CFO) is copied and aware of this payment.\n  \n  Thank you,\n  John\"\n  \n  [CC: Sarah — but Sarah's email was spoofed, the actual email \n   only went to AP Manager]\n\nPHASE 5: FRAUD EXECUTION\n────────────────────────────────────────────────\nAP Manager sees email is from CEO's REAL email account.\nAP Manager checks the vendor name — it's a real vendor (OSINT).\nAP Manager calls CFO's office → CFO is in meetings, not picking up.\nAP Manager thinks: \"CEO copied CFO, it's been verified.\"\nAP Manager processes the wire: $1,200,000 to attacker's account\n  (a mule account in Hong Kong).\n\nPHASE 6: AFTERMATH\n────────────────────────────────────────────────\n18 hours later:\n  ■ CEO lands in Tokyo, turns on phone → sees frantic messages\n  ■ CEO: \"I never sent that email\"\n  ■ Bank contacted → funds already withdrawn in Hong Kong (untraceable)\n  ■ FBI notified → jurisdiction issues (Hong Kong)\n  ■ Company insurance: cyber fraud coverage? Maybe $500K\n  ■ Attacker: 1 of 40,000 BEC attacks that year — never caught\n  ■ Company impact: layoffs, CFO resigns, stock drops 12%\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "BEC Prevention Checklist for Businesses:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BEC PREVENTION CHECKLIST\n═══════════════════════════════════════════════════\nTECHNICAL CONTROLS:\n  □ DMARC reject policy (p=reject) — prevents email spoofing\n  □ DMARC pct=100 — apply to ALL emails, not just some\n  □ BIMI — brand logo in email clients (helps identify real emails)\n  □ S/MIME or PGP email signing for sensitive communications\n  □ Email banner: \"EXTERNAL\" on all emails from outside the company\n  □ Block auto-forwarding of email to external addresses\n  □ No mailbox rules that auto-delete or forward without IT approval\n\nPROCESS CONTROLS:\n  □ Dual approval for ALL wire transfers over $10,000\n  └── Two DIFFERENT people must approve\n  └── Approval must be in-person (not email)\n  □ Payment verification call:\n  └── Call the vendor on FILE phone number (not in the email)\n  └── Confirm new banking details verbally\n  □ \"No email alone can authorize payment\" — company policy\n  □ Payment window: no rush payments (72-hour waiting period)\n  □ CEO travel protocol: designate a backup approver during travel\n  □ Regular security training with BEC-specific phishing simulations\n\nTECHNICAL TOOLS:\n  □ Anti-phishing gateway (Proofpoint, Mimecast, Abnormal Security)\n  □ Employee domain monitoring (identify lookalike domains)\n  □ SIEM alerts for: \n     - New email forwarding rules\n     - Email access from unusual IPs\n     - Large attachment access outside business hours\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "99-deepfake-ceo-fraud--the-25-million-video-call",
      children: "9.9 Deepfake CEO Fraud — The $25 Million Video Call"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Overview:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target:"
        }), " Hong Kong-based multinational finance company"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Attackers:"
        }), " Sophisticated cybercrime group using AI-generated deepfakes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Loss:"
        }), " $25 million (HK$200 million)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Method:"
        }), " Multi-person deepfake video conference call"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Date:"
        }), " January 2024 (publicly reported February 2024)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Complete Story — The Most Sophisticated Social Engineering Attack Ever Recorded:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DEEPFAKE CEO FRAUD — THE $25M VIDEO CALL\n═══════════════════════════════════════════════════\n\nPHASE 1: OSINT & PREPARATION (WEEKS)\n────────────────────────────────────────────────\nAttackers identify a finance employee at a Hong Kong firm\nwho handles large international transfers.\n\nThrough LinkedIn and company website:\n  ■ Employee's name, title, photo\n  ■ Department's organizational structure\n  ■ UK-based CFO name and photo (public conference appearances)\n  ■ UK-based legal team member names and photos\n  ■ Colleague names and roles\n\nAttackers download public video footage of the CFO and legal team:\n  ■ YouTube conference talks (CFO)\n  ■ LinkedIn videos (legal team)\n  ■ Company town hall recordings\n  These provide voice samples and facial movement references.\n\nPHASE 2: DEEPFAKE CONSTRUCTION\n────────────────────────────────────────────────\nUsing AI voice cloning tools (ElevenLabs, open source alternatives):\n  ■ CFO's voice cloned from 30-minute conference presentation\n  ■ Legal team members' voices cloned from shorter samples\n\nUsing AI face-swapping/deepfake video tools:\n  ■ Real-time face swap software for video calls\n  ■ Each \"person\" on the call is AI-generated\n\nPHASE 3: THE SETUP\n────────────────────────────────────────────────\nAttackers craft a convincing email thread:\n  They compromise the UK-based CFO's email (or spoof it well enough).\n\nEmail \"from CFO\" to Hong Kong finance employee:\n\n  \"We're finalizing an acquisition and need to discuss confidential\n   fund movements. Please join a video call at [time].\n   The company's solicitors will also be present.\"\n\nPHASE 4: THE VIDEO CALL — EVERYONE IS FAKE\n────────────────────────────────────────────────\nEmployee joins the video call. On the call:\n  ■ \"CFO\" — deepfake video + cloned voice\n  ■ \"Legal Counsel A\" — deepfake video + cloned voice  \n  ■ \"Legal Counsel B\" — deepfake video + cloned voice\n  ■ ALL participants are AI-generated deepfakes\n\nThe \"CFO\" says: \"This acquisition is extremely time-sensitive.\nWe need to move $25 million to [bank account in Hong Kong]\nfor the deposit. Legal has prepared the documentation.\"\n\nThe \"Legal Counsel\" confirms: \"We've reviewed the contract.\nAll paperwork is in order. This is standard procedure for\nan acquisition of this size.\"\n\nThe deepfakes show realistic:\n  ■ Lip-sync with speech\n  ■ Head movements, eye contact\n  ■ Background office environments (likely AI-generated)\n  ■ Appropriate responses and hesitation\n\nThe employee notes that everyone looks slightly \"off\" but:\n  ■ The voices sound right\n  ■ The people look right\n  ■ They know confidential company information\n  ■ The request seems plausible\n\nPHASE 5: EXECUTION\n────────────────────────────────────────────────\nEmployee processes the transfer: $25 million USD\nto an account in Hong Kong (the attacker's mule account).\n\nPHASE 6: DETECTION\n────────────────────────────────────────────────\nSeveral days later, the employee mentions the call to a colleague.\nColleague: \"What acquisition? I haven't heard about any acquisition.\"\nEmployee: \"The one the CFO discussed on the video call...\"\nRealization: CFO never authorized any such call.\nBank contacted → funds already moved through multiple accounts.\n$25 million: LOST.\n\nPHASE 7: AFTERMATH\n────────────────────────────────────────────────\n■ Hong Kong police investigate\n■ FBI and international law enforcement involved\n■ Attacker: believed to be a sophisticated cybercrime ring\n■ Money: spread across multiple accounts within hours → \n  converted to cryptocurrency → effectively unrecoverable\n■ Company: very quiet about the incident (reputational damage)\n■ Only publicly known because a police statement was leaked\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deepfake Video Call Prevention Checklist:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DEEPFAKE VIDEO CALL PREVENTION\n═══════════════════════════════════════════════════\nBEFORE THE CALL:\n  □ Pre-schedule ALL financial authorization calls\n  └── Never accept unscheduled \"urgent\" financial calls\n  □ Use verified contact methods:\n  └── Call the CFO's KNOWN phone number (not the one in the email)\n  └── Confirm the call is legitimate before joining\n  □ Pre-share a meeting passphrase via secure channel (Signal/WhatsApp)\n\nDURING THE CALL:\n  □ Ask a question only the REAL person would know:\n  └── \"What did we discuss in our last 1:1 meeting?\"\n  └── \"What's the name of your college roommate?\" (pre-agreed)\n  └── \"What's the project codename from last quarter?\"\n  □ Ask participants to turn their head 90 degrees\n  └── Deepfakes often fail at extreme angles\n  □ Ask participants to wave their hand in front of their face\n  └── This breaks many real-time deepfake overlays\n  □ Use a different communication channel simultaneously:\n  └── Text the person on Signal: \"Are you really on this call?\"\n  □ Look for visual anomalies:\n  └── Unnatural blinking patterns (too much or no blinking)\n  └── Audio-visual sync issues\n  └── Unusual skin textures (smooth/blurry around jawline)\n\nAFTER THE CALL:\n  □ Confirm the request via a SEPARATE channel\n  └── In-person meeting\n  └── Phone call to a known number\n  └── Pre-established secure messaging\n  □ No single video call can authorize financial transfers\n  □ Implement the \"Two-Person Rule\" — two approvals required\n  □ Maintain a 24-hour cooling off period for all financial requests\n  └── \"If it's urgent, it's a scam\" — company policy\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-monitoring-tools--services",
      children: "11. Monitoring Tools & Services"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Monitors"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Have I Been Pwned"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Breach notification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email addresses in known breaches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Google Dark Web Report"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dark web monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email, SSN, phone found on dark web"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free (Google One)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Firefox Monitor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Breach notification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email addresses in breaches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dehashed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Breach search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search 10B+ breached records"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free/Paid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SpyCloud"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Credential monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stolen credentials, session tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Paid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "KrebsOnSecurity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threat intelligence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latest scams, breach news"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FraudWatch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Brand monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phishing sites targeting your brand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Paid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Google Alerts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom keywords (your name, handle)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SocialScan"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Social monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Social media account security score"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "F-Secure Identity Theft"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full monitoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Personal info, credit, social media"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Paid"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-password-manager-setup-guide",
      children: "12. Password Manager Setup Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-recommended-password-managers",
      children: "11.1 Recommended Password Managers"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Manager"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Platform"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Price"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Feature"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bitwarden"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES-256, open source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free/$10/yr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open source audit, self-host option"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1Password"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES-256, Secret Key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$36/yr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Travel Mode, Secret Key (extra layer)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Proton Pass"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-access encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free/$24/yr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrated with Proton ecosystem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "KeePassXC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AES-256, local only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Desktop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fully offline, file-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Apple iCloud Keychain"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End-to-end encrypted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apple only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native iOS/macOS integration"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Password Manager Security Comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bitwarden"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1Password"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Proton Pass"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "KeePassXC"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Open Source"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Third-Party Audit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-Knowledge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ (with Secret Key)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ (offline)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Self-Host Option"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ (file-based)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware Key Support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Breach Alerts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ (HIBP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ (Watchtower)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          })]
        })]
      })]
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
            children: "Enable FIDO2 hardware keys (YubiKey/Titan) on every supported account"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Google Advanced Protection Program, Apple Security Keys, and Twitter/Facebook 2FA with security keys; remove SMS 2FA everywhere"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use a password manager with unique 20+ char passwords per service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitwarden/1Password auto-fill prevents phishing; never reuse passwords across services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Set a carrier PIN and enable port freeze on all mobile accounts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Call your carrier today; remove SMS 2FA from banking, crypto exchanges, and email"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monitor account activity with automated email alerts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable login notifications on all platforms; review active sessions weekly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implement a personal incident response playbook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Know the first 15-minute steps: confirm compromise → secure accounts → contain → document"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use dedicated recovery email separate from daily email"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create a free Gmail/Outlook used ONLY for account recovery; never log in on any device"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Review and revoke third-party OAuth app access quarterly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Go to each platform's \"Connected Apps\" settings; remove all apps you don't actively use"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Account Takeover Taxonomy:"
        }), " 6 categories (credential, social engineering, session, MFA bypass, fixation, physical) with varying difficulty — credential-based attacks are most common (52%), SIM swapping is most devastating. Each category requires different defenses."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Social Engineering Deep Dive:"
        }), " 10+ attack techniques including phishing, spear phishing, vishing, SMiShing, pretexting, BEC/CEO fraud, deepfake voice/video, QR code phishing, and psychologial manipulation (Cialdini's 6 principles). Pretexting involves constructing a fictional scenario over multiple interactions — the most sophisticated form. BEC has caused $50+ billion in losses since 2013. Deepfake technology now enables real-time voice cloning and video call impersonation, with the Hong Kong $25M deepfake call being the most advanced known attack."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OSINT Reconnaissance:"
        }), " Attackers use LinkedIn, Facebook, Instagram, Twitter, GitHub, data breaches, and specialized tools (theHarvester, Sherlock, Maltego) to gather personal information. Everything you post publicly is ammunition. Self-defense means removing DOB, hometown, pet names, and using fictional security question answers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phishing Detection:"
        }), " Programmatic analysis of sender domain, reply-to, links (homograph detection, suspicious TLDs), keywords (verification, security alert, urgent), urgency pressure, attachments (executables, macros, archives), and SPF/DKIM/DMARC authentication results. Instagram-specific phishing patterns include fake login pages, verification scams, and giveaway fraud."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BEC/CEO Fraud Detection:"
        }), " Machine learning scoring engine analyzes sender domain consistency, financial request context, urgency levels, recipient role (finance/accounting targets), domain impersonation (typosquatting), and prior email relationships to detect business email compromise."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Credential Stuffing Prevention:"
        }), " Track login velocity per IP, unique username count per source, success rate, user-agent consistency, geographic anomalies, and IP reputation. 8-factor scoring system distinguishes automated stuffers from legitimate users."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Password Strength:"
        }), " Entropy-based calculation with crack time estimation — 14+ character passwords with 4 character types provide > 100-bit entropy. Password managers generate unique 20+ char passwords for every service. Reused passwords enable credential stuffing across services."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Session Security:"
        }), " Bind sessions to device fingerprints, detect impossible travel (2 locations too close in time), monitor user-agent changes, track new IPs/locations. Session token theft bypasses BOTH password and MFA — tokens are the new keys to your kingdom."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MFA Hierarchy:"
        }), " SMS < TOTP < Push Notification < FIDO2 Software < FIDO2 Hardware Key. SMS 2FA is vulnerable to SIM swap, SS7 interception, and phishing. TOTP is phishable via evilginx proxy attacks. FIDO2 hardware keys (YubiKey, Google Titan) are the ONLY phishing-resistant MFA — they cryptographically bind to the real domain."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SIM Swap:"
        }), " The most devastating personal attack — attacker social-engineers your mobile carrier to port your number to their SIM, intercepts SMS 2FA, drains crypto/bank accounts within minutes. Prevent with carrier PIN, port freeze, Google Voice number, and removing SMS 2FA entirely. The Michael Terpin case ($24M loss) highlights the insider threat vector."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Google Account Security:"
        }), " The single most important account — controls Gmail (password resets for everything), YouTube, Drive, Photos, Android, and Google Pay. Google Advanced Protection Program (APP) requires FIDO2 hardware keys and blocks phishing, SIM swap, and automated recovery. Recovery codes must be stored OFFLINE, not in Google Drive. Gmail filter hijacking and email forwarding are silent attack techniques."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Platform Forensics:"
        }), " 11+ platform forensic guides — Instagram (JSON data export with IP logs, device info, email changes, login activity), Google Takeout (signInId, oauthClientId, recoveryEmail), WhatsApp (Linked Devices, 2-Step PIN, cloud backup breach risks), Discord (token logger analysis, OAuth app audit, session IP/location tracking), TikTok (login history, device management, account change logs), Snapchat (limited data export), Telegram (cloud password audit, active session analysis), Signal (Registration Lock PIN — the only defense against SIM swap reassignment), Amazon (device list, payment methods, login history), GitHub/Microsoft (personal access tokens, SSH keys, OAuth app scopes, CI/CD pipeline risks), and Facebook/Meta (Where You're Logged In, third-party app access, Trusted Contacts)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Personal Defense Architecture:"
        }), " 6-layer model — password manager (layer 1), hardware key 2FA + TOTP (layer 2), session management with separate browser profiles (layer 3), dedicated email for account recovery (layer 4), OPSEC communication rules (layer 5), and automated monitoring (layer 6). Account Security Scanner scores each account across authentication, credentials, sessions, recovery, and ecosystem."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Incident Response Playbook:"
        }), " First 15 minutes are critical — confirm compromise (minute 0-2), secure what you can (minute 2-5), contain the attack (minute 5-10), document everything (minute 10-15). Platform-specific recovery URLs and processes for 15+ services. Post-recovery hardening checklist covers password, 2FA, sessions, apps, email forwarding/filters, monitoring, and legal. Evidence preservation is critical for law enforcement reporting."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Case Studies:"
        }), " 9 end-to-end attack stories covering every major technique — Twitter 2020 Bitcoin Scam (internal tool social engineering by 17-year-old, 130 accounts, $118K), Telegram OAuth Hijacking (evilginx proxy, password + SMS code stolen), SIM Swap Ring ($24M crypto loss, AT&T employee bribe), Google Account Takeover (credential stuffing + no recovery options = permanent data loss), Discord Token Logger (fake gaming tool stole Discord tokens, cascaded to 15+ accounts via trust exploitation), WhatsApp Social Engineering Hijack (\"I need the code\" scam using compromised friend accounts), TikTok Journalist Takeover (spear phishing + support social engineering for disinformation campaign), BEC $1.2M Wire Transfer (CEO email compromise during international flight, DMARC not enforced), and HK $25M Deepfake Video Call (AI-generated CFO + legal team on video call, every participant was a deepfake)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "What percentage of breaches involve a human element according to Verizon DBIR?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "52%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "68%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "82%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "95%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which MFA method is considered phishing-resistant?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMS 2FA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TOTP (Google Authenticator)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push notification (Duo)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIDO2 hardware key (YubiKey)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "D"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the primary defense against credential stuffing attacks?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Longer passwords"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Special characters in passwords"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique password for every service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monthly password changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In the Twitter 2020 Bitcoin scam, how did the attacker gain initial access?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phishing email to a Twitter employee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Brute-forcing employee passwords"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exploiting a Twitter API vulnerability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Social engineering Twitter's internal IT support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "D"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the most effective single protection against SIM swapping attacks?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using a complex password"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Setting a carrier account PIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Installing antivirus software"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using a VPN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which forensic data source from Instagram reveals the IP address of login attempts?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instagram Stories viewer list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instagram Direct Messages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instagram data download (JSON format)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instagram profile page"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is \"MFA fatigue\"?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Users tired of entering MFA codes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spamming push notifications until the user accepts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MFA server overload from too many requests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Battery drain from authentication apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How does a password manager prevent phishing?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It encrypts all internet traffic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It auto-fills passwords only on the exact correct domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It blocks all unknown websites"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It generates random usernames"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What does \"impossible travel\" detection look for?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logins from countries with no internet infrastructure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logins from two far-apart locations within a time too short for travel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logins using VPNs from sanctioned countries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logins during nighttime hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In SIM swap attacks, what happens after the attacker activates their SIM?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The victim's device is remotely wiped"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMS 2FA codes go to the attacker's phone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The victim's bank account is frozen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All of the above"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which Cialdini principle is most commonly exploited by attackers creating urgency?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reciprocity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scarcity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Social Proof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is pretexting in social engineering?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sending mass phishing emails"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creating a fictional scenario over multiple interactions to manipulate a target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using a fake login page to steal credentials"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Installing malware on a victim's computer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the single most important security setting for a Telegram account?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Setting a profile photo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enabling 2-Step Verification (Cloud Password)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using a username instead of phone number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disabling last seen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In the Hong Kong $25 million deepfake fraud, what made the attack exceptional?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The attacker used a single deepfake video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every participant on the video call was an AI-generated deepfake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The attack took 2 years to execute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The attacker was an inside employee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the golden rule of WhatsApp security?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use a strong password"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never share your 6-digit verification code with ANYONE for ANY reason"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only add contacts you know in person"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disable read receipts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How do attackers use email filters in a Gmail compromise?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To organize incoming emails by priority"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To automatically DELETE security notification emails so the victim doesn't see them"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To forward spam to the junk folder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To sort emails by sender"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is the primary defense against Discord token loggers?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enabling 2FA on Discord"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never running untrusted executable files claiming to be Discord tools"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using a VPN while using Discord"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changing your Discord username monthly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google Advanced Protection Program (APP) requires what to log in?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A strong password"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SMS 2FA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two physical FIDO2 hardware security keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A recovery email"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What is BEC (Business Email Compromise)?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A virus that infects business computers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Social engineering attack targeting finance employees to authorize fraudulent wire transfers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A vulnerability in Microsoft Exchange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A type of ransomware targeting enterprises"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In the \"I need the code\" WhatsApp scam, what is the attacker's method?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "They hack WhatsApp's servers directly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "They trigger a verification code to the victim, then ask them to share it by impersonating a friend"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "They use a brute force attack on WhatsApp passwords"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "They send malware via WhatsApp attachments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B"
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
        id: "review-questions",
        children: "Review Questions"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "List 5 types of account takeover attacks and rank them by prevalence."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Explain the difference between credential stuffing and password spraying."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "What is a SIM swap attack and why is SMS 2FA vulnerable to it?"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Describe the session hijacking attack vector — how does it bypass password and MFA?"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "List Cialdini's 6 principles of persuasion and give a social engineering example for each."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "What is pretexting and how does it differ from simple phishing?"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Explain the Google Advanced Protection Program — what does it require and what does it block?"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "What is BEC (Business Email Compromise) and what are the 5 main types?"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "How do deepfake video call attacks work and what are the key visual indicators of a deepfake?"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "What is the \"I need the code\" WhatsApp scam and why is it so effective?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "practical-exercises",
        children: "Practical Exercises"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Google Account Security Audit:"
            }), " Using the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "GoogleSecurityAuditor"
            }), " class from Section 6, audit your actual Google account security posture. Score each category and create a timeline (30/60/90 days) to fix every identified vulnerability."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Gmail Filter Hijacking Check:"
            }), " Manually review your Gmail settings:"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Settings → Filters and Blocked Addresses — are there any filters that auto-delete or forward emails?"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Settings → Forwarding and POP/IMAP — is forwarding enabled to an address you don't recognize?"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Settings → Accounts → Check Google Account permissions — any unknown third-party apps?"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Social Media Login Audit:"
            }), " Log into every social media account you own and check:"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Active sessions — are there sessions from unknown devices/locations?"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Third-party app access — revoke all apps you don't actively use"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Recovery email/phone — are they current and secure?"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "2FA status — is it enabled and using TOTP/hardware key (not SMS)?"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "OSINT Self-Defense:"
            }), " Search for yourself using the techniques from Section 2.4:"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Google your name + email — what's publicly available?"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Check haveibeenpwned.com — which of your accounts have been breached?"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Review your LinkedIn/Facebook/Instagram public visibility"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Remove all security question answers (pet names, schools, hometown) from public profiles"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Phishing Email Analysis:"
            }), " Forward a suspicious email you've received to a test account and analyze it using the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PhishingDetector"
            }), " class from Section 2.1. Score each factor (domain, links, keywords, urgency, attachments, SPF/DKIM/DMARC) and determine the overall risk level."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "SIM Swap Risk Assessment:"
            }), " Using the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SIMSwapProtectionAudit"
            }), " class from Section 5, evaluate your mobile carrier account security:"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Do you have a carrier PIN set? If not, call your carrier TODAY."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Does your carrier support port freeze? Enable it."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Is SMS your primary 2FA anywhere? Identify every service and change to TOTP."
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Discord Security Audit:"
            }), " If you use Discord:"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Check Settings → Authorized Apps — revoke all unknown apps"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Check Settings → Devices — remove unknown devices"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Enable 2FA (TOTP) — Settings → My Account → Enable Two-Factor Auth"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Review your account token locations and understand what apps can steal them"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Deepfake Family Protocol:"
            }), " Establish a family/business code word for identity verification:"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Choose a code word that is NOT guessable from social media"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "All family members memorize it"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Anyone calling asking for money or sensitive info MUST provide the code word"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Practice: stage a fake scenario where a family member \"tests\" the code word"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "application-problems",
        children: "Application Problems"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Write a personal incident response plan for a hypothetical Google account compromise. Include: notification sources, recovery steps in order, evidence collection methods, timeline (minutes/hours/days), and platform-specific recovery processes."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Audit your own account security using the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AccountSecurityScanner"
            }), " class from Section 7. Score all your major accounts (Google, Instagram, Twitter/X, Facebook, email, banking, GitHub, Discord, Telegram, Amazon) and create a prioritized plan to fix the lowest-scoring areas."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Given the following login data, identify which are likely credential stuffing attempts vs legitimate logins:"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "IP 185.234.72.18: 47 login attempts, 44 different usernames, 0 successes, all within 3 minutes, user-agent = \"python-requests/2.31.0\""
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "IP 103.234.18.5: 3 login attempts, 1 username, all with correct password but user had MFA, country = India (user is in USA)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "IP 192.168.1.50: 2 login attempts, 1 username, 1 success (correct password + MFA), user-agent = \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0\""
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "IP 45.33.32.156: 1 login attempt, 1 username, failure. user claims \"I forgot my password.\""
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "IP 10.0.0.1: 500 login attempts in 1 minute, 500 different usernames, all from a data center IP range. 0 successes."
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Create a BEC prevention playbook for a small business (50 employees) with a $500K annual revenue. Include: email authentication (DMARC/DKIM/SPF), dual approval process for wire transfers, employee training, vendor verification protocol, and incident response for when a BEC attack is suspected."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Analyze the Hong Kong $25M deepfake video call attack from Section 10.9 and design a \"deepfake video call verification protocol\" with at least 8 specific steps that would have prevented the attack."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "For the Twitter 2020 Bitcoin Scam (Section 10.1), create a post-incident security overhaul plan for Twitter addressing all 6 root causes. Include specific technical controls, process changes, and training requirements."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "challenge-problems",
        children: "Challenge Problems"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Build a Multi-Platform Security Dashboard:"
            }), " Create a TypeScript application that uses the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AccountSecurityScanner"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "GoogleSecurityAuditor"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "GmailSecurityAudit"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PhishingDetector"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CredentialStuffingDetector"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BECDetector"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "DiscordForensicEngine"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "GitHubSecurityAudit"
            }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TelegramSecurityAudit"
            }), " classes to produce a complete security posture report for a user across all their accounts."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Phishing Simulation Lab:"
            }), " Build a complete home lab for social media security testing:"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Set up GoPhish on a local VM"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Create realistic login page clones (Instagram, Gmail, Facebook)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Demonstrate credential harvesting to a consenting participant"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Show them the phishing indicators they missed"
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Then teach them to detect phishing using the ", (0,jsx_runtime.jsx)(_components.code, {
                children: "PhishingDetector"
              }), " class"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "SIM Swap Investigation:"
            }), " Research and document the latest SIM swap attack techniques by analyzing at least 5 real-world cases from the past 3 years (Terpin, investor ring, celebrity cases). Create a prevention checklist specific to cryptocurrency investors and high-net-worth individuals."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Deepfake Social Engineering Countermeasure:"
            }), " Research current deepfake detection technologies and build a TypeScript-based real-time deepfake detection tool that analyzes the following during a video call:"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Blinking frequency and naturalness"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Audio-video sync delay"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Skin texture analysis (smoothness around jawline)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Head movement at extreme angles"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Verbal response patterns (too fast/too slow)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Produce a \"Deepfake Risk Score\" for each participant on the call."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Full Account Recovery Kit:"
            }), " Build a complete personal account recovery kit (physical and digital) containing:"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Printed recovery codes for every platform"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Account creation dates and details (needed for Google recovery)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Trusted contacts list"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Code word for family"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Carrier PIN documentation"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Legal reporting template"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Document the complete kit creation process and test it with a friend."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Cross-Platform Forensics Case:"
            }), " Create a fictional account compromise scenario where the attacker takes over a victim's Google → Instagram → WhatsApp → Discord accounts. Write a complete forensic investigation report showing:"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Timeline of events with timestamps"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Evidence sources used at each step"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "IP addresses and geolocation tracking"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Recovery steps taken"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Root cause analysis"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Prevention recommendations"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Social Engineering Red Team Exercise:"
            }), " Design and execute (ethically and with consent) a social engineering test against a friend/family member who has agreed to participate:"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Stage 1: OSINT gathering (public info only)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Stage 2: Craft a pretexting scenario"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Stage 3: Execute the pretext"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Stage 4: Post-exercise debrief"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Stage 5: Create a personalized security improvement plan"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Document the full exercise and lessons learned."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File Statistics:"
        }), " This chapter contains 4,500+ lines covering the complete spectrum of account security — 21+ attack types, 9 full end-to-end real-world case studies (Twitter, Telegram, SIM swap, Google takeover, Discord token logger, WhatsApp social engineering, TikTok disinformation, BEC wire fraud, deepfake video call), 12+ platform-specific forensics guides (Instagram, Google, WhatsApp, Discord, TikTok, Snapchat, Telegram, Signal, Amazon, GitHub/Microsoft, Facebook/Meta), 10+ TypeScript security tools (phishing detector, credential stuffer detector, password strength calculator, session hijacking monitor, SIM swap assessor, Instagram forensics engine, Google security auditor, Gmail filter hijack detector, BEC detector, deepfake detector, Discord forensics engine, Telegram security auditor, GitHub security auditor, account security scanner, recovery checklist), OSINT self-defense, Cialdini psychology framework, social engineering countermeasures, personal defense architecture (6-layer model), IR playbook, and password manager comparison."]
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