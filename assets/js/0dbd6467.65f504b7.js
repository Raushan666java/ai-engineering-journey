"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[59358],{

/***/ 45202
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_web_development_13_security_md_0db_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-web-development-13-security-md-0db.json
const site_docs_courses_web_development_13_security_md_0db_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/web-development/13-security","title":"Chapter 13: Web Security","description":"Previous 14-typescript","source":"@site/docs/courses/web-development/13-security.md","sourceDirName":"courses/web-development","slug":"/web-development/13-security","permalink":"/ai-engineering-journey/web-development/13-security","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"id":"13-security","slug":"/web-development/13-security","title":"Chapter 13: Web Security","sidebar_label":"Chapter 13: Web Security","sidebar_position":13},"sidebar":"course-web-development","previous":{"title":"Chapter 12: Deployment and DevOps","permalink":"/ai-engineering-journey/web-development/12-deployment"},"next":{"title":"Chapter 14: TypeScript","permalink":"/ai-engineering-journey/web-development/14-typescript"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/web-development/13-security.md


const frontMatter = {
	id: '13-security',
	slug: '/web-development/13-security',
	title: 'Chapter 13: Web Security',
	sidebar_label: 'Chapter 13: Web Security',
	sidebar_position: 13
};
const contentTitle = 'Chapter 13: Web Security';

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
  "value": "13.1 OWASP Top 10 Overview",
  "id": "131-owasp-top-10-overview",
  "level": 2
}, {
  "value": "13.2 SQL Injection Prevention",
  "id": "132-sql-injection-prevention",
  "level": 2
}, {
  "value": "13.3 Cross-Site Scripting (XSS) Prevention",
  "id": "133-cross-site-scripting-xss-prevention",
  "level": 2
}, {
  "value": "13.4 CSRF Protection",
  "id": "134-csrf-protection",
  "level": 2
}, {
  "value": "13.5 Security Headers with Helmet",
  "id": "135-security-headers-with-helmet",
  "level": 2
}, {
  "value": "13.6 CORS Configuration",
  "id": "136-cors-configuration",
  "level": 2
}, {
  "value": "13.7 Rate Limiting",
  "id": "137-rate-limiting",
  "level": 2
}, {
  "value": "13.8 Input Validation",
  "id": "138-input-validation",
  "level": 2
}, {
  "value": "13.9 HTTPS and Secure Communication",
  "id": "139-https-and-secure-communication",
  "level": 2
}, {
  "value": "Security Logging and Monitoring",
  "id": "security-logging-and-monitoring",
  "level": 3
}, {
  "value": "Secure Session Configuration",
  "id": "secure-session-configuration",
  "level": 3
}, {
  "value": "Dependency Security and Supply Chain",
  "id": "dependency-security-and-supply-chain",
  "level": 3
}, {
  "value": "Environment-Specific Security",
  "id": "environment-specific-security",
  "level": 3
}, {
  "value": "13.10 Server-Side Request Forgery (SSRF) Prevention",
  "id": "1310-server-side-request-forgery-ssrf-prevention",
  "level": 2
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
  "value": "TypeScript: CSP Builder &amp; Input Sanitizer",
  "id": "typescript-csp-builder--input-sanitizer",
  "level": 3
}, {
  "value": "TypeScript Implementation: XSS Sanitizer, CSRF Token Generator, CSP Builder, SQL Injection Detector",
  "id": "typescript-implementation-xss-sanitizer-csrf-token-generator-csp-builder-sql-injection-detector",
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
  "value": "Application Projects",
  "id": "application-projects",
  "level": 3
}, {
  "value": "Challenge Project",
  "id": "challenge-project",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
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
        id: "chapter-13-web-security",
        children: "Chapter 13: Web Security"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/12-deployment",
          children: "12-deployment"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/web-development/14-typescript",
          children: "14-typescript"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Parameterized queries and ORMs prevent SQL injection by separating query structure from data."]
      }), "\n"]
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
        href: "../../assets/images/lessons/web-development/13-security/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/13-security/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/web-development/13-security/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/13-security/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/web-development/13-security/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/web-development/13-security/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " XSS is prevented by escaping output — use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "textContent"
        }), ", React's auto-escaping, and DOMPurify for sanitized HTML."]
      }), "\n"]
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
            children: "OWASP Top 10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The 10 most critical web application security risks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Know all 10 — they form the baseline for any security review or penetration test"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQL Injection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Injecting SQL through unsanitized user input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always use parameterized queries or ORMs — never concatenate user input into SQL strings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XSS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Injecting scripts through unsanitized user content"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "textContent"
            }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "innerHTML"
            }), ", libraries auto-escape, sanitize with DOMPurify when needed"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSRF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-site request forgery exploits authenticated sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use SameSite cookies (Strict), CSRF tokens, and check Origin/Referer headers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security Headers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSP, HSTS, CORS, X-Frame-Options protect against various attacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Helmet middleware to set security headers with sensible defaults"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rate Limiting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents brute-force and denial-of-service attacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply stricter limits on auth endpoints, use skipSuccessfulRequests for login rate limiting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input Validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zod schemas validate data shape, type, and constraints at every boundary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate on the server even if you validate on the client — never trust the client"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " CSRF protection uses SameSite cookies, CSRF tokens, and Origin/Referer header validation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    A[OWASP Top 10]\n    B[SQL Injection Prevention]\n    A --> B\n    C[XSS Prevention & Output Escaping]\n    B --> C\n    D[CSRF Protection]\n    C --> D\n    E[Security Headers with Helmet]\n    D --> E\n    F[CORS Configuration]\n    E --> F\n    G[Rate Limiting]\n    F --> G\n    H[Input Validation with Zod]\n    G --> H\n    I[SSRF Prevention]\n    H --> I\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify and prevent OWASP Top 10 vulnerabilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Protect against SQL injection, XSS, and CSRF attacks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement proper CORS, CSP, and security headers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Secure API endpoints with input validation and rate limiting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply secure authentication and session management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement defense-in-depth security strategies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "131-owasp-top-10-overview",
      children: "13.1 OWASP Top 10 Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Security headers (CSP, HSTS, X-Frame-Options) provide browser-level protection against common attacks."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/web-development/13-web-security.png",
        alt: "Web Security Mindmap"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Open Web Application Security Project (OWASP) publishes the Top 10 most critical web application security risks:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Broken Access Control"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cryptographic Failures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Injection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Insecure Design"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security Misconfiguration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vulnerable and Outdated Components"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identification and Authentication Failures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Software and Data Integrity Failures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security Logging and Monitoring Failures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server-Side Request Forgery (SSRF)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "132-sql-injection-prevention",
      children: "13.2 SQL Injection Prevention"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Rate limiting with tiers per endpoint prevents brute-force and abuse attacks."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// VULNERABLE: String concatenation\nconst query = `SELECT * FROM users WHERE email = '${userInput}'`;\n\n// SAFE: Parameterized query\nconst { rows } = await pool.query(\n  \"SELECT * FROM users WHERE email = $1\",\n  [userInput]\n);\n\n// SAFE: Prisma ORM (parameterizes by default)\nconst user = await prisma.user.findUnique({\n  where: { email: userInput },\n});\n\n// SAFE: Zod input validation\nconst emailSchema = z.string().email();\nconst validatedEmail = emailSchema.parse(userInput);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "133-cross-site-scripting-xss-prevention",
      children: "13.3 Cross-Site Scripting (XSS) Prevention"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Input validation at every boundary ensures data integrity and prevents injection attacks."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// VULNERABLE: Direct HTML insertion\nelement.innerHTML = userComment; // <script>alert('xss')</script>\n\n// SAFE: Text content (auto-escaped)\nelement.textContent = userComment;\n\n// SAFE: React auto-escapes by default\nfunction Comment({ text }: { text: string }) {\n  return <p>{text}</p>; // Safe - React escapes by default\n}\n\n// DANGEROUS: dangerouslySetInnerHTML (avoid unless sanitized)\nfunction SafeComment({ html }: { html: string }) {\n  const sanitized = DOMPurify.sanitize(html);\n  return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;\n}\n\n// Server-side: sanitize with DOMPurify\nimport createDOMPurify from \"dompurify\";\nimport { JSDOM } from \"jsdom\";\nconst window = new JSDOM(\"\").window;\nconst purify = createDOMPurify(window as any);\n\nconst clean = purify.sanitize(userInput);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "134-csrf-protection",
      children: "13.4 CSRF Protection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " SSRF prevention blocks requests to internal IP ranges and cloud metadata endpoints."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import csrf from \"csrf\";\n\nconst tokens = new csrf();\n\n// Generate token for forms\napp.get(\"/api/form\", (req, res) => {\n  const secret = tokens.secretSync();\n  req.session.csrfSecret = secret;\n  const token = tokens.create(secret);\n  res.json({ csrfToken: token });\n});\n\n// Validate token\napp.post(\"/api/data\", (req, res) => {\n  const { _csrf } = req.body;\n  if (!tokens.verify(req.session.csrfSecret, _csrf)) {\n    return res.status(403).json({ message: \"Invalid CSRF token\" });\n  }\n  // Process request...\n});\n\n// For SPA: SameSite cookie attribute (modern browsers)\napp.use(\n  session({\n    cookie: {\n      sameSite: \"strict\", // Prevents CSRF for cross-site requests\n      httpOnly: true,\n      secure: true,\n    },\n  })\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "135-security-headers-with-helmet",
      children: "13.5 Security Headers with Helmet"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import helmet from \"helmet\";\n\napp.use(\n  helmet({\n    contentSecurityPolicy: {\n      directives: {\n        defaultSrc: [\"'self'\"],\n        scriptSrc: [\"'self'\", \"https://trusted-cdn.com\"],\n        styleSrc: [\"'self'\", \"'unsafe-inline'\"],\n        imgSrc: [\"'self'\", \"https://images.example.com\"],\n        connectSrc: [\"'self'\", \"https://api.example.com\"],\n        fontSrc: [\"'self'\", \"https://fonts.googleapis.com\"],\n        objectSrc: [\"'none'\"],\n        frameAncestors: [\"'none'\"],\n      },\n    },\n    hsts: {\n      maxAge: 31536000,\n      includeSubDomains: true,\n      preload: true,\n    },\n    referrerPolicy: { policy: \"strict-origin-when-cross-origin\" },\n  })\n);\n\n// Resulting headers:\n// Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted-cdn.com\n// Strict-Transport-Security: max-age=31536000; includeSubDomains; preload\n// X-Content-Type-Options: nosniff\n// X-Frame-Options: DENY\n// Referrer-Policy: strict-origin-when-cross-origin\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "136-cors-configuration",
      children: "13.6 CORS Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import cors from \"cors\";\n\nconst allowedOrigins = [\n  \"https://example.com\",\n  \"https://admin.example.com\",\n];\n\napp.use(\n  cors({\n    origin: (origin, callback) => {\n      if (!origin || allowedOrigins.includes(origin)) {\n        callback(null, true);\n      } else {\n        callback(new Error(\"Not allowed by CORS\"));\n      }\n    },\n    methods: [\"GET\", \"POST\", \"PUT\", \"DELETE\", \"PATCH\"],\n    allowedHeaders: [\"Content-Type\", \"Authorization\"],\n    exposedHeaders: [\"X-Total-Count\"],\n    credentials: true,\n    maxAge: 86400, // Preflight cache for 24 hours\n  })\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "137-rate-limiting",
      children: "13.7 Rate Limiting"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import rateLimit from \"express-rate-limit\";\n\n// Global limiter\nconst globalLimiter = rateLimit({\n  windowMs: 15 * 60 * 1000, // 15 minutes\n  max: 100,\n  standardHeaders: true,\n  legacyHeaders: false,\n  message: { error: \"Too many requests, please try again later\" },\n});\napp.use(globalLimiter);\n\n// Auth endpoint - stricter limits\nconst authLimiter = rateLimit({\n  windowMs: 15 * 60 * 1000,\n  max: 5,\n  skipSuccessfulRequests: true, // Only count failures\n  message: { error: \"Too many login attempts\" },\n});\napp.use(\"/api/auth/login\", authLimiter);\n\n// API endpoint - per-user rate limiting\nconst apiLimiter = rateLimit({\n  windowMs: 60 * 1000,\n  max: 60,\n  keyGenerator: (req) => req.ip,\n  handler: (req, res) => {\n    res.status(429).json({\n      error: \"Rate limit exceeded\",\n      retryAfter: Math.ceil(req.rateLimit.resetTime / 1000),\n    });\n  },\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "138-input-validation",
      children: "13.8 Input Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { z } from \"zod\";\n\nconst userSchema = z.object({\n  email: z.string().email(),\n  password: z\n    .string()\n    .min(8)\n    .max(100)\n    .regex(/[A-Z]/, \"Must contain uppercase letter\")\n    .regex(/[a-z]/, \"Must contain lowercase letter\")\n    .regex(/[0-9]/, \"Must contain number\"),\n  name: z.string().min(1).max(100).trim(),\n  age: z.number().int().positive().max(150).optional(),\n  website: z.string().url().optional(),\n  role: z.enum([\"USER\", \"ADMIN\"]).default(\"USER\"),\n});\n\n// Sanitization helper\nfunction sanitize(input: string): string {\n  return input\n    .replace(/<script\\b[^<]*(?:(?!<\\/script>)<[^<]*)*<\\/script>/gi, \"\")\n    .trim();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "139-https-and-secure-communication",
      children: "13.9 HTTPS and Secure Communication"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enforcing HTTPS ensures data encryption between client and server."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import express from \"express\";\nimport fs from \"fs\";\nimport https from \"https\";\nimport helmet from \"helmet\";\n\nconst app = express();\napp.use(helmet());\n\n// Redirect HTTP to HTTPS in production\nif (process.env.NODE_ENV === \"production\") {\n  app.use((req, res, next) => {\n    if (!req.secure && req.headers[\"x-forwarded-proto\"] !== \"https\") {\n      return res.redirect(301, `https://${req.headers.host}${req.url}`);\n    }\n    next();\n  });\n}\n\n// HTTPS server (terminate TLS at your reverse proxy in production)\nconst options = {\n  key: fs.readFileSync(\"/etc/ssl/private/key.pem\"),\n  cert: fs.readFileSync(\"/etc/ssl/certs/cert.pem\"),\n};\n\nhttps.createServer(options, app).listen(443);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "security-logging-and-monitoring",
      children: "Security Logging and Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import pino from \"pino\";\n\nconst auditLogger = pino({\n  name: \"audit\",\n  level: \"info\",\n  redact: [\"req.headers.authorization\", \"req.body.password\"],\n});\n\n// Audit log middleware for sensitive operations\nfunction auditLog(action: string) {\n  return (req: Request, res: Response, next: NextFunction) => {\n    const originalJson = res.json.bind(res);\n    res.json = function (body: any) {\n      auditLogger.info({\n        action,\n        userId: (req as any).user?.id,\n        ip: req.ip,\n        userAgent: req.headers[\"user-agent\"],\n        timestamp: new Date().toISOString(),\n        status: res.statusCode,\n      });\n      return originalJson(body);\n    };\n    next();\n  };\n}\n\n// Usage on sensitive routes\nrouter.delete(\"/api/users/:id\", authenticate, auditLog(\"USER_DELETE\"), deleteUser);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "secure-session-configuration",
      children: "Secure Session Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import session from \"express-session\";\nimport RedisStore from \"connect-redis\";\nimport { createClient } from \"redis\";\n\nconst redisClient = createClient({ url: process.env.REDIS_URL });\nredisClient.connect().catch(console.error);\n\napp.use(\n  session({\n    store: new RedisStore({ client: redisClient }),\n    secret: process.env.SESSION_SECRET!,\n    name: \"__Secure-session\", // __Secure- prefix requires HTTPS\n    resave: false,\n    saveUninitialized: false,\n    cookie: {\n      httpOnly: true,      // Prevents JavaScript access\n      secure: true,        // HTTPS only\n      sameSite: \"strict\",  // Prevents CSRF\n      maxAge: 24 * 60 * 60 * 1000, // 24 hours\n      path: \"/\",\n    },\n    rolling: true, // Reset expiry on each request\n  })\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dependency-security-and-supply-chain",
      children: "Dependency Security and Supply Chain"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vulnerable dependencies are a common attack vector (OWASP #6)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Audit dependencies\nnpm audit          # Check known vulnerabilities\nnpm audit fix      # Auto-fix patch-level vulnerabilities\nnpm audit --audit-level=high  # Only report high/critical\n\n# Check for malicious packages\nnpx npm audit --registry=https://registry.npmjs.org\n\n# Lockfile integrity\n# Use \"integrity\" field in package-lock.json to verify package contents\n# CI should fail if lockfile changes unexpectedly\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .github/workflows/dependency-security.yml\nname: Dependency Security Check\non: [pull_request]\njobs:\n  audit:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm audit --audit-level=high\n      - run: npx socket-cli scan\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Safe dependency patterns\n// 1. Pin exact versions in production\n// \"express\": \"4.21.0\" not \"express\": \"^4.21.0\"\n\n// 2. Use lockfile\n// Commit package-lock.json and verify CI uses npm ci\n\n// 3. Minimize dependencies\nimport defaultImport from \"lodash\"; // BAD — imports entire library (500KB+)\nimport debounce from \"lodash/debounce\"; // GOOD — imports only what's needed\n\n// 4. Validate package provenance with npm attestations\nnpm publish --provenance\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "environment-specific-security",
      children: "Environment-Specific Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Security configuration per environment\ninterface SecurityConfig {\n  corsOrigins: string[];\n  rateLimits: { windowMs: number; max: number };\n  cookieSecure: boolean;\n  hstsMaxAge: number;\n}\n\nconst securityConfigs: Record<string, SecurityConfig> = {\n  development: {\n    corsOrigins: [\"http://localhost:3000\"],\n    rateLimits: { windowMs: 15 * 60 * 1000, max: 1000 },\n    cookieSecure: false,\n    hstsMaxAge: 0,\n  },\n  production: {\n    corsOrigins: [\"https://example.com\", \"https://admin.example.com\"],\n    rateLimits: { windowMs: 15 * 60 * 1000, max: 100 },\n    cookieSecure: true,\n    hstsMaxAge: 31536000,\n  },\n};\n\nfunction getSecurityConfig(env: string): SecurityConfig {\n  return securityConfigs[env] ?? securityConfigs.development;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1310-server-side-request-forgery-ssrf-prevention",
      children: "13.10 Server-Side Request Forgery (SSRF) Prevention"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { createHash } from \"crypto\";\n\n// SSRF protection middleware\nfunction preventSSRF(targetUrl: string): boolean {\n  const parsed = new URL(targetUrl);\n\n  // Block internal addresses\n  const blockedHosts = [\n    \"localhost\",\n    \"127.0.0.1\",\n    \"0.0.0.0\",\n    \"::1\",\n    \"169.254.169.254\", // AWS metadata\n  ];\n\n  if (blockedHosts.includes(parsed.hostname)) return false;\n  if (parsed.hostname.startsWith(\"10.\")) return false;\n  if (parsed.hostname.startsWith(\"192.168.\")) return false;\n  if (parsed.hostname.startsWith(\"172.\")) {\n    const second = parseInt(parsed.hostname.split(\".\")[1]);\n    if (second >= 16 && second <= 31) return false;\n  }\n\n  // Resolve and check IP\n  // In practice, resolve DNS and check against private ranges\n  return true;\n}\n\n// Safe fetch wrapper\nasync function safeFetch(url: string) {\n  if (!preventSSRF(url)) {\n    throw new Error(\"URL not allowed\");\n  }\n  const response = await fetch(url, {\n    headers: { \"User-Agent\": \"TaskFlow-Secure/1.0\" },\n    signal: AbortSignal.timeout(5000),\n  });\n  return response;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\nRun ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npx zap-full-scan.py -t https://your-site.com"
        }), " for an automated OWASP ZAP security scan that catches many common vulnerabilities before production."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!WARNING]\nClient-side validation is for UX only — it provides zero security. An attacker can bypass browser validation trivially. Always validate on the server."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!REMEMBER]\nHelmet is a security headers collection, not a comprehensive security solution. It sets 15+ HTTP headers with sensible defaults but does not prevent SQL injection, XSS from unsafe code, or authentication flaws."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XSS vs CSRF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Injects scripts via untrusted content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tricks browser into making authenticated requests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "textContent"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "innerHTML"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe — escapes HTML entities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dangerous — interprets HTML including scripts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "helmet()"
            }), " vs manual headers"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15+ headers with sensible defaults"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual control for specific header values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["CORS ", (0,jsx_runtime.jsx)(_components.code, {
              children: "origin"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "credentials"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controls which origins can access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controls whether cookies/auth headers are sent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Zod ", (0,jsx_runtime.jsx)(_components.code, {
              children: "parse()"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "safeParse()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Throws on validation failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns result object, no throw"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OWASP Top 10 (2021)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broken Access Control, Crypto Failures, Injection, Insecure Design, Misconfig, Vulnerable Components, Auth Failures, Integrity Failures, Logging Failures, SSRF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security Headers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Content-Security-Policy"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Strict-Transport-Security"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "X-Content-Type-Options"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "X-Frame-Options"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Referrer-Policy"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CORS Headers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Access-Control-Allow-Origin"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-Methods"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-Headers"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-Credentials"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-Max-Age"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Expose-Headers"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rate Limit Tiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global (100/15min), Auth (5/15min), API (60/min)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSRF Blocklist"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "localhost"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "127.0.0.1"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "169.254.169.254"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "10.x"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "192.168.x"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "172.16-31.x"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E-commerce"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSP + Helmet + rate limiting on checkout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents card scraping and brute force"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Social Media"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DOMPurify + CSP for user content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe rendering of user-generated HTML"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Banking App"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSRF tokens + SameSite Strict + short sessions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Protection against forged transfers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Public API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rate limiting + CORS + input validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Abuse prevention and data integrity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Admin Dashboard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RBAC + IP allowlisting + audit logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access control and accountability"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test your understanding with these quick questions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1. What is the only reliable defense against SQL injection?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Input sanitization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Parameterized queries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) WAF (Web Application Firewall)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Input length validation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "B) Parameterized queries (prepared statements) separate SQL code from data, making injection impossible. All other approaches can be bypassed."
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2. How does a Content Security Policy (CSP) prevent XSS?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It encrypts all page content"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) It restricts which sources scripts, styles, and other resources can be loaded from"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It validates user input"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It escapes HTML output"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "B) CSP allows the server to specify which origins are trusted for loading scripts, styles, images, fonts, and other resources. The browser blocks any resource from untrusted origins."
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q3. What is the purpose of the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SameSite"
        }), " cookie attribute?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) To encrypt cookies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) To prevent cookies from being sent with cross-site requests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) To set cookie expiration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) To restrict cookies to HTTPS only"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["B) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SameSite=Strict"
            }), " prevents the browser from sending the cookie with cross-site requests, which blocks CSRF attacks that trick users into submitting requests from another site."]
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4. Why should rate limiting be stricter on auth endpoints?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Auth endpoints are faster"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Login attempts are a common brute-force attack vector"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Auth endpoints use more CPU"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Users expect slower login"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "B) Login endpoints are targeted by brute-force and credential-stuffing attacks. Stricter rate limits (e.g., 5 attempts per 15 minutes) make these attacks impractical."
          })
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-csp-builder--input-sanitizer",
      children: "TypeScript: CSP Builder & Input Sanitizer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class CSPBuilder {\n  private directives: Record<string, string[]> = {};\n\n  add(directive: string, ...sources: string[]): this {\n    this.directives[directive] = sources;\n    return this;\n  }\n  build(): string {\n    return Object.entries(this.directives)\n      .map(([k, v]) => `${k} ${v.join(\" \")}`).join(\"; \");\n  }\n  static strict(): string {\n    return new CSPBuilder()\n      .add(\"default-src\", \"'self'\")\n      .add(\"script-src\", \"'self'\", \"'unsafe-inline'\", \"'strict-dynamic'\")\n      .add(\"style-src\", \"'self'\", \"'unsafe-inline'\")\n      .add(\"img-src\", \"'self'\", \"data:\", \"https:\")\n      .add(\"connect-src\", \"'self'\")\n      .add(\"font-src\", \"'self'\")\n      .add(\"frame-ancestors\", \"'none'\")\n      .build();\n  }\n}\n\nclass InputSanitizer {\n  static escapeHTML(str: string): string {\n    const map: Record<string, string> = { \"&\": \"&amp;\", \"<\": \"&lt;\", \">\": \"&gt;\", '\"': \"&quot;\", \"'\": \"&#x27;\" };\n    return str.replace(/[&<>\"']/g, c => map[c]);\n  }\n  static escapeShell(str: string): string {\n    return str.replace(/[;&|`$(){}[\\]!#~*?\\\\<>]/g, \"\");\n  }\n  static sanitizeSQL(str: string): string {\n    return str.replace(/[';\\\\--]/g, \"\");\n  }\n}\n\nclass RateLimiter {\n  private hits = new Map<string, number[]>();\n  check(key: string, max: number, windowMs: number): boolean {\n    const now = Date.now();\n    const timestamps = (this.hits.get(key) || []).filter(t => now - t < windowMs);\n    timestamps.push(now);\n    this.hits.set(key, timestamps);\n    return timestamps.length <= max;\n  }\n}\n\nconsole.log(\"CSP:\", CSPBuilder.strict());\nconsole.log(\"Escaped:\", InputSanitizer.escapeHTML(\"<script>alert('xss')</script>\"));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-xss-sanitizer-csrf-token-generator-csp-builder-sql-injection-detector",
      children: "TypeScript Implementation: XSS Sanitizer, CSRF Token Generator, CSP Builder, SQL Injection Detector"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class XSSSanitizer {\n    static escapeHTML(input: string): string {\n        const map: Record<string, string> = {\n            \"&\": \"&amp;\", \"<\": \"&lt;\", \">\": \"&gt;\",\n            '\"': \"&quot;\", \"'\": \"&#x27;\", \"/\": \"&#x2F;\"\n        };\n        return input.replace(/[&<>\"'/]/g, ch => map[ch] || ch);\n    }\n\n    static sanitizeUrl(url: string): string {\n        const blocked = [\"javascript:\", \"data:\", \"vbscript:\", \"file:\"];\n        const lower = url.toLowerCase().trim();\n        if (blocked.some(b => lower.startsWith(b))) return \"#blocked\";\n        return url;\n    }\n\n    static sanitizeHTML(input: string, allowedTags: string[] = [\"b\", \"i\", \"em\", \"strong\", \"a\", \"code\", \"pre\"]): string {\n        const tagPattern = /<\\/?([a-zA-Z0-9]+)([^>]*)>/g;\n        return input.replace(tagPattern, (match, tag, attrs) => {\n            if (!allowedTags.includes(tag.toLowerCase())) {\n                return XSSSanitizer.escapeHTML(match);\n            }\n            if (tag.startsWith(\"/\")) return `</${tag}>`;\n            const safeAttrs = attrs.replace(/\\s*on\\w+\\s*=\\s*[\"'][^\"']*[\"']/gi, \"\");\n            const hrefMatch = safeAttrs.match(/\\s*href\\s*=\\s*[\"']([^\"']*)[\"']/i);\n            if (hrefMatch) {\n                const sanitizedHref = XSSSanitizer.sanitizeUrl(hrefMatch[1]);\n                return `<${tag} href=\"${sanitizedHref}\"${safeAttrs.replace(/href\\s*=\\s*[\"'][^\"']*[\"']/i, \"\")}>`;\n            }\n            return `<${tag}${safeAttrs}>`;\n        });\n    }\n\n    static stripTags(input: string): string {\n        return input.replace(/<[^>]*>/g, \"\");\n    }\n\n    static detectXSS(input: string): { hasXSS: boolean; patterns: string[] } {\n        const patterns = [\n            /<script[^>]*>/i, /javascript\\s*:/i, /on\\w+\\s*=/i,\n            /<iframe[^>]*>/i, /<embed[^>]*>/i, /<object[^>]*>/i,\n            /alert\\s*\\(/i, /eval\\s*\\(/i, /document\\.cookie/i,\n            /String\\.fromCharCode/i, /<svg[^>]*>/i,\n        ];\n        const found = patterns.filter(p => p.test(input)).map(p => p.source);\n        return { hasXSS: found.length > 0, patterns: found };\n    }\n}\n\nclass CSRFTokenGenerator {\n    static generate(length: number = 32): string {\n        const chars = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\";\n        let token = \"\";\n        for (let i = 0; i < length; i++) token += chars[Math.floor(Math.random() * chars.length)];\n        return token;\n    }\n\n    static validate(token: string, storedToken: string): boolean {\n        if (!token || !storedToken) return false;\n        if (token.length !== storedToken.length) return false;\n        let diff = 0;\n        for (let i = 0; i < token.length; i++) diff |= token.charCodeAt(i) ^ storedToken.charCodeAt(i);\n        return diff === 0;\n    }\n\n    static doubleSubmitCookie(token: string, cookieValue: string): boolean {\n        return this.validate(token, cookieValue);\n    }\n}\n\nclass CSPBuilder {\n    static strict(): string {\n        return `default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'`;\n    }\n\n    static build(directives: Record<string, string[]>): string {\n        return Object.entries(directives)\n            .map(([key, values]) => `${key} ${values.join(\" \")}`)\n            .join(\"; \");\n    }\n\n    static reportOnly(directives: Record<string, string[]>, reportUri: string): string {\n        const csp = this.build(directives);\n        return `${csp}; report-uri ${reportUri}`;\n    }\n}\n\nclass SQLInjectionDetector {\n    static detect(input: string): { hasInjection: boolean; risk: \"none\" | \"low\" | \"medium\" | \"high\"; patterns: string[] } {\n        const patterns: { pattern: RegExp; risk: \"low\" | \"medium\" | \"high\" }[] = [\n            { pattern: /('|--|;)/, risk: \"low\" },\n            { pattern: /(OR|AND)\\s+['\"]?\\w+['\"]?\\s*=\\s*['\"]?\\w+['\"]?/i, risk: \"medium\" },\n            { pattern: /(OR|AND)\\s+\\d+\\s*=\\s*\\d+/i, risk: \"high\" },\n            { pattern: /UNION\\s+(ALL\\s+)?SELECT/i, risk: \"high\" },\n            { pattern: /DROP\\s+TABLE/i, risk: \"high\" },\n            { pattern: /DELETE\\s+FROM/i, risk: \"high\" },\n            { pattern: /INSERT\\s+INTO/i, risk: \"high\" },\n            { pattern: /EXEC\\s*\\(/i, risk: \"high\" },\n            { pattern: /xp_cmdshell/i, risk: \"high\" },\n            { pattern: /LOAD_FILE\\s*\\(/i, risk: \"high\" },\n            { pattern: /INFORMATION_SCHEMA/i, risk: \"medium\" },\n            { pattern: /WAITFOR\\s+DELAY/i, risk: \"high\" },\n            { pattern: /BENCHMARK\\s*\\(/i, risk: \"high\" },\n            { pattern: /SLEEP\\s*\\(/i, risk: \"high\" },\n        ];\n\n        const found: { pattern: RegExp; risk: \"low\" | \"medium\" | \"high\" }[] = [];\n        for (const p of patterns) {\n            if (p.pattern.test(input)) found.push(p);\n        }\n\n        const maxRisk = found.length === 0 ? \"none\" :\n            found.some(f => f.risk === \"high\") ? \"high\" :\n            found.some(f => f.risk === \"medium\") ? \"medium\" : \"low\";\n\n        return {\n            hasInjection: found.length > 0,\n            risk: maxRisk as \"none\" | \"low\" | \"medium\" | \"high\",\n            patterns: found.map(f => f.pattern.source)\n        };\n    }\n}\n\n// Demo\nconst malicious = \"<script>alert('xss')</script><img src=x onerror=alert(1)>\";\nconsole.log(\"Escaped:\", XSSSanitizer.escapeHTML(malicious));\nconsole.log(\"Sanitized:\", XSSSanitizer.sanitizeHTML(malicious));\nconsole.log(\"XSS detect:\", XSSSanitizer.detectXSS(malicious));\n\nconst token = CSRFTokenGenerator.generate();\nconsole.log(\"CSRF token:\", token);\nconsole.log(\"CSRF validate:\", CSRFTokenGenerator.validate(token, token));\n\nconsole.log(\"CSP strict:\", CSPBuilder.strict());\nconsole.log(\"SQLi detect ' OR 1=1 --:\", SQLInjectionDetector.detect(\"' OR 1=1 --\"));\nconsole.log(\"SQLi safe input:\", SQLInjectionDetector.detect(\"hello world\"));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// security\n// fullstack-frontend-backend implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'security', data: { topic: 'fullstack-frontend-backend' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web security requires defense in depth: parameterized queries prevent SQL injection, output escaping prevents XSS, CSRF tokens and SameSite cookies protect cross-site requests, CSP headers restrict resource origins, rate limiting prevents abuse, and input validation ensures data integrity at every layer."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does a Content Security Policy prevent XSS attacks?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is parameterized query the only reliable defense against SQL injection?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between CSRF and XSS?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-projects",
      children: "Application Projects"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Add CSRF protection to an existing REST API"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a Content Security Policy for a React SPA"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Add rate limiting with different tiers for authenticated vs anonymous users"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement an audit logging system that records all admin actions (user deletion, role changes, configuration updates) with IP, user agent, and timestamp."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build a secure session configuration using Redis storage with httpOnly, secure, and sameSite flags properly configured."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create an environment-specific security configuration that applies strict CSP headers, HSTS, and rate limits only in production, with relaxed settings for development."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Implement a dependency security audit pipeline that runs ", (0,jsx_runtime.jsx)(_components.code, {
            children: "npm audit"
          }), " on every PR and blocks merging if any high-severity vulnerabilities are found without an approved exception."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-project",
      children: "Challenge Project"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Perform a security audit of a web application covering OWASP Top 10, using automated scanners (ZAP) and manual testing. Document findings, implement fixes, and verify with a second scan."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Defense in depth"
        }), " — never rely on a single security control. Combine CSP, CORS, rate limiting, input validation, and authentication together."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate server-side always"
        }), " — client validation is UX only. Every API endpoint must re-validate inputs regardless of frontend checks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use Helmet for baseline security"
        }), " — it sets 15+ security headers with sensible defaults in a single middleware call."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rate limit by endpoint sensitivity"
        }), " — auth endpoints get strict limits (5/15min), public API gets moderate limits, internal endpoints get generous limits."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Log security events"
        }), " — failed logins, unauthorized access attempts, and permission denials must be logged with enough context for investigation."]
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