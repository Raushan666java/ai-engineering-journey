"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[3302],{

/***/ 421
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_27_method_cors_csrf_md_230_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-27-method-cors-csrf-md-230.json
const site_docs_courses_java_27_method_cors_csrf_md_230_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/27-method-cors-csrf","title":"Method Security, CORS & CSRF","description":"Previous Keycloak","source":"@site/docs/courses/java/27-method-cors-csrf.md","sourceDirName":"courses/java","slug":"/java/27-method-cors-csrf","permalink":"/ai-engineering-journey/java/27-method-cors-csrf","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":27,"frontMatter":{"id":"27-method-cors-csrf","slug":"/java/27-method-cors-csrf","title":"Method Security, CORS & CSRF","sidebar_label":"Method Security, CORS & CSRF","sidebar_position":27},"sidebar":"course-java","previous":{"title":"JWT, OAuth2 & OIDC","permalink":"/ai-engineering-journey/java/26-jwt-oauth2"},"next":{"title":"Keycloak & Identity Federation","permalink":"/ai-engineering-journey/java/28-keycloak"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/java/27-method-cors-csrf.md


const frontMatter = {
	id: '27-method-cors-csrf',
	slug: '/java/27-method-cors-csrf',
	title: 'Method Security, CORS & CSRF',
	sidebar_label: 'Method Security, CORS & CSRF',
	sidebar_position: 27
};
const contentTitle = 'Method Security, CORS & CSRF';

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
  "value": "1. Method Security — @EnableMethodSecurity",
  "id": "1-method-security--enablemethodsecurity",
  "level": 2
}, {
  "value": "1.1 Basic Setup",
  "id": "11-basic-setup",
  "level": 3
}, {
  "value": "1.2 @EnableMethodSecurity Attributes",
  "id": "12-enablemethodsecurity-attributes",
  "level": 3
}, {
  "value": "1.3 Method Security Delegating Evaluator",
  "id": "13-method-security-delegating-evaluator",
  "level": 3
}, {
  "value": "2. @PreAuthorize — Before Method Invocation",
  "id": "2-preauthorize--before-method-invocation",
  "level": 2
}, {
  "value": "2.1 Basic Role Checks",
  "id": "21-basic-role-checks",
  "level": 3
}, {
  "value": "2.2 hasRole vs hasAuthority",
  "id": "22-hasrole-vs-hasauthority",
  "level": 3
}, {
  "value": "2.3 hasRole, hasAnyRole — Under the Hood",
  "id": "23-hasrole-hasanyrole--under-the-hood",
  "level": 3
}, {
  "value": "2.4 Accessing Authentication and Principal",
  "id": "24-accessing-authentication-and-principal",
  "level": 3
}, {
  "value": "2.5 Complex SpEL Expressions",
  "id": "25-complex-spel-expressions",
  "level": 3
}, {
  "value": "2.6 Matching Method Parameters in SpEL",
  "id": "26-matching-method-parameters-in-spel",
  "level": 3
}, {
  "value": "3. @PostAuthorize — After Method Invocation",
  "id": "3-postauthorize--after-method-invocation",
  "level": 2
}, {
  "value": "3.1 Basic PostAuthorize",
  "id": "31-basic-postauthorize",
  "level": 3
}, {
  "value": "3.2 PostAuthorize with DTO Projection",
  "id": "32-postauthorize-with-dto-projection",
  "level": 3
}, {
  "value": "3.3 PreAuthorize vs PostAuthorize Decision Table",
  "id": "33-preauthorize-vs-postauthorize-decision-table",
  "level": 3
}, {
  "value": "4. @PreFilter and @PostFilter — Collection Filtering",
  "id": "4-prefilter-and-postfilter--collection-filtering",
  "level": 2
}, {
  "value": "4.1 @PreFilter — Filter Method Arguments",
  "id": "41-prefilter--filter-method-arguments",
  "level": 3
}, {
  "value": "4.2 @PostFilter — Filter Return Value",
  "id": "42-postfilter--filter-return-value",
  "level": 3
}, {
  "value": "4.3 PostFilter with Pagination Warning",
  "id": "43-postfilter-with-pagination-warning",
  "level": 3
}, {
  "value": "4.4 @PreFilter and @PostFilter Summary",
  "id": "44-prefilter-and-postfilter-summary",
  "level": 3
}, {
  "value": "5. @Secured (Deprecated) and @RolesAllowed (JSR-250)",
  "id": "5-secured-deprecated-and-rolesallowed-jsr-250",
  "level": 2
}, {
  "value": "5.1 @Secured — Legacy Annotation",
  "id": "51-secured--legacy-annotation",
  "level": 3
}, {
  "value": "5.2 @RolesAllowed — JSR-250 Standard",
  "id": "52-rolesallowed--jsr-250-standard",
  "level": 3
}, {
  "value": "5.3 @RolesAllowed vs @Secured vs @PreAuthorize",
  "id": "53-rolesallowed-vs-secured-vs-preauthorize",
  "level": 3
}, {
  "value": "6. Custom Security Meta-Annotations",
  "id": "6-custom-security-meta-annotations",
  "level": 2
}, {
  "value": "6.1 @IsAdmin — Custom Meta-Annotation",
  "id": "61-isadmin--custom-meta-annotation",
  "level": 3
}, {
  "value": "6.2 @IsEditorOrAdmin",
  "id": "62-iseditororadmin",
  "level": 3
}, {
  "value": "6.3 @OwnResource — Parameterized Meta-Annotation",
  "id": "63-ownresource--parameterized-meta-annotation",
  "level": 3
}, {
  "value": "6.4 Using Meta-Annotations",
  "id": "64-using-meta-annotations",
  "level": 3
}, {
  "value": "6.5 Composed Annotation with Multiple Expressions",
  "id": "65-composed-annotation-with-multiple-expressions",
  "level": 3
}, {
  "value": "7. PermissionEvaluator — Custom hasPermission",
  "id": "7-permissionevaluator--custom-haspermission",
  "level": 2
}, {
  "value": "7.1 PermissionEvaluator Interface",
  "id": "71-permissionevaluator-interface",
  "level": 3
}, {
  "value": "7.2 Custom PermissionEvaluator Implementation",
  "id": "72-custom-permissionevaluator-implementation",
  "level": 3
}, {
  "value": "7.3 Registering the PermissionEvaluator",
  "id": "73-registering-the-permissionevaluator",
  "level": 3
}, {
  "value": "7.4 Using hasPermission in Controllers",
  "id": "74-using-haspermission-in-controllers",
  "level": 3
}, {
  "value": "7.5 hasPermission with MethodSecurityExpressionHandler",
  "id": "75-haspermission-with-methodsecurityexpressionhandler",
  "level": 3
}, {
  "value": "8. Pointcut-Based Security (AspectJ)",
  "id": "8-pointcut-based-security-aspectj",
  "level": 2
}, {
  "value": "8.1 Aspect-Based Security",
  "id": "81-aspect-based-security",
  "level": 3
}, {
  "value": "8.2 @AuditLog Annotation",
  "id": "82-auditlog-annotation",
  "level": 3
}, {
  "value": "8.3 Enabling AspectJ in Spring Boot",
  "id": "83-enabling-aspectj-in-spring-boot",
  "level": 3
}, {
  "value": "9. CORS — Cross-Origin Resource Sharing",
  "id": "9-cors--cross-origin-resource-sharing",
  "level": 2
}, {
  "value": "9.1 Same-Origin Policy",
  "id": "91-same-origin-policy",
  "level": 3
}, {
  "value": "9.2 @CrossOrigin on Controller",
  "id": "92-crossorigin-on-controller",
  "level": 3
}, {
  "value": "9.3 @CrossOrigin Attribute Reference",
  "id": "93-crossorigin-attribute-reference",
  "level": 3
}, {
  "value": "9.4 Global CORS with CorsConfigurationSource",
  "id": "94-global-cors-with-corsconfigurationsource",
  "level": 3
}, {
  "value": "9.5 Allowed Origin Patterns",
  "id": "95-allowed-origin-patterns",
  "level": 3
}, {
  "value": "9.6 Per-URL CORS Configuration",
  "id": "96-per-url-cors-configuration",
  "level": 3
}, {
  "value": "9.7 CORS with Spring Security Filter Chain",
  "id": "97-cors-with-spring-security-filter-chain",
  "level": 3
}, {
  "value": "9.8 Preflight (OPTIONS) Handling",
  "id": "98-preflight-options-handling",
  "level": 3
}, {
  "value": "9.9 CORS Error Handling",
  "id": "99-cors-error-handling",
  "level": 3
}, {
  "value": "10. CSRF — Cross-Site Request Forgery",
  "id": "10-csrf--cross-site-request-forgery",
  "level": 2
}, {
  "value": "10.1 How CSRF Works",
  "id": "101-how-csrf-works",
  "level": 3
}, {
  "value": "10.2 Default CSRF Protection",
  "id": "102-default-csrf-protection",
  "level": 3
}, {
  "value": "10.3 CsrfTokenRepository Implementations",
  "id": "103-csrftokenrepository-implementations",
  "level": 3
}, {
  "value": "HttpSessionCsrfTokenRepository (Default)",
  "id": "httpsessioncsrftokenrepository-default",
  "level": 4
}, {
  "value": "CookieCsrfTokenRepository",
  "id": "cookiecsrftokenrepository",
  "level": 4
}, {
  "value": "10.4 Custom CsrfTokenRepository",
  "id": "104-custom-csrftokenrepository",
  "level": 3
}, {
  "value": "10.5 When to Disable CSRF",
  "id": "105-when-to-disable-csrf",
  "level": 3
}, {
  "value": "10.6 CSRF with SPA (Single Page Application)",
  "id": "106-csrf-with-spa-single-page-application",
  "level": 3
}, {
  "value": "10.7 CsrfTokenRequestAttributeHandler",
  "id": "107-csrftokenrequestattributehandler",
  "level": 3
}, {
  "value": "10.8 Custom AccessDeniedHandler for CSRF Failures",
  "id": "108-custom-accessdeniedhandler-for-csrf-failures",
  "level": 3
}, {
  "value": "10.9 CSRF Protection for Non-Browser Clients",
  "id": "109-csrf-protection-for-non-browser-clients",
  "level": 3
}, {
  "value": "11. CSP — Content Security Policy Headers",
  "id": "11-csp--content-security-policy-headers",
  "level": 2
}, {
  "value": "11.1 Basic CSP Configuration",
  "id": "111-basic-csp-configuration",
  "level": 3
}, {
  "value": "11.2 Comprehensive Security Headers",
  "id": "112-comprehensive-security-headers",
  "level": 3
}, {
  "value": "11.3 Custom Headers with addHeaderWriter",
  "id": "113-custom-headers-with-addheaderwriter",
  "level": 3
}, {
  "value": "11.4 StaticHeadersWriter",
  "id": "114-staticheaderswriter",
  "level": 3
}, {
  "value": "11.5 CSP Reporting",
  "id": "115-csp-reporting",
  "level": 3
}, {
  "value": "12. Complete Integration Example",
  "id": "12-complete-integration-example",
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
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    mermaid: "mermaid",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "method-security-cors--csrf",
        children: "Method Security, CORS & CSRF"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/26-jwt-oauth2",
          children: "JWT, OAuth2 & OIDC"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/28-keycloak",
          children: "Keycloak"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Security in Spring is layered. Authentication answers \"who are you?\"; authorization answers \"what are you allowed to do?\"; CORS controls \"where can requests come from?\"; and CSRF protects against \"was this request forged?\"."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covers the four pillars of web security beyond basic authentication: method-level authorization with SpEL expressions and annotations, cross-origin resource sharing configuration, cross-site request forgery protection, and content security policy headers."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter you should be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Enable method-level security with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@EnableMethodSecurity"
        }), " (Java 17+ syntax)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@PreAuthorize"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@PostAuthorize"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@PreFilter"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@PostFilter"
        }), " with SpEL expressions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Understand and use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hasRole"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hasAuthority"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hasAnyAuthority"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hasPermission"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "authentication"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "principal"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "returnObject"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "filterObject"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement custom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PermissionEvaluator"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@PreAuthorize(\"hasPermission(...)\")"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create custom security meta-annotations like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@IsAdmin"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Configure CORS with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@CrossOrigin"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CorsConfigurationSource"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UrlBasedCorsConfigurationSource"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle preflight (OPTIONS) requests and per-URL CORS configuration"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Understand CSRF protection modes (", (0,jsx_runtime.jsx)(_components.code, {
          children: "CookieCsrfTokenRepository"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "HttpSessionCsrfTokenRepository"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Disable CSRF for REST APIs and configure double-submit cookie for SPAs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure Content Security Policy and related security headers"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply the deprecated ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Secured"
        }), " and JSR-250 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@RolesAllowed"
        }), " annotations"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement pointcut-based aspect security for cross-cutting authorization"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Method Security → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@PreAuthorize"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@PostAuthorize"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Secured"
            }), " annotations"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Spring Expression Language (SpEL) for fine-grained rules"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CORS → cross-origin resource sharing for browser security"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Configure allowed origins, methods, and headers via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CorsConfigurationSource"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSRF → cross-site request forgery protection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State-changing requests from authenticated users must include a token"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    A[\"Method Security, CORS and CSRF\"] --> B[Method Security]\r\n    A --> C[CORS]\r\n    A --> D[CSRF]\r\n    B --> B1[\"@PreAuthorize\"]\r\n    B --> B2[\"@PostAuthorize\"]\r\n    B --> B3[\"@Secured\"]\r\n    C --> C1[CorsConfigurationSource]\r\n    C --> C2[Allowed Origins / Methods / Headers]\r\n    D --> D1[CsrfTokenRepository]\r\n    D --> D2[Stateless API exemption]"
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
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@PreAuthorize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluates before method invocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supports SpEL, ROLE checks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@PostAuthorize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluates after method invocation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Can access return object via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "returnObject"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Secured"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple role check (no SpEL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy annotation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@RolesAllowed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSR-250 standard annotation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Similar to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Secured"
            })]
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
              children: "@EnableMethodSecurity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables Spring Security method annotations"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Replaces legacy ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@EnableGlobalMethodSecurity"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CorsConfigurationSource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bean-based CORS configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UrlBasedCorsConfigurationSource"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CsrfTokenRepository"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stores CSRF tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "HttpSessionCsrfTokenRepository"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "XSRF-TOKEN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Angular-compatible CSRF cookie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CookieCsrfTokenRepository.withHttpOnlyFalse()"
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
            children: "Single-Page App"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CORS + CSRF cookie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Angular/React frontend calls backend API"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Public REST API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CORS whitelist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allow specific origins, disable CSRF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Admin Panel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Method Security"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@PreAuthorize(\"hasRole('ADMIN')\")"
            }), " on sensitive endpoints"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which annotation allows SpEL-based access control before method execution? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@PreAuthorize"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What bean must be defined to customize CORS in Spring Security? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CorsConfigurationSource"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Should CSRF protection be enabled for a stateless REST API? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " No → CSRF protection requires browser sessions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-method-security--enablemethodsecurity",
      children: "1. Method Security — @EnableMethodSecurity"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/27-method-cors-csrf.png",
        alt: "Method Security CORS CSRF Flow"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Security 6.0 introduced ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@EnableMethodSecurity"
      }), " as a unified replacement for the older ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@EnableGlobalMethodSecurity"
      }), ". It enables annotation-based authorization at the method level using Spring Expression Language (SpEL)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-basic-setup",
      children: "1.1 Basic Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.config;\r\n\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Configuration;\r\nimport org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;\r\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\r\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\r\nimport org.springframework.security.core.userdetails.User;\r\nimport org.springframework.security.core.userdetails.UserDetails;\r\nimport org.springframework.security.core.userdetails.UserDetailsService;\r\nimport org.springframework.security.provisioning.InMemoryUserDetailsManager;\r\nimport org.springframework.security.web.SecurityFilterChain;\r\n\r\n@Configuration\r\n@EnableWebSecurity\r\n@EnableMethodSecurity\r\npublic class SecurityConfig {\r\n\r\n    @Bean\r\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\r\n        http\r\n            .authorizeHttpRequests(auth -> auth\r\n                .requestMatchers(\"/api/public/**\").permitAll()\r\n                .anyRequest().authenticated()\r\n            )\r\n            .httpBasic(httpBasic -> {})\r\n            .csrf(csrf -> csrf.disable());\r\n\r\n        return http.build();\r\n    }\r\n\r\n    @Bean\r\n    public UserDetailsService userDetailsService() {\r\n        UserDetails admin = User.builder()\r\n            .username(\"admin\")\r\n            .password(\"{noop}admin123\")\r\n            .roles(\"ADMIN\")\r\n            .build();\r\n\r\n        UserDetails editor = User.builder()\r\n            .username(\"editor\")\r\n            .password(\"{noop}editor123\")\r\n            .roles(\"EDITOR\")\r\n            .build();\r\n\r\n        UserDetails viewer = User.builder()\r\n            .username(\"viewer\")\r\n            .password(\"{noop}viewer123\")\r\n            .roles(\"VIEWER\")\r\n            .build();\r\n\r\n        UserDetails author = User.builder()\r\n            .username(\"author\")\r\n            .password(\"{noop}author123\")\r\n            .roles(\"AUTHOR\")\r\n            .authorities(\"ROLE_AUTHOR\", \"WRITE_ARTICLES\", \"EDIT_OWN_ARTICLES\")\r\n            .build();\r\n\r\n        return new InMemoryUserDetailsManager(admin, editor, viewer, author);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-enablemethodsecurity-attributes",
      children: "1.2 @EnableMethodSecurity Attributes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\n@EnableMethodSecurity(\r\n    securedEnabled = true,      // Enables @Secured (default false)\r\n    jsr250Enabled = true,       // Enables @RolesAllowed (default false)\r\n    prePostEnabled = true       // Enables @PreAuthorize etc. (default true)\r\n)\r\npublic class MethodSecurityConfig {\r\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attribute"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "prePostEnabled"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Enable ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@PreAuthorize"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@PostAuthorize"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@PreFilter"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@PostFilter"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "securedEnabled"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Enable deprecated ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Secured"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "jsr250Enabled"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Enable JSR-250 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@RolesAllowed"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@PermitAll"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@DenyAll"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-method-security-delegating-evaluator",
      children: "1.3 Method Security Delegating Evaluator"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Internally, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@EnableMethodSecurity"
      }), " registers a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MethodSecurityExpressionHandler"
      }), " that evaluates SpEL expressions against the security context."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.internal;\r\n\r\nimport org.aopalliance.intercept.MethodInvocation;\r\nimport org.springframework.security.access.expression.method.DefaultMethodSecurityExpressionHandler;\r\nimport org.springframework.security.access.expression.method.MethodSecurityExpressionHandler;\r\nimport org.springframework.security.access.expression.method.MethodSecurityExpressionOperations;\r\nimport org.springframework.security.authentication.AuthenticationTrustResolver;\r\nimport org.springframework.security.authentication.AuthenticationTrustResolverImpl;\r\nimport org.springframework.security.core.Authentication;\r\n\r\npublic class CustomMethodSecurityExpressionHandler\r\n        extends DefaultMethodSecurityExpressionHandler {\r\n\r\n    private final AuthenticationTrustResolver trustResolver =\r\n        new AuthenticationTrustResolverImpl();\r\n\r\n    @Override\r\n    protected MethodSecurityExpressionOperations createSecurityExpressionRoot(\r\n            Authentication authentication, MethodInvocation invocation) {\r\n\r\n        CustomMethodSecurityExpressionRoot root =\r\n            new CustomMethodSecurityExpressionRoot(authentication);\r\n        root.setPermissionEvaluator(getPermissionEvaluator());\r\n        root.setTrustResolver(this.trustResolver);\r\n        root.setRoleHierarchy(getRoleHierarchy());\r\n        return root;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The expression root provides methods like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hasRole()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hasAuthority()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hasPermission()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "authentication"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "principal"
      }), ", etc. that you reference in SpEL expressions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\r\nUse ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@EnableMethodSecurity"
        }), " instead of the deprecated ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@EnableGlobalMethodSecurity"
        }), " in Spring Security 6+."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-preauthorize--before-method-invocation",
      children: "2. @PreAuthorize — Before Method Invocation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@PreAuthorize"
      }), " evaluates a SpEL expression before the method executes. If the expression returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "false"
      }), ", an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AccessDeniedException"
      }), " is thrown."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-basic-role-checks",
      children: "2.1 Basic Role Checks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.controller;\r\n\r\nimport org.springframework.security.access.prepost.PreAuthorize;\r\nimport org.springframework.web.bind.annotation.*;\r\n\r\n@RestController\r\n@RequestMapping(\"/api/admin\")\r\npublic class AdminController {\r\n\r\n    // Only users with ROLE_ADMIN\r\n    @GetMapping(\"/dashboard\")\r\n    @PreAuthorize(\"hasRole('ADMIN')\")\r\n    public String dashboard() {\r\n        return \"Admin Dashboard\";\r\n    }\r\n\r\n    // Users with ADMIN or EDITOR role\r\n    @GetMapping(\"/reports\")\r\n    @PreAuthorize(\"hasAnyRole('ADMIN', 'EDITOR')\")\r\n    public String reports() {\r\n        return \"Reports\";\r\n    }\r\n\r\n    // Users with specific authority (not role-based)\r\n    @GetMapping(\"/analytics\")\r\n    @PreAuthorize(\"hasAuthority('VIEW_ANALYTICS')\")\r\n    public String analytics() {\r\n        return \"Analytics\";\r\n    }\r\n\r\n    // Multiple authorities\r\n    @PostMapping(\"/publish\")\r\n    @PreAuthorize(\"hasAnyAuthority('WRITE_ARTICLES', 'PUBLISH_ARTICLES')\")\r\n    public String publish() {\r\n        return \"Published\";\r\n    }\r\n\r\n    // Authenticated users only (any logged-in user)\r\n    @GetMapping(\"/profile\")\r\n    @PreAuthorize(\"isAuthenticated()\")\r\n    public String profile() {\r\n        return \"Profile\";\r\n    }\r\n\r\n    // Anonymous access allowed\r\n    @GetMapping(\"/public\")\r\n    @PreAuthorize(\"permitAll()\")\r\n    public String publicInfo() {\r\n        return \"Public Info\";\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-hasrole-vs-hasauthority",
      children: "2.2 hasRole vs hasAuthority"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "hasRole('ADMIN')"
      }), " internally checks for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ROLE_ADMIN"
      }), ". ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hasAuthority('ROLE_ADMIN')"
      }), " does the same check explicitly. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hasAuthority('WRITE_ARTICLES')"
      }), " checks for a custom authority without the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ROLE_"
      }), " prefix."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\r\n@RequestMapping(\"/api/articles\")\r\npublic class ArticleController {\r\n\r\n    @GetMapping\r\n    @PreAuthorize(\"hasRole('VIEWER') or hasRole('EDITOR') or hasRole('ADMIN')\")\r\n    public List<String> listArticles() {\r\n        return List.of(\"Article 1\", \"Article 2\");\r\n    }\r\n\r\n    @PostMapping\r\n    @PreAuthorize(\"hasAuthority('WRITE_ARTICLES')\")\r\n    public String createArticle() {\r\n        return \"Created\";\r\n    }\r\n\r\n    @PutMapping(\"/{id}\")\r\n    @PreAuthorize(\"hasAuthority('EDIT_OWN_ARTICLES') and #id == authentication.principal.id\")\r\n    public String updateArticle(@PathVariable Long id) {\r\n        return \"Updated \" + id;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-hasrole-hasanyrole--under-the-hood",
      children: "2.3 hasRole, hasAnyRole — Under the Hood"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// These are equivalent:\r\n@PreAuthorize(\"hasRole('ADMIN')\")\r\n@PreAuthorize(\"hasAuthority('ROLE_ADMIN')\")\r\n\r\n// hasAnyRole expands to:\r\n@PreAuthorize(\"hasAnyRole('ADMIN', 'EDITOR')\")\r\n// Same as:\r\n@PreAuthorize(\"hasAuthority('ROLE_ADMIN') or hasAuthority('ROLE_EDITOR')\")\r\n\r\n// Custom authority (no ROLE_ prefix):\r\n@PreAuthorize(\"hasAuthority('WRITE_ARTICLES')\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hasRole"
      }), " adds the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ROLE_"
      }), " prefix. You can change this by setting the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "defaultRolePrefix"
      }), " on the expression handler:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.config;\r\n\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Configuration;\r\nimport org.springframework.security.access.expression.method.DefaultMethodSecurityExpressionHandler;\r\nimport org.springframework.security.access.expression.method.MethodSecurityExpressionHandler;\r\n\r\n@Configuration\r\npublic class ExpressionHandlerConfig {\r\n\r\n    @Bean\r\n    public MethodSecurityExpressionHandler methodSecurityExpressionHandler() {\r\n        DefaultMethodSecurityExpressionHandler handler =\r\n            new DefaultMethodSecurityExpressionHandler();\r\n        handler.setDefaultRolePrefix(\"APP_\");\r\n        return handler;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-accessing-authentication-and-principal",
      children: "2.4 Accessing Authentication and Principal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The SpEL expression has access to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Authentication"
      }), " object and its principal:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.controller;\r\n\r\nimport org.springframework.security.access.prepost.PreAuthorize;\r\nimport org.springframework.security.core.Authentication;\r\nimport org.springframework.security.core.annotation.AuthenticationPrincipal;\r\nimport org.springframework.security.core.userdetails.UserDetails;\r\nimport org.springframework.web.bind.annotation.*;\r\n\r\nimport java.util.Map;\r\n\r\n@RestController\r\n@RequestMapping(\"/api/user\")\r\npublic class UserController {\r\n\r\n    // Access Authentication object directly in SpEL\r\n    @GetMapping(\"/me\")\r\n    @PreAuthorize(\"isAuthenticated()\")\r\n    public Map<String, Object> currentUser(\r\n            @AuthenticationPrincipal UserDetails userDetails,\r\n            Authentication authentication) {\r\n\r\n        return Map.of(\r\n            \"username\", authentication.getName(),\r\n            \"authorities\", authentication.getAuthorities(),\r\n            \"principal\", authentication.getPrincipal().toString()\r\n        );\r\n    }\r\n\r\n    // Conditional access based on principal\r\n    @GetMapping(\"/documents/{username}\")\r\n    @PreAuthorize(\"authentication.name == #username\")\r\n    public String getDocument(@PathVariable String username) {\r\n        return \"Document for \" + username;\r\n    }\r\n\r\n    // Check principal type\r\n    @GetMapping(\"/admin-info\")\r\n    @PreAuthorize(\"isAuthenticated() and \" +\r\n        \"authentication.principal instanceof T(org.springframework.security.core.userdetails.User)\")\r\n    public String adminInfo() {\r\n        return \"Admin Info\";\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-complex-spel-expressions",
      children: "2.5 Complex SpEL Expressions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SpEL supports boolean operators, method calls, and type references:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\r\n@RequestMapping(\"/api/secure\")\r\npublic class SpELController {\r\n\r\n    // Logical AND\r\n    @GetMapping(\"/secret\")\r\n    @PreAuthorize(\"hasRole('ADMIN') and hasAuthority('VIEW_SECRETS')\")\r\n    public String secret() {\r\n        return \"Top Secret\";\r\n    }\r\n\r\n    // Logical OR with negation\r\n    @GetMapping(\"/restricted\")\r\n    @PreAuthorize(\"hasRole('ADMIN') or \" +\r\n        \"(hasRole('EDITOR') and !hasAuthority('SUSPENDED'))\")\r\n    public String restricted() {\r\n        return \"Restricted\";\r\n    }\r\n\r\n    // Ternary — expression must resolve to boolean\r\n    @GetMapping(\"/conditional\")\r\n    @PreAuthorize(\"hasRole('ADMIN') ? true : hasRole('EDITOR')\")\r\n    public String conditional() {\r\n        return \"Conditional Access\";\r\n    }\r\n\r\n    // Method calls on parameters\r\n    @PostMapping(\"/items\")\r\n    @PreAuthorize(\"#item.owner == authentication.name\")\r\n    public String createItem(@RequestBody Item item) {\r\n        return \"Item created by \" + item.getOwner();\r\n    }\r\n\r\n    // Static method call\r\n    @GetMapping(\"/evaluated\")\r\n    @PreAuthorize(\"T(java.time.LocalTime).now().hour < 17\")\r\n    public String businessHoursOnly() {\r\n        return \"Accessed during business hours\";\r\n    }\r\n\r\n    // Spring Bean reference\r\n    @GetMapping(\"/custom-check\")\r\n    @PreAuthorize(\"@accessEvaluator.hasAccess(authentication, 'CUSTOM_FEATURE')\")\r\n    public String customCheck() {\r\n        return \"Custom check passed\";\r\n    }\r\n\r\n    // Collection containment\r\n    @GetMapping(\"/dept/{dept}\")\r\n    @PreAuthorize(\"authentication.principal.departments.contains(#dept)\")\r\n    public String departmentOnly(@PathVariable String dept) {\r\n        return \"Department: \" + dept;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-matching-method-parameters-in-spel",
      children: "2.6 Matching Method Parameters in SpEL"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Security makes method parameters available in SpEL via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#paramName"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.controller;\r\n\r\nimport org.springframework.security.access.prepost.PreAuthorize;\r\nimport org.springframework.web.bind.annotation.*;\r\n\r\n@RestController\r\n@RequestMapping(\"/api/owners\")\r\npublic class OwnerController {\r\n\r\n    // Parameter match — user can only access their own data\r\n    @GetMapping(\"/{userId}/profile\")\r\n    @PreAuthorize(\"#userId == authentication.name\")\r\n    public String getProfile(@PathVariable String userId) {\r\n        return \"Profile for \" + userId;\r\n    }\r\n\r\n    @PutMapping(\"/{userId}/settings\")\r\n    @PreAuthorize(\"#userId == authentication.principal.username\")\r\n    public String updateSettings(\r\n            @PathVariable String userId,\r\n            @RequestBody Map<String, Object> settings) {\r\n        return \"Settings updated for \" + userId;\r\n    }\r\n\r\n    @DeleteMapping(\"/{userId}\")\r\n    @PreAuthorize(\"hasRole('ADMIN') or #userId == authentication.name\")\r\n    public String deleteUser(@PathVariable String userId) {\r\n        return \"Deleted user \" + userId;\r\n    }\r\n\r\n    // Multiple parameter constraints\r\n    @PostMapping(\"/transfer\")\r\n    @PreAuthorize(\"#fromAccount.owner == authentication.name and \" +\r\n        \"#amount <= 10000\")\r\n    public String transfer(\r\n            @RequestBody Account fromAccount,\r\n            @RequestParam BigDecimal amount) {\r\n        return \"Transferred \" + amount;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-postauthorize--after-method-invocation",
      children: "3. @PostAuthorize — After Method Invocation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@PostAuthorize"
      }), " evaluates after the method returns but before the response is sent. It can use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "returnObject"
      }), " to access the method's return value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-basic-postauthorize",
      children: "3.1 Basic PostAuthorize"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.controller;\r\n\r\nimport org.springframework.security.access.prepost.PostAuthorize;\r\nimport org.springframework.web.bind.annotation.*;\r\n\r\nimport java.util.Map;\r\nimport java.util.Optional;\r\n\r\n@RestController\r\n@RequestMapping(\"/api/documents\")\r\npublic class PostAuthorizeController {\r\n\r\n    private final DocumentService documentService;\r\n\r\n    public PostAuthorizeController(DocumentService documentService) {\r\n        this.documentService = documentService;\r\n    }\r\n\r\n    // Method runs, then authorization checks the return value\r\n    @GetMapping(\"/{id}\")\r\n    @PostAuthorize(\"returnObject.owner == authentication.name or \" +\r\n        \"hasRole('ADMIN')\")\r\n    public Document getDocument(@PathVariable Long id) {\r\n        return documentService.findById(id);\r\n    }\r\n\r\n    // Safe navigation — if null, access is denied\r\n    @GetMapping(\"/optional/{id}\")\r\n    @PostAuthorize(\"returnObject?.owner == authentication.name\")\r\n    public Optional<Document> getOptionalDocument(@PathVariable Long id) {\r\n        return documentService.findOptionalById(id);\r\n    }\r\n\r\n    // Check properties of the return value\r\n    @GetMapping(\"/{id}/details\")\r\n    @PostAuthorize(\"returnObject.visibility == 'PUBLIC' or \" +\r\n        \"returnObject.owner == authentication.name\")\r\n    public DocumentDetails getDetails(@PathVariable Long id) {\r\n        return documentService.getDetails(id);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-postauthorize-with-dto-projection",
      children: "3.2 PostAuthorize with DTO Projection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\r\n@RequestMapping(\"/api/accounts\")\r\npublic class AccountController {\r\n\r\n    private final AccountService accountService;\r\n\r\n    public AccountController(AccountService accountService) {\r\n        this.accountService = accountService;\r\n    }\r\n\r\n    @GetMapping(\"/{accountId}\")\r\n    @PostAuthorize(\"returnObject.ownerId == authentication.principal.id\")\r\n    public AccountDto getAccount(@PathVariable Long accountId) {\r\n        Account entity = accountService.findById(accountId);\r\n        return new AccountDto(\r\n            entity.getId(),\r\n            entity.getOwnerId(),\r\n            entity.getBalance(),\r\n            entity.getAccountType()\r\n        );\r\n    }\r\n\r\n    // SpEL with method chaining on returnObject\r\n    @GetMapping(\"/summary/{accountId}\")\r\n    @PostAuthorize(\"returnObject.getOwner().equals(authentication.name)\")\r\n    public AccountSummary getSummary(@PathVariable Long accountId) {\r\n        return accountService.getSummary(accountId);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-preauthorize-vs-postauthorize-decision-table",
      children: "3.3 PreAuthorize vs PostAuthorize Decision Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "@PreAuthorize"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "@PostAuthorize"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "When evaluated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After method"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No wasted execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Method runs even if denied"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access to params"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Full (", (0,jsx_runtime.jsx)(_components.code, {
              children: "#param"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Full (", (0,jsx_runtime.jsx)(_components.code, {
              children: "#param"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access to return"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Full (", (0,jsx_runtime.jsx)(_components.code, {
              children: "returnObject"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Role checks, param matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object-level security on result"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Null safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "?."
            }), " (safe navigation)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-prefilter-and-postfilter--collection-filtering",
      children: "4. @PreFilter and @PostFilter — Collection Filtering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Security can automatically filter collections based on SpEL expressions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-prefilter--filter-method-arguments",
      children: "4.1 @PreFilter — Filter Method Arguments"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Filters a collection parameter before the method executes. Elements that do not match the expression are removed."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.controller;\r\n\r\nimport org.springframework.security.access.prepost.PreFilter;\r\nimport org.springframework.web.bind.annotation.*;\r\n\r\nimport java.util.List;\r\n\r\n@RestController\r\n@RequestMapping(\"/api/batch\")\r\npublic class BatchController {\r\n\r\n    // Only process items where the owner matches the authenticated user\r\n    @PostMapping(\"/process\")\r\n    @PreFilter(\"filterObject.owner == authentication.name\")\r\n    public String processItems(@RequestBody List<Item> items) {\r\n        // items now contains only owned entries\r\n        return \"Processed \" + items.size() + \" items\";\r\n    }\r\n\r\n    // Multiple filter targets\r\n    @PostMapping(\"/compare\")\r\n    @PreFilter(filterTarget = \"leftList\",\r\n        value = \"filterObject.owner == authentication.name\")\r\n    @PreFilter(filterTarget = \"rightList\",\r\n        value = \"filterObject.active == true\")\r\n    public String compareLists(\r\n            @RequestBody List<Item> leftList,\r\n            @RequestBody List<Item> rightList) {\r\n\r\n        return \"Left: \" + leftList.size() + \", Right: \" + rightList.size();\r\n    }\r\n\r\n    // Filter arrays too\r\n    @PostMapping(\"/bulk-delete\")\r\n    @PreFilter(\"filterObject.owner == authentication.name or hasRole('ADMIN')\")\r\n    public String bulkDelete(@RequestBody Item[] items) {\r\n        return \"Deleting \" + items.length + \" items\";\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-postfilter--filter-return-value",
      children: "4.2 @PostFilter — Filter Return Value"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Filters the returned collection, removing elements that do not match the expression."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.controller;\r\n\r\nimport org.springframework.security.access.prepost.PostFilter;\r\nimport org.springframework.web.bind.annotation.*;\r\n\r\nimport java.util.List;\r\n\r\n@RestController\r\n@RequestMapping(\"/api/documents\")\r\npublic class PostFilterController {\r\n\r\n    private final DocumentService documentService;\r\n\r\n    public PostFilterController(DocumentService documentService) {\r\n        this.documentService = documentService;\r\n    }\r\n\r\n    // Return only documents owned by or shared with the current user\r\n    @GetMapping\r\n    @PostFilter(\"filterObject.owner == authentication.name or \" +\r\n        \"filterObject.sharedUsers.contains(authentication.name) or \" +\r\n        \"hasRole('ADMIN')\")\r\n    public List<Document> getAllDocuments() {\r\n        return documentService.findAll();\r\n    }\r\n\r\n    // Filter arrays and streams\r\n    @GetMapping(\"/active\")\r\n    @PostFilter(\"filterObject.active == true\")\r\n    public List<Document> getActiveDocuments() {\r\n        return documentService.findAll();\r\n    }\r\n\r\n    // Filter with property comparison\r\n    @GetMapping(\"/by-department/{dept}\")\r\n    @PostFilter(\"filterObject.department == #dept\")\r\n    public List<Document> getDepartmentDocuments(@PathVariable String dept) {\r\n        return documentService.findAll();\r\n    }\r\n\r\n    // PostFilter on a Map\r\n    @GetMapping(\"/summary\")\r\n    @PostFilter(\"filterObject.value.accessLevel != 'RESTRICTED'\")\r\n    public Map<String, DocumentSummary> getSummary() {\r\n        return documentService.getSummaryMap();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-postfilter-with-pagination-warning",
      children: "4.3 PostFilter with Pagination Warning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@PostFilter"
      }), " executes on the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "entire"
      }), " result set in memory. For paginated endpoints, this can cause unexpected behavior — the filter runs after the method returns but before Spring MVC serializes the response."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\r\n@RequestMapping(\"/api/items\")\r\npublic class PagedFilterController {\r\n\r\n    private final ItemService itemService;\r\n\r\n    public PagedFilterController(ItemService itemService) {\r\n        this.itemService = itemService;\r\n    }\r\n\r\n    // WARNING: Page size may shrink after filtering!\r\n    // If page has 20 items but only 5 pass the filter, the client gets 5.\r\n    @GetMapping(\"/paged\")\r\n    @PostFilter(\"filterObject.owner == authentication.name\")\r\n    public List<Item> getMyItemsPaged(\r\n            @RequestParam(defaultValue = \"0\") int page,\r\n            @RequestParam(defaultValue = \"20\") int size) {\r\n        return itemService.findAllPaged(page, size);\r\n    }\r\n\r\n    // Better approach: filter at the query level\r\n    @GetMapping(\"/my-items\")\r\n    public List<Item> getMyItems() {\r\n        // Query the database with the owner filter\r\n        return itemService.findByOwner(getCurrentUsername());\r\n    }\r\n\r\n    private String getCurrentUsername() {\r\n        return org.springframework.security.core.context\r\n            .SecurityContextHolder.getContext()\r\n            .getAuthentication().getName();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-prefilter-and-postfilter-summary",
      children: "4.4 @PreFilter and @PostFilter Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Annotation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Variable"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@PreFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter (Collection/Array)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove before method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "filterObject"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@PostFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return value (Collection/Array/Map)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove after method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "filterObject"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "filterTarget"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Attribute on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@PreFilter"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which param to filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required for multiple params"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-secured-deprecated-and-rolesallowed-jsr-250",
      children: "5. @Secured (Deprecated) and @RolesAllowed (JSR-250)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-secured--legacy-annotation",
      children: "5.1 @Secured — Legacy Annotation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@Secured"
      }), " is the original Spring Security annotation. It supports only role-based checks (no SpEL). Enable it with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@EnableMethodSecurity(securedEnabled = true)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.controller;\r\n\r\nimport org.springframework.security.access.annotation.Secured;\r\nimport org.springframework.web.bind.annotation.*;\r\n\r\n@RestController\r\n@RequestMapping(\"/api/secured\")\r\npublic class SecuredController {\r\n\r\n    @GetMapping(\"/admin-area\")\r\n    @Secured(\"ROLE_ADMIN\")\r\n    public String adminArea() {\r\n        return \"Admin Area\";\r\n    }\r\n\r\n    @GetMapping(\"/editor-area\")\r\n    @Secured({\"ROLE_ADMIN\", \"ROLE_EDITOR\"})\r\n    public String editorArea() {\r\n        return \"Editor Area — multiple roles are OR-ed\";\r\n    }\r\n\r\n    @GetMapping(\"/super\")\r\n    @Secured(\"ROLE_SUPER_ADMIN\")\r\n    public String superArea() {\r\n        return \"Super Admin Only\";\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Limitations of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Secured"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No SpEL expressions (no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#param"
        }), " access)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "returnObject"
        }), " access"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No permission-based checks"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All roles must use the full ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ROLE_"
        }), " prefix"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-rolesallowed--jsr-250-standard",
      children: "5.2 @RolesAllowed — JSR-250 Standard"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@RolesAllowed"
      }), " is the Jakarta EE standard annotation for role-based access. Enable it with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@EnableMethodSecurity(jsr250Enabled = true)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.controller;\r\n\r\nimport jakarta.annotation.security.DenyAll;\r\nimport jakarta.annotation.security.PermitAll;\r\nimport jakarta.annotation.security.RolesAllowed;\r\nimport org.springframework.web.bind.annotation.*;\r\n\r\n@RestController\r\n@RequestMapping(\"/api/jsr250\")\r\npublic class Jsr250Controller {\r\n\r\n    @GetMapping(\"/all\")\r\n    @RolesAllowed({\"ADMIN\", \"EDITOR\"})\r\n    @PermitAll\r\n    public String allRoles() {\r\n        return \"Accessible by ADMIN or EDITOR\";\r\n    }\r\n\r\n    @GetMapping(\"/any-authenticated\")\r\n    @PermitAll\r\n    public String anyAuthenticated() {\r\n        return \"Any authenticated user — actually @PermitAll allows everyone including anonymous\";\r\n    }\r\n\r\n    @DeleteMapping(\"/block-all\")\r\n    @DenyAll\r\n    public String blocked() {\r\n        return \"This will never be reached\";\r\n    }\r\n\r\n    @GetMapping(\"/admin-only\")\r\n    @RolesAllowed(\"ADMIN\")\r\n    public String adminOnly() {\r\n        return \"Admin only via JSR-250\";\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-rolesallowed-vs-secured-vs-preauthorize",
      children: "5.3 @RolesAllowed vs @Secured vs @PreAuthorize"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "@Secured"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "@RolesAllowed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "@PreAuthorize"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSR-250 (Jakarta)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SpEL support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Role prefix"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Required (", (0,jsx_runtime.jsx)(_components.code, {
              children: "ROLE_"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Inferred (", (0,jsx_runtime.jsx)(_components.code, {
              children: "ROLE_"
            }), " default)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#paramName"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Return object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["With ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@PostAuthorize"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collection filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@PreFilter/@PostFilter"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Permission evaluator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "When to use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jakarta EE / portability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New projects"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-custom-security-meta-annotations",
      children: "6. Custom Security Meta-Annotations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create composed annotations to reduce repetition and improve readability."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-isadmin--custom-meta-annotation",
      children: "6.1 @IsAdmin — Custom Meta-Annotation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.annotation;\r\n\r\nimport org.springframework.security.access.prepost.PreAuthorize;\r\n\r\nimport java.lang.annotation.ElementType;\r\nimport java.lang.annotation.Retention;\r\nimport java.lang.annotation.RetentionPolicy;\r\nimport java.lang.annotation.Target;\r\n\r\n@Target({ElementType.METHOD, ElementType.TYPE})\r\n@Retention(RetentionPolicy.RUNTIME)\r\n@PreAuthorize(\"hasRole('ADMIN')\")\r\npublic @interface IsAdmin {\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-iseditororadmin",
      children: "6.2 @IsEditorOrAdmin"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.annotation;\r\n\r\nimport org.springframework.security.access.prepost.PreAuthorize;\r\n\r\nimport java.lang.annotation.ElementType;\r\nimport java.lang.annotation.Retention;\r\nimport java.lang.annotation.RetentionPolicy;\r\nimport java.lang.annotation.Target;\r\n\r\n@Target({ElementType.METHOD, ElementType.TYPE})\r\n@Retention(RetentionPolicy.RUNTIME)\r\n@PreAuthorize(\"hasAnyRole('ADMIN', 'EDITOR') and isAuthenticated()\")\r\npublic @interface IsEditorOrAdmin {\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-ownresource--parameterized-meta-annotation",
      children: "6.3 @OwnResource — Parameterized Meta-Annotation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.annotation;\r\n\r\nimport org.springframework.security.access.prepost.PreAuthorize;\r\n\r\nimport java.lang.annotation.ElementType;\r\nimport java.lang.annotation.Retention;\r\nimport java.lang.annotation.RetentionPolicy;\r\nimport java.lang.annotation.Target;\r\n\r\n@Target({ElementType.METHOD, ElementType.TYPE})\r\n@Retention(RetentionPolicy.RUNTIME)\r\n@PreAuthorize(\"hasRole('ADMIN') or #id.toString() == authentication.name\")\r\npublic @interface OwnResource {\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-using-meta-annotations",
      children: "6.4 Using Meta-Annotations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.controller;\r\n\r\nimport com.course.security.annotation.IsAdmin;\r\nimport com.course.security.annotation.IsEditorOrAdmin;\r\nimport com.course.security.annotation.OwnResource;\r\nimport org.springframework.web.bind.annotation.*;\r\n\r\n@RestController\r\n@RequestMapping(\"/api/content\")\r\npublic class MetaAnnotationController {\r\n\r\n    @GetMapping(\"/admin-tools\")\r\n    @IsAdmin\r\n    public String adminTools() {\r\n        return \"Admin Tools\";\r\n    }\r\n\r\n    @PostMapping(\"/manage\")\r\n    @IsEditorOrAdmin\r\n    public String manageContent() {\r\n        return \"Manage Content\";\r\n    }\r\n\r\n    @GetMapping(\"/users/{id}/settings\")\r\n    @OwnResource\r\n    public String userSettings(@PathVariable String id) {\r\n        return \"User settings for \" + id;\r\n    }\r\n\r\n    // Class-level meta-annotation\r\n    @IsAdmin\r\n    @RestController\r\n    @RequestMapping(\"/api/internal\")\r\n    public static class InternalController {\r\n\r\n        @GetMapping(\"/config\")\r\n        public String config() {\r\n            return \"Internal Config — inherits @IsAdmin from class\";\r\n        }\r\n\r\n        @GetMapping(\"/health\")\r\n        public String health() {\r\n            return \"Health Check\";\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-composed-annotation-with-multiple-expressions",
      children: "6.5 Composed Annotation with Multiple Expressions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.annotation;\r\n\r\nimport org.springframework.security.access.prepost.PreAuthorize;\r\n\r\nimport java.lang.annotation.ElementType;\r\nimport java.lang.annotation.Retention;\r\nimport java.lang.annotation.RetentionPolicy;\r\nimport java.lang.annotation.Target;\r\n\r\n@Target({ElementType.METHOD, ElementType.TYPE})\r\n@Retention(RetentionPolicy.RUNTIME)\r\n@PreAuthorize(\"hasRole('ADMIN') and \" +\r\n    \"hasAuthority('AUDIT_ACCESS') and \" +\r\n    \"@auditWindowChecker.isWithinWindow()\")\r\npublic @interface IsAuditor {\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-permissionevaluator--custom-haspermission",
      children: "7. PermissionEvaluator — Custom hasPermission"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hasPermission"
      }), " expression in SpEL delegates to a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PermissionEvaluator"
      }), ". Implement one to add domain-object-level authorization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-permissionevaluator-interface",
      children: "7.1 PermissionEvaluator Interface"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package org.springframework.security.access;\r\n\r\nimport java.io.Serializable;\r\n\r\npublic interface PermissionEvaluator {\r\n\r\n    boolean hasPermission(Authentication authentication,\r\n                          Object targetDomainObject,\r\n                          Object permission);\r\n\r\n    boolean hasPermission(Authentication authentication,\r\n                          Serializable targetId,\r\n                          String targetType,\r\n                          Object permission);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-custom-permissionevaluator-implementation",
      children: "7.2 Custom PermissionEvaluator Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.evaluator;\r\n\r\nimport com.course.security.model.Document;\r\nimport com.course.security.service.DocumentService;\r\nimport org.springframework.security.access.PermissionEvaluator;\r\nimport org.springframework.security.core.Authentication;\r\nimport org.springframework.security.core.GrantedAuthority;\r\nimport org.springframework.stereotype.Component;\r\n\r\nimport java.io.Serializable;\r\n\r\n@Component\r\npublic class DocumentPermissionEvaluator implements PermissionEvaluator {\r\n\r\n    private final DocumentService documentService;\r\n\r\n    public DocumentPermissionEvaluator(DocumentService documentService) {\r\n        this.documentService = documentService;\r\n    }\r\n\r\n    @Override\r\n    public boolean hasPermission(\r\n            Authentication authentication,\r\n            Object targetDomainObject,\r\n            Object permission) {\r\n\r\n        if (targetDomainObject instanceof Document document) {\r\n            return hasDocumentPermission(authentication, document, permission.toString());\r\n        }\r\n\r\n        return false;\r\n    }\r\n\r\n    @Override\r\n    public boolean hasPermission(\r\n            Authentication authentication,\r\n            Serializable targetId,\r\n            String targetType,\r\n            Object permission) {\r\n\r\n        if (\"Document\".equals(targetType)) {\r\n            Document document = documentService.findById((Long) targetId);\r\n            if (document == null) return false;\r\n            return hasDocumentPermission(authentication, document, permission.toString());\r\n        }\r\n\r\n        return false;\r\n    }\r\n\r\n    private boolean hasDocumentPermission(\r\n            Authentication authentication,\r\n            Document document,\r\n            String permission) {\r\n\r\n        String username = authentication.getName();\r\n\r\n        return switch (permission) {\r\n            case \"READ\" ->\r\n                document.getOwner().equals(username)\r\n                || document.getSharedUsers().contains(username)\r\n                || isAdmin(authentication);\r\n\r\n            case \"WRITE\" ->\r\n                document.getOwner().equals(username)\r\n                || isAdmin(authentication);\r\n\r\n            case \"DELETE\" ->\r\n                isAdmin(authentication);\r\n\r\n            case \"SHARE\" ->\r\n                document.getOwner().equals(username)\r\n                || hasAuthority(authentication, \"ROLE_ADMIN\");\r\n\r\n            default -> false;\r\n        };\r\n    }\r\n\r\n    private boolean isAdmin(Authentication authentication) {\r\n        return hasAuthority(authentication, \"ROLE_ADMIN\");\r\n    }\r\n\r\n    private boolean hasAuthority(Authentication authentication, String authority) {\r\n        return authentication.getAuthorities().stream()\r\n            .map(GrantedAuthority::getAuthority)\r\n            .anyMatch(a -> a.equals(authority));\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-registering-the-permissionevaluator",
      children: "7.3 Registering the PermissionEvaluator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.config;\r\n\r\nimport com.course.security.evaluator.DocumentPermissionEvaluator;\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Configuration;\r\nimport org.springframework.security.access.expression.method.DefaultMethodSecurityExpressionHandler;\r\nimport org.springframework.security.access.expression.method.MethodSecurityExpressionHandler;\r\n\r\n@Configuration\r\npublic class PermissionEvaluatorConfig {\r\n\r\n    private final DocumentPermissionEvaluator documentPermissionEvaluator;\r\n\r\n    public PermissionEvaluatorConfig(DocumentPermissionEvaluator documentPermissionEvaluator) {\r\n        this.documentPermissionEvaluator = documentPermissionEvaluator;\r\n    }\r\n\r\n    @Bean\r\n    public MethodSecurityExpressionHandler methodSecurityExpressionHandler() {\r\n        DefaultMethodSecurityExpressionHandler handler =\r\n            new DefaultMethodSecurityExpressionHandler();\r\n        handler.setPermissionEvaluator(documentPermissionEvaluator);\r\n        return handler;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-using-haspermission-in-controllers",
      children: "7.4 Using hasPermission in Controllers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.controller;\r\n\r\nimport com.course.security.model.Document;\r\nimport org.springframework.security.access.prepost.PostAuthorize;\r\nimport org.springframework.security.access.prepost.PreAuthorize;\r\nimport org.springframework.web.bind.annotation.*;\r\n\r\n@RestController\r\n@RequestMapping(\"/api/permissions\")\r\npublic class PermissionController {\r\n\r\n    private final DocumentService documentService;\r\n\r\n    public PermissionController(DocumentService documentService) {\r\n        this.documentService = documentService;\r\n    }\r\n\r\n    // Object-level permission check (target domain object)\r\n    @GetMapping(\"/{id}\")\r\n    @PreAuthorize(\"hasPermission(#id, 'Document', 'READ')\")\r\n    public Document getDocument(@PathVariable Long id) {\r\n        return documentService.findById(id);\r\n    }\r\n\r\n    // Write permission\r\n    @PutMapping(\"/{id}\")\r\n    @PreAuthorize(\"hasPermission(#id, 'Document', 'WRITE')\")\r\n    public Document updateDocument(@PathVariable Long id, @RequestBody Document doc) {\r\n        return documentService.update(id, doc);\r\n    }\r\n\r\n    // Delete permission — only admins\r\n    @DeleteMapping(\"/{id}\")\r\n    @PreAuthorize(\"hasPermission(#id, 'Document', 'DELETE')\")\r\n    public void deleteDocument(@PathVariable Long id) {\r\n        documentService.delete(id);\r\n    }\r\n\r\n    // Object-level check with return object\r\n    @GetMapping(\"/object/{id}\")\r\n    @PostAuthorize(\"hasPermission(returnObject, 'READ')\")\r\n    public Document getDocumentObject(@PathVariable Long id) {\r\n        return documentService.findById(id);\r\n    }\r\n\r\n    // Multiple permission checks\r\n    @PostMapping(\"/{id}/share\")\r\n    @PreAuthorize(\"hasPermission(#id, 'Document', 'SHARE') and \" +\r\n        \"hasPermission(#targetUser, 'Document', 'READ')\")\r\n    public String shareDocument(\r\n            @PathVariable Long id,\r\n            @RequestParam String targetUser) {\r\n        documentService.share(id, targetUser);\r\n        return \"Shared\";\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "75-haspermission-with-methodsecurityexpressionhandler",
      children: "7.5 hasPermission with MethodSecurityExpressionHandler"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For more control, extend the expression handler to add custom methods:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.evaluator;\r\n\r\nimport org.springframework.security.access.expression.SecurityExpressionRoot;\r\nimport org.springframework.security.access.expression.method.MethodSecurityExpressionOperations;\r\nimport org.springframework.security.core.Authentication;\r\n\r\npublic class CustomSecurityExpressionRoot\r\n        extends SecurityExpressionRoot\r\n        implements MethodSecurityExpressionOperations {\r\n\r\n    private Object filterObject;\r\n    private Object returnObject;\r\n    private Object target;\r\n\r\n    public CustomSecurityExpressionRoot(Authentication authentication) {\r\n        super(authentication);\r\n    }\r\n\r\n    // Custom expression methods\r\n    public boolean isMemberOf(String group) {\r\n        return this.getAuthentication().getAuthorities().stream()\r\n            .anyMatch(a -> a.getAuthority().equals(\"GROUP_\" + group));\r\n    }\r\n\r\n    public boolean isDuringBusinessHours() {\r\n        return java.time.LocalTime.now().getHour() >= 9\r\n            && java.time.LocalTime.now().getHour() < 17;\r\n    }\r\n\r\n    public boolean hasAnyEmailDomain(String... domains) {\r\n        String email = this.getAuthentication().getName();\r\n        if (!email.contains(\"@\")) return false;\r\n        String domain = email.substring(email.indexOf(\"@\") + 1);\r\n        return java.util.Arrays.asList(domains).contains(domain);\r\n    }\r\n\r\n    @Override\r\n    public void setFilterObject(Object filterObject) {\r\n        this.filterObject = filterObject;\r\n    }\r\n\r\n    @Override\r\n    public Object getFilterObject() {\r\n        return filterObject;\r\n    }\r\n\r\n    @Override\r\n    public void setReturnObject(Object returnObject) {\r\n        this.returnObject = returnObject;\r\n    }\r\n\r\n    @Override\r\n    public Object getReturnObject() {\r\n        return returnObject;\r\n    }\r\n\r\n    @Override\r\n    public Object getThis() {\r\n        return target;\r\n    }\r\n\r\n    public void setThis(Object target) {\r\n        this.target = target;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Usage in controller:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@GetMapping(\"/business\")\r\n@PreAuthorize(\"isDuringBusinessHours()\")\r\npublic String businessHoursOnly() {\r\n    return \"Accessed during business hours\";\r\n}\r\n\r\n@GetMapping(\"/group/{groupName}\")\r\n@PreAuthorize(\"isMemberOf(#groupName)\")\r\npublic String groupAccess(@PathVariable String groupName) {\r\n    return \"Accessing group: \" + groupName;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-pointcut-based-security-aspectj",
      children: "8. Pointcut-Based Security (AspectJ)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When annotations are impractical (e.g., third-party classes, legacy code), use AspectJ pointcuts for method security."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-aspect-based-security",
      children: "8.1 Aspect-Based Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.aspect;\r\n\r\nimport org.aspectj.lang.ProceedingJoinPoint;\r\nimport org.aspectj.lang.annotation.Around;\r\nimport org.aspectj.lang.annotation.Aspect;\r\nimport org.aspectj.lang.annotation.Pointcut;\r\nimport org.springframework.security.access.AccessDeniedException;\r\nimport org.springframework.security.core.Authentication;\r\nimport org.springframework.security.core.GrantedAuthority;\r\nimport org.springframework.security.core.context.SecurityContextHolder;\r\nimport org.springframework.stereotype.Component;\r\n\r\nimport java.util.Set;\r\nimport java.util.stream.Collectors;\r\n\r\n@Aspect\r\n@Component\r\npublic class SecurityAuditAspect {\r\n\r\n    private static final Set<String> ADMIN_AUTHORITIES = Set.of(\"ROLE_ADMIN\");\r\n    private static final Set<String> SENSITIVE_OPERATIONS = Set.of(\"delete\", \"purge\", \"reset\");\r\n\r\n    // Pointcut: all methods in service package\r\n    @Pointcut(\"execution(* com.course.security.service.*.*(..))\")\r\n    public void serviceLayer() {}\r\n\r\n    // Pointcut: methods annotated with @AuditLog\r\n    @Pointcut(\"@annotation(com.course.security.annotation.AuditLog)\")\r\n    public void auditLogged() {}\r\n\r\n    // Pointcut: methods starting with \"delete\" or \"purge\"\r\n    @Pointcut(\"execution(* com.course.security.service.*.delete*(..)) || \" +\r\n        \"execution(* com.course.security.service.*.purge*(..))\")\r\n    public void destructiveOperations() {}\r\n\r\n    // Log all service method invocations\r\n    @Around(\"serviceLayer()\")\r\n    public Object auditServiceCall(ProceedingJoinPoint joinPoint) throws Throwable {\r\n        String methodName = joinPoint.getSignature().toShortString();\r\n        Authentication auth = SecurityContextHolder.getContext().getAuthentication();\r\n        String username = auth != null ? auth.getName() : \"ANONYMOUS\";\r\n\r\n        System.out.printf(\"[AUDIT] %s called %s%n\", username, methodName);\r\n\r\n        long start = System.currentTimeMillis();\r\n        try {\r\n            Object result = joinPoint.proceed();\r\n            long elapsed = System.currentTimeMillis() - start;\r\n            System.out.printf(\"[AUDIT] %s completed %s in %dms%n\",\r\n                username, methodName, elapsed);\r\n            return result;\r\n        } catch (Exception e) {\r\n            long elapsed = System.currentTimeMillis() - start;\r\n            System.out.printf(\"[AUDIT] %s FAILED %s in %dms: %s%n\",\r\n                username, methodName, elapsed, e.getMessage());\r\n            throw e;\r\n        }\r\n    }\r\n\r\n    // Security check on destructive operations\r\n    @Around(\"destructiveOperations()\")\r\n    public Object requireAdminForDestructiveOps(ProceedingJoinPoint joinPoint) throws Throwable {\r\n        Authentication auth = SecurityContextHolder.getContext().getAuthentication();\r\n\r\n        if (auth == null || !auth.isAuthenticated()) {\r\n            throw new AccessDeniedException(\"Authentication required\");\r\n        }\r\n\r\n        Set<String> authorities = auth.getAuthorities().stream()\r\n            .map(GrantedAuthority::getAuthority)\r\n            .collect(Collectors.toSet());\r\n\r\n        if (authorities.stream().noneMatch(a -> a.equals(\"ROLE_ADMIN\"))) {\r\n            throw new AccessDeniedException(\r\n                \"Only administrators can perform destructive operations\");\r\n        }\r\n\r\n        return joinPoint.proceed();\r\n    }\r\n\r\n    // Pointcut with parameter binding\r\n    @Around(\"execution(* com.course.security.service.*.transfer(..)) && args(from, to, amount)\")\r\n    public void validateLargeTransfers(\r\n            ProceedingJoinPoint joinPoint,\r\n            String from, String to, Double amount) throws Throwable {\r\n\r\n        if (amount > 10000) {\r\n            Authentication auth = SecurityContextHolder.getContext().getAuthentication();\r\n            boolean isAdmin = auth.getAuthorities().stream()\r\n                .anyMatch(a -> a.getAuthority().equals(\"ROLE_ADMIN\"));\r\n\r\n            if (!isAdmin) {\r\n                throw new AccessDeniedException(\r\n                    \"Transfers over $10,000 require administrator approval\");\r\n            }\r\n        }\r\n\r\n        joinPoint.proceed();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-auditlog-annotation",
      children: "8.2 @AuditLog Annotation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.annotation;\r\n\r\nimport java.lang.annotation.ElementType;\r\nimport java.lang.annotation.Retention;\r\nimport java.lang.annotation.RetentionPolicy;\r\nimport java.lang.annotation.Target;\r\n\r\n@Target(ElementType.METHOD)\r\n@Retention(RetentionPolicy.RUNTIME)\r\npublic @interface AuditLog {\r\n    String action() default \"\";\r\n    String resource() default \"\";\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-enabling-aspectj-in-spring-boot",
      children: "8.3 Enabling AspectJ in Spring Boot"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.config;\r\n\r\nimport org.springframework.context.annotation.Configuration;\r\nimport org.springframework.context.annotation.EnableAspectJAutoProxy;\r\n\r\n@Configuration\r\n@EnableAspectJAutoProxy\r\npublic class AspectConfig {\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-cors--cross-origin-resource-sharing",
      children: "9. CORS — Cross-Origin Resource Sharing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CORS is a browser security mechanism that controls which origins (domains, schemes, ports) are allowed to access resources from a different origin."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-same-origin-policy",
      children: "9.1 Same-Origin Policy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, browsers enforce the same-origin policy: a web page at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://app.example.com"
      }), " cannot make fetch requests to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://api.example.com"
      }), ". CORS relaxes this selectively."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-crossorigin-on-controller",
      children: "9.2 @CrossOrigin on Controller"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The simplest way to enable CORS is with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@CrossOrigin"
      }), " on a controller or method:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.controller;\r\n\r\nimport org.springframework.web.bind.annotation.*;\r\nimport org.springframework.web.bind.annotation.CrossOrigin;\r\n\r\nimport java.util.List;\r\nimport java.util.Map;\r\n\r\n@RestController\r\n@RequestMapping(\"/api/books\")\r\n@CrossOrigin(origins = \"https://myapp.example.com\")\r\npublic class BookCorsController {\r\n\r\n    private final BookRepository bookRepository;\r\n\r\n    public BookCorsController(BookRepository bookRepository) {\r\n        this.bookRepository = bookRepository;\r\n    }\r\n\r\n    // Inherits @CrossOrigin from class\r\n    @GetMapping\r\n    public List<Book> getAllBooks() {\r\n        return bookRepository.findAll();\r\n    }\r\n\r\n    // Method-level override\r\n    @GetMapping(\"/{id}\")\r\n    @CrossOrigin(origins = \"https://trusted-partner.example.com\")\r\n    public Book getBook(@PathVariable Long id) {\r\n        return bookRepository.findById(id)\r\n            .orElseThrow(() -> new BookNotFoundException(id));\r\n    }\r\n\r\n    // Allow multiple origins\r\n    @PostMapping\r\n    @CrossOrigin(origins = {\r\n        \"https://myapp.example.com\",\r\n        \"https://staging.example.com\",\r\n        \"http://localhost:3000\"\r\n    })\r\n    public Book createBook(@RequestBody Book book) {\r\n        return bookRepository.save(book);\r\n    }\r\n\r\n    // Allow all origins (use with caution)\r\n    @GetMapping(\"/public\")\r\n    @CrossOrigin(origins = \"*\")\r\n    public List<Book> publicBooks() {\r\n        return bookRepository.findAll();\r\n    }\r\n\r\n    // Full CORS configuration\r\n    @PutMapping(\"/{id}\")\r\n    @CrossOrigin(\r\n        origins = \"https://myapp.example.com\",\r\n        allowedHeaders = {\"Content-Type\", \"Authorization\", \"X-Request-Id\"},\r\n        exposedHeaders = {\"X-Total-Count\", \"X-Rate-Limit-Remaining\"},\r\n        methods = {RequestMethod.PUT, RequestMethod.OPTIONS},\r\n        allowCredentials = \"true\",\r\n        maxAge = 3600\r\n    )\r\n    public Book updateBook(@PathVariable Long id, @RequestBody Book book) {\r\n        return bookRepository.findById(id)\r\n            .map(existing -> {\r\n                existing.setTitle(book.getTitle());\r\n                existing.setAuthor(book.getAuthor());\r\n                return bookRepository.save(existing);\r\n            })\r\n            .orElseThrow(() -> new BookNotFoundException(id));\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-crossorigin-attribute-reference",
      children: "9.3 @CrossOrigin Attribute Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attribute"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "origins"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed origins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "originPatterns"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Allowed origin patterns (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "https://*.example.com"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "allowedHeaders"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed request headers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "exposedHeaders"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Headers exposed to the browser"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "methods"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RequestMethod[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Method's HTTP method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowed HTTP methods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "allowCredentials"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "String"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"true\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whether to send credentials (cookies, auth headers)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "maxAge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "long"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "1800"
            }), " (30 min)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How long the preflight response is cached"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-global-cors-with-corsconfigurationsource",
      children: "9.4 Global CORS with CorsConfigurationSource"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For centralized CORS configuration, define a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CorsConfigurationSource"
      }), " bean:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.config;\r\n\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Configuration;\r\nimport org.springframework.web.cors.CorsConfiguration;\r\nimport org.springframework.web.cors.CorsConfigurationSource;\r\nimport org.springframework.web.cors.UrlBasedCorsConfigurationSource;\r\n\r\nimport java.util.List;\r\n\r\n@Configuration\r\npublic class CorsGlobalConfig {\r\n\r\n    @Bean\r\n    public CorsConfigurationSource corsConfigurationSource() {\r\n        CorsConfiguration configuration = new CorsConfiguration();\r\n\r\n        configuration.setAllowedOrigins(List.of(\r\n            \"https://myapp.example.com\",\r\n            \"https://staging.example.com\",\r\n            \"http://localhost:3000\"\r\n        ));\r\n        configuration.setAllowedMethods(List.of(\r\n            \"GET\", \"POST\", \"PUT\", \"DELETE\", \"PATCH\", \"OPTIONS\"\r\n        ));\r\n        configuration.setAllowedHeaders(List.of(\r\n            \"Authorization\",\r\n            \"Content-Type\",\r\n            \"X-Request-Id\",\r\n            \"X-CSRF-TOKEN\"\r\n        ));\r\n        configuration.setExposedHeaders(List.of(\r\n            \"X-Total-Count\",\r\n            \"X-Rate-Limit-Remaining\",\r\n            \"X-Rate-Limit-Reset\"\r\n        ));\r\n        configuration.setAllowCredentials(true);\r\n        configuration.setMaxAge(3600L);\r\n\r\n        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();\r\n        source.registerCorsConfiguration(\"/api/**\", configuration);\r\n        source.registerCorsConfiguration(\"/public/**\", configuration);\r\n\r\n        return source;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "95-allowed-origin-patterns",
      children: "9.5 Allowed Origin Patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "allowedOriginPatterns"
      }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "allowedOrigins"
      }), " when you need wildcard matching or credentials:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\npublic class CorsPatternConfig {\r\n\r\n    @Bean\r\n    public CorsConfigurationSource corsConfigurationSource() {\r\n        CorsConfiguration configuration = new CorsConfiguration();\r\n\r\n        // allowedOrigins does NOT support \"*\" with allowCredentials=true\r\n        // Use allowedOriginPatterns instead:\r\n        configuration.setAllowedOriginPatterns(List.of(\r\n            \"https://*.example.com\",\r\n            \"https://*.vercel.app\",\r\n            \"http://localhost:*\"\r\n        ));\r\n        configuration.setAllowedMethods(List.of(\"*\"));\r\n        configuration.setAllowedHeaders(List.of(\"*\"));\r\n        configuration.setAllowCredentials(true);\r\n        configuration.setMaxAge(3600L);\r\n\r\n        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();\r\n        source.registerCorsConfiguration(\"/api/**\", configuration);\r\n        return source;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "96-per-url-cors-configuration",
      children: "9.6 Per-URL CORS Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Different URL patterns need different CORS rules:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\npublic class PerUrlCorsConfig {\r\n\r\n    @Bean\r\n    public CorsConfigurationSource corsConfigurationSource() {\r\n        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();\r\n\r\n        // Public API — wide open\r\n        CorsConfiguration publicApi = new CorsConfiguration();\r\n        publicApi.setAllowedOrigins(List.of(\"*\"));\r\n        publicApi.setAllowedMethods(List.of(\"GET\"));\r\n        publicApi.setAllowedHeaders(List.of(\"*\"));\r\n        publicApi.setMaxAge(3600L);\r\n        source.registerCorsConfiguration(\"/api/public/**\", publicApi);\r\n\r\n        // Authenticated API — specific origins only\r\n        CorsConfiguration secureApi = new CorsConfiguration();\r\n        secureApi.setAllowedOriginPatterns(List.of(\"https://*.example.com\"));\r\n        secureApi.setAllowedMethods(List.of(\"GET\", \"POST\", \"PUT\", \"DELETE\"));\r\n        secureApi.setAllowedHeaders(List.of(\"Authorization\", \"Content-Type\"));\r\n        secureApi.setAllowCredentials(true);\r\n        secureApi.setExposedHeaders(List.of(\"X-Request-Id\"));\r\n        secureApi.setMaxAge(1800L);\r\n        source.registerCorsConfiguration(\"/api/secure/**\", secureApi);\r\n\r\n        // Admin API — single origin\r\n        CorsConfiguration adminApi = new CorsConfiguration();\r\n        adminApi.setAllowedOrigins(List.of(\"https://admin.example.com\"));\r\n        adminApi.setAllowedMethods(List.of(\"*\"));\r\n        adminApi.setAllowedHeaders(List.of(\"*\"));\r\n        adminApi.setAllowCredentials(true);\r\n        adminApi.setMaxAge(600L);\r\n        source.registerCorsConfiguration(\"/api/admin/**\", adminApi);\r\n\r\n        return source;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "97-cors-with-spring-security-filter-chain",
      children: "9.7 CORS with Spring Security Filter Chain"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CORS must be configured before Spring Security's filter chain processes the request. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cors()"
      }), " in the security configuration:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\n@EnableWebSecurity\r\npublic class SecurityCorsConfig {\r\n\r\n    private final CorsConfigurationSource corsConfigurationSource;\r\n\r\n    public SecurityCorsConfig(CorsConfigurationSource corsConfigurationSource) {\r\n        this.corsConfigurationSource = corsConfigurationSource;\r\n    }\r\n\r\n    @Bean\r\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\r\n        http\r\n            .cors(cors -> cors.configurationSource(corsConfigurationSource))\r\n            .authorizeHttpRequests(auth -> auth\r\n                .requestMatchers(\"/api/public/**\").permitAll()\r\n                .anyRequest().authenticated()\r\n            )\r\n            .httpBasic(httpBasic -> {})\r\n            .csrf(csrf -> csrf.disable());\r\n\r\n        return http.build();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "98-preflight-options-handling",
      children: "9.8 Preflight (OPTIONS) Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before the actual request, browsers send a preflight OPTIONS request to check CORS permissions:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OPTIONS /api/books HTTP/1.1\r\nOrigin: https://myapp.example.com\r\nAccess-Control-Request-Method: POST\r\nAccess-Control-Request-Headers: Authorization, Content-Type\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring's CORS filter handles this automatically when CORS is configured. The response includes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HTTP/1.1 200 OK\r\nAccess-Control-Allow-Origin: https://myapp.example.com\r\nAccess-Control-Allow-Methods: POST, GET, PUT, DELETE\r\nAccess-Control-Allow-Headers: Authorization, Content-Type\r\nAccess-Control-Max-Age: 3600\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you need custom preflight handling:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\r\npublic class CorsPreflightFilter implements Filter {\r\n\r\n    @Override\r\n    public void doFilter(\r\n            ServletRequest request,\r\n            ServletResponse response,\r\n            FilterChain chain) throws IOException, ServletException {\r\n\r\n        HttpServletRequest httpRequest = (HttpServletRequest) request;\r\n        HttpServletResponse httpResponse = (HttpServletResponse) response;\r\n\r\n        if (\"OPTIONS\".equalsIgnoreCase(httpRequest.getMethod())) {\r\n            httpResponse.setHeader(\"Access-Control-Allow-Origin\", \"https://myapp.example.com\");\r\n            httpResponse.setHeader(\"Access-Control-Allow-Methods\", \"GET, POST, PUT, DELETE, OPTIONS\");\r\n            httpResponse.setHeader(\"Access-Control-Allow-Headers\", \"Authorization, Content-Type\");\r\n            httpResponse.setHeader(\"Access-Control-Max-Age\", \"3600\");\r\n            httpResponse.setStatus(HttpServletResponse.SC_OK);\r\n            return;\r\n        }\r\n\r\n        chain.doFilter(request, response);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "99-cors-error-handling",
      children: "9.9 CORS Error Handling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When CORS validation fails, Spring returns a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "403 Forbidden"
      }), " with an error message. Customize the response:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\r\npublic class CorsAccessDeniedHandler implements AccessDeniedHandler {\r\n\r\n    @Override\r\n    public void handle(\r\n            HttpServletRequest request,\r\n            HttpServletResponse response,\r\n            AccessDeniedException accessDeniedException)\r\n            throws IOException, ServletException {\r\n\r\n        response.setContentType(\"application/json\");\r\n        response.setStatus(HttpServletResponse.SC_FORBIDDEN);\r\n\r\n        String json = \"\"\"\r\n            {\r\n                \"error\": \"CORS Forbidden\",\r\n                \"message\": \"Origin '%s' is not allowed\",\r\n                \"timestamp\": \"%s\"\r\n            }\r\n            \"\"\".formatted(\r\n                request.getHeader(\"Origin\"),\r\n                java.time.Instant.now().toString()\r\n            );\r\n\r\n        response.getWriter().write(json);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Register it:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Bean\r\npublic SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\r\n    http\r\n        .cors(cors -> cors.configurationSource(corsConfigurationSource())\r\n            .accessDeniedHandler(new CorsAccessDeniedHandler()))\r\n        // ...\r\n        ;\r\n    return http.build();\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!WARNING]\r\nAvoid allowing all origins with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "allowedOrigins(\"*\")"
        }), ". Be specific about which origins, methods, and headers you allow."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-csrf--cross-site-request-forgery",
      children: "10. CSRF — Cross-Site Request Forgery"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CSRF (also called XSRF) is an attack that forces an authenticated user to perform unwanted actions on a web application. Spring Security provides built-in CSRF protection."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-how-csrf-works",
      children: "10.1 How CSRF Works"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An attacker tricks the victim's browser into sending a forged request:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["User logs into ", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://bank.example.com"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Browser stores the session cookie"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["User visits ", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://malicious.site"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Malicious site sends ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<form action=\"https://bank.example.com/transfer\" method=\"POST\">"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Browser includes the bank's cookie, and the server processes the request"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CSRF tokens prevent this by requiring a token that the attacker cannot predict."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-default-csrf-protection",
      children: "10.2 Default CSRF Protection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Security enables CSRF protection by default for state-changing operations (POST, PUT, DELETE, PATCH)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\n@EnableWebSecurity\r\npublic class CsrfDefaultConfig {\r\n\r\n    @Bean\r\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\r\n        http\r\n            .authorizeHttpRequests(auth -> auth\r\n                .anyRequest().authenticated()\r\n            )\r\n            .formLogin(form -> {})\r\n            // CSRF is enabled by default\r\n            // .csrf(csrf -> csrf.disable())\r\n            ;\r\n\r\n        return http.build();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-csrftokenrepository-implementations",
      children: "10.3 CsrfTokenRepository Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Security provides two built-in CSRF token repositories:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "httpsessioncsrftokenrepository-default",
      children: "HttpSessionCsrfTokenRepository (Default)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stores the CSRF token in the HTTP session. The token is generated and stored server-side."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\n@EnableWebSecurity\r\npublic class SessionCsrfConfig {\r\n\r\n    @Bean\r\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\r\n        http\r\n            .csrf(csrf -> csrf\r\n                .csrfTokenRepository(new HttpSessionCsrfTokenRepository())\r\n            )\r\n            .authorizeHttpRequests(auth -> auth\r\n                .anyRequest().authenticated()\r\n            )\r\n            .formLogin(form -> {});\r\n\r\n        return http.build();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The token is exposed via a request attribute named ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_csrf"
      }), " and must be included in requests as a header ", (0,jsx_runtime.jsx)(_components.code, {
        children: "X-CSRF-TOKEN"
      }), " or parameter ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_csrf"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cookiecsrftokenrepository",
      children: "CookieCsrfTokenRepository"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Stores the CSRF token in a cookie named ", (0,jsx_runtime.jsx)(_components.code, {
        children: "XSRF-TOKEN"
      }), ". The client reads the cookie and sends it back as a header."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\n@EnableWebSecurity\r\npublic class CookieCsrfConfig {\r\n\r\n    @Bean\r\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\r\n        http\r\n            .csrf(csrf -> csrf\r\n                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())\r\n            )\r\n            .authorizeHttpRequests(auth -> auth\r\n                .anyRequest().authenticated()\r\n            )\r\n            .formLogin(form -> {});\r\n\r\n        return http.build();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "withHttpOnlyFalse()"
      }), " makes the cookie readable by JavaScript — required for SPAs that need to read the token."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "104-custom-csrftokenrepository",
      children: "10.4 Custom CsrfTokenRepository"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.csrf;\r\n\r\nimport jakarta.servlet.http.Cookie;\r\nimport jakarta.servlet.http.HttpServletRequest;\r\nimport jakarta.servlet.http.HttpServletResponse;\r\nimport org.springframework.security.web.csrf.CsrfToken;\r\nimport org.springframework.security.web.csrf.CsrfTokenRepository;\r\nimport org.springframework.security.web.csrf.DefaultCsrfToken;\r\n\r\nimport java.util.UUID;\r\nimport java.util.concurrent.ConcurrentHashMap;\r\n\r\npublic class CustomCsrfTokenRepository implements CsrfTokenRepository {\r\n\r\n    private static final String DEFAULT_CSRF_PARAMETER_NAME = \"_csrf\";\r\n    private static final String DEFAULT_CSRF_HEADER_NAME = \"X-CSRF-TOKEN\";\r\n    private static final String DEFAULT_CSRF_COOKIE_NAME = \"CUSTOM-XSRF-TOKEN\";\r\n\r\n    private final ConcurrentHashMap<String, String> tokenStore = new ConcurrentHashMap<>();\r\n\r\n    @Override\r\n    public CsrfToken generateToken(HttpServletRequest request) {\r\n        return new DefaultCsrfToken(\r\n            DEFAULT_CSRF_HEADER_NAME,\r\n            DEFAULT_CSRF_PARAMETER_NAME,\r\n            UUID.randomUUID().toString()\r\n        );\r\n    }\r\n\r\n    @Override\r\n    public void saveToken(\r\n            CsrfToken token,\r\n            HttpServletRequest request,\r\n            HttpServletResponse response) {\r\n\r\n        String tokenValue = token != null ? token.getToken() : \"\";\r\n        Cookie cookie = new Cookie(DEFAULT_CSRF_COOKIE_NAME, tokenValue);\r\n        cookie.setSecure(true);\r\n        cookie.setHttpOnly(false);\r\n        cookie.setPath(\"/\");\r\n        cookie.setMaxAge(token != null ? -1 : 0);\r\n        response.addCookie(cookie);\r\n\r\n        // Also store in session as fallback\r\n        if (token != null) {\r\n            request.getSession().setAttribute(DEFAULT_CSRF_COOKIE_NAME, token.getToken());\r\n        } else {\r\n            request.getSession().removeAttribute(DEFAULT_CSRF_COOKIE_NAME);\r\n        }\r\n    }\r\n\r\n    @Override\r\n    public CsrfToken loadToken(HttpServletRequest request) {\r\n        String tokenValue = null;\r\n\r\n        // Try cookie first\r\n        Cookie[] cookies = request.getCookies();\r\n        if (cookies != null) {\r\n            for (Cookie cookie : cookies) {\r\n                if (DEFAULT_CSRF_COOKIE_NAME.equals(cookie.getName())) {\r\n                    tokenValue = cookie.getValue();\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n\r\n        // Fall back to session\r\n        if (tokenValue == null || tokenValue.isEmpty()) {\r\n            tokenValue = (String) request.getSession()\r\n                .getAttribute(DEFAULT_CSRF_COOKIE_NAME);\r\n        }\r\n\r\n        if (tokenValue == null || tokenValue.isEmpty()) {\r\n            return null;\r\n        }\r\n\r\n        return new DefaultCsrfToken(\r\n            DEFAULT_CSRF_HEADER_NAME,\r\n            DEFAULT_CSRF_PARAMETER_NAME,\r\n            tokenValue\r\n        );\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "105-when-to-disable-csrf",
      children: "10.5 When to Disable CSRF"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CSRF protection is unnecessary for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "REST APIs that use token-based authentication"
        }), " (JWT, OAuth2, API keys)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Services consumed by non-browser clients"
        }), " (mobile apps, server-to-server)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stateless APIs"
        }), " (no session cookie)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\n@EnableWebSecurity\r\npublic class RestApiSecurityConfig {\r\n\r\n    @Bean\r\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\r\n        http\r\n            .csrf(csrf -> csrf.disable())\r\n            .sessionManagement(session ->\r\n                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))\r\n            .authorizeHttpRequests(auth -> auth\r\n                .requestMatchers(\"/api/public/**\").permitAll()\r\n                .anyRequest().authenticated()\r\n            )\r\n            .httpBasic(httpBasic -> {});\r\n\r\n        return http.build();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "106-csrf-with-spa-single-page-application",
      children: "10.6 CSRF with SPA (Single Page Application)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SPAs typically use the double-submit cookie pattern:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\n@EnableWebSecurity\r\npublic class SpaCsrfConfig {\r\n\r\n    @Bean\r\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\r\n        http\r\n            .csrf(csrf -> csrf\r\n                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())\r\n                .csrfTokenRequestHandler(new CsrfTokenRequestAttributeHandler())\r\n            )\r\n            .authorizeHttpRequests(auth -> auth\r\n                .requestMatchers(\"/api/auth/**\").permitAll()\r\n                .anyRequest().authenticated()\r\n            )\r\n            .formLogin(form -> {});\r\n\r\n        return http.build();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The SPA reads the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "XSRF-TOKEN"
      }), " cookie and sends it back as the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "X-XSRF-TOKEN"
      }), " header:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Angular does this automatically for XSRF-TOKEN cookie\r\n// React example:\r\nasync function apiCall(url, options = {}) {\r\n    const csrfToken = getCookie('XSRF-TOKEN');\r\n    const response = await fetch(url, {\r\n        ...options,\r\n        headers: {\r\n            ...options.headers,\r\n            'X-XSRF-TOKEN': csrfToken,\r\n        },\r\n        credentials: 'include',\r\n    });\r\n    return response.json();\r\n}\r\n\r\nfunction getCookie(name) {\r\n    const value = `; ${document.cookie}`;\r\n    const parts = value.split(`; ${name}=`);\r\n    if (parts.length === 2) return parts.pop().split(';').shift();\r\n    return null;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "107-csrftokenrequestattributehandler",
      children: "10.7 CsrfTokenRequestAttributeHandler"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Controls how the CSRF token is exposed to the request. The default handler makes the token available as a request attribute."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\n@EnableWebSecurity\r\npublic class CsrfHandlerConfig {\r\n\r\n    @Bean\r\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\r\n        http\r\n            .csrf(csrf -> csrf\r\n                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())\r\n                .csrfTokenRequestHandler(new CsrfTokenRequestAttributeHandler())\r\n            )\r\n            .authorizeHttpRequests(auth -> auth\r\n                .anyRequest().authenticated()\r\n            )\r\n            .formLogin(form -> {});\r\n\r\n        return http.build();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Custom request handler:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.csrf;\r\n\r\nimport jakarta.servlet.http.HttpServletRequest;\r\nimport jakarta.servlet.http.HttpServletResponse;\r\nimport org.springframework.security.web.csrf.CsrfToken;\r\nimport org.springframework.security.web.csrf.CsrfTokenRequestHandler;\r\nimport org.springframework.security.web.csrf.CsrfTokenRequestResolver;\r\n\r\nimport java.util.function.Supplier;\r\n\r\npublic class CustomCsrfTokenRequestHandler implements CsrfTokenRequestHandler {\r\n\r\n    private final CsrfTokenRequestHandler delegate =\r\n        new CsrfTokenRequestAttributeHandler();\r\n\r\n    @Override\r\n    public void handle(\r\n            HttpServletRequest request,\r\n            HttpServletResponse response,\r\n            Supplier<CsrfToken> deferredCsrfToken) {\r\n\r\n        // Perform custom handling before delegating\r\n        CsrfToken token = deferredCsrfToken.get();\r\n\r\n        // Log CSRF validation attempts in debug mode\r\n        if (request.getHeader(token.getHeaderName()) != null) {\r\n            System.out.printf(\"[CSRF] Token found in header for %s %s%n\",\r\n                request.getMethod(), request.getRequestURI());\r\n        }\r\n\r\n        delegate.handle(request, response, deferredCsrfToken);\r\n    }\r\n\r\n    @Override\r\n    public String resolveCsrfTokenValue(HttpServletRequest request, CsrfToken csrfToken) {\r\n        // Try header first, then parameter\r\n        String headerValue = request.getHeader(csrfToken.getHeaderName());\r\n        if (headerValue != null) return headerValue;\r\n\r\n        String paramValue = request.getParameter(csrfToken.getParameterName());\r\n        if (paramValue != null) return paramValue;\r\n\r\n        // Try alternate header names\r\n        String xsrfValue = request.getHeader(\"X-XSRF-TOKEN\");\r\n        if (xsrfValue != null) return xsrfValue;\r\n\r\n        return \"\";\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "108-custom-accessdeniedhandler-for-csrf-failures",
      children: "10.8 Custom AccessDeniedHandler for CSRF Failures"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When CSRF validation fails, Spring returns a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "403 Forbidden"
      }), ". Customize this response:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.csrf;\r\n\r\nimport jakarta.servlet.http.HttpServletRequest;\r\nimport jakarta.servlet.http.HttpServletResponse;\r\nimport org.springframework.security.access.AccessDeniedException;\r\nimport org.springframework.security.web.access.AccessDeniedHandler;\r\nimport org.springframework.security.web.csrf.InvalidCsrfTokenException;\r\nimport org.springframework.security.web.csrf.MissingCsrfTokenException;\r\n\r\nimport java.io.IOException;\r\nimport java.time.Instant;\r\n\r\npublic class CsrfAccessDeniedHandler implements AccessDeniedHandler {\r\n\r\n    @Override\r\n    public void handle(\r\n            HttpServletRequest request,\r\n            HttpServletResponse response,\r\n            AccessDeniedException accessDeniedException)\r\n            throws IOException {\r\n\r\n        response.setContentType(\"application/json\");\r\n        response.setCharacterEncoding(\"UTF-8\");\r\n\r\n        String errorType;\r\n        String message;\r\n\r\n        if (accessDeniedException instanceof MissingCsrfTokenException) {\r\n            errorType = \"CSRF_TOKEN_MISSING\";\r\n            message = \"CSRF token is missing. Include X-CSRF-TOKEN header or _csrf parameter.\";\r\n            response.setStatus(403);\r\n        } else if (accessDeniedException instanceof InvalidCsrfTokenException) {\r\n            errorType = \"CSRF_TOKEN_INVALID\";\r\n            message = \"CSRF token is invalid or expired. Refresh the page and try again.\";\r\n            response.setStatus(403);\r\n        } else {\r\n            errorType = \"CSRF_ERROR\";\r\n            message = accessDeniedException.getMessage();\r\n            response.setStatus(403);\r\n        }\r\n\r\n        String json = \"\"\"\r\n            {\r\n                \"error\": \"%s\",\r\n                \"message\": \"%s\",\r\n                \"timestamp\": \"%s\",\r\n                \"path\": \"%s\"\r\n            }\r\n            \"\"\".formatted(\r\n                errorType,\r\n                message,\r\n                Instant.now().toString(),\r\n                request.getRequestURI()\r\n            );\r\n\r\n        response.getWriter().write(json);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Register it:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Bean\r\npublic SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\r\n    http\r\n        .csrf(csrf -> csrf\r\n            .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())\r\n            .accessDeniedHandler(new CsrfAccessDeniedHandler())\r\n        )\r\n        .authorizeHttpRequests(auth -> auth\r\n            .anyRequest().authenticated()\r\n        )\r\n        .formLogin(form -> {});\r\n\r\n    return http.build();\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "109-csrf-protection-for-non-browser-clients",
      children: "10.9 CSRF Protection for Non-Browser Clients"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For mobile apps or service-to-service calls, disable CSRF entirely:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\n@Order(1)\r\npublic class MobileApiSecurityConfig {\r\n\r\n    @Bean\r\n    @Order(1)\r\n    public SecurityFilterChain mobileFilterChain(HttpSecurity http) throws Exception {\r\n        http\r\n            .securityMatcher(\"/api/mobile/**\")\r\n            .csrf(csrf -> csrf.disable())\r\n            .sessionManagement(session ->\r\n                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))\r\n            .authorizeHttpRequests(auth -> auth\r\n                .anyRequest().authenticated()\r\n            )\r\n            .httpBasic(httpBasic -> {});\r\n\r\n        return http.build();\r\n    }\r\n}\r\n\r\n@Configuration\r\n@Order(2)\r\npublic class WebSecurityConfig {\r\n\r\n    @Bean\r\n    @Order(2)\r\n    public SecurityFilterChain webFilterChain(HttpSecurity http) throws Exception {\r\n        http\r\n            .securityMatcher(\"/web/**\")\r\n            .csrf(csrf -> csrf\r\n                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())\r\n            )\r\n            .authorizeHttpRequests(auth -> auth\r\n                .anyRequest().authenticated()\r\n            )\r\n            .formLogin(form -> {});\r\n\r\n        return http.build();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!NOTE]\r\nIf your service is a REST API using stateless auth (JWT/OAuth2), CSRF protection should be disabled → there is no browser session to protect."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-csp--content-security-policy-headers",
      children: "11. CSP — Content Security Policy Headers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Content Security Policy (CSP) is a browser security mechanism that helps detect and mitigate content injection attacks, including XSS and data injection."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-basic-csp-configuration",
      children: "11.1 Basic CSP Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\n@EnableWebSecurity\r\npublic class CspSecurityConfig {\r\n\r\n    @Bean\r\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\r\n        http\r\n            .headers(headers -> headers\r\n                .contentSecurityPolicy(csp -> csp\r\n                    .policyDirectives(\"default-src 'self'; \" +\r\n                        \"script-src 'self' 'unsafe-inline'; \" +\r\n                        \"style-src 'self' 'unsafe-inline'; \" +\r\n                        \"img-src 'self' data: https:; \" +\r\n                        \"font-src 'self' https://fonts.gstatic.com; \" +\r\n                        \"connect-src 'self' https://api.example.com; \" +\r\n                        \"frame-ancestors 'none'; \" +\r\n                        \"form-action 'self'; \" +\r\n                        \"base-uri 'self'; \" +\r\n                        \"object-src 'none'\")\r\n                )\r\n                .frameOptions(frame -> frame.deny())\r\n                .xssProtection(xss -> xss.block(false))\r\n                .contentTypeOptions(content -> contentTypeOptions -> {})\r\n            )\r\n            .authorizeHttpRequests(auth -> auth\r\n                .anyRequest().authenticated()\r\n            )\r\n            .formLogin(form -> {});\r\n\r\n        return http.build();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-comprehensive-security-headers",
      children: "11.2 Comprehensive Security Headers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\n@EnableWebSecurity\r\npublic class ComprehensiveHeaderConfig {\r\n\r\n    @Bean\r\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\r\n        http\r\n            .headers(headers -> headers\r\n                // Content Security Policy\r\n                .contentSecurityPolicy(csp -> csp\r\n                    .policyDirectives(\"default-src 'self'; \" +\r\n                        \"script-src 'self'; \" +\r\n                        \"style-src 'self' 'unsafe-inline'; \" +\r\n                        \"img-src 'self' data: https:; \" +\r\n                        \"font-src 'self'; \" +\r\n                        \"connect-src 'self'; \" +\r\n                        \"frame-ancestors 'none'; \" +\r\n                        \"form-action 'self'; \" +\r\n                        \"base-uri 'self'; \" +\r\n                        \"object-src 'none'; \" +\r\n                        \"upgrade-insecure-requests\")\r\n                )\r\n\r\n                // X-Content-Type-Options: nosniff\r\n                .contentTypeOptions(contentTypeOptions -> {})\r\n\r\n                // X-Frame-Options: DENY\r\n                .frameOptions(frameOptions -> frameOptions.deny())\r\n\r\n                // Strict-Transport-Security (HSTS)\r\n                .httpStrictTransportSecurity(hsts -> hsts\r\n                    .includeSubDomains(true)\r\n                    .maxAgeInSeconds(31536000)\r\n                    .preload(true)\r\n                )\r\n\r\n                // Referrer-Policy\r\n                .referrerPolicy(referrer ->\r\n                    referrer.policy(\r\n                        org.springframework.security.web.header.writers.ReferrerPolicyHeaderWriter\r\n                            .ReferrerPolicy.STRICT_ORIGIN_WHEN_CROSS_ORIGIN\r\n                    )\r\n                )\r\n\r\n                // Permissions-Policy\r\n                .permissionsPolicy(permissions -> permissions\r\n                    .policy(\"camera=(), \" +\r\n                        \"microphone=(), \" +\r\n                        \"geolocation=(self), \" +\r\n                        \"payment=(), \" +\r\n                        \"fullscreen=(self)\")\r\n                )\r\n\r\n                // Remove Server header\r\n                .cacheControl(cache -> {})\r\n            )\r\n            .authorizeHttpRequests(auth -> auth\r\n                .anyRequest().authenticated()\r\n            );\r\n\r\n        return http.build();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-custom-headers-with-addheaderwriter",
      children: "11.3 Custom Headers with addHeaderWriter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add custom security headers programmatically:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\n@EnableWebSecurity\r\npublic class CustomHeaderConfig {\r\n\r\n    @Bean\r\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\r\n        http\r\n            .headers(headers -> headers\r\n                .addHeaderWriter((request, response) -> {\r\n                    response.setHeader(\"X-Content-Type-Options\", \"nosniff\");\r\n                    response.setHeader(\"X-Frame-Options\", \"DENY\");\r\n                    response.setHeader(\"X-XSS-Protection\", \"0\");\r\n                    response.setHeader(\"Strict-Transport-Security\",\r\n                        \"max-age=31536000; includeSubDomains; preload\");\r\n                    response.setHeader(\"Referrer-Policy\",\r\n                        \"strict-origin-when-cross-origin\");\r\n                    response.setHeader(\"Permissions-Policy\",\r\n                        \"camera=(), microphone=(), geolocation=(self)\");\r\n                    response.setHeader(\"Content-Security-Policy\",\r\n                        \"default-src 'self'\");\r\n                    response.setHeader(\"X-Powered-By\", \"\");\r\n                    response.setHeader(\"Server\", \"\");\r\n                })\r\n            )\r\n            .authorizeHttpRequests(auth -> auth\r\n                .anyRequest().authenticated()\r\n            );\r\n\r\n        return http.build();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "114-staticheaderswriter",
      children: "11.4 StaticHeadersWriter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.security.web.header.writers.StaticHeadersWriter;\r\n\r\n@Bean\r\npublic SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\r\n    http\r\n        .headers(headers -> headers\r\n            .addHeaderWriter(new StaticHeadersWriter(\"X-Robots-Tag\", \"noindex, nofollow\"))\r\n            .addHeaderWriter(new StaticHeadersWriter(\"X-Permitted-Cross-Domain-Policies\", \"none\"))\r\n        )\r\n        .authorizeHttpRequests(auth -> auth\r\n            .anyRequest().authenticated()\r\n        );\r\n\r\n    return http.build();\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "115-csp-reporting",
      children: "11.5 CSP Reporting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For monitoring CSP violations without full enforcement:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\n@EnableWebSecurity\r\npublic class CspReportConfig {\r\n\r\n    @Bean\r\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\r\n        http\r\n            .headers(headers -> headers\r\n                .contentSecurityPolicy(csp -> csp\r\n                    .policyDirectives(\"default-src 'self'; \" +\r\n                        \"script-src 'self' 'report-sample'; \" +\r\n                        \"style-src 'self' 'report-sample'; \" +\r\n                        \"img-src 'self'; \" +\r\n                        \"report-uri /api/csp-violation; \" +\r\n                        \"report-to csp-endpoint\")\r\n                )\r\n            )\r\n            .authorizeHttpRequests(auth -> auth\r\n                .requestMatchers(\"/api/csp-violation\").permitAll()\r\n                .anyRequest().authenticated()\r\n            );\r\n\r\n        return http.build();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CSP violation receiver endpoint:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.controller;\r\n\r\nimport org.springframework.http.HttpStatus;\r\nimport org.springframework.http.MediaType;\r\nimport org.springframework.web.bind.annotation.*;\r\n\r\nimport java.util.Map;\r\n\r\n@RestController\r\n@RequestMapping(\"/api\")\r\npublic class CspViolationController {\r\n\r\n    @PostMapping(value = \"/csp-violation\",\r\n        consumes = \"application/csp-report\")\r\n    @ResponseStatus(HttpStatus.NO_CONTENT)\r\n    public void receiveCspReport(@RequestBody Map<String, Object> report) {\r\n        // Log the CSP violation\r\n        System.err.println(\"[CSP VIOLATION] \" + report);\r\n        // Store in database for analysis\r\n    }\r\n\r\n    @PostMapping(value = \"/csp-violation\",\r\n        consumes = MediaType.APPLICATION_JSON_VALUE)\r\n    @ResponseStatus(HttpStatus.NO_CONTENT)\r\n    public void receiveCspReportJson(@RequestBody Map<String, Object> report) {\r\n        System.err.println(\"[CSP VIOLATION] \" + report);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-complete-integration-example",
      children: "12. Complete Integration Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A full configuration integrating method security, CORS, CSRF, and CSP:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.config;\r\n\r\nimport com.course.security.csrf.CsrfAccessDeniedHandler;\r\nimport com.course.security.evaluator.DocumentPermissionEvaluator;\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Configuration;\r\nimport org.springframework.security.access.expression.method.DefaultMethodSecurityExpressionHandler;\r\nimport org.springframework.security.access.expression.method.MethodSecurityExpressionHandler;\r\nimport org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;\r\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\r\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\r\nimport org.springframework.security.config.http.SessionCreationPolicy;\r\nimport org.springframework.security.web.SecurityFilterChain;\r\nimport org.springframework.security.web.csrf.CookieCsrfTokenRepository;\r\nimport org.springframework.security.web.csrf.CsrfTokenRequestAttributeHandler;\r\nimport org.springframework.web.cors.CorsConfiguration;\r\nimport org.springframework.web.cors.CorsConfigurationSource;\r\nimport org.springframework.web.cors.UrlBasedCorsConfigurationSource;\r\n\r\nimport java.util.List;\r\n\r\n@Configuration\r\n@EnableWebSecurity\r\n@EnableMethodSecurity(securedEnabled = true, jsr250Enabled = true)\r\npublic class MasterSecurityConfig {\r\n\r\n    private final DocumentPermissionEvaluator documentPermissionEvaluator;\r\n\r\n    public MasterSecurityConfig(DocumentPermissionEvaluator documentPermissionEvaluator) {\r\n        this.documentPermissionEvaluator = documentPermissionEvaluator;\r\n    }\r\n\r\n    @Bean\r\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\r\n        http\r\n            // CORS\r\n            .cors(cors -> cors.configurationSource(corsConfigurationSource()))\r\n\r\n            // CSRF — enabled for browser clients, disabled for API\r\n            .csrf(csrf -> csrf\r\n                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())\r\n                .csrfTokenRequestHandler(new CsrfTokenRequestAttributeHandler())\r\n                .accessDeniedHandler(new CsrfAccessDeniedHandler())\r\n            )\r\n\r\n            // Security Headers / CSP\r\n            .headers(headers -> headers\r\n                .contentSecurityPolicy(csp -> csp\r\n                    .policyDirectives(\"default-src 'self'; \" +\r\n                        \"script-src 'self'; \" +\r\n                        \"style-src 'self' 'unsafe-inline'; \" +\r\n                        \"img-src 'self' data:; \" +\r\n                        \"font-src 'self'; \" +\r\n                        \"connect-src 'self'; \" +\r\n                        \"frame-ancestors 'none'; \" +\r\n                        \"form-action 'self'; \" +\r\n                        \"base-uri 'self'; \" +\r\n                        \"object-src 'none'\")\r\n                )\r\n                .frameOptions(frame -> frame.deny())\r\n                .httpStrictTransportSecurity(hsts -> hsts\r\n                    .includeSubDomains(true)\r\n                    .maxAgeInSeconds(31536000))\r\n                .referrerPolicy(referrer -> referrer\r\n                    .policy(org.springframework.security.web.header.writers\r\n                        .ReferrerPolicyHeaderWriter.ReferrerPolicy\r\n                        .STRICT_ORIGIN_WHEN_CROSS_ORIGIN))\r\n                .permissionsPolicy(permissions -> permissions\r\n                    .policy(\"camera=(), microphone=(), geolocation=(), payment=()\"))\r\n            )\r\n\r\n            // Authorization\r\n            .authorizeHttpRequests(auth -> auth\r\n                .requestMatchers(\"/api/public/**\").permitAll()\r\n                .requestMatchers(\"/api/csp-violation\").permitAll()\r\n                .requestMatchers(\"/api/admin/**\").hasRole(\"ADMIN\")\r\n                .anyRequest().authenticated()\r\n            )\r\n\r\n            .formLogin(form -> {})\r\n            .httpBasic(httpBasic -> {});\r\n\r\n        return http.build();\r\n    }\r\n\r\n    @Bean\r\n    public CorsConfigurationSource corsConfigurationSource() {\r\n        CorsConfiguration config = new CorsConfiguration();\r\n        config.setAllowedOriginPatterns(List.of(\"https://*.example.com\", \"http://localhost:*\"));\r\n        config.setAllowedMethods(List.of(\"GET\", \"POST\", \"PUT\", \"DELETE\", \"PATCH\", \"OPTIONS\"));\r\n        config.setAllowedHeaders(List.of(\"Authorization\", \"Content-Type\", \"X-CSRF-TOKEN\", \"X-XSRF-TOKEN\"));\r\n        config.setExposedHeaders(List.of(\"X-Total-Count\", \"X-Request-Id\"));\r\n        config.setAllowCredentials(true);\r\n        config.setMaxAge(3600L);\r\n\r\n        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();\r\n        source.registerCorsConfiguration(\"/api/**\", config);\r\n        return source;\r\n    }\r\n\r\n    @Bean\r\n    public MethodSecurityExpressionHandler methodSecurityExpressionHandler() {\r\n        DefaultMethodSecurityExpressionHandler handler =\r\n            new DefaultMethodSecurityExpressionHandler();\r\n        handler.setPermissionEvaluator(documentPermissionEvaluator);\r\n        return handler;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@EnableMethodSecurity(prePostEnabled=true)"
        }), " enables ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@PreAuthorize"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@PostAuthorize"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@PreFilter"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@PostFilter"
        }), " with full SpEL support"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "hasRole('ADMIN')"
        }), " checks for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ROLE_ADMIN"
        }), "; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hasAuthority('WRITE')"
        }), " checks for that exact authority string"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@PostAuthorize"
        }), " evaluates after the method and can access ", (0,jsx_runtime.jsx)(_components.code, {
          children: "returnObject"
        }), " — useful for object-level security"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@PreFilter"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@PostFilter"
        }), " remove elements from collections that don't match the SpEL expression"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@Secured"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@RolesAllowed"
        }), " are legacy alternatives without SpEL support"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Custom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PermissionEvaluator"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MethodSecurityExpressionHandler"
        }), " enables ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hasPermission(...)"
        }), " checks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Custom meta-annotations like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@IsAdmin"
        }), " reduce boilerplate"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AspectJ pointcuts provide cross-cutting security for third-party or legacy code"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@CrossOrigin"
        }), " on controllers or a global ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CorsConfigurationSource"
        }), " bean controls cross-origin access"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "allowedOriginPatterns"
        }), " supports wildcards with credentials; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "allowedOrigins"
        }), " does not"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CSRF is enabled by default and uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "HttpSessionCsrfTokenRepository"
        }), "; SPAs should use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CookieCsrfTokenRepository.withHttpOnlyFalse()"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Disable CSRF for stateless REST APIs, mobile clients, and service-to-service communication"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CSP headers (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Content-Security-Policy"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "X-Frame-Options"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "HSTS"
        }), ", etc.) provide defense-in-depth against XSS and injection attacks"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Role-based access"
          }), ": Configure ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@EnableMethodSecurity"
          }), " with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "InMemoryUserDetailsManager"
          }), " containing users with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "USER"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "EDITOR"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ADMIN"
          }), " roles. Secure an endpoint so only ", (0,jsx_runtime.jsx)(_components.code, {
            children: "EDITOR"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ADMIN"
          }), " can POST new articles."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SpEL parameter matching"
          }), ": Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "TicketController"
          }), " with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@PreAuthorize(\"#ticket.creator == authentication.name or hasRole('ADMIN')\")"
          }), ". Implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Ticket"
          }), " model with a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "creator"
          }), " field."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "PostAuthorize with returnObject"
          }), ": Build a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PatientController"
          }), " where ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@PostAuthorize(\"returnObject.doctorId == authentication.principal.id\")"
          }), " ensures doctors only see their own patients."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "PermissionEvaluator"
          }), ": Implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ProjectPermissionEvaluator"
          }), " that supports ", (0,jsx_runtime.jsx)(_components.code, {
            children: "READ"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "WRITE"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MANAGE"
          }), " permissions on ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Project"
          }), " objects. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "hasPermission(#id, 'Project', 'READ')"
          }), " in controllers."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Meta-annotation"
          }), ": Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@CanManageProjects"
          }), " meta-annotation combining ", (0,jsx_runtime.jsx)(_components.code, {
            children: "hasRole('ADMIN')"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "hasAuthority('MANAGE_PROJECTS')"
          }), ". Apply it to a project management controller."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CORS configuration"
          }), ": Set up ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CorsConfigurationSource"
          }), " that allows ", (0,jsx_runtime.jsx)(_components.code, {
            children: "http://localhost:5173"
          }), " (Vite dev server) with credentials. Configure Spring Security to use this CORS source."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CSRF for SPA"
          }), ": Configure ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CookieCsrfTokenRepository.withHttpOnlyFalse()"
          }), " for a Spring Boot backend consumed by a React SPA. Write the JavaScript code that reads ", (0,jsx_runtime.jsx)(_components.code, {
            children: "XSRF-TOKEN"
          }), " and sends ", (0,jsx_runtime.jsx)(_components.code, {
            children: "X-XSRF-TOKEN"
          }), " header."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CSP reporting"
          }), ": Enable CSP with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "report-uri /api/csp-violation"
          }), ". Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@PostMapping"
          }), " endpoint that receives and logs CSP violation reports."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Security headers audit"
          }), ": Configure all major security headers (", (0,jsx_runtime.jsx)(_components.code, {
            children: "Content-Security-Policy"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "X-Content-Type-Options"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "X-Frame-Options"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Strict-Transport-Security"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Referrer-Policy"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Permissions-Policy"
          }), ") and verify them with curl."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi-chain security"
          }), ": Create two security filter chains: one for ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/api/mobile/**"
          }), " (stateless, CSRF disabled) and one for ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/web/**"
          }), " (session-based, CSRF with cookie repository)."]
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

/***/ 8453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
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