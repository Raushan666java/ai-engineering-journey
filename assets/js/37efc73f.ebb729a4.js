"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[23213],{

/***/ 37832
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_26_jwt_oauth_2_md_37e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-26-jwt-oauth-2-md-37e.json
const site_docs_courses_java_26_jwt_oauth_2_md_37e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/26-jwt-oauth2","title":"JWT, OAuth2 & OIDC","description":"Previous Method Security, CORS & CSRF","source":"@site/docs/courses/java/26-jwt-oauth2.md","sourceDirName":"courses/java","slug":"/java/26-jwt-oauth2","permalink":"/ai-engineering-journey/java/26-jwt-oauth2","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":26,"frontMatter":{"id":"26-jwt-oauth2","slug":"/java/26-jwt-oauth2","title":"JWT, OAuth2 & OIDC","sidebar_label":"JWT, OAuth2 & OIDC","sidebar_position":26},"sidebar":"coursesSidebar","previous":{"title":"Authentication & Authorization","permalink":"/ai-engineering-journey/java/25-auth-authz"},"next":{"title":"Method Security, CORS & CSRF","permalink":"/ai-engineering-journey/java/27-method-cors-csrf"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/26-jwt-oauth2.md


const frontMatter = {
	id: '26-jwt-oauth2',
	slug: '/java/26-jwt-oauth2',
	title: 'JWT, OAuth2 & OIDC',
	sidebar_label: 'JWT, OAuth2 & OIDC',
	sidebar_position: 26
};
const contentTitle = 'JWT, OAuth2 & OIDC';

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
  "value": "JWT — JSON Web Token",
  "id": "jwt--json-web-token",
  "level": 2
}, {
  "value": "JWT Structure",
  "id": "jwt-structure",
  "level": 3
}, {
  "value": "JWS vs JWE",
  "id": "jws-vs-jwe",
  "level": 3
}, {
  "value": "Nimbus JOSE + JWT",
  "id": "nimbus-jose--jwt",
  "level": 3
}, {
  "value": "jjwt Library",
  "id": "jjwt-library",
  "level": 3
}, {
  "value": "Token Creation with jjwt",
  "id": "token-creation-with-jjwt",
  "level": 3
}, {
  "value": "Token Validation with jjwt",
  "id": "token-validation-with-jjwt",
  "level": 3
}, {
  "value": "Exception Handling",
  "id": "exception-handling",
  "level": 3
}, {
  "value": "Refresh Tokens",
  "id": "refresh-tokens",
  "level": 3
}, {
  "value": "Token Revocation Strategies",
  "id": "token-revocation-strategies",
  "level": 3
}, {
  "value": "Token Service — Complete",
  "id": "token-service--complete",
  "level": 3
}, {
  "value": "OAuth2 Flows",
  "id": "oauth2-flows",
  "level": 2
}, {
  "value": "Terminology",
  "id": "terminology",
  "level": 3
}, {
  "value": "Authorization Code + PKCE",
  "id": "authorization-code--pkce",
  "level": 3
}, {
  "value": "Client Credentials Flow",
  "id": "client-credentials-flow",
  "level": 3
}, {
  "value": "Refresh Token Flow",
  "id": "refresh-token-flow",
  "level": 3
}, {
  "value": "Resource Owner Password Credentials (Deprecated)",
  "id": "resource-owner-password-credentials-deprecated",
  "level": 3
}, {
  "value": "Authorization Code (Server-Side Web Apps)",
  "id": "authorization-code-server-side-web-apps",
  "level": 3
}, {
  "value": "OAuth2 Client",
  "id": "oauth2-client",
  "level": 2
}, {
  "value": "Dependencies",
  "id": "dependencies",
  "level": 3
}, {
  "value": "Registration Properties",
  "id": "registration-properties",
  "level": 3
}, {
  "value": "Security Configuration",
  "id": "security-configuration",
  "level": 3
}, {
  "value": "OAuth2AuthorizedClientManager",
  "id": "oauth2authorizedclientmanager",
  "level": 3
}, {
  "value": "Making API Calls with the Client",
  "id": "making-api-calls-with-the-client",
  "level": 3
}, {
  "value": "OAuth2 Resource Server",
  "id": "oauth2-resource-server",
  "level": 2
}, {
  "value": "Dependencies",
  "id": "dependencies-1",
  "level": 3
}, {
  "value": "JWT Decoder with JWK Set URI",
  "id": "jwt-decoder-with-jwk-set-uri",
  "level": 3
}, {
  "value": "Custom JWT Authentication Converter",
  "id": "custom-jwt-authentication-converter",
  "level": 3
}, {
  "value": "Opaque Token Introspection",
  "id": "opaque-token-introspection",
  "level": 3
}, {
  "value": "Bearer Token Resolver",
  "id": "bearer-token-resolver",
  "level": 3
}, {
  "value": "OpenID Connect (OIDC)",
  "id": "openid-connect-oidc",
  "level": 2
}, {
  "value": "OpenID Connect Discovery",
  "id": "openid-connect-discovery",
  "level": 3
}, {
  "value": "ID Token",
  "id": "id-token",
  "level": 3
}, {
  "value": "UserInfo Endpoint",
  "id": "userinfo-endpoint",
  "level": 3
}, {
  "value": "Spring Security OIDC Support",
  "id": "spring-security-oidc-support",
  "level": 3
}, {
  "value": "Custom OidcUserService",
  "id": "custom-oidcuserservice",
  "level": 3
}, {
  "value": "Social Login",
  "id": "social-login",
  "level": 2
}, {
  "value": "Google Login",
  "id": "google-login",
  "level": 3
}, {
  "value": "GitHub Login",
  "id": "github-login",
  "level": 3
}, {
  "value": "Facebook Login",
  "id": "facebook-login",
  "level": 3
}, {
  "value": "Custom OAuth2UserService",
  "id": "custom-oauth2userservice",
  "level": 3
}, {
  "value": "Custom OAuth2UserService Registration",
  "id": "custom-oauth2userservice-registration",
  "level": 3
}, {
  "value": "Account Linking",
  "id": "account-linking",
  "level": 3
}, {
  "value": "Login Controller",
  "id": "login-controller",
  "level": 3
}, {
  "value": "Login Page Template",
  "id": "login-page-template",
  "level": 3
}, {
  "value": "Complete Resource Server Example",
  "id": "complete-resource-server-example",
  "level": 2
}, {
  "value": "Complete Client Application Example",
  "id": "complete-client-application-example",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
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
        id: "jwt-oauth2--oidc",
        children: "JWT, OAuth2 & OIDC"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/25-auth-authz",
          children: "Authentication & Authorization"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/27-method-cors-csrf",
          children: "Method Security, CORS & CSRF"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern applications rarely authenticate against a single database. Users log in via Google, GitHub, or corporate identity providers. APIs authenticate via signed tokens rather than session cookies. Microservices trust claims embedded in JWTs rather than querying a central auth service."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This chapter covers the three pillars of modern authentication and authorization: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "JWT"
      }), " (the token format), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OAuth2"
      }), " (the authorization framework), and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "OpenID Connect"
      }), " (the identity layer on top of OAuth2). You will learn to issue and validate JWTs, configure OAuth2 clients and resource servers, integrate social login, and build secure, standards-compliant authentication flows."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter you should be able to:"
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
        href: "../../assets/images/lessons/java/26-jwt-oauth2/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/26-jwt-oauth2/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/26-jwt-oauth2/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/26-jwt-oauth2/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/26-jwt-oauth2/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/26-jwt-oauth2/visual-explanation.png",
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
        children: "Understand JWT structure (header, payload, signature) and the difference between JWS and JWE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create and validate JWTs using the Nimbus JOSE + JWT library and the jjwt library"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement refresh token rotation and token revocation strategies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure all five OAuth2 authorization grants: Authorization Code, Authorization Code + PKCE, Client Credentials, Refresh Token, and Resource Owner Password Credentials"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build an OAuth2 client with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "spring-boot-starter-oauth2-client"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "OAuth2AuthorizedClientManager"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Secure a resource server with JWT decoding (jwk-set-uri) and opaque token introspection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand OpenID Connect discovery, ID tokens, and the UserInfo endpoint"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement social login for Google, GitHub, and Facebook with account linking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "JWT → compact, self-contained token format for claims"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sign with RS256; never expose secrets in the payload"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OAuth2 → authorization framework with multiple grant types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Authorization Code + PKCE for public clients"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenID Connect → identity layer atop OAuth2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ID Token (JWT) carries user identity; UserInfo endpoint provides additional claims"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[JWT, OAuth2 and OIDC] --> B[JWT Structure]\n    A --> C[OAuth2 Grants]\n    A --> D[OpenID Connect]\n    B --> B1[Header / Payload / Signature]\n    C --> C1[Auth Code + PKCE]\n    C --> C2[Client Credentials]\n    C --> C3[Refresh Token]\n    D --> D1[ID Token]\n    D --> D2[UserInfo Endpoint]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Difference"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JWS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signed JWT (payload visible)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default for access tokens"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JWE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypted JWT (payload hidden)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare; used for sensitive claims"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OAuth2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization framework (delegated access)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scopes, tokens, grants"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OIDC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identity layer (authentication)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ID token, UserInfo, discovery"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "NimbusJwtDecoder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decodes and validates JWTs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "NimbusJwtDecoder.withJwkSetUri(jwkSetUri)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OAuth2AuthorizedClientManager"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manages token lifecycle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "authorizedClientManager.authorize()"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@RegisteredOAuth2AuthorizedClient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Injects authorized client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@RegisteredOAuth2AuthorizedClient(\"google\")"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "oauth2Login()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configures OAuth2 login"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "http.oauth2Login(Customizer.withDefaults())"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Social Login"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spring OAuth2 Client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Google / GitHub / Facebook login with account linking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API Gateway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OAuth2 Resource Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate JWTs from external IdP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile App"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization Code + PKCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Secure native app authentication"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What are the three parts of a JWT? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Header, Payload, Signature"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which OAuth2 grant is recommended for mobile apps? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Authorization Code with PKCE"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What OIDC token carries user identity claims? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " ID Token"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "jwt--json-web-token",
      children: "JWT — JSON Web Token"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/26-jwt-oauth2.png",
        alt: "OAuth2 Authorization Code Flow with JWT"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A JWT is a compact, URL-safe token format for representing claims between two parties. It is used heavily in OAuth2 and OpenID Connect as the format for access tokens and ID tokens."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jwt-structure",
      children: "JWT Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A JWT consists of three Base64-URL-encoded segments separated by dots:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "header.payload.signature\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Header"
      }), " — describes the signing algorithm and token type:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"alg\": \"RS256\",\n  \"typ\": \"JWT\",\n  \"kid\": \"key-id-1\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Payload"
      }), " — contains the claims (statements about the subject):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"sub\": \"1234567890\",\n  \"name\": \"John Doe\",\n  \"iat\": 1516239022,\n  \"exp\": 1516242622,\n  \"iss\": \"https://auth.example.com\",\n  \"aud\": \"https://api.example.com\",\n  \"roles\": [\"admin\", \"user\"]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Signature"
      }), " — proves the token was issued by a trusted party and has not been tampered with. For HMAC it is computed as:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HMACSHA256(\n  base64UrlEncode(header) + \".\" + base64UrlEncode(payload),\n  secret\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jws-vs-jwe",
      children: "JWS vs JWE"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "JWS (JSON Web Signature)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "JWE (JSON Web Encryption)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrity + authenticity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confidentiality + integrity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Payload visibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visible (Base64 encoded)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypted (hidden)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "header.payload.signature"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "header.encrypted_key.iv.ciphertext.tag"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access tokens, ID tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transporting sensitive claims"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HS256, RS256, ES256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA-OAEP, ECDH-ES + A256GCM"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Most OAuth2 deployments use JWS (signed JWTs). JWE is used when the token payload must not be readable by intermediate parties."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nimbus-jose--jwt",
      children: "Nimbus JOSE + JWT"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nimbus JOSE + JWT is the default JWT library used by Spring Security's OAuth2 resource server. It provides full JWS, JWE, and JWK support."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>com.nimbusds</groupId>\n    <artifactId>nimbus-jose-jwt</artifactId>\n    <version>9.37.3</version>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.jwt.nimbus;\n\nimport com.nimbusds.jose.JOSEException;\nimport com.nimbusds.jose.JWSAlgorithm;\nimport com.nimbusds.jose.JWSHeader;\nimport com.nimbusds.jose.JWSSigner;\nimport com.nimbusds.jose.JWSVerifier;\nimport com.nimbusds.jose.crypto.MACSigner;\nimport com.nimbusds.jose.crypto.MACVerifier;\nimport com.nimbusds.jwt.JWTClaimsSet;\nimport com.nimbusds.jwt.SignedJWT;\n\nimport java.text.ParseException;\nimport java.util.Date;\n\npublic class NimbusJwtDemo {\n\n    private static final String SECRET = \"my-very-long-secret-key-that-is-at-least-256-bits-long-for-hs256\";\n\n    public String createToken() throws JOSEException {\n        JWSSigner signer = new MACSigner(SECRET);\n\n        JWTClaimsSet claimsSet = new JWTClaimsSet.Builder()\n            .subject(\"user-123\")\n            .issuer(\"https://auth.example.com\")\n            .audience(\"https://api.example.com\")\n            .issueTime(new Date())\n            .expirationTime(new Date(System.currentTimeMillis() + 3600_000))\n            .claim(\"roles\", new String[]{\"admin\", \"user\"})\n            .claim(\"tenant\", \"acme-corp\")\n            .build();\n\n        SignedJWT signedJWT = new SignedJWT(\n            new JWSHeader(JWSAlgorithm.HS256),\n            claimsSet\n        );\n\n        signedJWT.sign(signer);\n        return signedJWT.serialize();\n    }\n\n    public void validateToken(String token) throws ParseException, JOSEException {\n        SignedJWT signedJWT = SignedJWT.parse(token);\n\n        JWSVerifier verifier = new MACVerifier(SECRET);\n\n        boolean valid = signedJWT.verify(verifier);\n\n        JWTClaimsSet claims = signedJWT.getJWTClaimsSet();\n\n        System.out.println(\"Valid: \" + valid);\n        System.out.println(\"Subject: \" + claims.getSubject());\n        System.out.println(\"Issuer: \" + claims.getIssuer());\n        System.out.println(\"Roles: \" + claims.getStringListClaim(\"roles\"));\n        System.out.println(\"Expired: \" + claims.getExpirationTime().before(new Date()));\n    }\n\n    public String getSubject(String token) throws ParseException {\n        SignedJWT signedJWT = SignedJWT.parse(token);\n        return signedJWT.getJWTClaimsSet().getSubject();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jjwt-library",
      children: "jjwt Library"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The jjwt library (io.jsonwebtoken) provides a fluent, builder-based API:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>io.jsonwebtoken</groupId>\n    <artifactId>jjwt-api</artifactId>\n    <version>0.12.5</version>\n</dependency>\n<dependency>\n    <groupId>io.jsonwebtoken</groupId>\n    <artifactId>jjwt-impl</artifactId>\n    <version>0.12.5</version>\n    <scope>runtime</scope>\n</dependency>\n<dependency>\n    <groupId>io.jsonwebtoken</groupId>\n    <artifactId>jjwt-jackson</artifactId>\n    <version>0.12.5</version>\n    <scope>runtime</scope>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "token-creation-with-jjwt",
      children: "Token Creation with jjwt"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.jwt.jjwt;\n\nimport io.jsonwebtoken.Jwts;\nimport io.jsonwebtoken.security.Keys;\n\nimport javax.crypto.SecretKey;\nimport java.nio.charset.StandardCharsets;\nimport java.util.Base64;\nimport java.util.Date;\nimport java.util.List;\nimport java.util.Map;\n\npublic class JjwtTokenCreator {\n\n    // HMAC key — in production, load from a secure vault\n    private static final SecretKey SECRET_KEY = Keys.hmacShaKeyFor(\n        Base64.getDecoder().decode(\n            \"dGhpcyBpcyBhIHZlcnkgbG9uZyBzZWNyZXQga2V5IGZvciBKU1dTIHRoYXQgbXVzdCBiZSAyNTYgYml0cyBsb25n\"))\n    ;\n\n    public String createAccessToken(String subject, List<String> roles) {\n        Date now = new Date();\n        Date expiration = new Date(now.getTime() + 3600_000); // 1 hour\n\n        return Jwts.builder()\n            .header()\n                .type(\"JWT\")\n                .and()\n            .subject(subject)\n            .issuer(\"https://auth.example.com\")\n            .issuedAt(now)\n            .expiration(expiration)\n            .claim(\"roles\", roles)\n            .claim(\"scope\", \"read write\")\n            .signWith(SECRET_KEY)\n            .compact();\n    }\n\n    public String createRefreshToken(String subject) {\n        Date now = new Date();\n        Date expiration = new Date(now.getTime() + 7 * 24 * 3600_000); // 7 days\n\n        return Jwts.builder()\n            .subject(subject)\n            .id(java.util.UUID.randomUUID().toString()) // unique token ID\n            .issuedAt(now)\n            .expiration(expiration)\n            .claim(\"type\", \"refresh\")\n            .signWith(SECRET_KEY)\n            .compact();\n    }\n\n    public String createCustomToken(Map<String, Object> claims) {\n        Date now = new Date();\n        return Jwts.builder()\n            .claims(claims)\n            .issuedAt(now)\n            .expiration(new Date(now.getTime() + 1800_000)) // 30 minutes\n            .signWith(SECRET_KEY)\n            .compact();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "token-validation-with-jjwt",
      children: "Token Validation with jjwt"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.jwt.jjwt;\n\nimport io.jsonwebtoken.Claims;\nimport io.jsonwebtoken.ExpiredJwtException;\nimport io.jsonwebtoken.Jws;\nimport io.jsonwebtoken.Jwts;\nimport io.jsonwebtoken.MalformedJwtException;\nimport io.jsonwebtoken.UnsupportedJwtException;\nimport io.jsonwebtoken.security.SecurityException;\n\nimport javax.crypto.SecretKey;\nimport java.util.Base64;\nimport java.util.List;\n\npublic class JjwtTokenValidator {\n\n    private static final SecretKey SECRET_KEY = Keys.hmacShaKeyFor(\n        Base64.getDecoder().decode(\n            \"dGhpcyBpcyBhIHZlcnkgbG9uZyBzZWNyZXQga2V5IGZvciBKU1dTIHRoYXQgbXVzdCBiZSAyNTYgYml0cyBsb25n\"))\n    ;\n\n    public JwtValidationResult validate(String token) {\n        try {\n            Jws<Claims> jws = Jwts.parser()\n                .verifyWith(SECRET_KEY)\n                .requireIssuer(\"https://auth.example.com\")\n                .requireAudience(\"https://api.example.com\")\n                .build()\n                .parseSignedClaims(token);\n\n            Claims claims = jws.getPayload();\n\n            String subject = claims.getSubject();\n            List<String> roles = claims.get(\"roles\", List.class);\n            String scope = claims.get(\"scope\", String.class);\n\n            return new JwtValidationResult(true, subject, roles, scope, null);\n\n        } catch (ExpiredJwtException e) {\n            return JwtValidationResult.failed(\"Token expired: \" + e.getMessage());\n        } catch (MalformedJwtException e) {\n            return JwtValidationResult.failed(\"Malformed token: \" + e.getMessage());\n        } catch (SecurityException e) {\n            return JwtValidationResult.failed(\"Invalid signature: \" + e.getMessage());\n        } catch (UnsupportedJwtException e) {\n            return JwtValidationResult.failed(\"Unsupported token: \" + e.getMessage());\n        } catch (IllegalArgumentException e) {\n            return JwtValidationResult.failed(\"Token is null or empty: \" + e.getMessage());\n        }\n    }\n\n    public Claims parseClaims(String token) {\n        return Jwts.parser()\n            .verifyWith(SECRET_KEY)\n            .build()\n            .parseSignedClaims(token)\n            .getPayload();\n    }\n\n    public String getSubject(String token) {\n        return parseClaims(token).getSubject();\n    }\n\n    public boolean isExpired(String token) {\n        try {\n            parseClaims(token);\n            return false;\n        } catch (ExpiredJwtException e) {\n            return true;\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.jwt.jjwt;\n\nimport java.util.List;\n\npublic record JwtValidationResult(\n    boolean valid,\n    String subject,\n    List<String> roles,\n    String scope,\n    String error\n) {\n    public static JwtValidationResult failed(String error) {\n        return new JwtValidationResult(false, null, null, null, error);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exception-handling",
      children: "Exception Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The jjwt library throws specific exceptions for different failure modes:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Exception"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ExpiredJwtException"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Token's ", (0,jsx_runtime.jsx)(_components.code, {
              children: "exp"
            }), " claim is in the past"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MalformedJwtException"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token does not have the correct JWT structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SecurityException"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signature verification failed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UnsupportedJwtException"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm or claim format not supported"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "IllegalArgumentException"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token is null, empty, or whitespace"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "refresh-tokens",
      children: "Refresh Tokens"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A refresh token is a long-lived token used to obtain new access tokens without requiring the user to re-authenticate."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.jwt.refresh;\n\nimport io.jsonwebtoken.Claims;\nimport io.jsonwebtoken.Jwts;\nimport io.jsonwebtoken.security.Keys;\n\nimport javax.crypto.SecretKey;\nimport java.util.Base64;\nimport java.util.Date;\nimport java.util.UUID;\n\npublic class RefreshTokenService {\n\n    private static final SecretKey SECRET_KEY = Keys.hmacShaKeyFor(\n        Base64.getDecoder().decode(\n            \"dGhpcyBpcyBhIHZlcnkgbG9uZyBzZWNyZXQga2V5IGZvciBKU1dTIHRoYXQgbXVzdCBiZSAyNTYgYml0cyBsb25n\"))\n    ;\n\n    private final JjwtTokenCreator tokenCreator;\n    private final TokenBlacklist blacklist;\n\n    public RefreshTokenService(JjwtTokenCreator tokenCreator,\n                               TokenBlacklist blacklist) {\n        this.tokenCreator = tokenCreator;\n        this.blacklist = blacklist;\n    }\n\n    public TokenPair issueTokens(String subject) {\n        String accessToken = tokenCreator.createAccessToken(\n            subject, List.of(\"user\"));\n        String refreshToken = tokenCreator.createRefreshToken(subject);\n        return new TokenPair(accessToken, refreshToken);\n    }\n\n    public TokenPair refreshAccessToken(String refreshToken) {\n        if (blacklist.isBlacklisted(refreshToken)) {\n            throw new SecurityException(\"Refresh token has been revoked\");\n        }\n\n        Claims claims = Jwts.parser()\n            .verifyWith(SECRET_KEY)\n            .build()\n            .parseSignedClaims(refreshToken)\n            .getPayload();\n\n        String tokenType = claims.get(\"type\", String.class);\n        if (!\"refresh\".equals(tokenType)) {\n            throw new SecurityException(\"Token is not a refresh token\");\n        }\n\n        String subject = claims.getSubject();\n\n        // Revoke the old refresh token (rotation)\n        blacklist.add(refreshToken);\n\n        // Issue new pair\n        return issueTokens(subject);\n    }\n\n    public void revokeRefreshToken(String refreshToken) {\n        blacklist.add(refreshToken);\n    }\n\n    public record TokenPair(String accessToken, String refreshToken) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "token-revocation-strategies",
      children: "Token Revocation Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.jwt.refresh;\n\nimport java.util.Map;\nimport java.util.Set;\nimport java.util.concurrent.ConcurrentHashMap;\n\npublic class TokenBlacklist {\n\n    private final Map<String, Long> blacklist = new ConcurrentHashMap<>();\n\n    public void add(String token) {\n        // Store token hash and expiry time\n        String tokenHash = hashToken(token);\n        blacklist.put(tokenHash, System.currentTimeMillis() + 7 * 24 * 3600_000);\n        cleanup();\n    }\n\n    public boolean isBlacklisted(String token) {\n        String tokenHash = hashToken(token);\n        Long expiry = blacklist.get(tokenHash);\n        if (expiry == null) {\n            return false;\n        }\n        if (System.currentTimeMillis() > expiry) {\n            blacklist.remove(tokenHash);\n            return false;\n        }\n        return true;\n    }\n\n    private void cleanup() {\n        long now = System.currentTimeMillis();\n        blacklist.entrySet().removeIf(entry -> now > entry.getValue());\n    }\n\n    private String hashToken(String token) {\n        return Integer.toHexString(token.hashCode());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternative revocation strategies:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blacklist"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store revoked token IDs in a database or Redis (used above)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Short expiry"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep access tokens short (5-15 min) so revocation is quick"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Token rotation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Issue a new refresh token with every refresh; invalidate the old one"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Revocation endpoint"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OAuth2 revocation endpoint (RFC 7009) supported by authorization servers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Not-before claim"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Store a user-level token version; if ", (0,jsx_runtime.jsx)(_components.code, {
              children: "iat"
            }), " < version, reject"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "    // Short expiry strategy\n    public String createShortLivedToken(String subject) {\n        return Jwts.builder()\n            .subject(subject)\n            .issuedAt(new Date())\n            .expiration(new Date(System.currentTimeMillis() + 300_000)) // 5 minutes\n            .signWith(SECRET_KEY)\n            .compact();\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "token-service--complete",
      children: "Token Service — Complete"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.jwt.service;\n\nimport io.jsonwebtoken.Claims;\nimport io.jsonwebtoken.ExpiredJwtException;\nimport io.jsonwebtoken.Jwts;\nimport io.jsonwebtoken.security.Keys;\n\nimport javax.crypto.SecretKey;\nimport java.util.Base64;\nimport java.util.Date;\nimport java.util.List;\nimport java.util.function.Function;\n\npublic class JwtTokenService {\n\n    private final SecretKey secretKey;\n\n    public JwtTokenService(String base64Secret) {\n        byte[] keyBytes = Base64.getDecoder().decode(base64Secret);\n        this.secretKey = Keys.hmacShaKeyFor(keyBytes);\n    }\n\n    public String generateToken(String subject, List<String> roles,\n                                long expirationMillis) {\n        return Jwts.builder()\n            .subject(subject)\n            .issuedAt(new Date())\n            .expiration(new Date(System.currentTimeMillis() + expirationMillis))\n            .claim(\"roles\", roles)\n            .signWith(secretKey)\n            .compact();\n    }\n\n    public String generateToken(String subject) {\n        return generateToken(subject, List.of(\"user\"), 3600_000);\n    }\n\n    public boolean validateToken(String token) {\n        try {\n            Jwts.parser()\n                .verifyWith(secretKey)\n                .build()\n                .parseSignedClaims(token);\n            return true;\n        } catch (ExpiredJwtException e) {\n            return true; // still valid, just expired\n        } catch (Exception e) {\n            return false;\n        }\n    }\n\n    public boolean isTokenExpired(String token) {\n        try {\n            extractClaim(token, Claims::getExpiration);\n            return false;\n        } catch (ExpiredJwtException e) {\n            return true;\n        }\n    }\n\n    public String extractSubject(String token) {\n        return extractClaim(token, Claims::getSubject);\n    }\n\n    public <T> T extractClaim(String token,\n                              Function<Claims, T> claimsResolver) {\n        Claims claims = extractAllClaims(token);\n        return claimsResolver.apply(claims);\n    }\n\n    private Claims extractAllClaims(String token) {\n        return Jwts.parser()\n            .verifyWith(secretKey)\n            .build()\n            .parseSignedClaims(token)\n            .getPayload();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!TIP]\nAlways set short expiration times (15 minutes or less) for access tokens and use refresh tokens for long-lived sessions."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "oauth2-flows",
      children: "OAuth2 Flows"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OAuth2 is an authorization framework that enables applications to obtain limited access to user accounts on an HTTP service. It works by delegating user authentication to the service that hosts the user account and authorizing third-party applications to access that user account."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "terminology",
      children: "Terminology"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Term"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Resource Owner"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The user who owns the data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Client"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The application requesting access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Authorization Server"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Issues tokens after authenticating the user"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Resource Server"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hosts the protected data, validates tokens"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Access Token"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Credential used to access the resource server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Refresh Token"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-lived token to obtain new access tokens"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limits what the access token can do"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Redirect URI"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback URL where the authorization server sends the user"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "authorization-code--pkce",
      children: "Authorization Code + PKCE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The most secure flow for public clients (SPAs, mobile apps). PKCE (Proof Key for Code Exchange) prevents authorization code interception attacks."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.oauth2.flow;\n\nimport java.security.MessageDigest;\nimport java.security.NoSuchAlgorithmException;\nimport java.security.SecureRandom;\nimport java.util.Base64;\n\npublic class PkceUtil {\n\n    public static String generateCodeVerifier() {\n        SecureRandom sr = new SecureRandom();\n        byte[] code = new byte[32];\n        sr.nextBytes(code);\n        return Base64.getUrlEncoder().withoutPadding().encodeToString(code);\n    }\n\n    public static String generateCodeChallenge(String codeVerifier)\n            throws NoSuchAlgorithmException {\n        MessageDigest md = MessageDigest.getInstance(\"SHA-256\");\n        byte[] digest = md.digest(codeVerifier.getBytes());\n        return Base64.getUrlEncoder().withoutPadding().encodeToString(digest);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.oauth2.flow;\n\nimport com.course.jwt.jjwt.JjwtTokenCreator;\n\nimport java.net.URI;\nimport java.net.http.HttpClient;\nimport java.net.http.HttpRequest;\nimport java.net.http.HttpResponse;\nimport java.security.NoSuchAlgorithmException;\nimport java.util.Map;\n\npublic class AuthorizationCodePkceFlow {\n\n    private static final String AUTH_SERVER = \"https://auth.example.com\";\n    private static final String CLIENT_ID = \"my-client\";\n    private static final String REDIRECT_URI = \"https://myapp.com/callback\";\n    private static final String SCOPE = \"openid profile email\";\n\n    private final HttpClient httpClient = HttpClient.newHttpClient();\n    private final JjwtTokenCreator tokenCreator;\n\n    public AuthorizationCodePkceFlow(JjwtTokenCreator tokenCreator) {\n        this.tokenCreator = tokenCreator;\n    }\n\n    // Step 1: Generate PKCE challenge and build authorization URL\n    public AuthorizationRequest buildAuthorizationUrl()\n            throws NoSuchAlgorithmException {\n        String codeVerifier = PkceUtil.generateCodeVerifier();\n        String codeChallenge = PkceUtil.generateCodeChallenge(codeVerifier);\n\n        String authUrl = AUTH_SERVER + \"/authorize?\" +\n            \"response_type=code\" +\n            \"&client_id=\" + CLIENT_ID +\n            \"&redirect_uri=\" + REDIRECT_URI +\n            \"&scope=\" + SCOPE +\n            \"&code_challenge=\" + codeChallenge +\n            \"&code_challenge_method=S256\" +\n            \"&state=\" + generateState();\n\n        return new AuthorizationRequest(authUrl, codeVerifier, codeChallenge);\n    }\n\n    // Step 2: Exchange authorization code for tokens\n    public TokenResponse exchangeCode(String authorizationCode,\n                                       String codeVerifier)\n            throws Exception {\n        String body = \"grant_type=authorization_code\" +\n            \"&code=\" + authorizationCode +\n            \"&redirect_uri=\" + REDIRECT_URI +\n            \"&client_id=\" + CLIENT_ID +\n            \"&code_verifier=\" + codeVerifier;\n\n        HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(AUTH_SERVER + \"/token\"))\n            .header(\"Content-Type\", \"application/x-www-form-urlencoded\")\n            .POST(HttpRequest.BodyPublishers.ofString(body))\n            .build();\n\n        HttpResponse<String> response = httpClient.send(request,\n            HttpResponse.BodyHandlers.ofString());\n\n        return parseTokenResponse(response.body());\n    }\n\n    // Step 3: Use the access token to call the resource server\n    public String callResourceServer(String accessToken, String resourceUrl)\n            throws Exception {\n        HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(resourceUrl))\n            .header(\"Authorization\", \"Bearer \" + accessToken)\n            .GET()\n            .build();\n\n        HttpResponse<String> response = httpClient.send(request,\n            HttpResponse.BodyHandlers.ofString());\n\n        return response.body();\n    }\n\n    private String generateState() {\n        SecureRandom sr = new SecureRandom();\n        byte[] state = new byte[16];\n        sr.nextBytes(state);\n        return Base64.getUrlEncoder().withoutPadding().encodeToString(state);\n    }\n\n    private TokenResponse parseTokenResponse(String json) {\n        // Parse JSON response using Jackson or similar\n        return new TokenResponse(\"access-token-value\", \"refresh-token-value\", 3600);\n    }\n\n    public record AuthorizationRequest(\n        String authUrl, String codeVerifier, String codeChallenge) {}\n\n    public record TokenResponse(\n        String accessToken, String refreshToken, int expiresIn) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "client-credentials-flow",
      children: "Client Credentials Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Machine-to-machine authentication where the client authenticates itself, not a user:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.oauth2.flow;\n\nimport java.net.URI;\nimport java.net.http.HttpClient;\nimport java.net.http.HttpRequest;\nimport java.net.http.HttpResponse;\nimport java.util.Base64;\n\npublic class ClientCredentialsFlow {\n\n    private static final String TOKEN_URL = \"https://auth.example.com/token\";\n    private static final String CLIENT_ID = \"my-service\";\n    private static final String CLIENT_SECRET = \"my-service-secret\";\n\n    private final HttpClient httpClient = HttpClient.newHttpClient();\n\n    public String getClientCredentialsToken() throws Exception {\n        String basicAuth = Base64.getEncoder().encodeToString(\n            (CLIENT_ID + \":\" + CLIENT_SECRET).getBytes());\n\n        String body = \"grant_type=client_credentials\" +\n            \"&scope=api.read api.write\";\n\n        HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(TOKEN_URL))\n            .header(\"Authorization\", \"Basic \" + basicAuth)\n            .header(\"Content-Type\", \"application/x-www-form-urlencoded\")\n            .POST(HttpRequest.BodyPublishers.ofString(body))\n            .build();\n\n        HttpResponse<String> response = httpClient.send(request,\n            HttpResponse.BodyHandlers.ofString());\n\n        // Parse response to extract access_token\n        String responseBody = response.body();\n        return extractAccessToken(responseBody);\n    }\n\n    public String callApi(String accessToken, String apiUrl) throws Exception {\n        HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(apiUrl))\n            .header(\"Authorization\", \"Bearer \" + accessToken)\n            .GET()\n            .build();\n\n        HttpResponse<String> response = httpClient.send(request,\n            HttpResponse.BodyHandlers.ofString());\n\n        return response.body();\n    }\n\n    private String extractAccessToken(String responseBody) {\n        // Simple parsing — use Jackson in production\n        int start = responseBody.indexOf(\"\\\"access_token\\\":\\\"\") + 17;\n        int end = responseBody.indexOf(\"\\\"\", start);\n        return responseBody.substring(start, end);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "refresh-token-flow",
      children: "Refresh Token Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.oauth2.flow;\n\nimport java.net.URI;\nimport java.net.http.HttpClient;\nimport java.net.http.HttpRequest;\nimport java.net.http.HttpResponse;\nimport java.util.Base64;\n\npublic class RefreshTokenFlow {\n\n    private static final String TOKEN_URL = \"https://auth.example.com/token\";\n    private static final String CLIENT_ID = \"my-client\";\n    private static final String CLIENT_SECRET = \"my-client-secret\";\n\n    private final HttpClient httpClient = HttpClient.newHttpClient();\n\n    public TokenResponse refreshAccessToken(String refreshToken)\n            throws Exception {\n        String basicAuth = Base64.getEncoder().encodeToString(\n            (CLIENT_ID + \":\" + CLIENT_SECRET).getBytes());\n\n        String body = \"grant_type=refresh_token\" +\n            \"&refresh_token=\" + refreshToken +\n            \"&scope=openid profile email\";\n\n        HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(TOKEN_URL))\n            .header(\"Authorization\", \"Basic \" + basicAuth)\n            .header(\"Content-Type\", \"application/x-www-form-urlencoded\")\n            .POST(HttpRequest.BodyPublishers.ofString(body))\n            .build();\n\n        HttpResponse<String> response = httpClient.send(request,\n            HttpResponse.BodyHandlers.ofString());\n\n        return parseTokenResponse(response.body());\n    }\n\n    private TokenResponse parseTokenResponse(String json) {\n        // Parse using Jackson\n        return new TokenResponse(\"new-access-token\", \"new-refresh-token\", 3600);\n    }\n\n    public record TokenResponse(\n        String accessToken, String refreshToken, int expiresIn) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resource-owner-password-credentials-deprecated",
      children: "Resource Owner Password Credentials (Deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The ROPC flow is deprecated in OAuth 2.1. It is included here for legacy system understanding:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.oauth2.flow;\n\nimport java.net.URI;\nimport java.net.http.HttpClient;\nimport java.net.http.HttpRequest;\nimport java.net.http.HttpResponse;\nimport java.util.Base64;\n\npublic class RopcFlow {\n\n    // WARNING: This flow is deprecated in OAuth 2.1.\n    // The client has access to the user's password — a security risk.\n\n    private static final String TOKEN_URL = \"https://auth.example.com/token\";\n    private static final String CLIENT_ID = \"legacy-client\";\n    private static final String CLIENT_SECRET = \"legacy-secret\";\n\n    private final HttpClient httpClient = HttpClient.newHttpClient();\n\n    public String getTokenWithPassword(String username, String password)\n            throws Exception {\n        String basicAuth = Base64.getEncoder().encodeToString(\n            (CLIENT_ID + \":\" + CLIENT_SECRET).getBytes());\n\n        String body = \"grant_type=password\" +\n            \"&username=\" + username +\n            \"&password=\" + password +\n            \"&scope=openid profile\";\n\n        HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(TOKEN_URL))\n            .header(\"Authorization\", \"Basic \" + basicAuth)\n            .header(\"Content-Type\", \"application/x-www-form-urlencoded\")\n            .POST(HttpRequest.BodyPublishers.ofString(body))\n            .build();\n\n        HttpResponse<String> response = httpClient.send(request,\n            HttpResponse.BodyHandlers.ofString());\n\n        return extractAccessToken(response.body());\n    }\n\n    private String extractAccessToken(String json) {\n        int start = json.indexOf(\"\\\"access_token\\\":\\\"\") + 17;\n        int end = json.indexOf(\"\\\"\", start);\n        return json.substring(start, end);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "authorization-code-server-side-web-apps",
      children: "Authorization Code (Server-Side Web Apps)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The traditional Authorization Code flow for server-side web applications:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.oauth2.flow;\n\nimport java.net.URI;\nimport java.net.http.HttpClient;\nimport java.net.http.HttpRequest;\nimport java.net.http.HttpResponse;\nimport java.util.Base64;\n\npublic class AuthorizationCodeFlow {\n\n    private static final String AUTH_SERVER = \"https://auth.example.com\";\n    private static final String CLIENT_ID = \"web-app-client\";\n    private static final String CLIENT_SECRET = \"web-app-secret\";\n    private static final String REDIRECT_URI = \"https://myapp.com/oauth2/callback\";\n\n    private final HttpClient httpClient = HttpClient.newHttpClient();\n\n    public String buildAuthorizationUrl() {\n        return AUTH_SERVER + \"/authorize?\" +\n            \"response_type=code\" +\n            \"&client_id=\" + CLIENT_ID +\n            \"&redirect_uri=\" + REDIRECT_URI +\n            \"&scope=openid+profile+email\" +\n            \"&state=\" + generateState();\n    }\n\n    public TokenResponse exchangeCode(String authorizationCode)\n            throws Exception {\n        String basicAuth = Base64.getEncoder().encodeToString(\n            (CLIENT_ID + \":\" + CLIENT_SECRET).getBytes());\n\n        String body = \"grant_type=authorization_code\" +\n            \"&code=\" + authorizationCode +\n            \"&redirect_uri=\" + REDIRECT_URI +\n            \"&client_id=\" + CLIENT_ID;\n\n        HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(AUTH_SERVER + \"/token\"))\n            .header(\"Authorization\", \"Basic \" + basicAuth)\n            .header(\"Content-Type\", \"application/x-www-form-urlencoded\")\n            .POST(HttpRequest.BodyPublishers.ofString(body))\n            .build();\n\n        HttpResponse<String> response = httpClient.send(request,\n            HttpResponse.BodyHandlers.ofString());\n\n        return parseTokenResponse(response.body());\n    }\n\n    private String generateState() {\n        SecureRandom sr = new SecureRandom();\n        byte[] state = new byte[16];\n        sr.nextBytes(state);\n        return Base64.getUrlEncoder().withoutPadding().encodeToString(state);\n    }\n\n    private TokenResponse parseTokenResponse(String json) {\n        return new TokenResponse(\"access-token\", \"refresh-token\", 3600);\n    }\n\n    public record TokenResponse(\n        String accessToken, String refreshToken, int expiresIn) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!WARNING]\nThe Resource Owner Password Credentials grant is deprecated in OAuth2.1 and should not be used for new applications."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "oauth2-client",
      children: "OAuth2 Client"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Security's OAuth2 client support handles the Authorization Code flow (with PKCE), token storage, and automatic refresh."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dependencies",
      children: "Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-oauth2-client</artifactId>\n</dependency>\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-web</artifactId>\n</dependency>\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-security</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "registration-properties",
      children: "Registration Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# application.yml\nspring:\n  security:\n    oauth2:\n      client:\n        registration:\n          google:\n            client-id: YOUR_GOOGLE_CLIENT_ID\n            client-secret: YOUR_GOOGLE_CLIENT_SECRET\n            scope: openid, profile, email\n            redirect-uri: \"{baseUrl}/login/oauth2/code/{registrationId}\"\n            client-name: Google\n\n          github:\n            client-id: YOUR_GITHUB_CLIENT_ID\n            client-secret: YOUR_GITHUB_CLIENT_SECRET\n            scope: read:user, user:email\n            redirect-uri: \"{baseUrl}/login/oauth2/code/{registrationId}\"\n            client-name: GitHub\n\n          facebook:\n            client-id: YOUR_FACEBOOK_APP_ID\n            client-secret: YOUR_FACEBOOK_APP_SECRET\n            scope: email, public_profile\n            redirect-uri: \"{baseUrl}/login/oauth2/code/{registrationId}\"\n            client-name: Facebook\n\n          okta:\n            provider: okta\n            client-id: YOUR_OKTA_CLIENT_ID\n            client-secret: YOUR_OKTA_CLIENT_SECRET\n            scope: openid, profile, email\n            authorization-grant-type: authorization_code\n            redirect-uri: \"{baseUrl}/login/oauth2/code/{registrationId}\"\n\n        provider:\n          okta:\n            authorization-uri: https://your-org.okta.com/oauth2/default/v1/authorize\n            token-uri: https://your-org.okta.com/oauth2/default/v1/token\n            user-info-uri: https://your-org.okta.com/oauth2/default/v1/userinfo\n            jwk-set-uri: https://your-org.okta.com/oauth2/default/v1/keys\n            user-name-attribute: sub\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "security-configuration",
      children: "Security Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.oauth2.client;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\nimport org.springframework.security.web.SecurityFilterChain;\n\nimport static org.springframework.security.config.Customizer.withDefaults;\n\n@Configuration\n@EnableWebSecurity\npublic class OAuth2ClientConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers(\"/\", \"/login\", \"/error\", \"/webjars/**\").permitAll()\n                .anyRequest().authenticated()\n            )\n            .oauth2Login(withDefaults())\n            .logout(logout -> logout\n                .logoutSuccessUrl(\"/\")\n                .invalidateHttpSession(true)\n                .clearAuthentication(true)\n                .deleteCookies(\"JSESSIONID\")\n            );\n\n        return http.build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oauth2authorizedclientmanager",
      children: "OAuth2AuthorizedClientManager"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OAuth2AuthorizedClientManager"
      }), " manages the lifecycle of authorized clients, including token refresh:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.oauth2.client;\n\nimport jakarta.servlet.http.HttpServletRequest;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.oauth2.client.OAuth2AuthorizedClient;\nimport org.springframework.security.oauth2.client.OAuth2AuthorizedClientManager;\nimport org.springframework.security.oauth2.client.OAuth2AuthorizedClientProvider;\nimport org.springframework.security.oauth2.client.OAuth2AuthorizedClientProviderBuilder;\nimport org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;\nimport org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;\nimport org.springframework.security.oauth2.client.web.DefaultOAuth2AuthorizedClientManager;\nimport org.springframework.security.oauth2.client.web.OAuth2AuthorizedClientRepository;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@Configuration\npublic class AuthorizedClientConfig {\n\n    @Bean\n    public OAuth2AuthorizedClientManager authorizedClientManager(\n            ClientRegistrationRepository clientRegistrations,\n            OAuth2AuthorizedClientRepository authorizedClients) {\n\n        OAuth2AuthorizedClientProvider provider =\n            OAuth2AuthorizedClientProviderBuilder.builder()\n                .authorizationCode()\n                .refreshToken()\n                .clientCredentials()\n                .build();\n\n        DefaultOAuth2AuthorizedClientManager manager =\n            new DefaultOAuth2AuthorizedClientManager(\n                clientRegistrations, authorizedClients);\n        manager.setAuthorizedClientProvider(provider);\n\n        return manager;\n    }\n}\n\n@RestController\nclass UserController {\n\n    @GetMapping(\"/user-info\")\n    public String getUserInfo(\n            @RegisteredOAuth2AuthorizedClient(\"google\")\n            OAuth2AuthorizedClient authorizedClient) {\n\n        String accessToken = authorizedClient.getAccessToken().getTokenValue();\n        // Use the access token to call Google's API\n        return \"Access token: \" + accessToken;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "making-api-calls-with-the-client",
      children: "Making API Calls with the Client"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.oauth2.client;\n\nimport org.springframework.http.HttpEntity;\nimport org.springframework.http.HttpHeaders;\nimport org.springframework.http.HttpMethod;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.security.oauth2.client.OAuth2AuthorizedClient;\nimport org.springframework.security.oauth2.client.OAuth2AuthorizedClientManager;\nimport org.springframework.security.oauth2.client.OAuth2AuthorizeRequest;\nimport org.springframework.stereotype.Service;\nimport org.springframework.web.client.RestTemplate;\n\n@Service\npublic class ApiClientService {\n\n    private final OAuth2AuthorizedClientManager authorizedClientManager;\n    private final RestTemplate restTemplate;\n\n    public ApiClientService(OAuth2AuthorizedClientManager authorizedClientManager,\n                            RestTemplate restTemplate) {\n        this.authorizedClientManager = authorizedClientManager;\n        this.restTemplate = restTemplate;\n    }\n\n    public String callUserApi(String registrationId, String apiUrl) {\n        OAuth2AuthorizeRequest authorizeRequest = OAuth2AuthorizeRequest\n            .withClientRegistrationId(registrationId)\n            .principal(\"internal\")\n            .build();\n\n        OAuth2AuthorizedClient authorizedClient =\n            authorizedClientManager.authorize(authorizeRequest);\n\n        String token = authorizedClient.getAccessToken().getTokenValue();\n\n        HttpHeaders headers = new HttpHeaders();\n        headers.setBearerAuth(token);\n        HttpEntity<Void> entity = new HttpEntity<>(headers);\n\n        ResponseEntity<String> response = restTemplate.exchange(\n            apiUrl, HttpMethod.GET, entity, String.class);\n\n        return response.getBody();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "oauth2-resource-server",
      children: "OAuth2 Resource Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An OAuth2 resource server validates access tokens and extracts user information from them, rather than managing its own user store."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dependencies-1",
      children: "Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-oauth2-resource-server</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jwt-decoder-with-jwk-set-uri",
      children: "JWT Decoder with JWK Set URI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The resource server fetches public keys from the authorization server's JWK Set URI to validate token signatures:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# application.yml\nspring:\n  security:\n    oauth2:\n      resource-server:\n        jwt:\n          issuer-uri: https://auth.example.com\n          jwk-set-uri: https://auth.example.com/.well-known/jwks.json\n          audiences: https://api.example.com\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.oauth2.resourceserver;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\nimport org.springframework.security.config.http.SessionCreationPolicy;\nimport org.springframework.security.oauth2.jwt.JwtDecoder;\nimport org.springframework.security.oauth2.jwt.JwtDecoders;\nimport org.springframework.security.oauth2.jwt.NimbusJwtDecoder;\nimport org.springframework.security.web.SecurityFilterChain;\n\n@Configuration\n@EnableWebSecurity\npublic class ResourceServerConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers(\"/api/public/**\").permitAll()\n                .requestMatchers(\"/api/admin/**\").hasAuthority(\"SCOPE_admin\")\n                .anyRequest().authenticated()\n            )\n            .sessionManagement(session -> session\n                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)\n            )\n            .oauth2ResourceServer(oauth2 -> oauth2\n                .jwt(jwt -> jwt\n                    .decoder(jwtDecoder())\n                )\n            )\n            .csrf(csrf -> csrf.disable());\n\n        return http.build();\n    }\n\n    @Bean\n    public JwtDecoder jwtDecoder() {\n        return NimbusJwtDecoder\n            .withJwkSetUri(\"https://auth.example.com/.well-known/jwks.json\")\n            .build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-jwt-authentication-converter",
      children: "Custom JWT Authentication Converter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Extract custom claims from the JWT into Spring Security authorities:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.oauth2.resourceserver;\n\nimport java.util.Collection;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.stream.Collectors;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.core.convert.converter.Converter;\nimport org.springframework.security.authentication.AbstractAuthenticationToken;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\nimport org.springframework.security.config.http.SessionCreationPolicy;\nimport org.springframework.security.oauth2.jwt.Jwt;\nimport org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;\nimport org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;\nimport org.springframework.security.oauth2.server.resource.authentication.JwtGrantedAuthoritiesConverter;\nimport org.springframework.security.web.SecurityFilterChain;\nimport org.springframework.security.core.GrantedAuthority;\nimport org.springframework.security.core.authority.SimpleGrantedAuthority;\n\n@Configuration\n@EnableWebSecurity\npublic class CustomJwtResourceServerConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .authorizeHttpRequests(auth -> auth\n                .anyRequest().authenticated()\n            )\n            .sessionManagement(session -> session\n                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)\n            )\n            .oauth2ResourceServer(oauth2 -> oauth2\n                .jwt(jwt -> jwt\n                    .jwtAuthenticationConverter(jwtAuthenticationConverter())\n                )\n            );\n\n        return http.build();\n    }\n\n    @Bean\n    public Converter<Jwt, AbstractAuthenticationToken> jwtAuthenticationConverter() {\n        JwtAuthenticationConverter converter = new JwtAuthenticationConverter();\n\n        // Extract roles from the JWT's \"realm_access.roles\" claim (Keycloak format)\n        JwtGrantedAuthoritiesConverter grantedAuthorities =\n            new JwtGrantedAuthoritiesConverter();\n        grantedAuthorities.setAuthorityPrefix(\"ROLE_\");\n        grantedAuthorities.setAuthoritiesClaimName(\"realm_access\");\n\n        // Override to properly extract from nested structure\n        converter.setJwtGrantedAuthoritiesConverter(\n            new KeycloakRolesConverter());\n        converter.setPrincipalClaimName(\"preferred_username\");\n\n        return converter;\n    }\n}\n\nclass KeycloakRolesConverter\n        implements Converter<Jwt, Collection<GrantedAuthority>> {\n\n    @Override\n    public Collection<GrantedAuthority> convert(Jwt jwt) {\n        Map<String, Object> realmAccess =\n            jwt.getClaimAsMap(\"realm_access\");\n        if (realmAccess == null || realmAccess.isEmpty()) {\n            return List.of();\n        }\n\n        @SuppressWarnings(\"unchecked\")\n        List<String> roles = (List<String>) realmAccess.get(\"roles\");\n\n        return roles.stream()\n            .map(role -> new SimpleGrantedAuthority(\"ROLE_\" + role))\n            .collect(Collectors.toList());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opaque-token-introspection",
      children: "Opaque Token Introspection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Some authorization servers use opaque tokens (random strings, not JWTs). The resource server must call the introspection endpoint to validate them:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.oauth2.resourceserver;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\nimport org.springframework.security.config.http.SessionCreationPolicy;\nimport org.springframework.security.oauth2.server.resource.introspection.OpaqueTokenIntrospector;\nimport org.springframework.security.web.SecurityFilterChain;\n\n@Configuration\n@EnableWebSecurity\npublic class OpaqueTokenConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .authorizeHttpRequests(auth -> auth\n                .anyRequest().authenticated()\n            )\n            .sessionManagement(session -> session\n                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)\n            )\n            .oauth2ResourceServer(oauth2 -> oauth2\n                .opaqueToken(opaque -> opaque\n                    .introspector(opaqueTokenIntrospector())\n                )\n            );\n\n        return http.build();\n    }\n\n    @Bean\n    public OpaqueTokenIntrospector opaqueTokenIntrospector() {\n        return new CustomOpaqueTokenIntrospector(\n            \"https://auth.example.com/introspect\",\n            \"resource-server\",\n            \"resource-server-secret\"\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.oauth2.resourceserver;\n\nimport java.net.URI;\nimport java.net.http.HttpClient;\nimport java.net.http.HttpRequest;\nimport java.net.http.HttpResponse;\nimport java.time.Instant;\nimport java.util.Base64;\nimport java.util.List;\nimport java.util.Map;\n\nimport org.springframework.security.oauth2.core.OAuth2AuthenticatedPrincipal;\nimport org.springframework.security.oauth2.server.resource.introspection.OAuth2IntrospectionClaimNames;\nimport org.springframework.security.oauth2.server.resource.introspection.OpaqueTokenIntrospector;\nimport org.springframework.security.oauth2.server.resource.introspection.SpringOpaqueTokenIntrospector;\n\nimport com.fasterxml.jackson.core.type.TypeReference;\nimport com.fasterxml.jackson.databind.ObjectMapper;\n\npublic class CustomOpaqueTokenIntrospector implements OpaqueTokenIntrospector {\n\n    private final String introspectionUri;\n    private final String clientId;\n    private final String clientSecret;\n    private final HttpClient httpClient;\n    private final ObjectMapper objectMapper;\n\n    public CustomOpaqueTokenIntrospector(String introspectionUri,\n                                          String clientId,\n                                          String clientSecret) {\n        this.introspectionUri = introspectionUri;\n        this.clientId = clientId;\n        this.clientSecret = clientSecret;\n        this.httpClient = HttpClient.newHttpClient();\n        this.objectMapper = new ObjectMapper();\n    }\n\n    @Override\n    public OAuth2AuthenticatedPrincipal introspect(String token) {\n        try {\n            String basicAuth = Base64.getEncoder().encodeToString(\n                (clientId + \":\" + clientSecret).getBytes());\n\n            String body = \"token=\" + token + \"&token_type_hint=access_token\";\n\n            HttpRequest request = HttpRequest.newBuilder()\n                .uri(URI.create(introspectionUri))\n                .header(\"Authorization\", \"Basic \" + basicAuth)\n                .header(\"Content-Type\", \"application/x-www-form-urlencoded\")\n                .POST(HttpRequest.BodyPublishers.ofString(body))\n                .build();\n\n            HttpResponse<String> response = httpClient.send(request,\n                HttpResponse.BodyHandlers.ofString());\n\n            Map<String, Object> claims = objectMapper.readValue(\n                response.body(),\n                new TypeReference<Map<String, Object>>() {}\n            );\n\n            boolean active = (boolean) claims.getOrDefault(\"active\", false);\n            if (!active) {\n                throw new SecurityException(\"Token is not active\");\n            }\n\n            String subject = (String) claims.get(\"sub\");\n            List<String> roles = extractRoles(claims);\n\n            return new OAuth2AuthenticatedPrincipal() {\n                @Override\n                public Map<String, Object> getAttributes() {\n                    return claims;\n                }\n\n                @Override\n                public Collection<? extends GrantedAuthority> getAuthorities() {\n                    return roles.stream()\n                        .map(SimpleGrantedAuthority::new)\n                        .toList();\n                }\n\n                @Override\n                public String getName() {\n                    return subject;\n                }\n            };\n        } catch (Exception e) {\n            throw new SecurityException(\"Token introspection failed\", e);\n        }\n    }\n\n    @SuppressWarnings(\"unchecked\")\n    private List<String> extractRoles(Map<String, Object> claims) {\n        if (claims.containsKey(\"realm_access\")) {\n            Map<String, Object> realmAccess =\n                (Map<String, Object>) claims.get(\"realm_access\");\n            return (List<String>) realmAccess.getOrDefault(\"roles\", List.of());\n        }\n        return List.of();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bearer-token-resolver",
      children: "Bearer Token Resolver"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Customize how the bearer token is extracted from the request:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.oauth2.resourceserver;\n\nimport jakarta.servlet.http.HttpServletRequest;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\nimport org.springframework.security.config.http.SessionCreationPolicy;\nimport org.springframework.security.oauth2.server.resource.web.BearerTokenResolver;\nimport org.springframework.security.oauth2.server.resource.web.DefaultBearerTokenResolver;\nimport org.springframework.security.web.SecurityFilterChain;\n\n@Configuration\n@EnableWebSecurity\npublic class BearerTokenResolverConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .authorizeHttpRequests(auth -> auth\n                .anyRequest().authenticated()\n            )\n            .sessionManagement(session -> session\n                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)\n            )\n            .oauth2ResourceServer(oauth2 -> oauth2\n                .bearerTokenResolver(customBearerTokenResolver())\n                .jwt(jwt -> {})\n            );\n\n        return http.build();\n    }\n\n    @Bean\n    public BearerTokenResolver customBearerTokenResolver() {\n        // Default: reads from Authorization: Bearer <token> header\n        DefaultBearerTokenResolver resolver = new DefaultBearerTokenResolver();\n        resolver.setAllowUriQueryParameter(true); // allow ?access_token=xxx\n        resolver.setBearerTokenHeaderName(\"Authorization\");\n\n        return resolver;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "openid-connect-oidc",
      children: "OpenID Connect (OIDC)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OIDC is an identity layer built on top of OAuth2. It adds authentication semantics: the client receives an ID token (a JWT containing user identity information) in addition to the access token."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "openid-connect-discovery",
      children: "OpenID Connect Discovery"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OIDC providers expose metadata at a well-known endpoint:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.oidc;\n\nimport com.fasterxml.jackson.databind.ObjectMapper;\n\nimport java.net.URI;\nimport java.net.http.HttpClient;\nimport java.net.http.HttpRequest;\nimport java.net.http.HttpResponse;\nimport java.util.Map;\n\npublic class OidcDiscovery {\n\n    private final HttpClient httpClient = HttpClient.newHttpClient();\n    private final ObjectMapper objectMapper = new ObjectMapper();\n\n    public OidcProviderMetadata discover(String issuer) throws Exception {\n        String discoveryUrl = issuer + \"/.well-known/openid-configuration\";\n\n        HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(discoveryUrl))\n            .GET()\n            .build();\n\n        HttpResponse<String> response = httpClient.send(request,\n            HttpResponse.BodyHandlers.ofString());\n\n        @SuppressWarnings(\"unchecked\")\n        Map<String, Object> metadata = objectMapper.readValue(\n            response.body(), Map.class);\n\n        return new OidcProviderMetadata(\n            (String) metadata.get(\"issuer\"),\n            (String) metadata.get(\"authorization_endpoint\"),\n            (String) metadata.get(\"token_endpoint\"),\n            (String) metadata.get(\"userinfo_endpoint\"),\n            (String) metadata.get(\"jwks_uri\"),\n            (List<String>) metadata.get(\"response_types_supported\"),\n            (List<String>) metadata.get(\"subject_types_supported\"),\n            (List<String>) metadata.get(\"id_token_signing_alg_values_supported\")\n        );\n    }\n\n    public record OidcProviderMetadata(\n        String issuer,\n        String authorizationEndpoint,\n        String tokenEndpoint,\n        String userinfoEndpoint,\n        String jwksUri,\n        List<String> responseTypesSupported,\n        List<String> subjectTypesSupported,\n        List<String> idTokenSigningAlgorithms\n    ) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "id-token",
      children: "ID Token"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An ID token is a JWT with a specific set of claims:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.oidc;\n\nimport io.jsonwebtoken.Claims;\nimport io.jsonwebtoken.Jwts;\nimport io.jsonwebtoken.security.Keys;\n\nimport javax.crypto.SecretKey;\nimport java.util.Base64;\nimport java.util.Date;\n\npublic class IdTokenValidator {\n\n    private final SecretKey secretKey;\n\n    public IdTokenValidator(String base64Secret) {\n        this.secretKey = Keys.hmacShaKeyFor(\n            Base64.getDecoder().decode(base64Secret));\n    }\n\n    public IdTokenClaims validateIdToken(String idToken) {\n        Claims claims = Jwts.parser()\n            .verifyWith(secretKey)\n            .requireIssuer(\"https://accounts.google.com\")\n            .requireAudience(\"your-client-id\")\n            .build()\n            .parseSignedClaims(idToken)\n            .getPayload();\n\n        // Standard OIDC claims\n        return new IdTokenClaims(\n            claims.getSubject(),           // sub — unique identifier\n            claims.get(\"name\", String.class),\n            claims.get(\"email\", String.class),\n            claims.get(\"email_verified\", Boolean.class),\n            claims.get(\"picture\", String.class),\n            claims.get(\"locale\", String.class),\n            claims.getIssuedAt(),\n            claims.getExpiration(),\n            claims.getIssuer(),\n            claims.getAudience()\n        );\n    }\n\n    public record IdTokenClaims(\n        String sub,\n        String name,\n        String email,\n        Boolean emailVerified,\n        String picture,\n        String locale,\n        Date issuedAt,\n        Date expiration,\n        String issuer,\n        String audience\n    ) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "userinfo-endpoint",
      children: "UserInfo Endpoint"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The UserInfo endpoint returns claims about the authenticated user. It is called with the access token:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.oidc;\n\nimport java.net.URI;\nimport java.net.http.HttpClient;\nimport java.net.http.HttpRequest;\nimport java.net.http.HttpResponse;\n\nimport com.fasterxml.jackson.databind.ObjectMapper;\n\npublic class UserInfoClient {\n\n    private static final String USERINFO_URL =\n        \"https://www.googleapis.com/oauth2/v3/userinfo\";\n\n    private final HttpClient httpClient = HttpClient.newHttpClient();\n    private final ObjectMapper objectMapper = new ObjectMapper();\n\n    public UserInfoResponse getUserInfo(String accessToken) throws Exception {\n        HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(USERINFO_URL))\n            .header(\"Authorization\", \"Bearer \" + accessToken)\n            .GET()\n            .build();\n\n        HttpResponse<String> response = httpClient.send(request,\n            HttpResponse.BodyHandlers.ofString());\n\n        return objectMapper.readValue(response.body(), UserInfoResponse.class);\n    }\n\n    public record UserInfoResponse(\n        String sub,\n        String name,\n        String given_name,\n        String family_name,\n        String picture,\n        String email,\n        boolean email_verified,\n        String locale\n    ) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "spring-security-oidc-support",
      children: "Spring Security OIDC Support"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Security provides first-class OIDC support through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OidcUser"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OidcUserService"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.oidc;\n\nimport java.util.Collection;\nimport java.util.Map;\n\nimport org.springframework.security.core.GrantedAuthority;\nimport org.springframework.security.oauth2.core.oidc.OidcIdToken;\nimport org.springframework.security.oauth2.core.oidc.OidcUserInfo;\nimport org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;\nimport org.springframework.security.oauth2.core.oidc.user.OidcUser;\nimport org.springframework.security.oauth2.core.oidc.user.OidcUserAuthority;\n\nimport org.springframework.stereotype.Controller;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.ResponseBody;\n\n@Controller\npublic class OidcUserController {\n\n    @GetMapping(\"/oidc/user\")\n    @ResponseBody\n    public OidcUserInfo getOidcUserInfo(OidcUser oidcUser) {\n        // Spring Security automatically populates OidcUser\n        // when using oauth2Login() with an OIDC provider\n\n        String email = oidcUser.getEmail();\n        String name = oidcUser.getFullName();\n        String picture = oidcUser.getPicture();\n        String subject = oidcUser.getSubject();\n        OidcIdToken idToken = oidcUser.getIdToken();\n        Map<String, Object> claims = oidcUser.getClaims();\n\n        return oidcUser.getUserInfo();\n    }\n\n    @GetMapping(\"/oidc/token\")\n    @ResponseBody\n    public String getToken(OidcUser oidcUser) {\n        return oidcUser.getIdToken().getTokenValue();\n    }\n\n    @GetMapping(\"/oidc/claims\")\n    @ResponseBody\n    public Map<String, Object> getClaims(OidcUser oidcUser) {\n        return oidcUser.getClaims();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-oidcuserservice",
      children: "Custom OidcUserService"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Customize how OIDC user information is loaded:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.oidc;\n\nimport org.springframework.security.oauth2.client.oidc.userinfo.OidcUserRequest;\nimport org.springframework.security.oauth2.client.oidc.userinfo.OidcUserService;\nimport org.springframework.security.oauth2.core.OAuth2AuthenticationException;\nimport org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;\nimport org.springframework.security.oauth2.core.oidc.user.OidcUser;\nimport org.springframework.stereotype.Service;\n\n@Service\npublic class CustomOidcUserService extends OidcUserService {\n\n    private final LocalUserService localUserService;\n\n    public CustomOidcUserService(LocalUserService localUserService) {\n        this.localUserService = localUserService;\n    }\n\n    @Override\n    public OidcUser loadUser(OidcUserRequest userRequest)\n            throws OAuth2AuthenticationException {\n        // Load user from OIDC provider (Google, etc.)\n        OidcUser oidcUser = super.loadUser(userRequest);\n\n        String email = oidcUser.getEmail();\n        String name = oidcUser.getFullName();\n        String provider = userRequest.getClientRegistration().getRegistrationId();\n\n        // Find or create local user\n        LocalUser localUser = localUserService.findOrCreate(\n            provider, oidcUser.getSubject(), email, name);\n\n        // Add local roles to the OIDC user's authorities\n        var authorities = new java.util.ArrayList<>(oidcUser.getAuthorities());\n        localUser.getRoles().forEach(role ->\n            authorities.add(new SimpleGrantedAuthority(\"ROLE_\" + role)));\n\n        return new DefaultOidcUser(\n            authorities,\n            oidcUser.getIdToken(),\n            oidcUser.getUserInfo(),\n            \"email\" // name attribute key\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!NOTE]\nOIDC is not OAuth2 → it adds user authentication on top of OAuth2 delegation. An ID Token proves who the user is, not what they can access."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "social-login",
      children: "Social Login"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Social login allows users to authenticate with their existing accounts on Google, GitHub, Facebook, or other providers. Spring Security's OAuth2 client support makes this straightforward."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "google-login",
      children: "Google Login"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# application.yml\nspring:\n  security:\n    oauth2:\n      client:\n        registration:\n          google:\n            client-id: 123456789-abc123def456.apps.googleusercontent.com\n            client-secret: GOCSPX-xxxxxxxxxxxxxxxxxxxx\n            scope:\n              - openid\n              - profile\n              - email\n            redirect-uri: \"{baseUrl}/login/oauth2/code/{registrationId}\"\n            client-name: Google\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.social;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\nimport org.springframework.security.web.SecurityFilterChain;\n\n@Configuration\n@EnableWebSecurity\npublic class SocialLoginConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers(\"/\", \"/login\", \"/error\").permitAll()\n                .anyRequest().authenticated()\n            )\n            .oauth2Login(oauth2 -> oauth2\n                .loginPage(\"/login\")\n                .defaultSuccessUrl(\"/dashboard\")\n                .failureUrl(\"/login?error\")\n            )\n            .logout(logout -> logout\n                .logoutSuccessUrl(\"/\")\n            );\n\n        return http.build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "github-login",
      children: "GitHub Login"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "spring:\n  security:\n    oauth2:\n      client:\n        registration:\n          github:\n            client-id: Iv1.xxxxxxxxxxxx\n            client-secret: xxxxxxxxxxxxxxxxxxxxxx\n            scope: read:user, user:email\n            redirect-uri: \"{baseUrl}/login/oauth2/code/{registrationId}\"\n            client-name: GitHub\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "facebook-login",
      children: "Facebook Login"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "spring:\n  security:\n    oauth2:\n      client:\n        registration:\n          facebook:\n            client-id: 123456789012345\n            client-secret: xxxxxxxxxxxxxxxxxxxxxxxxxx\n            scope: email, public_profile\n            redirect-uri: \"{baseUrl}/login/oauth2/code/{registrationId}\"\n            client-name: Facebook\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-oauth2userservice",
      children: "Custom OAuth2UserService"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When you need to transform the OAuth2 user into a local user entity:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.social;\n\nimport java.util.Map;\n\nimport org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;\nimport org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;\nimport org.springframework.security.oauth2.client.userinfo.OAuth2UserService;\nimport org.springframework.security.oauth2.core.OAuth2AuthenticationException;\nimport org.springframework.security.oauth2.core.user.DefaultOAuth2User;\nimport org.springframework.security.oauth2.core.user.OAuth2User;\nimport org.springframework.stereotype.Service;\n\n@Service\npublic class CustomOAuth2UserService\n        implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {\n\n    private final DefaultOAuth2UserService delegate = new DefaultOAuth2UserService();\n    private final LocalUserRepository localUserRepository;\n\n    public CustomOAuth2UserService(LocalUserRepository localUserRepository) {\n        this.localUserRepository = localUserRepository;\n    }\n\n    @Override\n    public OAuth2User loadUser(OAuth2UserRequest userRequest)\n            throws OAuth2AuthenticationException {\n\n        OAuth2User oauth2User = delegate.loadUser(userRequest);\n        String registrationId = userRequest.getClientRegistration()\n            .getRegistrationId();\n\n        // Extract user info from provider-specific attributes\n        String email = extractEmail(registrationId, oauth2User.getAttributes());\n        String name = extractName(registrationId, oauth2User.getAttributes());\n\n        // Find or create local user\n        LocalUser localUser = localUserRepository\n            .findByProviderAndProviderId(registrationId, oauth2User.getName())\n            .orElseGet(() -> {\n                LocalUser newUser = new LocalUser(\n                    registrationId,\n                    oauth2User.getName(),\n                    email,\n                    name\n                );\n                return localUserRepository.save(newUser);\n            });\n\n        // Update last login time\n        localUser.setLastLogin(java.time.Instant.now());\n        localUserRepository.save(localUser);\n\n        // Return the OAuth2 user with additional authorities from local roles\n        var authorities = new java.util.ArrayList<>(oauth2User.getAuthorities());\n        localUser.getRoles().forEach(role ->\n            authorities.add(new SimpleGrantedAuthority(\"ROLE_\" + role)));\n\n        return new DefaultOAuth2User(\n            authorities,\n            oauth2User.getAttributes(),\n            determineNameAttributeKey(registrationId)\n        );\n    }\n\n    private String extractEmail(String registrationId,\n                                 Map<String, Object> attributes) {\n        return switch (registrationId) {\n            case \"google\" -> (String) attributes.get(\"email\");\n            case \"github\" -> (String) attributes.get(\"email\");\n            case \"facebook\" -> (String) attributes.get(\"email\");\n            default -> \"\";\n        };\n    }\n\n    private String extractName(String registrationId,\n                                Map<String, Object> attributes) {\n        return switch (registrationId) {\n            case \"google\" -> (String) attributes.get(\"name\");\n            case \"github\" -> (String) attributes.get(\"login\");\n            case \"facebook\" -> (String) attributes.get(\"name\");\n            default -> \"\";\n        };\n    }\n\n    private String determineNameAttributeKey(String registrationId) {\n        return switch (registrationId) {\n            case \"google\" -> \"email\";\n            case \"github\" -> \"login\";\n            case \"facebook\" -> \"id\";\n            default -> \"sub\";\n        };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-oauth2userservice-registration",
      children: "Custom OAuth2UserService Registration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.social;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\nimport org.springframework.security.web.SecurityFilterChain;\n\nimport com.course.oidc.CustomOidcUserService;\n\n@Configuration\n@EnableWebSecurity\npublic class CustomSocialLoginConfig {\n\n    private final CustomOAuth2UserService customOAuth2UserService;\n    private final CustomOidcUserService customOidcUserService;\n\n    public CustomSocialLoginConfig(CustomOAuth2UserService customOAuth2UserService,\n                                    CustomOidcUserService customOidcUserService) {\n        this.customOAuth2UserService = customOAuth2UserService;\n        this.customOidcUserService = customOidcUserService;\n    }\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers(\"/\", \"/login\", \"/error\").permitAll()\n                .anyRequest().authenticated()\n            )\n            .oauth2Login(oauth2 -> oauth2\n                .loginPage(\"/login\")\n                .userInfoEndpoint(userInfo -> userInfo\n                    .userService(customOAuth2UserService)\n                    .oidcUserService(customOidcUserService)\n                )\n                .successHandler((request, response, authentication) -> {\n                    // Custom post-login logic\n                    response.sendRedirect(\"/dashboard\");\n                })\n            );\n\n        return http.build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "account-linking",
      children: "Account Linking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Link multiple social accounts to the same local user:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.social;\n\nimport org.springframework.stereotype.Service;\n\n@Service\npublic class AccountLinkingService {\n\n    private final LocalUserRepository localUserRepository;\n\n    public AccountLinkingService(LocalUserRepository localUserRepository) {\n        this.localUserRepository = localUserRepository;\n    }\n\n    public LocalUser findOrCreateUser(String provider, String providerId,\n                                       String email, String name) {\n        // First, try to find by email (linking)\n        if (email != null && !email.isBlank()) {\n            return localUserRepository.findByEmail(email)\n                .map(existingUser -> {\n                    // Link this provider to the existing account\n                    if (!existingUser.hasProvider(provider, providerId)) {\n                        existingUser.addProvider(provider, providerId);\n                        localUserRepository.save(existingUser);\n                    }\n                    return existingUser;\n                })\n                .orElseGet(() -> createNewUser(provider, providerId, email, name));\n        }\n\n        // No email — try by provider + providerId\n        return localUserRepository\n            .findByProviderAndProviderId(provider, providerId)\n            .orElseGet(() -> createNewUser(provider, providerId, email, name));\n    }\n\n    public LocalUser linkAccount(Long localUserId, String provider,\n                                  String providerId) {\n        LocalUser user = localUserRepository.findById(localUserId)\n            .orElseThrow(() -> new RuntimeException(\"User not found\"));\n\n        user.addProvider(provider, providerId);\n        return localUserRepository.save(user);\n    }\n\n    public void unlinkAccount(Long localUserId, String provider) {\n        LocalUser user = localUserRepository.findById(localUserId)\n            .orElseThrow(() -> new RuntimeException(\"User not found\"));\n\n        user.removeProvider(provider);\n        localUserRepository.save(user);\n    }\n\n    private LocalUser createNewUser(String provider, String providerId,\n                                     String email, String name) {\n        LocalUser user = new LocalUser(provider, providerId, email, name);\n        return localUserRepository.save(user);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.social;\n\nimport jakarta.persistence.*;\n\nimport java.time.Instant;\nimport java.util.*;\n\n@Entity\n@Table(name = \"local_users\")\npublic class LocalUser {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    private String email;\n    private String displayName;\n\n    @ElementCollection\n    @CollectionTable(name = \"user_providers\",\n        joinColumns = @JoinColumn(name = \"user_id\"))\n    private List<ProviderLink> providers = new ArrayList<>();\n\n    @ElementCollection(fetch = FetchType.EAGER)\n    private List<String> roles = new ArrayList<>();\n\n    private Instant lastLogin;\n    private Instant createdAt;\n\n    public LocalUser() {\n        this.createdAt = Instant.now();\n        this.roles = List.of(\"USER\");\n    }\n\n    public LocalUser(String provider, String providerId,\n                     String email, String displayName) {\n        this();\n        this.email = email;\n        this.displayName = displayName;\n        this.providers.add(new ProviderLink(provider, providerId));\n    }\n\n    public boolean hasProvider(String provider, String providerId) {\n        return providers.stream()\n            .anyMatch(p -> p.getProvider().equals(provider)\n                && p.getProviderId().equals(providerId));\n    }\n\n    public void addProvider(String provider, String providerId) {\n        providers.add(new ProviderLink(provider, providerId));\n    }\n\n    public void removeProvider(String provider) {\n        providers.removeIf(p -> p.getProvider().equals(provider));\n    }\n\n    // Getters and setters\n    public Long getId() { return id; }\n    public String getEmail() { return email; }\n    public void setEmail(String email) { this.email = email; }\n    public String getDisplayName() { return displayName; }\n    public void setDisplayName(String displayName) { this.displayName = displayName; }\n    public List<ProviderLink> getProviders() { return providers; }\n    public List<String> getRoles() { return roles; }\n    public void setRoles(List<String> roles) { this.roles = roles; }\n    public Instant getLastLogin() { return lastLogin; }\n    public void setLastLogin(Instant lastLogin) { this.lastLogin = lastLogin; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.social;\n\nimport jakarta.persistence.Embeddable;\n\n@Embeddable\npublic class ProviderLink {\n\n    private String provider;  // \"google\", \"github\", \"facebook\"\n    private String providerId; // the user's ID at the provider\n\n    public ProviderLink() {}\n\n    public ProviderLink(String provider, String providerId) {\n        this.provider = provider;\n        this.providerId = providerId;\n    }\n\n    public String getProvider() { return provider; }\n    public void setProvider(String provider) { this.provider = provider; }\n    public String getProviderId() { return providerId; }\n    public void setProviderId(String providerId) { this.providerId = providerId; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "login-controller",
      children: "Login Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.social;\n\nimport java.util.Map;\n\nimport org.springframework.security.core.annotation.AuthenticationPrincipal;\nimport org.springframework.security.oauth2.core.user.OAuth2User;\nimport org.springframework.stereotype.Controller;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.ResponseBody;\n\n@Controller\npublic class LoginController {\n\n    @GetMapping(\"/\")\n    public String home() {\n        return \"home\";\n    }\n\n    @GetMapping(\"/login\")\n    public String login() {\n        return \"login\";\n    }\n\n    @GetMapping(\"/dashboard\")\n    @ResponseBody\n    public Map<String, Object> dashboard(\n            @AuthenticationPrincipal OAuth2User principal) {\n        return Map.of(\n            \"name\", principal.getAttribute(\"name\"),\n            \"email\", principal.getAttribute(\"email\"),\n            \"authorities\", principal.getAuthorities(),\n            \"attributes\", principal.getAttributes()\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "login-page-template",
      children: "Login Page Template"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!-- src/main/resources/templates/login.html -->\n<!DOCTYPE html>\n<html xmlns:th=\"http://www.thymeleaf.org\">\n<head>\n    <title>Login</title>\n</head>\n<body>\n    <h1>Sign In</h1>\n\n    <div>\n        <a href=\"/oauth2/authorization/google\">\n            Sign in with Google\n        </a>\n    </div>\n    <div>\n        <a href=\"/oauth2/authorization/github\">\n            Sign in with GitHub\n        </a>\n    </div>\n    <div>\n        <a href=\"/oauth2/authorization/facebook\">\n            Sign in with Facebook\n        </a>\n    </div>\n</body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "complete-resource-server-example",
      children: "Complete Resource Server Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A complete Spring Boot resource server that validates JWTs and exposes protected endpoints:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.oauth2.resourceserver;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication\npublic class ResourceServerApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(ResourceServerApplication.class, args);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.oauth2.resourceserver;\n\nimport java.util.Map;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\nimport org.springframework.security.config.http.SessionCreationPolicy;\nimport org.springframework.security.oauth2.jwt.JwtDecoder;\nimport org.springframework.security.oauth2.jwt.NimbusJwtDecoder;\nimport org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;\nimport org.springframework.security.oauth2.server.resource.authentication.JwtGrantedAuthoritiesConverter;\nimport org.springframework.security.web.SecurityFilterChain;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@Configuration\n@EnableWebSecurity\npublic class ResourceServerSecurityConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers(\"/api/public/**\").permitAll()\n                .requestMatchers(\"/api/admin/**\").hasRole(\"ADMIN\")\n                .anyRequest().authenticated()\n            )\n            .sessionManagement(session -> session\n                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)\n            )\n            .oauth2ResourceServer(oauth2 -> oauth2\n                .jwt(jwt -> jwt\n                    .jwtAuthenticationConverter(jwtAuthenticationConverter())\n                )\n            )\n            .csrf(csrf -> csrf.disable());\n\n        return http.build();\n    }\n\n    @Bean\n    public JwtDecoder jwtDecoder() {\n        return NimbusJwtDecoder\n            .withJwkSetUri(\"https://auth.example.com/.well-known/jwks.json\")\n            .build();\n    }\n\n    private JwtAuthenticationConverter jwtAuthenticationConverter() {\n        JwtGrantedAuthoritiesConverter grantedAuthorities =\n            new JwtGrantedAuthoritiesConverter();\n        grantedAuthorities.setAuthorityPrefix(\"ROLE_\");\n        grantedAuthorities.setAuthoritiesClaimName(\"roles\");\n\n        JwtAuthenticationConverter converter = new JwtAuthenticationConverter();\n        converter.setJwtGrantedAuthoritiesConverter(grantedAuthorities);\n        converter.setPrincipalClaimName(\"sub\");\n\n        return converter;\n    }\n}\n\n@RestController\nclass ResourceController {\n\n    @GetMapping(\"/api/public/health\")\n    public Map<String, String> health() {\n        return Map.of(\"status\", \"UP\");\n    }\n\n    @GetMapping(\"/api/users/me\")\n    public Map<String, Object> me(\n            @AuthenticationPrincipal JwtAuthenticationToken token) {\n        return Map.of(\n            \"subject\", token.getToken().getSubject(),\n            \"claims\", token.getToken().getClaims(),\n            \"authorities\", token.getAuthorities()\n        );\n    }\n\n    @GetMapping(\"/api/admin/users\")\n    public Map<String, Object> adminOnly(\n            @AuthenticationPrincipal JwtAuthenticationToken token) {\n        return Map.of(\n            \"message\", \"Welcome admin!\",\n            \"user\", token.getName()\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "complete-client-application-example",
      children: "Complete Client Application Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Spring Boot application that acts as an OAuth2 client:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.oauth2.client;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication\npublic class ClientApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(ClientApplication.class, args);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.oauth2.client;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\nimport org.springframework.security.oauth2.client.OAuth2AuthorizedClient;\nimport org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;\nimport org.springframework.security.oauth2.client.web.DefaultOAuth2AuthorizedClientManager;\nimport org.springframework.security.oauth2.client.web.OAuth2AuthorizedClientRepository;\nimport org.springframework.security.oauth2.core.endpoint.OAuth2ParameterNames;\nimport org.springframework.security.web.SecurityFilterChain;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\nimport jakarta.servlet.http.HttpServletRequest;\n\n@Configuration\n@EnableWebSecurity\npublic class ClientSecurityConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers(\"/\", \"/login\", \"/error\").permitAll()\n                .anyRequest().authenticated()\n            )\n            .oauth2Login(withDefaults())\n            .logout(logout -> logout\n                .logoutSuccessUrl(\"/\")\n            );\n\n        return http.build();\n    }\n}\n\n@RestController\nclass ApiController {\n\n    @GetMapping(\"/call-google-api\")\n    public String callGoogleApi(\n            @RegisteredOAuth2AuthorizedClient(\"google\")\n            OAuth2AuthorizedClient googleClient) {\n\n        String token = googleClient.getAccessToken().getTokenValue();\n        // Use token to call Google APIs\n        return \"Access token: \" + token;\n    }\n\n    @GetMapping(\"/call-github-api\")\n    public String callGitHubApi(\n            @RegisteredOAuth2AuthorizedClient(\"github\")\n            OAuth2AuthorizedClient githubClient) {\n\n        String token = githubClient.getAccessToken().getTokenValue();\n        // Use token to call GitHub APIs\n        return \"Access token: \" + token;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "JWT"
        }), " is a compact, URL-safe token format with three segments: header (algorithm), payload (claims), and signature (integrity). JWS provides signed tokens; JWE provides encrypted tokens."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nimbus JOSE + JWT"
        }), " is the default library used by Spring Security. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "jjwt"
        }), " provides a popular fluent API for creating and validating JWTs. Always handle exceptions: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ExpiredJwtException"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MalformedJwtException"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SecurityException"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Refreshing tokens"
        }), " requires both a short-lived access token and a long-lived refresh token. Implement rotation (issue a new refresh token with every refresh) and a blacklist for revocation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OAuth2 Authorization Code + PKCE"
        }), " is the recommended flow for public clients. The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Client Credentials"
        }), " flow is for machine-to-machine communication. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ROPC"
        }), " is deprecated in OAuth 2.1."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spring Boot OAuth2 Client"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "spring-boot-starter-oauth2-client"
        }), ") handles the Authorization Code flow, token storage, and automatic refresh. Configure registrations in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "application.yml"
        }), " and use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@RegisteredOAuth2AuthorizedClient"
        }), " to inject authorized clients."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spring Boot OAuth2 Resource Server"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "spring-boot-starter-oauth2-resource-server"
        }), ") validates access tokens. Configure JWT decoding with a JWK Set URI or opaque token introspection."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OpenID Connect"
        }), " adds an identity layer to OAuth2. The ID token (a JWT) contains verified user claims. The UserInfo endpoint returns additional claims. Spring Security provides ", (0,jsx_runtime.jsx)(_components.code, {
          children: "OidcUser"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "OidcUserService"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Social login"
        }), " configures OAuth2 login with Google, GitHub, Facebook, and other providers. Implement ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CustomOAuth2UserService"
        }), " to map external users to local user entities. Use the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "account linking"
        }), " pattern to merge multiple provider accounts under a single local user."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "JWT Token Service"
          }), ": Create a complete ", (0,jsx_runtime.jsx)(_components.code, {
            children: "TokenService"
          }), " that generates both access tokens (15 min expiry) and refresh tokens (7 day expiry) using the jjwt library. Include methods for validation, claim extraction, and a blacklist-based revocation mechanism."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "PKCE Flow Simulation"
          }), ": Write a simulation of the Authorization Code + PKCE flow. Generate a code verifier and code challenge, build the authorization URL, simulate the authorization code grant, and exchange it for tokens. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "HttpClient"
          }), " to make the requests against a real OIDC provider like Google or a local Keycloak instance."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Resource Server with Custom Claims"
          }), ": Configure a Spring Boot resource server that reads a custom ", (0,jsx_runtime.jsx)(_components.code, {
            children: "department"
          }), " claim from the JWT and restricts access to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/api/hr/**"
          }), " endpoints to users with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "department=HR"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "OAuth2 Client API Aggregator"
          }), ": Build a Spring Boot application that authenticates via OAuth2 (Google), uses ", (0,jsx_runtime.jsx)(_components.code, {
            children: "OAuth2AuthorizedClientManager"
          }), " to obtain an access token, and calls Google's People API and Calendar API. Return aggregated data in a single response."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom OAuth2UserService"
          }), ": Implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CustomOAuth2UserService"
          }), " that, when a user logs in with GitHub for the first time, creates a local user record with a default role of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ROLE_USER"
          }), ". If the user already exists by email, link the GitHub account to the existing record."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "OIDC Discovery Client"
          }), ": Write a service that fetches and caches the OpenID Connect discovery document from ", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://accounts.google.com/.well-known/openid-configuration"
          }), ". Extract the authorization, token, userinfo, and JWKS endpoints and print them."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Token Revocation with Redis"
          }), ": Replace the in-memory ", (0,jsx_runtime.jsx)(_components.code, {
            children: "TokenBlacklist"
          }), " with a Redis-backed implementation. Store revoked token IDs with a TTL equal to the token's original expiry. Use Spring Data Redis."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-Provider Resource Server"
          }), ": Configure a resource server that accepts JWTs from two different issuers (e.g., Google and Okta). Use different ", (0,jsx_runtime.jsx)(_components.code, {
            children: "JwtDecoder"
          }), " instances based on the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "iss"
          }), " claim."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Account Linking UI"
          }), ": Create a Spring MVC controller and Thymeleaf template that shows the current user's linked provider accounts (Google, GitHub, Facebook) and allows them to link or unlink each provider. Include CSRF protection."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "End-to-End OAuth2 Test"
          }), ": Write a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@WebMvcTest"
          }), " test for a controller that uses ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@RegisteredOAuth2AuthorizedClient"
          }), ". Mock the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "OAuth2AuthorizedClient"
          }), " using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@MockBean"
          }), " and verify that the correct token is sent to downstream services."]
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