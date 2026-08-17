"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[63302],{

/***/ 90421
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
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Method Security, CORS and CSRF] --> B[Method Security]\n    A --> C[CORS]\n    A --> D[CSRF]\n    B --> B1[@PreAuthorize]\n    B --> B2[@PostAuthorize]\n    B --> B3[@Secured]\n    C --> C1[CorsConfigurationSource]\n    C --> C2[Allowed Origins / Methods / Headers]\n    D --> D1[CsrfTokenRepository]\n    D --> D2[Stateless API exemption]\n"
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
        children: "package com.course.security.config;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\nimport org.springframework.security.core.userdetails.User;\nimport org.springframework.security.core.userdetails.UserDetails;\nimport org.springframework.security.core.userdetails.UserDetailsService;\nimport org.springframework.security.provisioning.InMemoryUserDetailsManager;\nimport org.springframework.security.web.SecurityFilterChain;\n\n@Configuration\n@EnableWebSecurity\n@EnableMethodSecurity\npublic class SecurityConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers(\"/api/public/**\").permitAll()\n                .anyRequest().authenticated()\n            )\n            .httpBasic(httpBasic -> {})\n            .csrf(csrf -> csrf.disable());\n\n        return http.build();\n    }\n\n    @Bean\n    public UserDetailsService userDetailsService() {\n        UserDetails admin = User.builder()\n            .username(\"admin\")\n            .password(\"{noop}admin123\")\n            .roles(\"ADMIN\")\n            .build();\n\n        UserDetails editor = User.builder()\n            .username(\"editor\")\n            .password(\"{noop}editor123\")\n            .roles(\"EDITOR\")\n            .build();\n\n        UserDetails viewer = User.builder()\n            .username(\"viewer\")\n            .password(\"{noop}viewer123\")\n            .roles(\"VIEWER\")\n            .build();\n\n        UserDetails author = User.builder()\n            .username(\"author\")\n            .password(\"{noop}author123\")\n            .roles(\"AUTHOR\")\n            .authorities(\"ROLE_AUTHOR\", \"WRITE_ARTICLES\", \"EDIT_OWN_ARTICLES\")\n            .build();\n\n        return new InMemoryUserDetailsManager(admin, editor, viewer, author);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-enablemethodsecurity-attributes",
      children: "1.2 @EnableMethodSecurity Attributes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@EnableMethodSecurity(\n    securedEnabled = true,      // Enables @Secured (default false)\n    jsr250Enabled = true,       // Enables @RolesAllowed (default false)\n    prePostEnabled = true       // Enables @PreAuthorize etc. (default true)\n)\npublic class MethodSecurityConfig {\n}\n"
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
        children: "package com.course.security.internal;\n\nimport org.aopalliance.intercept.MethodInvocation;\nimport org.springframework.security.access.expression.method.DefaultMethodSecurityExpressionHandler;\nimport org.springframework.security.access.expression.method.MethodSecurityExpressionHandler;\nimport org.springframework.security.access.expression.method.MethodSecurityExpressionOperations;\nimport org.springframework.security.authentication.AuthenticationTrustResolver;\nimport org.springframework.security.authentication.AuthenticationTrustResolverImpl;\nimport org.springframework.security.core.Authentication;\n\npublic class CustomMethodSecurityExpressionHandler\n        extends DefaultMethodSecurityExpressionHandler {\n\n    private final AuthenticationTrustResolver trustResolver =\n        new AuthenticationTrustResolverImpl();\n\n    @Override\n    protected MethodSecurityExpressionOperations createSecurityExpressionRoot(\n            Authentication authentication, MethodInvocation invocation) {\n\n        CustomMethodSecurityExpressionRoot root =\n            new CustomMethodSecurityExpressionRoot(authentication);\n        root.setPermissionEvaluator(getPermissionEvaluator());\n        root.setTrustResolver(this.trustResolver);\n        root.setRoleHierarchy(getRoleHierarchy());\n        return root;\n    }\n}\n"
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
        children: ["[!TIP]\nUse ", (0,jsx_runtime.jsx)(_components.code, {
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
        children: "package com.course.security.controller;\n\nimport org.springframework.security.access.prepost.PreAuthorize;\nimport org.springframework.web.bind.annotation.*;\n\n@RestController\n@RequestMapping(\"/api/admin\")\npublic class AdminController {\n\n    // Only users with ROLE_ADMIN\n    @GetMapping(\"/dashboard\")\n    @PreAuthorize(\"hasRole('ADMIN')\")\n    public String dashboard() {\n        return \"Admin Dashboard\";\n    }\n\n    // Users with ADMIN or EDITOR role\n    @GetMapping(\"/reports\")\n    @PreAuthorize(\"hasAnyRole('ADMIN', 'EDITOR')\")\n    public String reports() {\n        return \"Reports\";\n    }\n\n    // Users with specific authority (not role-based)\n    @GetMapping(\"/analytics\")\n    @PreAuthorize(\"hasAuthority('VIEW_ANALYTICS')\")\n    public String analytics() {\n        return \"Analytics\";\n    }\n\n    // Multiple authorities\n    @PostMapping(\"/publish\")\n    @PreAuthorize(\"hasAnyAuthority('WRITE_ARTICLES', 'PUBLISH_ARTICLES')\")\n    public String publish() {\n        return \"Published\";\n    }\n\n    // Authenticated users only (any logged-in user)\n    @GetMapping(\"/profile\")\n    @PreAuthorize(\"isAuthenticated()\")\n    public String profile() {\n        return \"Profile\";\n    }\n\n    // Anonymous access allowed\n    @GetMapping(\"/public\")\n    @PreAuthorize(\"permitAll()\")\n    public String publicInfo() {\n        return \"Public Info\";\n    }\n}\n"
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
        children: "@RestController\n@RequestMapping(\"/api/articles\")\npublic class ArticleController {\n\n    @GetMapping\n    @PreAuthorize(\"hasRole('VIEWER') or hasRole('EDITOR') or hasRole('ADMIN')\")\n    public List<String> listArticles() {\n        return List.of(\"Article 1\", \"Article 2\");\n    }\n\n    @PostMapping\n    @PreAuthorize(\"hasAuthority('WRITE_ARTICLES')\")\n    public String createArticle() {\n        return \"Created\";\n    }\n\n    @PutMapping(\"/{id}\")\n    @PreAuthorize(\"hasAuthority('EDIT_OWN_ARTICLES') and #id == authentication.principal.id\")\n    public String updateArticle(@PathVariable Long id) {\n        return \"Updated \" + id;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-hasrole-hasanyrole--under-the-hood",
      children: "2.3 hasRole, hasAnyRole — Under the Hood"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// These are equivalent:\n@PreAuthorize(\"hasRole('ADMIN')\")\n@PreAuthorize(\"hasAuthority('ROLE_ADMIN')\")\n\n// hasAnyRole expands to:\n@PreAuthorize(\"hasAnyRole('ADMIN', 'EDITOR')\")\n// Same as:\n@PreAuthorize(\"hasAuthority('ROLE_ADMIN') or hasAuthority('ROLE_EDITOR')\")\n\n// Custom authority (no ROLE_ prefix):\n@PreAuthorize(\"hasAuthority('WRITE_ARTICLES')\")\n"
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
        children: "package com.course.security.config;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.access.expression.method.DefaultMethodSecurityExpressionHandler;\nimport org.springframework.security.access.expression.method.MethodSecurityExpressionHandler;\n\n@Configuration\npublic class ExpressionHandlerConfig {\n\n    @Bean\n    public MethodSecurityExpressionHandler methodSecurityExpressionHandler() {\n        DefaultMethodSecurityExpressionHandler handler =\n            new DefaultMethodSecurityExpressionHandler();\n        handler.setDefaultRolePrefix(\"APP_\");\n        return handler;\n    }\n}\n"
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
        children: "package com.course.security.controller;\n\nimport org.springframework.security.access.prepost.PreAuthorize;\nimport org.springframework.security.core.Authentication;\nimport org.springframework.security.core.annotation.AuthenticationPrincipal;\nimport org.springframework.security.core.userdetails.UserDetails;\nimport org.springframework.web.bind.annotation.*;\n\nimport java.util.Map;\n\n@RestController\n@RequestMapping(\"/api/user\")\npublic class UserController {\n\n    // Access Authentication object directly in SpEL\n    @GetMapping(\"/me\")\n    @PreAuthorize(\"isAuthenticated()\")\n    public Map<String, Object> currentUser(\n            @AuthenticationPrincipal UserDetails userDetails,\n            Authentication authentication) {\n\n        return Map.of(\n            \"username\", authentication.getName(),\n            \"authorities\", authentication.getAuthorities(),\n            \"principal\", authentication.getPrincipal().toString()\n        );\n    }\n\n    // Conditional access based on principal\n    @GetMapping(\"/documents/{username}\")\n    @PreAuthorize(\"authentication.name == #username\")\n    public String getDocument(@PathVariable String username) {\n        return \"Document for \" + username;\n    }\n\n    // Check principal type\n    @GetMapping(\"/admin-info\")\n    @PreAuthorize(\"isAuthenticated() and \" +\n        \"authentication.principal instanceof T(org.springframework.security.core.userdetails.User)\")\n    public String adminInfo() {\n        return \"Admin Info\";\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-complex-spel-expressions",
      children: "2.5 Complex SpEL Expressions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SpEL supports boolean operators, method calls, and type references:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\n@RequestMapping(\"/api/secure\")\npublic class SpELController {\n\n    // Logical AND\n    @GetMapping(\"/secret\")\n    @PreAuthorize(\"hasRole('ADMIN') and hasAuthority('VIEW_SECRETS')\")\n    public String secret() {\n        return \"Top Secret\";\n    }\n\n    // Logical OR with negation\n    @GetMapping(\"/restricted\")\n    @PreAuthorize(\"hasRole('ADMIN') or \" +\n        \"(hasRole('EDITOR') and !hasAuthority('SUSPENDED'))\")\n    public String restricted() {\n        return \"Restricted\";\n    }\n\n    // Ternary — expression must resolve to boolean\n    @GetMapping(\"/conditional\")\n    @PreAuthorize(\"hasRole('ADMIN') ? true : hasRole('EDITOR')\")\n    public String conditional() {\n        return \"Conditional Access\";\n    }\n\n    // Method calls on parameters\n    @PostMapping(\"/items\")\n    @PreAuthorize(\"#item.owner == authentication.name\")\n    public String createItem(@RequestBody Item item) {\n        return \"Item created by \" + item.getOwner();\n    }\n\n    // Static method call\n    @GetMapping(\"/evaluated\")\n    @PreAuthorize(\"T(java.time.LocalTime).now().hour < 17\")\n    public String businessHoursOnly() {\n        return \"Accessed during business hours\";\n    }\n\n    // Spring Bean reference\n    @GetMapping(\"/custom-check\")\n    @PreAuthorize(\"@accessEvaluator.hasAccess(authentication, 'CUSTOM_FEATURE')\")\n    public String customCheck() {\n        return \"Custom check passed\";\n    }\n\n    // Collection containment\n    @GetMapping(\"/dept/{dept}\")\n    @PreAuthorize(\"authentication.principal.departments.contains(#dept)\")\n    public String departmentOnly(@PathVariable String dept) {\n        return \"Department: \" + dept;\n    }\n}\n"
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
        children: "package com.course.security.controller;\n\nimport org.springframework.security.access.prepost.PreAuthorize;\nimport org.springframework.web.bind.annotation.*;\n\n@RestController\n@RequestMapping(\"/api/owners\")\npublic class OwnerController {\n\n    // Parameter match — user can only access their own data\n    @GetMapping(\"/{userId}/profile\")\n    @PreAuthorize(\"#userId == authentication.name\")\n    public String getProfile(@PathVariable String userId) {\n        return \"Profile for \" + userId;\n    }\n\n    @PutMapping(\"/{userId}/settings\")\n    @PreAuthorize(\"#userId == authentication.principal.username\")\n    public String updateSettings(\n            @PathVariable String userId,\n            @RequestBody Map<String, Object> settings) {\n        return \"Settings updated for \" + userId;\n    }\n\n    @DeleteMapping(\"/{userId}\")\n    @PreAuthorize(\"hasRole('ADMIN') or #userId == authentication.name\")\n    public String deleteUser(@PathVariable String userId) {\n        return \"Deleted user \" + userId;\n    }\n\n    // Multiple parameter constraints\n    @PostMapping(\"/transfer\")\n    @PreAuthorize(\"#fromAccount.owner == authentication.name and \" +\n        \"#amount <= 10000\")\n    public String transfer(\n            @RequestBody Account fromAccount,\n            @RequestParam BigDecimal amount) {\n        return \"Transferred \" + amount;\n    }\n}\n"
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
        children: "package com.course.security.controller;\n\nimport org.springframework.security.access.prepost.PostAuthorize;\nimport org.springframework.web.bind.annotation.*;\n\nimport java.util.Map;\nimport java.util.Optional;\n\n@RestController\n@RequestMapping(\"/api/documents\")\npublic class PostAuthorizeController {\n\n    private final DocumentService documentService;\n\n    public PostAuthorizeController(DocumentService documentService) {\n        this.documentService = documentService;\n    }\n\n    // Method runs, then authorization checks the return value\n    @GetMapping(\"/{id}\")\n    @PostAuthorize(\"returnObject.owner == authentication.name or \" +\n        \"hasRole('ADMIN')\")\n    public Document getDocument(@PathVariable Long id) {\n        return documentService.findById(id);\n    }\n\n    // Safe navigation — if null, access is denied\n    @GetMapping(\"/optional/{id}\")\n    @PostAuthorize(\"returnObject?.owner == authentication.name\")\n    public Optional<Document> getOptionalDocument(@PathVariable Long id) {\n        return documentService.findOptionalById(id);\n    }\n\n    // Check properties of the return value\n    @GetMapping(\"/{id}/details\")\n    @PostAuthorize(\"returnObject.visibility == 'PUBLIC' or \" +\n        \"returnObject.owner == authentication.name\")\n    public DocumentDetails getDetails(@PathVariable Long id) {\n        return documentService.getDetails(id);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-postauthorize-with-dto-projection",
      children: "3.2 PostAuthorize with DTO Projection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\n@RequestMapping(\"/api/accounts\")\npublic class AccountController {\n\n    private final AccountService accountService;\n\n    public AccountController(AccountService accountService) {\n        this.accountService = accountService;\n    }\n\n    @GetMapping(\"/{accountId}\")\n    @PostAuthorize(\"returnObject.ownerId == authentication.principal.id\")\n    public AccountDto getAccount(@PathVariable Long accountId) {\n        Account entity = accountService.findById(accountId);\n        return new AccountDto(\n            entity.getId(),\n            entity.getOwnerId(),\n            entity.getBalance(),\n            entity.getAccountType()\n        );\n    }\n\n    // SpEL with method chaining on returnObject\n    @GetMapping(\"/summary/{accountId}\")\n    @PostAuthorize(\"returnObject.getOwner().equals(authentication.name)\")\n    public AccountSummary getSummary(@PathVariable Long accountId) {\n        return accountService.getSummary(accountId);\n    }\n}\n"
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
        children: "package com.course.security.controller;\n\nimport org.springframework.security.access.prepost.PreFilter;\nimport org.springframework.web.bind.annotation.*;\n\nimport java.util.List;\n\n@RestController\n@RequestMapping(\"/api/batch\")\npublic class BatchController {\n\n    // Only process items where the owner matches the authenticated user\n    @PostMapping(\"/process\")\n    @PreFilter(\"filterObject.owner == authentication.name\")\n    public String processItems(@RequestBody List<Item> items) {\n        // items now contains only owned entries\n        return \"Processed \" + items.size() + \" items\";\n    }\n\n    // Multiple filter targets\n    @PostMapping(\"/compare\")\n    @PreFilter(filterTarget = \"leftList\",\n        value = \"filterObject.owner == authentication.name\")\n    @PreFilter(filterTarget = \"rightList\",\n        value = \"filterObject.active == true\")\n    public String compareLists(\n            @RequestBody List<Item> leftList,\n            @RequestBody List<Item> rightList) {\n\n        return \"Left: \" + leftList.size() + \", Right: \" + rightList.size();\n    }\n\n    // Filter arrays too\n    @PostMapping(\"/bulk-delete\")\n    @PreFilter(\"filterObject.owner == authentication.name or hasRole('ADMIN')\")\n    public String bulkDelete(@RequestBody Item[] items) {\n        return \"Deleting \" + items.length + \" items\";\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-postfilter--filter-return-value",
      children: "4.2 @PostFilter — Filter Return Value"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Filters the returned collection, removing elements that do not match the expression."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.controller;\n\nimport org.springframework.security.access.prepost.PostFilter;\nimport org.springframework.web.bind.annotation.*;\n\nimport java.util.List;\n\n@RestController\n@RequestMapping(\"/api/documents\")\npublic class PostFilterController {\n\n    private final DocumentService documentService;\n\n    public PostFilterController(DocumentService documentService) {\n        this.documentService = documentService;\n    }\n\n    // Return only documents owned by or shared with the current user\n    @GetMapping\n    @PostFilter(\"filterObject.owner == authentication.name or \" +\n        \"filterObject.sharedUsers.contains(authentication.name) or \" +\n        \"hasRole('ADMIN')\")\n    public List<Document> getAllDocuments() {\n        return documentService.findAll();\n    }\n\n    // Filter arrays and streams\n    @GetMapping(\"/active\")\n    @PostFilter(\"filterObject.active == true\")\n    public List<Document> getActiveDocuments() {\n        return documentService.findAll();\n    }\n\n    // Filter with property comparison\n    @GetMapping(\"/by-department/{dept}\")\n    @PostFilter(\"filterObject.department == #dept\")\n    public List<Document> getDepartmentDocuments(@PathVariable String dept) {\n        return documentService.findAll();\n    }\n\n    // PostFilter on a Map\n    @GetMapping(\"/summary\")\n    @PostFilter(\"filterObject.value.accessLevel != 'RESTRICTED'\")\n    public Map<String, DocumentSummary> getSummary() {\n        return documentService.getSummaryMap();\n    }\n}\n"
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
        children: "@RestController\n@RequestMapping(\"/api/items\")\npublic class PagedFilterController {\n\n    private final ItemService itemService;\n\n    public PagedFilterController(ItemService itemService) {\n        this.itemService = itemService;\n    }\n\n    // WARNING: Page size may shrink after filtering!\n    // If page has 20 items but only 5 pass the filter, the client gets 5.\n    @GetMapping(\"/paged\")\n    @PostFilter(\"filterObject.owner == authentication.name\")\n    public List<Item> getMyItemsPaged(\n            @RequestParam(defaultValue = \"0\") int page,\n            @RequestParam(defaultValue = \"20\") int size) {\n        return itemService.findAllPaged(page, size);\n    }\n\n    // Better approach: filter at the query level\n    @GetMapping(\"/my-items\")\n    public List<Item> getMyItems() {\n        // Query the database with the owner filter\n        return itemService.findByOwner(getCurrentUsername());\n    }\n\n    private String getCurrentUsername() {\n        return org.springframework.security.core.context\n            .SecurityContextHolder.getContext()\n            .getAuthentication().getName();\n    }\n}\n"
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
        children: "package com.course.security.controller;\n\nimport org.springframework.security.access.annotation.Secured;\nimport org.springframework.web.bind.annotation.*;\n\n@RestController\n@RequestMapping(\"/api/secured\")\npublic class SecuredController {\n\n    @GetMapping(\"/admin-area\")\n    @Secured(\"ROLE_ADMIN\")\n    public String adminArea() {\n        return \"Admin Area\";\n    }\n\n    @GetMapping(\"/editor-area\")\n    @Secured({\"ROLE_ADMIN\", \"ROLE_EDITOR\"})\n    public String editorArea() {\n        return \"Editor Area — multiple roles are OR-ed\";\n    }\n\n    @GetMapping(\"/super\")\n    @Secured(\"ROLE_SUPER_ADMIN\")\n    public String superArea() {\n        return \"Super Admin Only\";\n    }\n}\n"
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
        children: "package com.course.security.controller;\n\nimport jakarta.annotation.security.DenyAll;\nimport jakarta.annotation.security.PermitAll;\nimport jakarta.annotation.security.RolesAllowed;\nimport org.springframework.web.bind.annotation.*;\n\n@RestController\n@RequestMapping(\"/api/jsr250\")\npublic class Jsr250Controller {\n\n    @GetMapping(\"/all\")\n    @RolesAllowed({\"ADMIN\", \"EDITOR\"})\n    @PermitAll\n    public String allRoles() {\n        return \"Accessible by ADMIN or EDITOR\";\n    }\n\n    @GetMapping(\"/any-authenticated\")\n    @PermitAll\n    public String anyAuthenticated() {\n        return \"Any authenticated user — actually @PermitAll allows everyone including anonymous\";\n    }\n\n    @DeleteMapping(\"/block-all\")\n    @DenyAll\n    public String blocked() {\n        return \"This will never be reached\";\n    }\n\n    @GetMapping(\"/admin-only\")\n    @RolesAllowed(\"ADMIN\")\n    public String adminOnly() {\n        return \"Admin only via JSR-250\";\n    }\n}\n"
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
        children: "package com.course.security.annotation;\n\nimport org.springframework.security.access.prepost.PreAuthorize;\n\nimport java.lang.annotation.ElementType;\nimport java.lang.annotation.Retention;\nimport java.lang.annotation.RetentionPolicy;\nimport java.lang.annotation.Target;\n\n@Target({ElementType.METHOD, ElementType.TYPE})\n@Retention(RetentionPolicy.RUNTIME)\n@PreAuthorize(\"hasRole('ADMIN')\")\npublic @interface IsAdmin {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-iseditororadmin",
      children: "6.2 @IsEditorOrAdmin"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.annotation;\n\nimport org.springframework.security.access.prepost.PreAuthorize;\n\nimport java.lang.annotation.ElementType;\nimport java.lang.annotation.Retention;\nimport java.lang.annotation.RetentionPolicy;\nimport java.lang.annotation.Target;\n\n@Target({ElementType.METHOD, ElementType.TYPE})\n@Retention(RetentionPolicy.RUNTIME)\n@PreAuthorize(\"hasAnyRole('ADMIN', 'EDITOR') and isAuthenticated()\")\npublic @interface IsEditorOrAdmin {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-ownresource--parameterized-meta-annotation",
      children: "6.3 @OwnResource — Parameterized Meta-Annotation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.annotation;\n\nimport org.springframework.security.access.prepost.PreAuthorize;\n\nimport java.lang.annotation.ElementType;\nimport java.lang.annotation.Retention;\nimport java.lang.annotation.RetentionPolicy;\nimport java.lang.annotation.Target;\n\n@Target({ElementType.METHOD, ElementType.TYPE})\n@Retention(RetentionPolicy.RUNTIME)\n@PreAuthorize(\"hasRole('ADMIN') or #id.toString() == authentication.name\")\npublic @interface OwnResource {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-using-meta-annotations",
      children: "6.4 Using Meta-Annotations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.controller;\n\nimport com.course.security.annotation.IsAdmin;\nimport com.course.security.annotation.IsEditorOrAdmin;\nimport com.course.security.annotation.OwnResource;\nimport org.springframework.web.bind.annotation.*;\n\n@RestController\n@RequestMapping(\"/api/content\")\npublic class MetaAnnotationController {\n\n    @GetMapping(\"/admin-tools\")\n    @IsAdmin\n    public String adminTools() {\n        return \"Admin Tools\";\n    }\n\n    @PostMapping(\"/manage\")\n    @IsEditorOrAdmin\n    public String manageContent() {\n        return \"Manage Content\";\n    }\n\n    @GetMapping(\"/users/{id}/settings\")\n    @OwnResource\n    public String userSettings(@PathVariable String id) {\n        return \"User settings for \" + id;\n    }\n\n    // Class-level meta-annotation\n    @IsAdmin\n    @RestController\n    @RequestMapping(\"/api/internal\")\n    public static class InternalController {\n\n        @GetMapping(\"/config\")\n        public String config() {\n            return \"Internal Config — inherits @IsAdmin from class\";\n        }\n\n        @GetMapping(\"/health\")\n        public String health() {\n            return \"Health Check\";\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-composed-annotation-with-multiple-expressions",
      children: "6.5 Composed Annotation with Multiple Expressions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.annotation;\n\nimport org.springframework.security.access.prepost.PreAuthorize;\n\nimport java.lang.annotation.ElementType;\nimport java.lang.annotation.Retention;\nimport java.lang.annotation.RetentionPolicy;\nimport java.lang.annotation.Target;\n\n@Target({ElementType.METHOD, ElementType.TYPE})\n@Retention(RetentionPolicy.RUNTIME)\n@PreAuthorize(\"hasRole('ADMIN') and \" +\n    \"hasAuthority('AUDIT_ACCESS') and \" +\n    \"@auditWindowChecker.isWithinWindow()\")\npublic @interface IsAuditor {\n}\n"
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
        children: "package org.springframework.security.access;\n\nimport java.io.Serializable;\n\npublic interface PermissionEvaluator {\n\n    boolean hasPermission(Authentication authentication,\n                          Object targetDomainObject,\n                          Object permission);\n\n    boolean hasPermission(Authentication authentication,\n                          Serializable targetId,\n                          String targetType,\n                          Object permission);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-custom-permissionevaluator-implementation",
      children: "7.2 Custom PermissionEvaluator Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.evaluator;\n\nimport com.course.security.model.Document;\nimport com.course.security.service.DocumentService;\nimport org.springframework.security.access.PermissionEvaluator;\nimport org.springframework.security.core.Authentication;\nimport org.springframework.security.core.GrantedAuthority;\nimport org.springframework.stereotype.Component;\n\nimport java.io.Serializable;\n\n@Component\npublic class DocumentPermissionEvaluator implements PermissionEvaluator {\n\n    private final DocumentService documentService;\n\n    public DocumentPermissionEvaluator(DocumentService documentService) {\n        this.documentService = documentService;\n    }\n\n    @Override\n    public boolean hasPermission(\n            Authentication authentication,\n            Object targetDomainObject,\n            Object permission) {\n\n        if (targetDomainObject instanceof Document document) {\n            return hasDocumentPermission(authentication, document, permission.toString());\n        }\n\n        return false;\n    }\n\n    @Override\n    public boolean hasPermission(\n            Authentication authentication,\n            Serializable targetId,\n            String targetType,\n            Object permission) {\n\n        if (\"Document\".equals(targetType)) {\n            Document document = documentService.findById((Long) targetId);\n            if (document == null) return false;\n            return hasDocumentPermission(authentication, document, permission.toString());\n        }\n\n        return false;\n    }\n\n    private boolean hasDocumentPermission(\n            Authentication authentication,\n            Document document,\n            String permission) {\n\n        String username = authentication.getName();\n\n        return switch (permission) {\n            case \"READ\" ->\n                document.getOwner().equals(username)\n                || document.getSharedUsers().contains(username)\n                || isAdmin(authentication);\n\n            case \"WRITE\" ->\n                document.getOwner().equals(username)\n                || isAdmin(authentication);\n\n            case \"DELETE\" ->\n                isAdmin(authentication);\n\n            case \"SHARE\" ->\n                document.getOwner().equals(username)\n                || hasAuthority(authentication, \"ROLE_ADMIN\");\n\n            default -> false;\n        };\n    }\n\n    private boolean isAdmin(Authentication authentication) {\n        return hasAuthority(authentication, \"ROLE_ADMIN\");\n    }\n\n    private boolean hasAuthority(Authentication authentication, String authority) {\n        return authentication.getAuthorities().stream()\n            .map(GrantedAuthority::getAuthority)\n            .anyMatch(a -> a.equals(authority));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-registering-the-permissionevaluator",
      children: "7.3 Registering the PermissionEvaluator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.config;\n\nimport com.course.security.evaluator.DocumentPermissionEvaluator;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.access.expression.method.DefaultMethodSecurityExpressionHandler;\nimport org.springframework.security.access.expression.method.MethodSecurityExpressionHandler;\n\n@Configuration\npublic class PermissionEvaluatorConfig {\n\n    private final DocumentPermissionEvaluator documentPermissionEvaluator;\n\n    public PermissionEvaluatorConfig(DocumentPermissionEvaluator documentPermissionEvaluator) {\n        this.documentPermissionEvaluator = documentPermissionEvaluator;\n    }\n\n    @Bean\n    public MethodSecurityExpressionHandler methodSecurityExpressionHandler() {\n        DefaultMethodSecurityExpressionHandler handler =\n            new DefaultMethodSecurityExpressionHandler();\n        handler.setPermissionEvaluator(documentPermissionEvaluator);\n        return handler;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-using-haspermission-in-controllers",
      children: "7.4 Using hasPermission in Controllers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.controller;\n\nimport com.course.security.model.Document;\nimport org.springframework.security.access.prepost.PostAuthorize;\nimport org.springframework.security.access.prepost.PreAuthorize;\nimport org.springframework.web.bind.annotation.*;\n\n@RestController\n@RequestMapping(\"/api/permissions\")\npublic class PermissionController {\n\n    private final DocumentService documentService;\n\n    public PermissionController(DocumentService documentService) {\n        this.documentService = documentService;\n    }\n\n    // Object-level permission check (target domain object)\n    @GetMapping(\"/{id}\")\n    @PreAuthorize(\"hasPermission(#id, 'Document', 'READ')\")\n    public Document getDocument(@PathVariable Long id) {\n        return documentService.findById(id);\n    }\n\n    // Write permission\n    @PutMapping(\"/{id}\")\n    @PreAuthorize(\"hasPermission(#id, 'Document', 'WRITE')\")\n    public Document updateDocument(@PathVariable Long id, @RequestBody Document doc) {\n        return documentService.update(id, doc);\n    }\n\n    // Delete permission — only admins\n    @DeleteMapping(\"/{id}\")\n    @PreAuthorize(\"hasPermission(#id, 'Document', 'DELETE')\")\n    public void deleteDocument(@PathVariable Long id) {\n        documentService.delete(id);\n    }\n\n    // Object-level check with return object\n    @GetMapping(\"/object/{id}\")\n    @PostAuthorize(\"hasPermission(returnObject, 'READ')\")\n    public Document getDocumentObject(@PathVariable Long id) {\n        return documentService.findById(id);\n    }\n\n    // Multiple permission checks\n    @PostMapping(\"/{id}/share\")\n    @PreAuthorize(\"hasPermission(#id, 'Document', 'SHARE') and \" +\n        \"hasPermission(#targetUser, 'Document', 'READ')\")\n    public String shareDocument(\n            @PathVariable Long id,\n            @RequestParam String targetUser) {\n        documentService.share(id, targetUser);\n        return \"Shared\";\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "75-haspermission-with-methodsecurityexpressionhandler",
      children: "7.5 hasPermission with MethodSecurityExpressionHandler"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For more control, extend the expression handler to add custom methods:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.evaluator;\n\nimport org.springframework.security.access.expression.SecurityExpressionRoot;\nimport org.springframework.security.access.expression.method.MethodSecurityExpressionOperations;\nimport org.springframework.security.core.Authentication;\n\npublic class CustomSecurityExpressionRoot\n        extends SecurityExpressionRoot\n        implements MethodSecurityExpressionOperations {\n\n    private Object filterObject;\n    private Object returnObject;\n    private Object target;\n\n    public CustomSecurityExpressionRoot(Authentication authentication) {\n        super(authentication);\n    }\n\n    // Custom expression methods\n    public boolean isMemberOf(String group) {\n        return this.getAuthentication().getAuthorities().stream()\n            .anyMatch(a -> a.getAuthority().equals(\"GROUP_\" + group));\n    }\n\n    public boolean isDuringBusinessHours() {\n        return java.time.LocalTime.now().getHour() >= 9\n            && java.time.LocalTime.now().getHour() < 17;\n    }\n\n    public boolean hasAnyEmailDomain(String... domains) {\n        String email = this.getAuthentication().getName();\n        if (!email.contains(\"@\")) return false;\n        String domain = email.substring(email.indexOf(\"@\") + 1);\n        return java.util.Arrays.asList(domains).contains(domain);\n    }\n\n    @Override\n    public void setFilterObject(Object filterObject) {\n        this.filterObject = filterObject;\n    }\n\n    @Override\n    public Object getFilterObject() {\n        return filterObject;\n    }\n\n    @Override\n    public void setReturnObject(Object returnObject) {\n        this.returnObject = returnObject;\n    }\n\n    @Override\n    public Object getReturnObject() {\n        return returnObject;\n    }\n\n    @Override\n    public Object getThis() {\n        return target;\n    }\n\n    public void setThis(Object target) {\n        this.target = target;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Usage in controller:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@GetMapping(\"/business\")\n@PreAuthorize(\"isDuringBusinessHours()\")\npublic String businessHoursOnly() {\n    return \"Accessed during business hours\";\n}\n\n@GetMapping(\"/group/{groupName}\")\n@PreAuthorize(\"isMemberOf(#groupName)\")\npublic String groupAccess(@PathVariable String groupName) {\n    return \"Accessing group: \" + groupName;\n}\n"
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
        children: "package com.course.security.aspect;\n\nimport org.aspectj.lang.ProceedingJoinPoint;\nimport org.aspectj.lang.annotation.Around;\nimport org.aspectj.lang.annotation.Aspect;\nimport org.aspectj.lang.annotation.Pointcut;\nimport org.springframework.security.access.AccessDeniedException;\nimport org.springframework.security.core.Authentication;\nimport org.springframework.security.core.GrantedAuthority;\nimport org.springframework.security.core.context.SecurityContextHolder;\nimport org.springframework.stereotype.Component;\n\nimport java.util.Set;\nimport java.util.stream.Collectors;\n\n@Aspect\n@Component\npublic class SecurityAuditAspect {\n\n    private static final Set<String> ADMIN_AUTHORITIES = Set.of(\"ROLE_ADMIN\");\n    private static final Set<String> SENSITIVE_OPERATIONS = Set.of(\"delete\", \"purge\", \"reset\");\n\n    // Pointcut: all methods in service package\n    @Pointcut(\"execution(* com.course.security.service.*.*(..))\")\n    public void serviceLayer() {}\n\n    // Pointcut: methods annotated with @AuditLog\n    @Pointcut(\"@annotation(com.course.security.annotation.AuditLog)\")\n    public void auditLogged() {}\n\n    // Pointcut: methods starting with \"delete\" or \"purge\"\n    @Pointcut(\"execution(* com.course.security.service.*.delete*(..)) || \" +\n        \"execution(* com.course.security.service.*.purge*(..))\")\n    public void destructiveOperations() {}\n\n    // Log all service method invocations\n    @Around(\"serviceLayer()\")\n    public Object auditServiceCall(ProceedingJoinPoint joinPoint) throws Throwable {\n        String methodName = joinPoint.getSignature().toShortString();\n        Authentication auth = SecurityContextHolder.getContext().getAuthentication();\n        String username = auth != null ? auth.getName() : \"ANONYMOUS\";\n\n        System.out.printf(\"[AUDIT] %s called %s%n\", username, methodName);\n\n        long start = System.currentTimeMillis();\n        try {\n            Object result = joinPoint.proceed();\n            long elapsed = System.currentTimeMillis() - start;\n            System.out.printf(\"[AUDIT] %s completed %s in %dms%n\",\n                username, methodName, elapsed);\n            return result;\n        } catch (Exception e) {\n            long elapsed = System.currentTimeMillis() - start;\n            System.out.printf(\"[AUDIT] %s FAILED %s in %dms: %s%n\",\n                username, methodName, elapsed, e.getMessage());\n            throw e;\n        }\n    }\n\n    // Security check on destructive operations\n    @Around(\"destructiveOperations()\")\n    public Object requireAdminForDestructiveOps(ProceedingJoinPoint joinPoint) throws Throwable {\n        Authentication auth = SecurityContextHolder.getContext().getAuthentication();\n\n        if (auth == null || !auth.isAuthenticated()) {\n            throw new AccessDeniedException(\"Authentication required\");\n        }\n\n        Set<String> authorities = auth.getAuthorities().stream()\n            .map(GrantedAuthority::getAuthority)\n            .collect(Collectors.toSet());\n\n        if (authorities.stream().noneMatch(a -> a.equals(\"ROLE_ADMIN\"))) {\n            throw new AccessDeniedException(\n                \"Only administrators can perform destructive operations\");\n        }\n\n        return joinPoint.proceed();\n    }\n\n    // Pointcut with parameter binding\n    @Around(\"execution(* com.course.security.service.*.transfer(..)) && args(from, to, amount)\")\n    public void validateLargeTransfers(\n            ProceedingJoinPoint joinPoint,\n            String from, String to, Double amount) throws Throwable {\n\n        if (amount > 10000) {\n            Authentication auth = SecurityContextHolder.getContext().getAuthentication();\n            boolean isAdmin = auth.getAuthorities().stream()\n                .anyMatch(a -> a.getAuthority().equals(\"ROLE_ADMIN\"));\n\n            if (!isAdmin) {\n                throw new AccessDeniedException(\n                    \"Transfers over $10,000 require administrator approval\");\n            }\n        }\n\n        joinPoint.proceed();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-auditlog-annotation",
      children: "8.2 @AuditLog Annotation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.annotation;\n\nimport java.lang.annotation.ElementType;\nimport java.lang.annotation.Retention;\nimport java.lang.annotation.RetentionPolicy;\nimport java.lang.annotation.Target;\n\n@Target(ElementType.METHOD)\n@Retention(RetentionPolicy.RUNTIME)\npublic @interface AuditLog {\n    String action() default \"\";\n    String resource() default \"\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-enabling-aspectj-in-spring-boot",
      children: "8.3 Enabling AspectJ in Spring Boot"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.config;\n\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.context.annotation.EnableAspectJAutoProxy;\n\n@Configuration\n@EnableAspectJAutoProxy\npublic class AspectConfig {\n}\n"
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
        children: "package com.course.security.controller;\n\nimport org.springframework.web.bind.annotation.*;\nimport org.springframework.web.bind.annotation.CrossOrigin;\n\nimport java.util.List;\nimport java.util.Map;\n\n@RestController\n@RequestMapping(\"/api/books\")\n@CrossOrigin(origins = \"https://myapp.example.com\")\npublic class BookCorsController {\n\n    private final BookRepository bookRepository;\n\n    public BookCorsController(BookRepository bookRepository) {\n        this.bookRepository = bookRepository;\n    }\n\n    // Inherits @CrossOrigin from class\n    @GetMapping\n    public List<Book> getAllBooks() {\n        return bookRepository.findAll();\n    }\n\n    // Method-level override\n    @GetMapping(\"/{id}\")\n    @CrossOrigin(origins = \"https://trusted-partner.example.com\")\n    public Book getBook(@PathVariable Long id) {\n        return bookRepository.findById(id)\n            .orElseThrow(() -> new BookNotFoundException(id));\n    }\n\n    // Allow multiple origins\n    @PostMapping\n    @CrossOrigin(origins = {\n        \"https://myapp.example.com\",\n        \"https://staging.example.com\",\n        \"http://localhost:3000\"\n    })\n    public Book createBook(@RequestBody Book book) {\n        return bookRepository.save(book);\n    }\n\n    // Allow all origins (use with caution)\n    @GetMapping(\"/public\")\n    @CrossOrigin(origins = \"*\")\n    public List<Book> publicBooks() {\n        return bookRepository.findAll();\n    }\n\n    // Full CORS configuration\n    @PutMapping(\"/{id}\")\n    @CrossOrigin(\n        origins = \"https://myapp.example.com\",\n        allowedHeaders = {\"Content-Type\", \"Authorization\", \"X-Request-Id\"},\n        exposedHeaders = {\"X-Total-Count\", \"X-Rate-Limit-Remaining\"},\n        methods = {RequestMethod.PUT, RequestMethod.OPTIONS},\n        allowCredentials = \"true\",\n        maxAge = 3600\n    )\n    public Book updateBook(@PathVariable Long id, @RequestBody Book book) {\n        return bookRepository.findById(id)\n            .map(existing -> {\n                existing.setTitle(book.getTitle());\n                existing.setAuthor(book.getAuthor());\n                return bookRepository.save(existing);\n            })\n            .orElseThrow(() -> new BookNotFoundException(id));\n    }\n}\n"
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
        children: "package com.course.security.config;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.web.cors.CorsConfiguration;\nimport org.springframework.web.cors.CorsConfigurationSource;\nimport org.springframework.web.cors.UrlBasedCorsConfigurationSource;\n\nimport java.util.List;\n\n@Configuration\npublic class CorsGlobalConfig {\n\n    @Bean\n    public CorsConfigurationSource corsConfigurationSource() {\n        CorsConfiguration configuration = new CorsConfiguration();\n\n        configuration.setAllowedOrigins(List.of(\n            \"https://myapp.example.com\",\n            \"https://staging.example.com\",\n            \"http://localhost:3000\"\n        ));\n        configuration.setAllowedMethods(List.of(\n            \"GET\", \"POST\", \"PUT\", \"DELETE\", \"PATCH\", \"OPTIONS\"\n        ));\n        configuration.setAllowedHeaders(List.of(\n            \"Authorization\",\n            \"Content-Type\",\n            \"X-Request-Id\",\n            \"X-CSRF-TOKEN\"\n        ));\n        configuration.setExposedHeaders(List.of(\n            \"X-Total-Count\",\n            \"X-Rate-Limit-Remaining\",\n            \"X-Rate-Limit-Reset\"\n        ));\n        configuration.setAllowCredentials(true);\n        configuration.setMaxAge(3600L);\n\n        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();\n        source.registerCorsConfiguration(\"/api/**\", configuration);\n        source.registerCorsConfiguration(\"/public/**\", configuration);\n\n        return source;\n    }\n}\n"
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
        children: "@Configuration\npublic class CorsPatternConfig {\n\n    @Bean\n    public CorsConfigurationSource corsConfigurationSource() {\n        CorsConfiguration configuration = new CorsConfiguration();\n\n        // allowedOrigins does NOT support \"*\" with allowCredentials=true\n        // Use allowedOriginPatterns instead:\n        configuration.setAllowedOriginPatterns(List.of(\n            \"https://*.example.com\",\n            \"https://*.vercel.app\",\n            \"http://localhost:*\"\n        ));\n        configuration.setAllowedMethods(List.of(\"*\"));\n        configuration.setAllowedHeaders(List.of(\"*\"));\n        configuration.setAllowCredentials(true);\n        configuration.setMaxAge(3600L);\n\n        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();\n        source.registerCorsConfiguration(\"/api/**\", configuration);\n        return source;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "96-per-url-cors-configuration",
      children: "9.6 Per-URL CORS Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Different URL patterns need different CORS rules:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class PerUrlCorsConfig {\n\n    @Bean\n    public CorsConfigurationSource corsConfigurationSource() {\n        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();\n\n        // Public API — wide open\n        CorsConfiguration publicApi = new CorsConfiguration();\n        publicApi.setAllowedOrigins(List.of(\"*\"));\n        publicApi.setAllowedMethods(List.of(\"GET\"));\n        publicApi.setAllowedHeaders(List.of(\"*\"));\n        publicApi.setMaxAge(3600L);\n        source.registerCorsConfiguration(\"/api/public/**\", publicApi);\n\n        // Authenticated API — specific origins only\n        CorsConfiguration secureApi = new CorsConfiguration();\n        secureApi.setAllowedOriginPatterns(List.of(\"https://*.example.com\"));\n        secureApi.setAllowedMethods(List.of(\"GET\", \"POST\", \"PUT\", \"DELETE\"));\n        secureApi.setAllowedHeaders(List.of(\"Authorization\", \"Content-Type\"));\n        secureApi.setAllowCredentials(true);\n        secureApi.setExposedHeaders(List.of(\"X-Request-Id\"));\n        secureApi.setMaxAge(1800L);\n        source.registerCorsConfiguration(\"/api/secure/**\", secureApi);\n\n        // Admin API — single origin\n        CorsConfiguration adminApi = new CorsConfiguration();\n        adminApi.setAllowedOrigins(List.of(\"https://admin.example.com\"));\n        adminApi.setAllowedMethods(List.of(\"*\"));\n        adminApi.setAllowedHeaders(List.of(\"*\"));\n        adminApi.setAllowCredentials(true);\n        adminApi.setMaxAge(600L);\n        source.registerCorsConfiguration(\"/api/admin/**\", adminApi);\n\n        return source;\n    }\n}\n"
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
        children: "@Configuration\n@EnableWebSecurity\npublic class SecurityCorsConfig {\n\n    private final CorsConfigurationSource corsConfigurationSource;\n\n    public SecurityCorsConfig(CorsConfigurationSource corsConfigurationSource) {\n        this.corsConfigurationSource = corsConfigurationSource;\n    }\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .cors(cors -> cors.configurationSource(corsConfigurationSource))\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers(\"/api/public/**\").permitAll()\n                .anyRequest().authenticated()\n            )\n            .httpBasic(httpBasic -> {})\n            .csrf(csrf -> csrf.disable());\n\n        return http.build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "98-preflight-options-handling",
      children: "9.8 Preflight (OPTIONS) Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before the actual request, browsers send a preflight OPTIONS request to check CORS permissions:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OPTIONS /api/books HTTP/1.1\nOrigin: https://myapp.example.com\nAccess-Control-Request-Method: POST\nAccess-Control-Request-Headers: Authorization, Content-Type\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring's CORS filter handles this automatically when CORS is configured. The response includes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HTTP/1.1 200 OK\nAccess-Control-Allow-Origin: https://myapp.example.com\nAccess-Control-Allow-Methods: POST, GET, PUT, DELETE\nAccess-Control-Allow-Headers: Authorization, Content-Type\nAccess-Control-Max-Age: 3600\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you need custom preflight handling:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class CorsPreflightFilter implements Filter {\n\n    @Override\n    public void doFilter(\n            ServletRequest request,\n            ServletResponse response,\n            FilterChain chain) throws IOException, ServletException {\n\n        HttpServletRequest httpRequest = (HttpServletRequest) request;\n        HttpServletResponse httpResponse = (HttpServletResponse) response;\n\n        if (\"OPTIONS\".equalsIgnoreCase(httpRequest.getMethod())) {\n            httpResponse.setHeader(\"Access-Control-Allow-Origin\", \"https://myapp.example.com\");\n            httpResponse.setHeader(\"Access-Control-Allow-Methods\", \"GET, POST, PUT, DELETE, OPTIONS\");\n            httpResponse.setHeader(\"Access-Control-Allow-Headers\", \"Authorization, Content-Type\");\n            httpResponse.setHeader(\"Access-Control-Max-Age\", \"3600\");\n            httpResponse.setStatus(HttpServletResponse.SC_OK);\n            return;\n        }\n\n        chain.doFilter(request, response);\n    }\n}\n"
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
        children: "@Component\npublic class CorsAccessDeniedHandler implements AccessDeniedHandler {\n\n    @Override\n    public void handle(\n            HttpServletRequest request,\n            HttpServletResponse response,\n            AccessDeniedException accessDeniedException)\n            throws IOException, ServletException {\n\n        response.setContentType(\"application/json\");\n        response.setStatus(HttpServletResponse.SC_FORBIDDEN);\n\n        String json = \"\"\"\n            {\n                \"error\": \"CORS Forbidden\",\n                \"message\": \"Origin '%s' is not allowed\",\n                \"timestamp\": \"%s\"\n            }\n            \"\"\".formatted(\n                request.getHeader(\"Origin\"),\n                java.time.Instant.now().toString()\n            );\n\n        response.getWriter().write(json);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Register it:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Bean\npublic SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n    http\n        .cors(cors -> cors.configurationSource(corsConfigurationSource())\n            .accessDeniedHandler(new CorsAccessDeniedHandler()))\n        // ...\n        ;\n    return http.build();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!WARNING]\nAvoid allowing all origins with ", (0,jsx_runtime.jsx)(_components.code, {
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
        children: "@Configuration\n@EnableWebSecurity\npublic class CsrfDefaultConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .authorizeHttpRequests(auth -> auth\n                .anyRequest().authenticated()\n            )\n            .formLogin(form -> {})\n            // CSRF is enabled by default\n            // .csrf(csrf -> csrf.disable())\n            ;\n\n        return http.build();\n    }\n}\n"
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
        children: "@Configuration\n@EnableWebSecurity\npublic class SessionCsrfConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .csrf(csrf -> csrf\n                .csrfTokenRepository(new HttpSessionCsrfTokenRepository())\n            )\n            .authorizeHttpRequests(auth -> auth\n                .anyRequest().authenticated()\n            )\n            .formLogin(form -> {});\n\n        return http.build();\n    }\n}\n"
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
        children: "@Configuration\n@EnableWebSecurity\npublic class CookieCsrfConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .csrf(csrf -> csrf\n                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())\n            )\n            .authorizeHttpRequests(auth -> auth\n                .anyRequest().authenticated()\n            )\n            .formLogin(form -> {});\n\n        return http.build();\n    }\n}\n"
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
        children: "package com.course.security.csrf;\n\nimport jakarta.servlet.http.Cookie;\nimport jakarta.servlet.http.HttpServletRequest;\nimport jakarta.servlet.http.HttpServletResponse;\nimport org.springframework.security.web.csrf.CsrfToken;\nimport org.springframework.security.web.csrf.CsrfTokenRepository;\nimport org.springframework.security.web.csrf.DefaultCsrfToken;\n\nimport java.util.UUID;\nimport java.util.concurrent.ConcurrentHashMap;\n\npublic class CustomCsrfTokenRepository implements CsrfTokenRepository {\n\n    private static final String DEFAULT_CSRF_PARAMETER_NAME = \"_csrf\";\n    private static final String DEFAULT_CSRF_HEADER_NAME = \"X-CSRF-TOKEN\";\n    private static final String DEFAULT_CSRF_COOKIE_NAME = \"CUSTOM-XSRF-TOKEN\";\n\n    private final ConcurrentHashMap<String, String> tokenStore = new ConcurrentHashMap<>();\n\n    @Override\n    public CsrfToken generateToken(HttpServletRequest request) {\n        return new DefaultCsrfToken(\n            DEFAULT_CSRF_HEADER_NAME,\n            DEFAULT_CSRF_PARAMETER_NAME,\n            UUID.randomUUID().toString()\n        );\n    }\n\n    @Override\n    public void saveToken(\n            CsrfToken token,\n            HttpServletRequest request,\n            HttpServletResponse response) {\n\n        String tokenValue = token != null ? token.getToken() : \"\";\n        Cookie cookie = new Cookie(DEFAULT_CSRF_COOKIE_NAME, tokenValue);\n        cookie.setSecure(true);\n        cookie.setHttpOnly(false);\n        cookie.setPath(\"/\");\n        cookie.setMaxAge(token != null ? -1 : 0);\n        response.addCookie(cookie);\n\n        // Also store in session as fallback\n        if (token != null) {\n            request.getSession().setAttribute(DEFAULT_CSRF_COOKIE_NAME, token.getToken());\n        } else {\n            request.getSession().removeAttribute(DEFAULT_CSRF_COOKIE_NAME);\n        }\n    }\n\n    @Override\n    public CsrfToken loadToken(HttpServletRequest request) {\n        String tokenValue = null;\n\n        // Try cookie first\n        Cookie[] cookies = request.getCookies();\n        if (cookies != null) {\n            for (Cookie cookie : cookies) {\n                if (DEFAULT_CSRF_COOKIE_NAME.equals(cookie.getName())) {\n                    tokenValue = cookie.getValue();\n                    break;\n                }\n            }\n        }\n\n        // Fall back to session\n        if (tokenValue == null || tokenValue.isEmpty()) {\n            tokenValue = (String) request.getSession()\n                .getAttribute(DEFAULT_CSRF_COOKIE_NAME);\n        }\n\n        if (tokenValue == null || tokenValue.isEmpty()) {\n            return null;\n        }\n\n        return new DefaultCsrfToken(\n            DEFAULT_CSRF_HEADER_NAME,\n            DEFAULT_CSRF_PARAMETER_NAME,\n            tokenValue\n        );\n    }\n}\n"
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
        children: "@Configuration\n@EnableWebSecurity\npublic class RestApiSecurityConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .csrf(csrf -> csrf.disable())\n            .sessionManagement(session ->\n                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers(\"/api/public/**\").permitAll()\n                .anyRequest().authenticated()\n            )\n            .httpBasic(httpBasic -> {});\n\n        return http.build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "106-csrf-with-spa-single-page-application",
      children: "10.6 CSRF with SPA (Single Page Application)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SPAs typically use the double-submit cookie pattern:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@EnableWebSecurity\npublic class SpaCsrfConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .csrf(csrf -> csrf\n                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())\n                .csrfTokenRequestHandler(new CsrfTokenRequestAttributeHandler())\n            )\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers(\"/api/auth/**\").permitAll()\n                .anyRequest().authenticated()\n            )\n            .formLogin(form -> {});\n\n        return http.build();\n    }\n}\n"
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
        children: "// Angular does this automatically for XSRF-TOKEN cookie\n// React example:\nasync function apiCall(url, options = {}) {\n    const csrfToken = getCookie('XSRF-TOKEN');\n    const response = await fetch(url, {\n        ...options,\n        headers: {\n            ...options.headers,\n            'X-XSRF-TOKEN': csrfToken,\n        },\n        credentials: 'include',\n    });\n    return response.json();\n}\n\nfunction getCookie(name) {\n    const value = `; ${document.cookie}`;\n    const parts = value.split(`; ${name}=`);\n    if (parts.length === 2) return parts.pop().split(';').shift();\n    return null;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "107-csrftokenrequestattributehandler",
      children: "10.7 CsrfTokenRequestAttributeHandler"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Controls how the CSRF token is exposed to the request. The default handler makes the token available as a request attribute."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@EnableWebSecurity\npublic class CsrfHandlerConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .csrf(csrf -> csrf\n                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())\n                .csrfTokenRequestHandler(new CsrfTokenRequestAttributeHandler())\n            )\n            .authorizeHttpRequests(auth -> auth\n                .anyRequest().authenticated()\n            )\n            .formLogin(form -> {});\n\n        return http.build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Custom request handler:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.csrf;\n\nimport jakarta.servlet.http.HttpServletRequest;\nimport jakarta.servlet.http.HttpServletResponse;\nimport org.springframework.security.web.csrf.CsrfToken;\nimport org.springframework.security.web.csrf.CsrfTokenRequestHandler;\nimport org.springframework.security.web.csrf.CsrfTokenRequestResolver;\n\nimport java.util.function.Supplier;\n\npublic class CustomCsrfTokenRequestHandler implements CsrfTokenRequestHandler {\n\n    private final CsrfTokenRequestHandler delegate =\n        new CsrfTokenRequestAttributeHandler();\n\n    @Override\n    public void handle(\n            HttpServletRequest request,\n            HttpServletResponse response,\n            Supplier<CsrfToken> deferredCsrfToken) {\n\n        // Perform custom handling before delegating\n        CsrfToken token = deferredCsrfToken.get();\n\n        // Log CSRF validation attempts in debug mode\n        if (request.getHeader(token.getHeaderName()) != null) {\n            System.out.printf(\"[CSRF] Token found in header for %s %s%n\",\n                request.getMethod(), request.getRequestURI());\n        }\n\n        delegate.handle(request, response, deferredCsrfToken);\n    }\n\n    @Override\n    public String resolveCsrfTokenValue(HttpServletRequest request, CsrfToken csrfToken) {\n        // Try header first, then parameter\n        String headerValue = request.getHeader(csrfToken.getHeaderName());\n        if (headerValue != null) return headerValue;\n\n        String paramValue = request.getParameter(csrfToken.getParameterName());\n        if (paramValue != null) return paramValue;\n\n        // Try alternate header names\n        String xsrfValue = request.getHeader(\"X-XSRF-TOKEN\");\n        if (xsrfValue != null) return xsrfValue;\n\n        return \"\";\n    }\n}\n"
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
        children: "package com.course.security.csrf;\n\nimport jakarta.servlet.http.HttpServletRequest;\nimport jakarta.servlet.http.HttpServletResponse;\nimport org.springframework.security.access.AccessDeniedException;\nimport org.springframework.security.web.access.AccessDeniedHandler;\nimport org.springframework.security.web.csrf.InvalidCsrfTokenException;\nimport org.springframework.security.web.csrf.MissingCsrfTokenException;\n\nimport java.io.IOException;\nimport java.time.Instant;\n\npublic class CsrfAccessDeniedHandler implements AccessDeniedHandler {\n\n    @Override\n    public void handle(\n            HttpServletRequest request,\n            HttpServletResponse response,\n            AccessDeniedException accessDeniedException)\n            throws IOException {\n\n        response.setContentType(\"application/json\");\n        response.setCharacterEncoding(\"UTF-8\");\n\n        String errorType;\n        String message;\n\n        if (accessDeniedException instanceof MissingCsrfTokenException) {\n            errorType = \"CSRF_TOKEN_MISSING\";\n            message = \"CSRF token is missing. Include X-CSRF-TOKEN header or _csrf parameter.\";\n            response.setStatus(403);\n        } else if (accessDeniedException instanceof InvalidCsrfTokenException) {\n            errorType = \"CSRF_TOKEN_INVALID\";\n            message = \"CSRF token is invalid or expired. Refresh the page and try again.\";\n            response.setStatus(403);\n        } else {\n            errorType = \"CSRF_ERROR\";\n            message = accessDeniedException.getMessage();\n            response.setStatus(403);\n        }\n\n        String json = \"\"\"\n            {\n                \"error\": \"%s\",\n                \"message\": \"%s\",\n                \"timestamp\": \"%s\",\n                \"path\": \"%s\"\n            }\n            \"\"\".formatted(\n                errorType,\n                message,\n                Instant.now().toString(),\n                request.getRequestURI()\n            );\n\n        response.getWriter().write(json);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Register it:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Bean\npublic SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n    http\n        .csrf(csrf -> csrf\n            .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())\n            .accessDeniedHandler(new CsrfAccessDeniedHandler())\n        )\n        .authorizeHttpRequests(auth -> auth\n            .anyRequest().authenticated()\n        )\n        .formLogin(form -> {});\n\n    return http.build();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "109-csrf-protection-for-non-browser-clients",
      children: "10.9 CSRF Protection for Non-Browser Clients"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For mobile apps or service-to-service calls, disable CSRF entirely:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@Order(1)\npublic class MobileApiSecurityConfig {\n\n    @Bean\n    @Order(1)\n    public SecurityFilterChain mobileFilterChain(HttpSecurity http) throws Exception {\n        http\n            .securityMatcher(\"/api/mobile/**\")\n            .csrf(csrf -> csrf.disable())\n            .sessionManagement(session ->\n                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))\n            .authorizeHttpRequests(auth -> auth\n                .anyRequest().authenticated()\n            )\n            .httpBasic(httpBasic -> {});\n\n        return http.build();\n    }\n}\n\n@Configuration\n@Order(2)\npublic class WebSecurityConfig {\n\n    @Bean\n    @Order(2)\n    public SecurityFilterChain webFilterChain(HttpSecurity http) throws Exception {\n        http\n            .securityMatcher(\"/web/**\")\n            .csrf(csrf -> csrf\n                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())\n            )\n            .authorizeHttpRequests(auth -> auth\n                .anyRequest().authenticated()\n            )\n            .formLogin(form -> {});\n\n        return http.build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!NOTE]\nIf your service is a REST API using stateless auth (JWT/OAuth2), CSRF protection should be disabled → there is no browser session to protect."
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
        children: "@Configuration\n@EnableWebSecurity\npublic class CspSecurityConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .headers(headers -> headers\n                .contentSecurityPolicy(csp -> csp\n                    .policyDirectives(\"default-src 'self'; \" +\n                        \"script-src 'self' 'unsafe-inline'; \" +\n                        \"style-src 'self' 'unsafe-inline'; \" +\n                        \"img-src 'self' data: https:; \" +\n                        \"font-src 'self' https://fonts.gstatic.com; \" +\n                        \"connect-src 'self' https://api.example.com; \" +\n                        \"frame-ancestors 'none'; \" +\n                        \"form-action 'self'; \" +\n                        \"base-uri 'self'; \" +\n                        \"object-src 'none'\")\n                )\n                .frameOptions(frame -> frame.deny())\n                .xssProtection(xss -> xss.block(false))\n                .contentTypeOptions(content -> contentTypeOptions -> {})\n            )\n            .authorizeHttpRequests(auth -> auth\n                .anyRequest().authenticated()\n            )\n            .formLogin(form -> {});\n\n        return http.build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-comprehensive-security-headers",
      children: "11.2 Comprehensive Security Headers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@EnableWebSecurity\npublic class ComprehensiveHeaderConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .headers(headers -> headers\n                // Content Security Policy\n                .contentSecurityPolicy(csp -> csp\n                    .policyDirectives(\"default-src 'self'; \" +\n                        \"script-src 'self'; \" +\n                        \"style-src 'self' 'unsafe-inline'; \" +\n                        \"img-src 'self' data: https:; \" +\n                        \"font-src 'self'; \" +\n                        \"connect-src 'self'; \" +\n                        \"frame-ancestors 'none'; \" +\n                        \"form-action 'self'; \" +\n                        \"base-uri 'self'; \" +\n                        \"object-src 'none'; \" +\n                        \"upgrade-insecure-requests\")\n                )\n\n                // X-Content-Type-Options: nosniff\n                .contentTypeOptions(contentTypeOptions -> {})\n\n                // X-Frame-Options: DENY\n                .frameOptions(frameOptions -> frameOptions.deny())\n\n                // Strict-Transport-Security (HSTS)\n                .httpStrictTransportSecurity(hsts -> hsts\n                    .includeSubDomains(true)\n                    .maxAgeInSeconds(31536000)\n                    .preload(true)\n                )\n\n                // Referrer-Policy\n                .referrerPolicy(referrer ->\n                    referrer.policy(\n                        org.springframework.security.web.header.writers.ReferrerPolicyHeaderWriter\n                            .ReferrerPolicy.STRICT_ORIGIN_WHEN_CROSS_ORIGIN\n                    )\n                )\n\n                // Permissions-Policy\n                .permissionsPolicy(permissions -> permissions\n                    .policy(\"camera=(), \" +\n                        \"microphone=(), \" +\n                        \"geolocation=(self), \" +\n                        \"payment=(), \" +\n                        \"fullscreen=(self)\")\n                )\n\n                // Remove Server header\n                .cacheControl(cache -> {})\n            )\n            .authorizeHttpRequests(auth -> auth\n                .anyRequest().authenticated()\n            );\n\n        return http.build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-custom-headers-with-addheaderwriter",
      children: "11.3 Custom Headers with addHeaderWriter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add custom security headers programmatically:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@EnableWebSecurity\npublic class CustomHeaderConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .headers(headers -> headers\n                .addHeaderWriter((request, response) -> {\n                    response.setHeader(\"X-Content-Type-Options\", \"nosniff\");\n                    response.setHeader(\"X-Frame-Options\", \"DENY\");\n                    response.setHeader(\"X-XSS-Protection\", \"0\");\n                    response.setHeader(\"Strict-Transport-Security\",\n                        \"max-age=31536000; includeSubDomains; preload\");\n                    response.setHeader(\"Referrer-Policy\",\n                        \"strict-origin-when-cross-origin\");\n                    response.setHeader(\"Permissions-Policy\",\n                        \"camera=(), microphone=(), geolocation=(self)\");\n                    response.setHeader(\"Content-Security-Policy\",\n                        \"default-src 'self'\");\n                    response.setHeader(\"X-Powered-By\", \"\");\n                    response.setHeader(\"Server\", \"\");\n                })\n            )\n            .authorizeHttpRequests(auth -> auth\n                .anyRequest().authenticated()\n            );\n\n        return http.build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "114-staticheaderswriter",
      children: "11.4 StaticHeadersWriter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.security.web.header.writers.StaticHeadersWriter;\n\n@Bean\npublic SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n    http\n        .headers(headers -> headers\n            .addHeaderWriter(new StaticHeadersWriter(\"X-Robots-Tag\", \"noindex, nofollow\"))\n            .addHeaderWriter(new StaticHeadersWriter(\"X-Permitted-Cross-Domain-Policies\", \"none\"))\n        )\n        .authorizeHttpRequests(auth -> auth\n            .anyRequest().authenticated()\n        );\n\n    return http.build();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "115-csp-reporting",
      children: "11.5 CSP Reporting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For monitoring CSP violations without full enforcement:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@EnableWebSecurity\npublic class CspReportConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .headers(headers -> headers\n                .contentSecurityPolicy(csp -> csp\n                    .policyDirectives(\"default-src 'self'; \" +\n                        \"script-src 'self' 'report-sample'; \" +\n                        \"style-src 'self' 'report-sample'; \" +\n                        \"img-src 'self'; \" +\n                        \"report-uri /api/csp-violation; \" +\n                        \"report-to csp-endpoint\")\n                )\n            )\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers(\"/api/csp-violation\").permitAll()\n                .anyRequest().authenticated()\n            );\n\n        return http.build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CSP violation receiver endpoint:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.controller;\n\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.MediaType;\nimport org.springframework.web.bind.annotation.*;\n\nimport java.util.Map;\n\n@RestController\n@RequestMapping(\"/api\")\npublic class CspViolationController {\n\n    @PostMapping(value = \"/csp-violation\",\n        consumes = \"application/csp-report\")\n    @ResponseStatus(HttpStatus.NO_CONTENT)\n    public void receiveCspReport(@RequestBody Map<String, Object> report) {\n        // Log the CSP violation\n        System.err.println(\"[CSP VIOLATION] \" + report);\n        // Store in database for analysis\n    }\n\n    @PostMapping(value = \"/csp-violation\",\n        consumes = MediaType.APPLICATION_JSON_VALUE)\n    @ResponseStatus(HttpStatus.NO_CONTENT)\n    public void receiveCspReportJson(@RequestBody Map<String, Object> report) {\n        System.err.println(\"[CSP VIOLATION] \" + report);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-complete-integration-example",
      children: "12. Complete Integration Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A full configuration integrating method security, CORS, CSRF, and CSP:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.security.config;\n\nimport com.course.security.csrf.CsrfAccessDeniedHandler;\nimport com.course.security.evaluator.DocumentPermissionEvaluator;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.access.expression.method.DefaultMethodSecurityExpressionHandler;\nimport org.springframework.security.access.expression.method.MethodSecurityExpressionHandler;\nimport org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\nimport org.springframework.security.config.http.SessionCreationPolicy;\nimport org.springframework.security.web.SecurityFilterChain;\nimport org.springframework.security.web.csrf.CookieCsrfTokenRepository;\nimport org.springframework.security.web.csrf.CsrfTokenRequestAttributeHandler;\nimport org.springframework.web.cors.CorsConfiguration;\nimport org.springframework.web.cors.CorsConfigurationSource;\nimport org.springframework.web.cors.UrlBasedCorsConfigurationSource;\n\nimport java.util.List;\n\n@Configuration\n@EnableWebSecurity\n@EnableMethodSecurity(securedEnabled = true, jsr250Enabled = true)\npublic class MasterSecurityConfig {\n\n    private final DocumentPermissionEvaluator documentPermissionEvaluator;\n\n    public MasterSecurityConfig(DocumentPermissionEvaluator documentPermissionEvaluator) {\n        this.documentPermissionEvaluator = documentPermissionEvaluator;\n    }\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            // CORS\n            .cors(cors -> cors.configurationSource(corsConfigurationSource()))\n\n            // CSRF — enabled for browser clients, disabled for API\n            .csrf(csrf -> csrf\n                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())\n                .csrfTokenRequestHandler(new CsrfTokenRequestAttributeHandler())\n                .accessDeniedHandler(new CsrfAccessDeniedHandler())\n            )\n\n            // Security Headers / CSP\n            .headers(headers -> headers\n                .contentSecurityPolicy(csp -> csp\n                    .policyDirectives(\"default-src 'self'; \" +\n                        \"script-src 'self'; \" +\n                        \"style-src 'self' 'unsafe-inline'; \" +\n                        \"img-src 'self' data:; \" +\n                        \"font-src 'self'; \" +\n                        \"connect-src 'self'; \" +\n                        \"frame-ancestors 'none'; \" +\n                        \"form-action 'self'; \" +\n                        \"base-uri 'self'; \" +\n                        \"object-src 'none'\")\n                )\n                .frameOptions(frame -> frame.deny())\n                .httpStrictTransportSecurity(hsts -> hsts\n                    .includeSubDomains(true)\n                    .maxAgeInSeconds(31536000))\n                .referrerPolicy(referrer -> referrer\n                    .policy(org.springframework.security.web.header.writers\n                        .ReferrerPolicyHeaderWriter.ReferrerPolicy\n                        .STRICT_ORIGIN_WHEN_CROSS_ORIGIN))\n                .permissionsPolicy(permissions -> permissions\n                    .policy(\"camera=(), microphone=(), geolocation=(), payment=()\"))\n            )\n\n            // Authorization\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers(\"/api/public/**\").permitAll()\n                .requestMatchers(\"/api/csp-violation\").permitAll()\n                .requestMatchers(\"/api/admin/**\").hasRole(\"ADMIN\")\n                .anyRequest().authenticated()\n            )\n\n            .formLogin(form -> {})\n            .httpBasic(httpBasic -> {});\n\n        return http.build();\n    }\n\n    @Bean\n    public CorsConfigurationSource corsConfigurationSource() {\n        CorsConfiguration config = new CorsConfiguration();\n        config.setAllowedOriginPatterns(List.of(\"https://*.example.com\", \"http://localhost:*\"));\n        config.setAllowedMethods(List.of(\"GET\", \"POST\", \"PUT\", \"DELETE\", \"PATCH\", \"OPTIONS\"));\n        config.setAllowedHeaders(List.of(\"Authorization\", \"Content-Type\", \"X-CSRF-TOKEN\", \"X-XSRF-TOKEN\"));\n        config.setExposedHeaders(List.of(\"X-Total-Count\", \"X-Request-Id\"));\n        config.setAllowCredentials(true);\n        config.setMaxAge(3600L);\n\n        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();\n        source.registerCorsConfiguration(\"/api/**\", config);\n        return source;\n    }\n\n    @Bean\n    public MethodSecurityExpressionHandler methodSecurityExpressionHandler() {\n        DefaultMethodSecurityExpressionHandler handler =\n            new DefaultMethodSecurityExpressionHandler();\n        handler.setPermissionEvaluator(documentPermissionEvaluator);\n        return handler;\n    }\n}\n"
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