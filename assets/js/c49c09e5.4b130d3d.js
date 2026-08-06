"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[9793],{

/***/ 2236
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_61_interview_security_md_c49_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-61-interview-security-md-c49.json
const site_docs_courses_java_61_interview_security_md_c49_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/61-interview-security","title":"Security Interview Q&A","description":"Previous Testing Interview Q&amp;A","source":"@site/docs/courses/java/61-interview-security.md","sourceDirName":"courses/java","slug":"/java/61-interview-security","permalink":"/ai-engineering-journey/java/61-interview-security","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":69,"frontMatter":{"id":"61-interview-security","slug":"/java/61-interview-security","title":"Security Interview Q&A","sidebar_label":"Security Interview Q&A","sidebar_position":69},"sidebar":"coursesSidebar","previous":{"title":"Chapter 60: Microservices Interview Q&A (Part A → Q1–Q8)","permalink":"/ai-engineering-journey/java/60-interview-microservices"},"next":{"title":"Testing Interview Q&A","permalink":"/ai-engineering-journey/java/62-interview-testing"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/61-interview-security.md


const frontMatter = {
	id: '61-interview-security',
	slug: '/java/61-interview-security',
	title: 'Security Interview Q&A',
	sidebar_label: 'Security Interview Q&A',
	sidebar_position: 69
};
const contentTitle = 'Security Interview Q&A';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "Q1: What is the difference between authentication and authorization? How does Spring Security model these two concepts?",
  "id": "q1-what-is-the-difference-between-authentication-and-authorization-how-does-spring-security-model-these-two-concepts",
  "level": 3
}, {
  "value": "Q2: Explain the structure of a JSON Web Token. How are JWT signatures created and verified?",
  "id": "q2-explain-the-structure-of-a-json-web-token-how-are-jwt-signatures-created-and-verified",
  "level": 3
}, {
  "value": "Q3: How do refresh tokens work in a JWT-based authentication system? When should you rotate refresh tokens?",
  "id": "q3-how-do-refresh-tokens-work-in-a-jwt-based-authentication-system-when-should-you-rotate-refresh-tokens",
  "level": 3
}, {
  "value": "Q4: What are the OAuth2 authorization code flow and the PKCE extension? When would you use each?",
  "id": "q4-what-are-the-oauth2-authorization-code-flow-and-the-pkce-extension-when-would-you-use-each",
  "level": 3
}, {
  "value": "Q5: How do you configure Spring Security for a stateless REST API? Show the complete setup for JWT-based authentication.",
  "id": "q5-how-do-you-configure-spring-security-for-a-stateless-rest-api-show-the-complete-setup-for-jwt-based-authentication",
  "level": 3
}, {
  "value": "Q6: What is OpenID Connect and how does it extend OAuth2? What is the ID token?",
  "id": "q6-what-is-openid-connect-and-how-does-it-extend-oauth2-what-is-the-id-token",
  "level": 3
}, {
  "value": "Q7: How do you implement method-level security in Spring Boot? Compare @PreAuthorize, @PostAuthorize, @Secured, and @RolesAllowed.",
  "id": "q7-how-do-you-implement-method-level-security-in-spring-boot-compare-preauthorize-postauthorize-secured-and-rolesallowed",
  "level": 3
}, {
  "value": "Q8: Explain CSRF, CORS, XSS, and SQL injection. How does Spring Security protect against each?",
  "id": "q8-explain-csrf-cors-xss-and-sql-injection-how-does-spring-security-protect-against-each",
  "level": 3
}, {
  "value": "Q9: Implement a complete Spring Security configuration with multiple authentication providers (JWT, LDAP, and database).",
  "id": "q9-implement-a-complete-spring-security-configuration-with-multiple-authentication-providers-jwt-ldap-and-database",
  "level": 3
}, {
  "value": "Q10: What is Keycloak? How do you configure a realm, client, roles, and identity brokering?",
  "id": "q10-what-is-keycloak-how-do-you-configure-a-realm-client-roles-and-identity-brokering",
  "level": 3
}, {
  "value": "Q11: How should you securely store JWT tokens on the client side? Discuss localStorage, sessionStorage, cookies, and their trade-offs.",
  "id": "q11-how-should-you-securely-store-jwt-tokens-on-the-client-side-discuss-localstorage-sessionstorage-cookies-and-their-trade-offs",
  "level": 3
}, {
  "value": "Q12: Explain the OAuth2 client credentials grant. When and why would you use it?",
  "id": "q12-explain-the-oauth2-client-credentials-grant-when-and-why-would-you-use-it",
  "level": 3
}, {
  "value": "Q13: How do you configure Spring Security for a reactive web application (WebFlux)? How does it differ from the servlet stack?",
  "id": "q13-how-do-you-configure-spring-security-for-a-reactive-web-application-webflux-how-does-it-differ-from-the-servlet-stack",
  "level": 3
}, {
  "value": "Q14: Implement a secure password hashing strategy using bcrypt and Argon2. Explain salt and pepper.",
  "id": "q14-implement-a-secure-password-hashing-strategy-using-bcrypt-and-argon2-explain-salt-and-pepper",
  "level": 3
}, {
  "value": "Q15: Explain the OAuth2 Device Authorization Grant. When would you use it?",
  "id": "q15-explain-the-oauth2-device-authorization-grant-when-would-you-use-it",
  "level": 3
}, {
  "value": "Q16: Explain SSL/TLS, HTTPS, and certificate pinning. How does Spring Boot configure HTTPS?",
  "id": "q16-explain-ssltls-https-and-certificate-pinning-how-does-spring-boot-configure-https",
  "level": 3
}, {
  "value": "Q17: How do you implement a custom AuthenticationProvider in Spring Security?",
  "id": "q17-how-do-you-implement-a-custom-authenticationprovider-in-spring-security",
  "level": 3
}, {
  "value": "Q18: Explain the OAuth2 authorization code flow with PKCE in detail. Show the complete implementation.",
  "id": "q18-explain-the-oauth2-authorization-code-flow-with-pkce-in-detail-show-the-complete-implementation",
  "level": 3
}, {
  "value": "Q19: How does Spring Security handle CORS preflight requests? What is the OPTIONS request handling?",
  "id": "q19-how-does-spring-security-handle-cors-preflight-requests-what-is-the-options-request-handling",
  "level": 3
}, {
  "value": "Q20: Explain secrets management in Spring Boot applications. How do you integrate with HashiCorp Vault?",
  "id": "q20-explain-secrets-management-in-spring-boot-applications-how-do-you-integrate-with-hashicorp-vault",
  "level": 3
}, {
  "value": "Q21: How do you implement encryption at rest and in transit in a Spring Boot application?",
  "id": "q21-how-do-you-implement-encryption-at-rest-and-in-transit-in-a-spring-boot-application",
  "level": 3
}, {
  "value": "Q22: What are Spring Security filter chain ordering rules? How do you add custom filters at specific positions?",
  "id": "q22-what-are-spring-security-filter-chain-ordering-rules-how-do-you-add-custom-filters-at-specific-positions",
  "level": 3
}, {
  "value": "Q23: What is the Spring Security authentication architecture? Explain the AuthenticationManager, ProviderManager, and AuthenticationProvider relationship.",
  "id": "q23-what-is-the-spring-security-authentication-architecture-explain-the-authenticationmanager-providermanager-and-authenticationprovider-relationship",
  "level": 3
}, {
  "value": "Q24: How do you implement a rate limiter in Spring Boot? Show both in-memory and distributed approaches.",
  "id": "q24-how-do-you-implement-a-rate-limiter-in-spring-boot-show-both-in-memory-and-distributed-approaches",
  "level": 3
}, {
  "value": "Q25: What is the difference between authenticationEntryPoint and accessDeniedHandler in Spring Security?",
  "id": "q25-what-is-the-difference-between-authenticationentrypoint-and-accessdeniedhandler-in-spring-security",
  "level": 3
}, {
  "value": "Q26: What is the Spring Boot actuator security? How do you securely expose actuator endpoints?",
  "id": "q26-what-is-the-spring-boot-actuator-security-how-do-you-securely-expose-actuator-endpoints",
  "level": 3
}, {
  "value": "Q27: Explain the security considerations for a Spring Boot microservices architecture. How do you handle service-to-service authentication?",
  "id": "q27-explain-the-security-considerations-for-a-spring-boot-microservices-architecture-how-do-you-handle-service-to-service-authentication",
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
        id: "security-interview-qa",
        children: "Security Interview Q&A"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/60-interview-microservices-d",
          children: "Microservices Interview Q&A (cont.)"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/62-interview-testing",
          children: "Testing Interview Q&A"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covers essential security concepts every Java and Spring Boot developer should master for technical interviews. From foundational distinctions like authentication versus authorization to advanced topics such as OAuth2 authorization flows, JWT token management, Spring Security configuration, CSRF protection, secrets management with Vault, and password hashing with Argon2 → each question provides detailed explanations with complete, production-quality code examples. Security is not a feature; it is a cross-cutting concern that must be designed into every layer of an application. Understanding these patterns, protocols, and their implementations will prepare you to design, build, and defend secure systems at any scale."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/61-interview-security.png",
        alt: "Security Interview Topics - Mindmap"
      })
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
        href: "../../assets/images/lessons/java/61-interview-security/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/61-interview-security/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/61-interview-security/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/61-interview-security/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/61-interview-security/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/61-interview-security/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Focus"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Questions"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Core Concepts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundational understanding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Definitions, contrasts, trade-offs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code Examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compilable, runnable solutions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real interview scenarios"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Practices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production-ready patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pitfalls to avoid"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Core Concepts] --> B[Code Examples]\n    B --> C[Edge Cases]\n    C --> D[Best Practices]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-the-difference-between-authentication-and-authorization-how-does-spring-security-model-these-two-concepts",
      children: "Q1: What is the difference between authentication and authorization? How does Spring Security model these two concepts?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " In interviews, always start with the \"why\" before the \"how.\" Explaining the reasoning behind a design choice is more valuable than reciting syntax."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Code readability matters in interviews. Write clean, well-structured code with meaningful variable names."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Authentication and authorization are two fundamental but distinct security concerns. Authentication answers the question \"Who are you?\" → it verifies the identity of a user or system. Authorization answers \"What are you allowed to do?\" → it determines what resources an authenticated principal may access."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In a typical web application, authentication happens first. The user presents credentials (username and password, token, certificate), and the system validates them. Once identity is established, authorization checks are applied to every subsequent request to ensure the principal has permission to perform the requested action."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Security models these concepts through several key abstractions. Authentication is represented by the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Authentication"
      }), " interface, which extends ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Principal"
      }), ". An ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Authentication"
      }), " object carries the principal's identity, credentials, granted authorities, and whether the authentication is currently valid (the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "authenticated"
      }), " flag). The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AuthenticationManager"
      }), " is the core strategy interface for performing authentication. Its most common implementation, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProviderManager"
      }), ", delegates to a list of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AuthenticationProvider"
      }), " beans."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Authorization is handled through two complementary mechanisms: URL-based security via the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SecurityFilterChain"
      }), " API and method-level security via annotations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Here is a complete Spring Security configuration that demonstrates both concepts:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@EnableWebSecurity\n@EnableMethodSecurity\npublic class SecurityConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .authenticationProvider(authenticationProvider())\n            .authorizeHttpRequests(authz -> authz\n                .requestMatchers(\"/api/public/**\").permitAll()\n                .requestMatchers(\"/api/admin/**\").hasRole(\"ADMIN\")\n                .requestMatchers(\"/api/user/**\").hasAnyRole(\"USER\", \"ADMIN\")\n                .anyRequest().authenticated()\n            )\n            .formLogin(Customizer.withDefaults())\n            .httpBasic(Customizer.withDefaults());\n        return http.build();\n    }\n\n    @Bean\n    public AuthenticationProvider authenticationProvider() {\n        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();\n        provider.setUserDetailsService(userDetailsService());\n        provider.setPasswordEncoder(passwordEncoder());\n        return provider;\n    }\n\n    @Bean\n    public UserDetailsService userDetailsService() {\n        UserDetails user = User.builder()\n            .username(\"user\")\n            .password(passwordEncoder().encode(\"password\"))\n            .roles(\"USER\")\n            .build();\n        UserDetails admin = User.builder()\n            .username(\"admin\")\n            .password(passwordEncoder().encode(\"admin\"))\n            .roles(\"ADMIN\")\n            .build();\n        return new InMemoryUserDetailsManager(user, admin);\n    }\n\n    @Bean\n    public PasswordEncoder passwordEncoder() {\n        return new BCryptPasswordEncoder();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "And here is how method-level security works in a service class:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class OrderService {\n\n    @PreAuthorize(\"hasRole('ADMIN')\")\n    public List<Order> findAllOrders() {\n        return orderRepository.findAll();\n    }\n\n    @PostAuthorize(\"returnObject.customerId == authentication.principal.id\")\n    public Order findOrderById(Long id) {\n        return orderRepository.findById(id)\n            .orElseThrow(() -> new OrderNotFoundException(id));\n    }\n\n    @PreAuthorize(\"#order.customerId == authentication.principal.id\")\n    public Order createOrder(@P(\"order\") Order order) {\n        return orderRepository.save(order);\n    }\n\n    @Secured(\"ROLE_ADMIN\")\n    public void cancelOrder(Long id) {\n        Order order = findOrderById(id);\n        order.setStatus(OrderStatus.CANCELLED);\n        orderRepository.save(order);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@PreAuthorize"
      }), " annotation runs its SpEL expression before the method executes. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@PostAuthorize"
      }), " annotation runs after the method returns, which is useful for scenarios where you need to inspect the return value. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Secured"
      }), " annotation is simpler → it checks that the authenticated principal has the specified role → but lacks the expressiveness of SpEL expressions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the filter chain, the ordering matters. Spring Security processes filters in a specific order, and the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "authorizeHttpRequests"
      }), " rules are evaluated in declaration order. The first matching rule wins. Always put permissive rules first and the catch-all ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".anyRequest().authenticated()"
      }), " last."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-explain-the-structure-of-a-json-web-token-how-are-jwt-signatures-created-and-verified",
      children: "Q2: Explain the structure of a JSON Web Token. How are JWT signatures created and verified?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A JSON Web Token consists of three Base64url-encoded segments separated by dots: the header, the payload, and the signature. The full structure looks like this:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.POstGetfAytaZS82wHcjoTyoqhMyxXiWdR7Nn7A29DNSl0EiXLdwJ6xC6AfgZWF1bOsS_TuYI3OG85AmiExREkrS6tDfTQ2B3WXlrrPp5h3s2kF4hFfQn2kfSUhPY6GgG6RrVfHkUPT8MYR6Kj6E-bo5sFzYJn3dFf9fB8v4wU\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "header"
      }), " typically contains the token type and the signing algorithm:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"alg\": \"RS256\",\n  \"typ\": \"JWT\",\n  \"kid\": \"key-id-1\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "payload"
      }), " contains claims → statements about the entity and additional metadata. There are three categories of claims: registered (standardized), public (custom but collision-resistant), and private (custom between parties). Standard registered claims include:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "sub"
        }), " (subject) → the principal identifier"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "iss"
        }), " (issuer) → who issued the token"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "aud"
        }), " (audience) → who the token is intended for"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "exp"
        }), " (expiration) → expiration time as a Unix timestamp"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "nbf"
        }), " (not before) → token is not valid before this time"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "iat"
        }), " (issued at) → when the token was issued"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "jti"
        }), " (JWT ID) → unique identifier for the token"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "signature"
      }), " is computed over the base64url-encoded header and payload concatenated with a dot:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "signature = algorithm(base64url(header) + \".\" + base64url(payload), secretOrPrivateKey)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For HMAC-based algorithms like HS256, the signature is computed using a symmetric key:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import io.jsonwebtoken.Jwts;\nimport io.jsonwebtoken.SignatureAlgorithm;\nimport io.jsonwebtoken.security.Keys;\nimport javax.crypto.SecretKey;\n\npublic class JwtHmacExample {\n\n    private static final SecretKey SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);\n\n    public String createToken(String subject, String role) {\n        return Jwts.builder()\n            .setSubject(subject)\n            .claim(\"role\", role)\n            .setIssuedAt(new Date())\n            .setExpiration(Date.from(Instant.now().plus(1, ChronoUnit.HOURS)))\n            .setIssuer(\"my-app\")\n            .signWith(SECRET_KEY)\n            .compact();\n    }\n\n    public Claims parseToken(String token) {\n        return Jwts.parserBuilder()\n            .setSigningKey(SECRET_KEY)\n            .build()\n            .parseClaimsJws(token)\n            .getBody();\n    }\n\n    public boolean validateToken(String token) {\n        try {\n            parseToken(token);\n            return true;\n        } catch (JwtException | IllegalArgumentException e) {\n            return false;\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For asymmetric algorithms like RS256, the signature uses a private key to sign and a public key to verify. This is the preferred approach for microservice architectures where the signing service (auth server) is separate from consuming services:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.security.KeyPair;\nimport java.security.KeyPairGenerator;\nimport java.security.PrivateKey;\nimport java.security.PublicKey;\n\npublic class JwtAsymmetricExample {\n\n    private final PrivateKey privateKey;\n    private final PublicKey publicKey;\n\n    public JwtAsymmetricExample() throws Exception {\n        KeyPairGenerator generator = KeyPairGenerator.getInstance(\"RSA\");\n        generator.initialize(2048);\n        KeyPair keyPair = generator.generateKeyPair();\n        this.privateKey = keyPair.getPrivate();\n        this.publicKey = keyPair.getPublic();\n    }\n\n    public String createToken(String subject, Map<String, Object> claims) {\n        return Jwts.builder()\n            .setSubject(subject)\n            .addClaims(claims)\n            .setIssuedAt(new Date())\n            .setExpiration(Date.from(Instant.now().plus(30, ChronoUnit.MINUTES)))\n            .signWith(privateKey, SignatureAlgorithm.RS256)\n            .compact();\n    }\n\n    public Claims verifyAndParse(String token) {\n        return Jwts.parserBuilder()\n            .setSigningKey(publicKey)\n            .build()\n            .parseClaimsJws(token)\n            .getBody();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The verification process works by recomputing the signature using the received header and payload and comparing it against the transmitted signature. If they match, the token has not been tampered with. The verification also checks the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "exp"
      }), " claim to ensure the token is not expired, and optionally checks ", (0,jsx_runtime.jsx)(_components.code, {
        children: "iss"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "aud"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nbf"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern best practices recommend using asymmetric algorithms (RS256, ES256) over symmetric ones (HS256) in distributed systems. The key management is simpler → only the issuer holds the private key, and any service can verify using the public key without needing to protect a shared secret."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-how-do-refresh-tokens-work-in-a-jwt-based-authentication-system-when-should-you-rotate-refresh-tokens",
      children: "Q3: How do refresh tokens work in a JWT-based authentication system? When should you rotate refresh tokens?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A JWT-based authentication system typically uses a two-token strategy: an access token and a refresh token. The access token is short-lived (typically 5-30 minutes) and is sent with every API request in the Authorization header. The refresh token is long-lived (days to months) and is used exclusively to obtain new access tokens without requiring the user to re-authenticate."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The flow works as follows:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The client authenticates with credentials and receives both an access token and a refresh token."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The client uses the access token for API requests."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When the access token expires, the client receives a 401 response."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The client sends the refresh token to a dedicated endpoint."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The server validates the refresh token and issues a new access token (and optionally a new refresh token)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The client retries the original request with the new access token."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Here is a complete implementation of the token endpoint:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\n@RequestMapping(\"/api/auth\")\npublic class AuthController {\n\n    private final AuthenticationManager authManager;\n    private final JwtTokenProvider tokenProvider;\n    private final RefreshTokenService refreshTokenService;\n\n    public AuthController(AuthenticationManager authManager,\n                          JwtTokenProvider tokenProvider,\n                          RefreshTokenService refreshTokenService) {\n        this.authManager = authManager;\n        this.tokenProvider = tokenProvider;\n        this.refreshTokenService = refreshTokenService;\n    }\n\n    @PostMapping(\"/login\")\n    public ResponseEntity<AuthResponse> login(@RequestBody @Valid LoginRequest request) {\n        Authentication authentication = authManager.authenticate(\n            new UsernamePasswordAuthenticationToken(request.email(), request.password())\n        );\n        String accessToken = tokenProvider.generateAccessToken(authentication);\n        RefreshToken refreshToken = refreshTokenService.createRefreshToken(authentication.getName());\n        return ResponseEntity.ok(new AuthResponse(accessToken, refreshToken.getToken()));\n    }\n\n    @PostMapping(\"/refresh\")\n    public ResponseEntity<AuthResponse> refresh(@RequestBody @Valid RefreshTokenRequest request) {\n        String newAccessToken = tokenProvider.generateAccessToken(\n            SecurityContextHolder.getContext().getAuthentication());\n        RefreshToken newRefreshToken = refreshTokenService.verifyAndRotate(request.refreshToken());\n        return ResponseEntity.ok(new AuthResponse(newAccessToken, newRefreshToken.getToken()));\n    }\n\n    @PostMapping(\"/logout\")\n    public ResponseEntity<Void> logout(@RequestBody @Valid RefreshTokenRequest request) {\n        refreshTokenService.revokeToken(request.refreshToken());\n        return ResponseEntity.noContent().build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The refresh token entity with rotation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\n@Table(name = \"refresh_tokens\")\npublic class RefreshToken {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.UUID)\n    private UUID id;\n\n    @Column(nullable = false, unique = true, length = 512)\n    private String token;\n\n    @Column(nullable = false)\n    private String username;\n\n    @Column(nullable = false)\n    private Instant expiresAt;\n\n    @Column(nullable = false)\n    private boolean revoked;\n\n    private String replacedByToken;\n\n    @Column(nullable = false)\n    private Instant createdAt;\n\n    @Column(nullable = false)\n    private String deviceInfo;\n\n    @PrePersist\n    public void prePersist() {\n        this.createdAt = Instant.now();\n        this.token = UUID.randomUUID().toString();\n    }\n\n    public boolean isValid() {\n        return !revoked && expiresAt.isAfter(Instant.now());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The service that handles refresh token rotation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\n@Transactional\npublic class RefreshTokenService {\n\n    private static final long REFRESH_TOKEN_VALIDITY_MS = 30L * 24 * 60 * 60 * 1000;\n    private final RefreshTokenRepository repository;\n\n    public RefreshTokenService(RefreshTokenRepository repository) {\n        this.repository = repository;\n    }\n\n    public RefreshToken createRefreshToken(String username, String deviceInfo) {\n        RefreshToken refreshToken = new RefreshToken();\n        refreshToken.setUsername(username);\n        refreshToken.setExpiresAt(Instant.now().plusMillis(REFRESH_TOKEN_VALIDITY_MS));\n        refreshToken.setDeviceInfo(deviceInfo);\n        return repository.save(refreshToken);\n    }\n\n    public RefreshToken verifyAndRotate(String tokenValue) {\n        RefreshToken refreshToken = repository.findByToken(tokenValue)\n            .orElseThrow(() -> new TokenRefreshException(\"Refresh token not found\"));\n\n        if (!refreshToken.isValid()) {\n            refreshToken.setRevoked(true);\n            repository.save(refreshToken);\n            throw new TokenRefreshException(\"Refresh token expired or revoked\");\n        }\n\n        // Reuse detection: if already revoked, this indicates token theft\n        if (refreshToken.isRevoked()) {\n            repository.revokeAllByUsername(refreshToken.getUsername());\n            throw new TokenRefreshException(\"Potential token theft detected → all tokens revoked\");\n        }\n\n        refreshToken.setRevoked(true);\n        RefreshToken newToken = new RefreshToken();\n        newToken.setUsername(refreshToken.getUsername());\n        newToken.setExpiresAt(Instant.now().plusMillis(REFRESH_TOKEN_VALIDITY_MS));\n        newToken.setDeviceInfo(refreshToken.getDeviceInfo());\n        newToken.setReplacedByToken(tokenValue);\n        repository.save(refreshToken);\n        return repository.save(newToken);\n    }\n\n    public void revokeToken(String tokenValue) {\n        repository.findByToken(tokenValue).ifPresent(token -> {\n            token.setRevoked(true);\n            repository.save(token);\n        });\n    }\n\n    public void revokeAllUserTokens(String username) {\n        int revoked = repository.revokeAllByUsername(username);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Refresh token rotation is an essential security mechanism. Every time a refresh token is used, the old one is revoked and a new one is issued. This limits the window of opportunity if a refresh token is stolen. If an attacker steals a refresh token and the legitimate user also tries to refresh, one of them will use a revoked token, alerting the system to potential token theft. At that point, all refresh tokens for that user should be revoked immediately."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Best practices for refresh token storage:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Store refresh tokens in an HTTP-only, Secure, SameSite=Strict cookie rather than in localStorage. This prevents XSS attacks from accessing the token."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The refresh endpoint should use CSRF protection."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement refresh token reuse detection → if a revoked token is used, it indicates token theft."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set appropriate expiration based on the sensitivity of the application. Banking apps might use 15 minutes; social apps might use 30 days."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Store a device fingerprint or user agent alongside the token to detect anomalous usage."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-are-the-oauth2-authorization-code-flow-and-the-pkce-extension-when-would-you-use-each",
      children: "Q4: What are the OAuth2 authorization code flow and the PKCE extension? When would you use each?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The OAuth2 authorization code flow is the most secure flow for applications that can securely store a client secret, such as server-side web applications. The flow involves the following participants: the Resource Owner (user), the Client (application), the Authorization Server, and the Resource Server."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Here is the complete flow:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The client redirects the user to the authorization server with query parameters including ", (0,jsx_runtime.jsx)(_components.code, {
          children: "response_type=code"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "client_id"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "redirect_uri"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scope"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The user authenticates and consents to the requested permissions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The authorization server redirects back to the client with an authorization code in the query string."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The client exchanges the authorization code for an access token by making a back-channel POST request to the token endpoint. This request includes the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "client_id"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "client_secret"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "code"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "redirect_uri"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "grant_type=authorization_code"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The authorization server returns an access token and optionally a refresh token."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Here is a Spring Boot resource server configured for OAuth2:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  security:\n    oauth2:\n      resourceserver:\n        jwt:\n          issuer-uri: https://auth.example.com/realms/my-realm\n          jwk-set-uri: https://auth.example.com/realms/my-realm/protocol/openid-connect/certs\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@EnableWebSecurity\npublic class OAuth2ResourceServerConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .authorizeHttpRequests(authz -> authz\n                .requestMatchers(\"/api/public/**\").permitAll()\n                .requestMatchers(\"/api/admin/**\").hasAuthority(\"SCOPE_admin\")\n                .requestMatchers(\"/api/orders/**\").hasAuthority(\"SCOPE_orders:read\")\n                .anyRequest().authenticated()\n            )\n            .oauth2ResourceServer(oauth2 -> oauth2\n                .jwt(jwt -> jwt\n                    .jwtAuthenticationConverter(jwtAuthenticationConverter())\n                )\n            );\n        return http.build();\n    }\n\n    @Bean\n    public JwtAuthenticationConverter jwtAuthenticationConverter() {\n        JwtGrantedAuthoritiesConverter grantedAuthorities = new JwtGrantedAuthoritiesConverter();\n        grantedAuthorities.setAuthorityPrefix(\"ROLE_\");\n        grantedAuthorities.setAuthoritiesClaimName(\"realm_access.roles\");\n        JwtAuthenticationConverter converter = new JwtAuthenticationConverter();\n        converter.setJwtGrantedAuthoritiesConverter(grantedAuthorities);\n        return converter;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The PKCE (Proof Key for Code Exchange) extension is designed for public clients that cannot securely store a client secret → mobile apps, single-page applications, and native desktop apps. PKCE prevents the authorization code interception attack by introducing a cryptographically random secret that the client generates for each authorization request."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Here is how PKCE works:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The client generates a cryptographically random string called ", (0,jsx_runtime.jsx)(_components.code, {
          children: "code_verifier"
        }), " and a transformed version called ", (0,jsx_runtime.jsx)(_components.code, {
          children: "code_challenge"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The client sends the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "code_challenge"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "code_challenge_method=S256"
        }), " along with the authorization request."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When exchanging the authorization code, the client sends the original ", (0,jsx_runtime.jsx)(_components.code, {
          children: "code_verifier"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The authorization server transforms the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "code_verifier"
        }), " using the agreed method and compares it to the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "code_challenge"
        }), ". If they match, the code exchange succeeds."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.security.MessageDigest;\nimport java.security.SecureRandom;\nimport java.util.Base64;\n\npublic class PkceUtil {\n\n    public static String generateCodeVerifier() {\n        SecureRandom sr = new SecureRandom();\n        byte[] code = new byte[32];\n        sr.nextBytes(code);\n        return Base64.getUrlEncoder().withoutPadding().encodeToString(code);\n    }\n\n    public static String generateCodeChallenge(String codeVerifier) throws Exception {\n        MessageDigest md = MessageDigest.getInstance(\"SHA-256\");\n        byte[] digest = md.digest(codeVerifier.getBytes(\"US-ASCII\"));\n        return Base64.getUrlEncoder().withoutPadding().encodeToString(digest);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Here is a Spring Boot client application using the authorization code flow with PKCE:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class OAuth2ClientConfig {\n\n    @Bean\n    public SecurityFilterChain oauth2ClientFilterChain(HttpSecurity http) throws Exception {\n        http\n            .authorizeHttpRequests(authz -> authz\n                .requestMatchers(\"/login\", \"/oauth2/**\").permitAll()\n                .anyRequest().authenticated()\n            )\n            .oauth2Login(oauth2 -> oauth2\n                .loginPage(\"/oauth2/authorization/my-client\")\n                .defaultSuccessUrl(\"/dashboard\")\n            )\n            .oauth2Client(Customizer.withDefaults());\n        return http.build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  security:\n    oauth2:\n      client:\n        registration:\n          my-client:\n            client-id: my-client-id\n            client-secret: my-client-secret\n            authorization-grant-type: authorization_code\n            redirect-uri: \"{baseUrl}/login/oauth2/code/{registrationId}\"\n            scope: openid,profile,email,orders:read\n            client-authentication-method: client_secret_basic\n        provider:\n          my-client:\n            issuer-uri: https://auth.example.com/realms/my-realm\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For public clients (SPA, mobile), you would omit the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "client-secret"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  security:\n    oauth2:\n      client:\n        registration:\n          mobile-app:\n            client-id: mobile-client-id\n            authorization-grant-type: authorization_code\n            client-authentication-method: none\n            scope: openid,profile\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The choice of flow depends on your application type:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Server-side web app"
        }), ": Authorization code flow with client secret. The secret is stored securely on the server."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single-page app"
        }), ": Authorization code flow with PKCE. No client secret, the code verifier prevents interception."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mobile app"
        }), ": Authorization code flow with PKCE. The app uses a custom scheme or universal link for the redirect URI."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Machine-to-machine"
        }), ": Client credentials grant. No user involved, the application authenticates itself."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IoT / devices with no browser"
        }), ": Device authorization grant. The user uses a separate device to authorize."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-how-do-you-configure-spring-security-for-a-stateless-rest-api-show-the-complete-setup-for-jwt-based-authentication",
      children: "Q5: How do you configure Spring Security for a stateless REST API? Show the complete setup for JWT-based authentication."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configuring Spring Security for a stateless REST API requires disabling session management, CSRF protection, and configuring a JWT authentication filter. The server should not create HTTP sessions → every request must carry its own authentication in the form of a JWT access token."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Here is the complete configuration:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@EnableWebSecurity\n@EnableMethodSecurity\npublic class SecurityConfig {\n\n    private final JwtAuthenticationFilter jwtAuthFilter;\n    private final JwtAuthenticationProvider jwtAuthProvider;\n\n    public SecurityConfig(JwtAuthenticationFilter jwtAuthFilter,\n                          JwtAuthenticationProvider jwtAuthProvider) {\n        this.jwtAuthFilter = jwtAuthFilter;\n        this.jwtAuthProvider = jwtAuthProvider;\n    }\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .csrf(AbstractHttpConfigurer::disable)\n            .sessionManagement(session -> session\n                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)\n            )\n            .exceptionHandling(ex -> ex\n                .authenticationEntryPoint(new BearerTokenAuthenticationEntryPoint())\n                .accessDeniedHandler(new BearerTokenAccessDeniedHandler())\n            )\n            .authorizeHttpRequests(authz -> authz\n                .requestMatchers(\"/api/auth/**\", \"/actuator/health\", \"/error\").permitAll()\n                .requestMatchers(\"/api/admin/**\").hasRole(\"ADMIN\")\n                .requestMatchers(HttpMethod.GET, \"/api/products/**\").permitAll()\n                .anyRequest().authenticated()\n            )\n            .authenticationProvider(jwtAuthProvider)\n            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);\n\n        return http.build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The JWT authentication filter extracts and validates the token from every request:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class JwtAuthenticationFilter extends OncePerRequestFilter {\n\n    private final JwtTokenProvider tokenProvider;\n    private final UserDetailsService userDetailsService;\n\n    public JwtAuthenticationFilter(JwtTokenProvider tokenProvider,\n                                    UserDetailsService userDetailsService) {\n        this.tokenProvider = tokenProvider;\n        this.userDetailsService = userDetailsService;\n    }\n\n    @Override\n    protected void doFilterInternal(@NonNull HttpServletRequest request,\n                                    @NonNull HttpServletResponse response,\n                                    @NonNull FilterChain filterChain)\n            throws ServletException, IOException {\n        try {\n            String jwt = extractJwtFromRequest(request);\n            if (jwt != null && tokenProvider.validateToken(jwt)) {\n                String username = tokenProvider.getUsernameFromToken(jwt);\n                UserDetails userDetails = userDetailsService.loadUserByUsername(username);\n                UsernamePasswordAuthenticationToken authentication =\n                    new UsernamePasswordAuthenticationToken(\n                        userDetails, null, userDetails.getAuthorities());\n                authentication.setDetails(\n                    new WebAuthenticationDetailsSource().buildDetails(request));\n                SecurityContextHolder.getContext().setAuthentication(authentication);\n            }\n        } catch (Exception e) {\n            SecurityContextHolder.clearContext();\n        }\n        filterChain.doFilter(request, response);\n    }\n\n    private String extractJwtFromRequest(HttpServletRequest request) {\n        String bearerToken = request.getHeader(\"Authorization\");\n        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith(\"Bearer \")) {\n            return bearerToken.substring(7);\n        }\n        return null;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The JWT token provider:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class JwtTokenProvider {\n\n    private final JwtConfig config;\n\n    public JwtTokenProvider(JwtConfig config) {\n        this.config = config;\n    }\n\n    public String generateAccessToken(Authentication authentication) {\n        UserPrincipal principal = (UserPrincipal) authentication.getPrincipal();\n        Date now = new Date();\n        Date expiry = new Date(now.getTime() + config.getAccessTokenExpiration());\n\n        return Jwts.builder()\n            .setSubject(principal.getUsername())\n            .claim(\"userId\", principal.getId())\n            .claim(\"roles\", principal.getAuthorities().stream()\n                .map(GrantedAuthority::getAuthority)\n                .collect(Collectors.toList()))\n            .setIssuedAt(now)\n            .setIssuer(config.getIssuer())\n            .setExpiration(expiry)\n            .signWith(config.getSigningKey())\n            .compact();\n    }\n\n    public String getUsernameFromToken(String token) {\n        return parseClaims(token).getSubject();\n    }\n\n    public boolean validateToken(String token) {\n        try {\n            parseClaims(token);\n            return true;\n        } catch (JwtException | IllegalArgumentException e) {\n            return false;\n        }\n    }\n\n    public Authentication getAuthentication(String token) {\n        Claims claims = parseClaims(token);\n        UserDetails userDetails = userDetailsService.loadUserByUsername(claims.getSubject());\n        return new UsernamePasswordAuthenticationToken(userDetails, token, userDetails.getAuthorities());\n    }\n\n    private Claims parseClaims(String token) {\n        return Jwts.parserBuilder()\n            .setSigningKey(config.getSigningKey())\n            .build()\n            .parseClaimsJws(token)\n            .getBody();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The JWT configuration:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@ConfigurationProperties(prefix = \"app.jwt\")\n@Component\npublic class JwtConfig {\n\n    private String secret;\n    private long accessTokenExpiration;\n    private long refreshTokenExpiration;\n    private String issuer;\n\n    public SecretKey getSigningKey() {\n        byte[] keyBytes = Decoders.BASE64.decode(this.secret);\n        return Keys.hmacShaKeyFor(keyBytes);\n    }\n\n    public String getSecret() { return secret; }\n    public void setSecret(String secret) { this.secret = secret; }\n    public long getAccessTokenExpiration() { return accessTokenExpiration; }\n    public void setAccessTokenExpiration(long accessTokenExpiration) { this.accessTokenExpiration = accessTokenExpiration; }\n    public long getRefreshTokenExpiration() { return refreshTokenExpiration; }\n    public void setRefreshTokenExpiration(long refreshTokenExpiration) { this.refreshTokenExpiration = refreshTokenExpiration; }\n    public String getIssuer() { return issuer; }\n    public void setIssuer(String issuer) { this.issuer = issuer; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "app:\n  jwt:\n    secret: bXktc2VjcmV0LWtleS10aGF0LWlzLWF0LWxlYXN0LTI1Ni1iaXRzLWxvbmc=\n    access-token-expiration: 900000\n    refresh-token-expiration: 2592000000\n    issuer: my-app\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key points about this configuration:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "SessionCreationPolicy.STATELESS"
        }), " ensures Spring Security never creates an HTTP session."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CSRF is disabled because there is no session to protect → CSRF tokens prevent session-based attacks."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "OncePerRequestFilter"
        }), " guarantees the filter executes once per request, even if forwarded to other servlets."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The filter extracts the token, validates it, and sets the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SecurityContext"
        }), " before the request reaches the controller."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-is-openid-connect-and-how-does-it-extend-oauth2-what-is-the-id-token",
      children: "Q6: What is OpenID Connect and how does it extend OAuth2? What is the ID token?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OpenID Connect (OIDC) is an identity layer built on top of OAuth2. While OAuth2 is an authorization framework that provides access tokens for accessing resources, OIDC adds authentication capabilities by introducing the ID token → a signed JWT that contains information about the authenticated user."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The key extension points of OIDC over OAuth2 are:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ID Token"
          }), ": A signed JWT that carries identity claims about the authenticated user. It is issued alongside the access token during the authorization flow."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "UserInfo Endpoint"
          }), ": A protected OAuth2 resource that returns claims about the authenticated user. The client uses its access token to call this endpoint."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Standardized Scopes"
          }), ": ", (0,jsx_runtime.jsx)(_components.code, {
            children: "openid"
          }), " (required), ", (0,jsx_runtime.jsx)(_components.code, {
            children: "profile"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "email"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "address"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "phone"
          }), ". These scopes control which claims the client receives."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Discovery"
          }), ": The OpenID Connect Discovery document at ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/.well-known/openid-configuration"
          }), " describes the provider's configuration, including endpoint URLs and supported features."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The ID token is a JWT with specific registered claims:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"iss\": \"https://auth.example.com/realms/my-realm\",\n  \"sub\": \"a1b2c3d4-1234-5678-9abc-def012345678\",\n  \"aud\": \"my-client-id\",\n  \"exp\": 1717000000,\n  \"iat\": 1716913600,\n  \"auth_time\": 1716913500,\n  \"nonce\": \"n-0S6_WzA2Mj\",\n  \"acr\": \"phr\",\n  \"amr\": [\"pwd\"],\n  \"azp\": \"my-client-id\",\n  \"preferred_username\": \"jdoe\",\n  \"email\": \"john@example.com\",\n  \"email_verified\": true,\n  \"name\": \"John Doe\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key claims in an ID token:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "iss"
        }), " (issuer) → MUST match the issuer URL obtained from discovery."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "sub"
        }), " (subject) → a unique, stable identifier for the user."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "aud"
        }), " (audience) → MUST include the client's ID."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "exp"
        }), " → the client MUST verify this timestamp."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "nonce"
        }), " → a one-time value sent by the client during the initial request, included in the ID token to prevent replay attacks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "auth_time"
        }), " → when the user last authenticated."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "acr"
        }), " (Authentication Context Class Reference) → indicates the level of authentication assurance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "amr"
        }), " (Authentication Methods Reference) → lists the authentication methods used."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Here is a Spring Boot application that acts as an OIDC client:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\n@RequestMapping(\"/api/user\")\npublic class UserController {\n\n    @GetMapping(\"/profile\")\n    public Map<String, Object> profile(\n            @AuthenticationPrincipal OidcUser oidcUser) {\n        Map<String, Object> profile = new HashMap<>();\n        profile.put(\"username\", oidcUser.getPreferredUsername());\n        profile.put(\"email\", oidcUser.getEmail());\n        profile.put(\"name\", oidcUser.getFullName());\n        profile.put(\"claims\", oidcUser.getClaims());\n        return profile;\n    }\n\n    @GetMapping(\"/id-token\")\n    public String idToken(@AuthenticationPrincipal OidcUser oidcUser) {\n        return oidcUser.getIdToken().getTokenValue();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configuring Spring Security as an OIDC client:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  security:\n    oauth2:\n      client:\n        registration:\n          keycloak:\n            client-id: spring-client\n            client-secret: ${KEYCLOAK_CLIENT_SECRET}\n            authorization-grant-type: authorization_code\n            redirect-uri: \"{baseUrl}/login/oauth2/code/{registrationId}\"\n            scope: openid,profile,email\n        provider:\n          keycloak:\n            issuer-uri: https://auth.example.com/realms/my-realm\n            user-name-attribute: preferred_username\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@EnableWebSecurity\npublic class OidcClientConfig {\n\n    @Bean\n    public SecurityFilterChain oidcFilterChain(HttpSecurity http) throws Exception {\n        http\n            .authorizeHttpRequests(authz -> authz\n                .requestMatchers(\"/\", \"/login\").permitAll()\n                .anyRequest().authenticated()\n            )\n            .oauth2Login(oauth2 -> oauth2\n                .loginPage(\"/oauth2/authorization/keycloak\")\n                .defaultSuccessUrl(\"/dashboard\", true)\n                .failureUrl(\"/login?error=true\")\n            )\n            .oauth2Client(Customizer.withDefaults());\n        return http.build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-how-do-you-implement-method-level-security-in-spring-boot-compare-preauthorize-postauthorize-secured-and-rolesallowed",
      children: "Q7: How do you implement method-level security in Spring Boot? Compare @PreAuthorize, @PostAuthorize, @Secured, and @RolesAllowed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Method-level security in Spring Boot allows you to enforce authorization at the method invocation level rather than only at the URL level. It is enabled with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@EnableMethodSecurity"
      }), " annotation and supports four annotation types with different capabilities."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "First, enable method security:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@EnableMethodSecurity\npublic class MethodSecurityConfig {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@EnableGlobalMethodSecurity(\n    prePostEnabled = true,\n    securedEnabled = true,\n    jsr250Enabled = true\n)\npublic class LegacyMethodSecurityConfig {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "@PreAuthorize"
      }), " → Executes a SpEL expression before the method:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\n@RequestMapping(\"/api/orders\")\npublic class OrderController {\n\n    private final OrderService orderService;\n\n    public OrderController(OrderService orderService) {\n        this.orderService = orderService;\n    }\n\n    @PreAuthorize(\"hasRole('ADMIN')\")\n    @GetMapping\n    public List<Order> getAllOrders() { return orderService.findAll(); }\n\n    @PreAuthorize(\"#order.customerEmail == authentication.principal.username\")\n    @PostMapping\n    public Order createOrder(@RequestBody Order order) { return orderService.save(order); }\n\n    @PreAuthorize(\"hasRole('ADMIN') or #order.customerEmail == authentication.principal.username\")\n    @PutMapping(\"/{id}\")\n    public Order updateOrder(@PathVariable Long id, @RequestBody Order order) {\n        return orderService.update(id, order);\n    }\n\n    @PreAuthorize(\"hasPermission(#id, 'Order', 'DELETE')\")\n    @DeleteMapping(\"/{id}\")\n    public void deleteOrder(@PathVariable Long id) { orderService.delete(id); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "@PostAuthorize"
      }), " → Executes after the method returns and can access the return value:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class DocumentService {\n\n    @PostAuthorize(\"returnObject.owner == authentication.principal.username\")\n    public Document findById(Long id) {\n        return documentRepository.findById(id)\n            .orElseThrow(() -> new DocumentNotFoundException(id));\n    }\n\n    @PostAuthorize(\"returnObject.visibility == 'PUBLIC' or \" +\n                   \"returnObject.owner == authentication.principal.username or \" +\n                   \"hasRole('ADMIN')\")\n    public Document findByShareId(String shareId) {\n        return documentRepository.findByShareId(shareId)\n            .orElseThrow(() -> new DocumentNotFoundException(\"Not found\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "@Secured"
      }), " → A simpler annotation that takes an array of role strings:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class AdminService {\n\n    @Secured(\"ROLE_ADMIN\")\n    public void performAdminTask() { }\n\n    @Secured({\"ROLE_ADMIN\", \"ROLE_SUPERVISOR\"})\n    public void performPrivilegedTask() { }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "@RolesAllowed"
      }), " → The JSR-250 equivalent of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Secured"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import jakarta.annotation.security.RolesAllowed;\n\n@Service\npublic class PaymentService {\n\n    @RolesAllowed(\"ADMIN\")\n    public void refundPayment(Long paymentId) { }\n\n    @RolesAllowed({\"ADMIN\", \"MANAGER\"})\n    public void approveRefund(Long refundId) { }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "@PreFilter and @PostFilter"
      }), " for collection-level filtering:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@PreFilter(\"filterObject.owner == authentication.principal.username\")\npublic List<Document> bulkSave(List<Document> documents) {\n    return documentRepository.saveAll(documents);\n}\n\n@PostFilter(\"filterObject.owner == authentication.principal.username\")\npublic List<Document> findAllVisible() {\n    return documentRepository.findAll();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Comparison table:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "@PreAuthorize"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "@PostAuthorize"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "@Secured"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "@RolesAllowed"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SpEL support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access to params"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (#paramName)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access to return"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (returnObject)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Role prefix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configurable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configurable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ROLE_"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Permission evaluator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Package"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "spring-security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "spring-security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "spring-security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jakarta.annotation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A custom PermissionEvaluator:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class OrderPermissionEvaluator implements PermissionEvaluator {\n\n    @Override\n    public boolean hasPermission(Authentication auth, Object targetDomainObject, Object permission) {\n        if (auth == null || !(targetDomainObject instanceof Order order)) return false;\n        String username = auth.getName();\n        return switch (permission.toString()) {\n            case \"READ\", \"UPDATE\" -> order.getCustomerEmail().equals(username);\n            case \"DELETE\" -> order.getCustomerEmail().equals(username) ||\n                auth.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals(\"ROLE_ADMIN\"));\n            default -> false;\n        };\n    }\n\n    @Override\n    public boolean hasPermission(Authentication auth, Serializable targetId,\n                                  String targetType, Object permission) {\n        return false;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Register the permission evaluator:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Bean\npublic MethodSecurityExpressionHandler methodSecurityExpressionHandler() {\n    DefaultMethodSecurityExpressionHandler handler = new DefaultMethodSecurityExpressionHandler();\n    handler.setPermissionEvaluator(orderPermissionEvaluator());\n    return handler;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-explain-csrf-cors-xss-and-sql-injection-how-does-spring-security-protect-against-each",
      children: "Q8: Explain CSRF, CORS, XSS, and SQL injection. How does Spring Security protect against each?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These four attacks represent different categories of web application vulnerabilities."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CSRF (Cross-Site Request Forgery)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CSRF attacks trick an authenticated user into executing unwanted actions on a web application where they are currently logged in. The attacker crafts a malicious request that leverages the user's active session cookies."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Security protects against CSRF by default when you use form-based login. It generates a unique CSRF token on the server, associates it with the user's session, and includes it in forms. Every mutating request (POST, PUT, DELETE, PATCH) must include this token."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@EnableWebSecurity\npublic class CsrfConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .csrf(csrf -> csrf\n                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())\n                .csrfTokenRequestHandler(new CsrfTokenRequestAttributeHandler())\n            );\n        return http.build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For SPAs:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Bean\npublic SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n    http\n        .csrf(csrf -> csrf\n            .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())\n            .csrfTokenRequestHandler(new SpaCsrfTokenRequestHandler())\n        );\n    return http.build();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For stateless REST APIs using JWT, you disable CSRF:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "http.csrf(AbstractHttpConfigurer::disable);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is safe because JWT tokens are sent explicitly in the Authorization header, not automatically attached by the browser."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CORS (Cross-Origin Resource Sharing)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CORS is a browser security mechanism that controls which origins can access resources on your server."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class CorsConfig {\n\n    @Bean\n    public CorsConfigurationSource corsConfigurationSource() {\n        CorsConfiguration configuration = new CorsConfiguration();\n        configuration.setAllowedOrigins(Arrays.asList(\n            \"https://app.example.com\",\n            \"https://admin.example.com\"\n        ));\n        configuration.setAllowedMethods(Arrays.asList(\n            \"GET\", \"POST\", \"PUT\", \"DELETE\", \"OPTIONS\"\n        ));\n        configuration.setAllowedHeaders(Arrays.asList(\n            \"Authorization\", \"Content-Type\", \"X-Requested-With\"\n        ));\n        configuration.setExposedHeaders(Arrays.asList(\n            \"X-Total-Count\", \"X-Rate-Limit-Remaining\"\n        ));\n        configuration.setAllowCredentials(true);\n        configuration.setMaxAge(3600L);\n\n        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();\n        source.registerCorsConfiguration(\"/api/**\", configuration);\n        return source;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In the security filter chain:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "http.cors(Customizer.withDefaults());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "XSS (Cross-Site Scripting)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XSS attacks inject malicious scripts into web pages viewed by other users. Spring Security provides several defenses:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Content Security Policy (CSP) headers:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "http.headers(headers -> headers\n    .contentSecurityPolicy(csp -> csp\n        .policyDirectives(\"default-src 'self'; \" +\n                        \"script-src 'self'; \" +\n                        \"img-src 'self' https://trusted-cdn.com; \" +\n                        \"frame-ancestors 'none'; \" +\n                        \"form-action 'self'\")\n    )\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "X-Content-Type-Options:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "http.headers(headers -> headers\n    .contentTypeOptions(Customizer.withDefaults())\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatic HTML escaping in template engines → Thymeleaf, React, and Angular escape output by default:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!-- Thymeleaf auto-escapes by default -->\n<div th:text=\"${userInput}\">Safe escaped content</div>\n\n<!-- Only use th:utext when you explicitly need unescaped HTML -->\n<div th:utext=\"${sanitizedHtml}\">Unsafe but sanitized content</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SQL Injection"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQL injection attacks inject malicious SQL statements into input fields. The primary defense is to never concatenate user input into SQL strings."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// VULNERABLE: Never do this\n@Query(\"SELECT * FROM users WHERE username = '\" + username + \"'\")\nUser findByUsernameUnsafe(String username);\n\n// SAFE: Use named parameters\n@Query(\"SELECT u FROM User u WHERE u.username = :username\")\nUser findByUsername(@Param(\"username\") String username);\n\n// SAFE: Use Spring Data JPA derived queries\nUser findByUsername(String username);\n\n// SAFE: Use native queries with parameter binding\n@Query(value = \"SELECT * FROM users WHERE username = :username\", nativeQuery = true)\nUser findByUsernameNative(@Param(\"username\") String username);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For JDBC:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// SAFE: PreparedStatement with parameterized queries\npublic User findUser(String username) {\n    String sql = \"SELECT * FROM users WHERE username = ?\";\n    return jdbcTemplate.queryForObject(\n        sql, new BeanPropertyRowMapper<>(User.class), username);\n}\n\n// VULNERABLE: String concatenation\npublic User findUserUnsafe(String username) {\n    String sql = \"SELECT * FROM users WHERE username = '\" + username + \"'\";\n    return jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<>(User.class));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-implement-a-complete-spring-security-configuration-with-multiple-authentication-providers-jwt-ldap-and-database",
      children: "Q9: Implement a complete Spring Security configuration with multiple authentication providers (JWT, LDAP, and database)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A real-world application often needs to support multiple authentication mechanisms simultaneously. Spring Security's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProviderManager"
      }), " delegates to a list of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AuthenticationProvider"
      }), " beans in order."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@EnableWebSecurity\n@EnableMethodSecurity\npublic class MultiProviderSecurityConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .csrf(AbstractHttpConfigurer::disable)\n            .sessionManagement(session -> session\n                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)\n            )\n            .authorizeHttpRequests(authz -> authz\n                .requestMatchers(\"/api/auth/**\").permitAll()\n                .requestMatchers(\"/api/public/**\").permitAll()\n                .requestMatchers(\"/api/admin/**\").hasRole(\"ADMIN\")\n                .anyRequest().authenticated()\n            )\n            .authenticationManager(authenticationManager());\n        return http.build();\n    }\n\n    @Bean\n    public AuthenticationManager authenticationManager() {\n        List<AuthenticationProvider> providers = List.of(\n            jwtAuthenticationProvider(),\n            ldapAuthenticationProvider(),\n            databaseAuthenticationProvider()\n        );\n        return new ProviderManager(providers);\n    }\n\n    @Bean\n    public AuthenticationProvider jwtAuthenticationProvider() {\n        return new JwtAuthenticationProvider();\n    }\n\n    @Bean\n    public AuthenticationProvider ldapAuthenticationProvider() {\n        LdapAuthenticationProvider provider = new LdapAuthenticationProvider(\n            ldapAuthenticator(), ldapAuthoritiesPopulator());\n        return provider;\n    }\n\n    @Bean\n    public AuthenticationProvider databaseAuthenticationProvider() {\n        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();\n        provider.setUserDetailsService(userDetailsService());\n        provider.setPasswordEncoder(passwordEncoder());\n        return provider;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The LDAP authenticator configuration:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class LdapConfig {\n\n    @Value(\"${ldap.url}\")\n    private String ldapUrl;\n\n    @Value(\"${ldap.base-dn}\")\n    private String baseDn;\n\n    @Bean\n    public LdapAuthenticator ldapAuthenticator() {\n        FilterBasedLdapUsernamePasswordAuthenticationFilter authenticator =\n            new FilterBasedLdapUsernamePasswordAuthenticationFilter();\n        authenticator.setContextSource(contextSource());\n        authenticator.setUserFilter(\"(&(uid={0})(objectClass=inetOrgPerson))\");\n        return authenticator;\n    }\n\n    @Bean\n    public LdapContextSource contextSource() {\n        LdapContextSource contextSource = new LdapContextSource();\n        contextSource.setUrl(ldapUrl);\n        contextSource.setBase(baseDn);\n        contextSource.setUserDn(\"cn=admin,dc=example,dc=com\");\n        contextSource.setPassword(\"admin-password\");\n        contextSource.setPooled(true);\n        return contextSource;\n    }\n\n    @Bean\n    public LdapAuthoritiesPopulator ldapAuthoritiesPopulator() {\n        DefaultLdapAuthoritiesPopulator populator =\n            new DefaultLdapAuthoritiesPopulator(contextSource(), \"ou=groups\");\n        populator.setGroupRoleAttribute(\"cn\");\n        populator.setRolePrefix(\"ROLE_\");\n        populator.setSearchSubtree(true);\n        return populator;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The database authentication provider with a custom ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UserDetailsService"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class JpaUserDetailsService implements UserDetailsService {\n\n    private final UserRepository userRepository;\n\n    public JpaUserDetailsService(UserRepository userRepository) {\n        this.userRepository = userRepository;\n    }\n\n    @Override\n    public UserDetails loadUserByUsername(String username)\n            throws UsernameNotFoundException {\n        return userRepository.findByEmail(username)\n            .map(this::toUserDetails)\n            .orElseThrow(() -> new UsernameNotFoundException(\"User not found: \" + username));\n    }\n\n    private UserDetails toUserDetails(User user) {\n        return org.springframework.security.core.userdetails.User.builder()\n            .username(user.getEmail())\n            .password(user.getPasswordHash())\n            .authorities(user.getRoles().stream()\n                .map(role -> new SimpleGrantedAuthority(\"ROLE_\" + role.getName()))\n                .collect(Collectors.toList()))\n            .disabled(!user.isEnabled())\n            .accountExpired(user.isAccountExpired())\n            .accountLocked(user.isAccountLocked())\n            .credentialsExpired(user.isCredentialsExpired())\n            .build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-what-is-keycloak-how-do-you-configure-a-realm-client-roles-and-identity-brokering",
      children: "Q10: What is Keycloak? How do you configure a realm, client, roles, and identity brokering?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Keycloak is an open-source identity and access management (IAM) solution that provides authentication, authorization, single sign-on (SSO), and identity brokering out of the box. It implements OAuth2, OpenID Connect, and SAML 2.0 protocols."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Realms"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A realm in Keycloak is a security domain that manages a set of users, credentials, roles, and client configurations. Realms are isolated from each other."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You configure a realm through the Keycloak admin console or via the Admin REST API:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"id\": \"my-company\",\n  \"realm\": \"my-company\",\n  \"displayName\": \"My Company\",\n  \"enabled\": true,\n  \"sslRequired\": \"external\",\n  \"registrationAllowed\": false,\n  \"loginWithEmailAllowed\": true,\n  \"duplicateEmailsAllowed\": false,\n  \"resetPasswordAllowed\": true,\n  \"bruteForceProtected\": true,\n  \"maxFailureWaitSeconds\": 900,\n  \"minimumQuickLoginWaitSeconds\": 60,\n  \"failureFactor\": 5,\n  \"accessTokenLifespan\": 300,\n  \"ssoSessionIdleTimeout\": 1800,\n  \"ssoSessionMaxLifespan\": 36000\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Clients"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A client represents an application that requests authentication from Keycloak. Clients can be confidential (server-side apps with a client secret) or public (SPAs, mobile apps)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"clientId\": \"spring-boot-api\",\n  \"enabled\": true,\n  \"protocol\": \"openid-connect\",\n  \"publicClient\": false,\n  \"secret\": \"********\",\n  \"redirectUris\": [\"https://app.example.com/*\"],\n  \"webOrigins\": [\"https://app.example.com\"],\n  \"standardFlowEnabled\": true,\n  \"directAccessGrantsEnabled\": true,\n  \"serviceAccountsEnabled\": true,\n  \"authorizationServicesEnabled\": true,\n  \"fullScopeAllowed\": false,\n  \"defaultClientScopes\": [\"openid\", \"profile\", \"email\", \"roles\"]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Roles"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Keycloak supports realm-level and client-level roles:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"realmRoles\": [\n    { \"name\": \"admin\", \"description\": \"Full access\", \"composite\": true,\n      \"composites\": { \"realm\": [\"user\", \"manager\"] } },\n    { \"name\": \"manager\", \"description\": \"Elevated privileges\", \"composite\": false },\n    { \"name\": \"user\", \"description\": \"Regular user\", \"composite\": false }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Identity Brokering"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Identity brokering allows Keycloak to act as a broker between external identity providers (Google, GitHub, Facebook) and your application:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"alias\": \"google\",\n  \"displayName\": \"Google\",\n  \"enabled\": true,\n  \"providerId\": \"google\",\n  \"config\": {\n    \"clientId\": \"google-client-id.apps.googleusercontent.com\",\n    \"clientSecret\": \"GOCSPX-...\",\n    \"useJwksUrl\": \"true\",\n    \"tokenUrl\": \"https://oauth2.googleapis.com/token\",\n    \"authorizationUrl\": \"https://accounts.google.com/o/oauth2/v2/auth\",\n    \"userInfoUrl\": \"https://www.googleapis.com/oauth2/v3/userinfo\",\n    \"defaultScope\": \"openid profile email\",\n    \"syncMode\": \"FORCE\",\n    \"storeToken\": \"true\",\n    \"acceptsPromptNone\": \"true\",\n    \"disableUserInfo\": \"false\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configuring Spring Boot as a Keycloak resource server:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  security:\n    oauth2:\n      resourceserver:\n        jwt:\n          issuer-uri: https://auth.example.com/realms/my-company\n          jwk-set-uri: https://auth.example.com/realms/my-company/protocol/openid-connect/certs\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@EnableWebSecurity\npublic class KeycloakResourceServerConfig {\n\n    @Bean\n    public SecurityFilterChain resourceServerFilterChain(HttpSecurity http) throws Exception {\n        http\n            .authorizeHttpRequests(authz -> authz\n                .requestMatchers(\"/api/public/**\").permitAll()\n                .requestMatchers(\"/api/admin/**\").hasRole(\"admin\")\n                .anyRequest().authenticated()\n            )\n            .oauth2ResourceServer(oauth2 -> oauth2\n                .jwt(jwt -> jwt\n                    .jwtAuthenticationConverter(jwtAuthenticationConverter())\n                )\n            );\n        return http.build();\n    }\n\n    @Bean\n    public JwtAuthenticationConverter jwtAuthenticationConverter() {\n        JwtGrantedAuthoritiesConverter grantedAuthorities = new JwtGrantedAuthoritiesConverter();\n        grantedAuthorities.setAuthorityPrefix(\"ROLE_\");\n        grantedAuthorities.setAuthoritiesClaimName(\"realm_access.roles\");\n        JwtAuthenticationConverter converter = new JwtAuthenticationConverter();\n        converter.setJwtGrantedAuthoritiesConverter(grantedAuthorities);\n        return converter;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Keycloak Event Listeners:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.keycloak.events.Event;\nimport org.keycloak.events.EventListenerProvider;\nimport org.keycloak.events.EventType;\nimport org.keycloak.events.admin.AdminEvent;\n\npublic class CustomEventListenerProvider implements EventListenerProvider {\n\n    private final EventPublisher eventPublisher;\n\n    public CustomEventListenerProvider(EventPublisher eventPublisher) {\n        this.eventPublisher = eventPublisher;\n    }\n\n    @Override\n    public void onEvent(Event event) {\n        if (event.getType() == EventType.LOGIN_ERROR) {\n            eventPublisher.publishSecurityEvent(new SecurityEvent(\n                SecurityEventType.LOGIN_FAILURE,\n                event.getDetail(\"username\"),\n                event.getError(),\n                event.getIpAddress()\n            ));\n        }\n        if (event.getType() == EventType.UPDATE_PASSWORD) {\n            eventPublisher.publishSecurityEvent(new SecurityEvent(\n                SecurityEventType.PASSWORD_CHANGED,\n                event.getUserId(), null, event.getIpAddress()));\n        }\n        if (event.getType() == EventType.REGISTER) {\n            eventPublisher.publishUserLifecycleEvent(new UserLifecycleEvent(\n                UserLifecycleType.USER_REGISTERED,\n                event.getUserId(), event.getDetail(\"email\")));\n        }\n    }\n\n    @Override\n    public void onEvent(AdminEvent adminEvent, boolean b) {\n        eventPublisher.publishAdminEvent(new AdminAuditEvent(\n            adminEvent.getOperationType().name(),\n            adminEvent.getResourceTypeAsString(),\n            adminEvent.getResourcePath(),\n            adminEvent.getAuthDetails().getUserId()));\n    }\n\n    @Override\n    public void close() { }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q11-how-should-you-securely-store-jwt-tokens-on-the-client-side-discuss-localstorage-sessionstorage-cookies-and-their-trade-offs",
      children: "Q11: How should you securely store JWT tokens on the client side? Discuss localStorage, sessionStorage, cookies, and their trade-offs."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The choice of where to store JWT tokens on the client side has significant security implications."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "localStorage"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Convenient but vulnerable to XSS attacks. Any script running on your domain can read ", (0,jsx_runtime.jsx)(_components.code, {
        children: "localStorage.getItem('access_token')"
      }), " and exfiltrate the token."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Storing in localStorage\nlocalStorage.setItem('access_token', jwtToken);\n\n// Using the token\nconst token = localStorage.getItem('access_token');\nfetch('/api/protected', { headers: { 'Authorization': `Bearer ${token}` } });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Risks:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full XSS vulnerability → one injected script compromises all tokens."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No built-in expiry mechanism."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accessible by any JavaScript on the same origin."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "sessionStorage"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Same XSS vulnerabilities as localStorage, but scoped to the browser tab and cleared when the tab is closed."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "sessionStorage.setItem('access_token', jwtToken);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "HTTP-Only Cookies (Recommended)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Provides the best protection against XSS attacks because JavaScript cannot read the cookie at all:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class JwtCookieHelper {\n\n    public ResponseCookie createAccessTokenCookie(String token) {\n        return ResponseCookie.from(\"access_token\", token)\n            .httpOnly(true)\n            .secure(true)\n            .sameSite(\"Strict\")\n            .path(\"/\")\n            .maxAge(Duration.ofMinutes(15))\n            .build();\n    }\n\n    public ResponseCookie createRefreshTokenCookie(String token) {\n        return ResponseCookie.from(\"refresh_token\", token)\n            .httpOnly(true)\n            .secure(true)\n            .sameSite(\"Strict\")\n            .path(\"/api/auth/refresh\")\n            .maxAge(Duration.ofDays(7))\n            .build();\n    }\n\n    public ResponseCookie clearAccessTokenCookie() {\n        return ResponseCookie.from(\"access_token\", \"\")\n            .httpOnly(true).secure(true).sameSite(\"Strict\")\n            .path(\"/\").maxAge(0).build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\n@RequestMapping(\"/api/auth\")\npublic class CookieBasedAuthController {\n\n    private final JwtCookieHelper cookieHelper;\n    private final JwtTokenProvider tokenProvider;\n    private final AuthenticationManager authManager;\n\n    public CookieBasedAuthController(JwtCookieHelper cookieHelper,\n                                      JwtTokenProvider tokenProvider,\n                                      AuthenticationManager authManager) {\n        this.cookieHelper = cookieHelper;\n        this.tokenProvider = tokenProvider;\n        this.authManager = authManager;\n    }\n\n    @PostMapping(\"/login\")\n    public ResponseEntity<Void> login(@RequestBody @Valid LoginRequest request) {\n        Authentication authentication = authManager.authenticate(\n            new UsernamePasswordAuthenticationToken(request.email(), request.password()));\n        String accessToken = tokenProvider.generateAccessToken(authentication);\n        String refreshToken = tokenProvider.generateRefreshToken(authentication);\n\n        return ResponseEntity.ok()\n            .header(HttpHeaders.SET_COOKIE, cookieHelper.createAccessTokenCookie(accessToken).toString())\n            .header(HttpHeaders.SET_COOKIE, cookieHelper.createRefreshTokenCookie(refreshToken).toString())\n            .build();\n    }\n\n    @PostMapping(\"/logout\")\n    public ResponseEntity<Void> logout() {\n        return ResponseEntity.ok()\n            .header(HttpHeaders.SET_COOKIE, cookieHelper.clearAccessTokenCookie().toString())\n            .build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Summary Table:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Storage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "XSS Protection"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CSRF Protection"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Auto-send"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tab-scoped"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "localStorage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (header required)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sessionStorage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (header required)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HttpOnly Cookie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Needs SameSite/CSRF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q12-explain-the-oauth2-client-credentials-grant-when-and-why-would-you-use-it",
      children: "Q12: Explain the OAuth2 client credentials grant. When and why would you use it?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The OAuth2 client credentials grant is a server-to-server authentication flow where the client application authenticates itself (not a user) to obtain an access token. It involves no user interaction, no redirects, and no browser involvement."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The flow:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST /realms/my-realm/protocol/openid-connect/token HTTP/1.1\nHost: auth.example.com\nContent-Type: application/x-www-form-urlencoded\n\ngrant_type=client_credentials\n&client_id=my-service\n&client_secret=my-service-secret\n&scope=orders:read orders:write\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Response:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"access_token\": \"eyJhbGciOiJSUzI1NiIs...\",\n  \"expires_in\": 3600,\n  \"token_type\": \"Bearer\",\n  \"scope\": \"orders:read orders:write\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot service using the client credentials grant:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class ClientCredentialsService {\n\n    private final RestTemplate restTemplate;\n    private final TokenCache tokenCache;\n    private final OAuth2ClientProperties properties;\n\n    public ClientCredentialsService(RestTemplate restTemplate,\n                                     TokenCache tokenCache,\n                                     OAuth2ClientProperties properties) {\n        this.restTemplate = restTemplate;\n        this.tokenCache = tokenCache;\n        this.properties = properties;\n    }\n\n    public String getAccessToken() {\n        return tokenCache.getToken().orElseGet(() -> {\n            String newToken = fetchNewToken();\n            tokenCache.setToken(newToken);\n            return newToken;\n        });\n    }\n\n    private String fetchNewToken() {\n        String tokenUri = properties.getProvider().get(\"keycloak\").getTokenUri();\n        String clientId = properties.getRegistration().get(\"my-service\").getClientId();\n        String clientSecret = properties.getRegistration().get(\"my-service\").getClientSecret();\n\n        HttpHeaders headers = new HttpHeaders();\n        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);\n\n        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();\n        body.add(\"grant_type\", \"client_credentials\");\n        body.add(\"client_id\", clientId);\n        body.add(\"client_secret\", clientSecret);\n        body.add(\"scope\", \"orders:read orders:write\");\n\n        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(body, headers);\n        ResponseEntity<OAuth2TokenResponse> response = restTemplate.postForEntity(\n            tokenUri, request, OAuth2TokenResponse.class);\n        return response.getBody().getAccessToken();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using Spring Security's OAuth2 client support:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  security:\n    oauth2:\n      client:\n        registration:\n          my-service:\n            client-id: my-service\n            client-secret: ${MY_SERVICE_CLIENT_SECRET}\n            authorization-grant-type: client_credentials\n            scope: orders:read,orders:write\n        provider:\n          my-service:\n            token-uri: https://auth.example.com/realms/my-realm/protocol/openid-connect/token\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class ClientCredentialsClient {\n\n    private final OAuth2AuthorizedClientManager authorizedClientManager;\n\n    public ClientCredentialsClient(OAuth2AuthorizedClientManager authorizedClientManager) {\n        this.authorizedClientManager = authorizedClientManager;\n    }\n\n    public String getToken() {\n        OAuth2AuthorizeRequest authorizeRequest = OAuth2AuthorizeRequest\n            .withClientRegistrationId(\"my-service\")\n            .principal(new ClientPrincipal(\"my-service\"))\n            .build();\n        OAuth2AuthorizedClient authorizedClient =\n            authorizedClientManager.authorize(authorizeRequest);\n        if (authorizedClient == null) {\n            throw new IllegalStateException(\"Failed to obtain token\");\n        }\n        return authorizedClient.getAccessToken().getTokenValue();\n    }\n\n    private record ClientPrincipal(String name) implements Principal {\n        @Override\n        public String getName() { return name; }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When to use client credentials:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Microservice-to-microservice communication"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scheduled batch jobs or background workers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Admin operations and system maintenance tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API gateways authenticating to downstream services"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When NOT to use client credentials:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When you need to act on behalf of a specific user"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When you need per-user authorization or audit trails"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Client-side applications cannot safely store a client secret"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q13-how-do-you-configure-spring-security-for-a-reactive-web-application-webflux-how-does-it-differ-from-the-servlet-stack",
      children: "Q13: How do you configure Spring Security for a reactive web application (WebFlux)? How does it differ from the servlet stack?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Security for WebFlux (reactive applications built on Spring WebFlux) uses a fundamentally different architecture than the traditional servlet stack."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key differences:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "SecurityWebFilterChain"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SecurityFilterChain"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ReactiveAuthenticationManager"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AuthenticationManager"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ServerHttpSecurity"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "HttpSecurity"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ServerWebExchange"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "HttpServletRequest/Response"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ReactiveUserDetailsService"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UserDetailsService"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Mono/Flux"
        }), " return types for all security operations"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Complete WebFlux security configuration:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@EnableWebFluxSecurity\n@EnableReactiveMethodSecurity\npublic class ReactiveSecurityConfig {\n\n    @Bean\n    public SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http) {\n        http\n            .csrf(ServerHttpSecurity.CsrfSpec::disable)\n            .authorizeExchange(exchanges -> exchanges\n                .pathMatchers(\"/api/auth/**\").permitAll()\n                .pathMatchers(\"/api/admin/**\").hasRole(\"ADMIN\")\n                .pathMatchers(HttpMethod.GET, \"/api/products/**\").permitAll()\n                .anyExchange().authenticated()\n            )\n            .authenticationManager(reactiveAuthenticationManager())\n            .exceptionHandling(handling -> handling\n                .authenticationEntryPoint((exchange, ex) ->\n                    Mono.fromRunnable(() -> exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED)))\n                .accessDeniedHandler((exchange, ex) ->\n                    Mono.fromRunnable(() -> exchange.getResponse().setStatusCode(HttpStatus.FORBIDDEN)))\n            );\n        return http.build();\n    }\n\n    @Bean\n    public ReactiveAuthenticationManager reactiveAuthenticationManager() {\n        return new UserDetailsRepositoryReactiveAuthenticationManager(reactiveUserDetailsService());\n    }\n\n    @Bean\n    public ReactiveUserDetailsService reactiveUserDetailsService() {\n        return username -> userRepository.findByEmail(username)\n            .map(this::toUserDetails)\n            .cast(UserDetails.class);\n    }\n\n    private UserDetails toUserDetails(User user) {\n        return org.springframework.security.core.userdetails.User.builder()\n            .username(user.getEmail())\n            .password(user.getPasswordHash())\n            .roles(user.getRoles().stream().map(Role::getName).toArray(String[]::new))\n            .build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JWT authentication filter for WebFlux:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class ReactiveJwtAuthenticationFilter implements WebFilter {\n\n    private final ReactiveJwtTokenProvider tokenProvider;\n\n    public ReactiveJwtAuthenticationFilter(ReactiveJwtTokenProvider tokenProvider) {\n        this.tokenProvider = tokenProvider;\n    }\n\n    @Override\n    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {\n        String token = extractToken(exchange.getRequest());\n        if (token != null) {\n            return tokenProvider.authenticate(token)\n                .flatMap(authentication -> chain.filter(exchange)\n                    .contextWrite(ReactiveSecurityContextHolder\n                        .withSecurityContext(Mono.just(new SecurityContextImpl(authentication)))))\n                .switchIfEmpty(chain.filter(exchange));\n        }\n        return chain.filter(exchange);\n    }\n\n    private String extractToken(ServerHttpRequest request) {\n        String bearer = request.getHeaders().getFirst(HttpHeaders.AUTHORIZATION);\n        if (bearer != null && bearer.startsWith(\"Bearer \")) return bearer.substring(7);\n        return null;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reactive method security:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\n@RequestMapping(\"/api/orders\")\npublic class ReactiveOrderController {\n\n    private final ReactiveOrderService orderService;\n\n    public ReactiveOrderController(ReactiveOrderService orderService) {\n        this.orderService = orderService;\n    }\n\n    @PreAuthorize(\"hasRole('ADMIN')\")\n    @GetMapping\n    public Flux<Order> getAllOrders() { return orderService.findAll(); }\n\n    @PreAuthorize(\"hasRole('USER')\")\n    @GetMapping(\"/{id}\")\n    public Mono<Order> getOrder(@PathVariable Long id) { return orderService.findById(id); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key differences from the servlet stack:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Servlet Stack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "WebFlux Stack"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SecurityFilterChain"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SecurityWebFilterChain"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "HttpSecurity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ServerHttpSecurity"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@EnableWebSecurity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@EnableWebFluxSecurity"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "AuthenticationManager"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ReactiveAuthenticationManager"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UserDetailsService"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ReactiveUserDetailsService"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "SecurityContextHolder"
            }), " (ThreadLocal)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ReactiveSecurityContextHolder"
            }), " (Reactor Context)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OncePerRequestFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WebFilter"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blocking I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-blocking, reactive"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q14-implement-a-secure-password-hashing-strategy-using-bcrypt-and-argon2-explain-salt-and-pepper",
      children: "Q14: Implement a secure password hashing strategy using bcrypt and Argon2. Explain salt and pepper."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Password hashing transforms a plaintext password into an irreversible, fixed-length string. The two primary modern algorithms are bcrypt and Argon2id. Both incorporate salts → random values unique per password → to prevent rainbow table attacks."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Salt"
      }), " is a cryptographically random string, unique per user, combined with the password before hashing. Salt prevents rainbow table attacks and detecting users with identical passwords."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pepper"
      }), " is a secret application-wide key combined with the password before hashing, stored separately in an environment variable or HSM. If an attacker gains database access but not the pepper, they cannot crack the hashes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bcrypt Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class BcryptPasswordHashingService {\n\n    private static final int BCRYPT_STRENGTH = 12;\n    private static final String PEPPER = System.getenv(\"PASSWORD_PEPPER\");\n    private final BCryptPasswordEncoder encoder;\n\n    public BcryptPasswordHashingService() {\n        this.encoder = new BCryptPasswordEncoder(BCRYPT_STRENGTH);\n    }\n\n    public String hashPassword(String rawPassword) {\n        return encoder.encode(rawPassword + PEPPER);\n    }\n\n    public boolean verifyPassword(String rawPassword, String storedHash) {\n        return encoder.matches(rawPassword + PEPPER, storedHash);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Argon2 Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class Argon2PasswordHashingService {\n\n    private static final int SALT_LENGTH = 16;\n    private static final int HASH_LENGTH = 32;\n    private static final int PARALLELISM = 1;\n    private static final int MEMORY = 1 << 14;\n    private static final int ITERATIONS = 3;\n    private static final String PEPPER = System.getenv(\"PASSWORD_PEPPER\");\n\n    private final Argon2PasswordEncoder encoder;\n\n    public Argon2PasswordHashingService() {\n        this.encoder = new Argon2PasswordEncoder(SALT_LENGTH, HASH_LENGTH, PARALLELISM, MEMORY, ITERATIONS);\n    }\n\n    public String hashPassword(String rawPassword) {\n        return encoder.encode(rawPassword + PEPPER);\n    }\n\n    public boolean verifyPassword(String rawPassword, String storedHash) {\n        return encoder.matches(rawPassword + PEPPER, storedHash);\n    }\n\n    public boolean needsUpgrade(String currentHash) {\n        if (!currentHash.startsWith(\"$argon2id$\")) return true;\n        String[] parts = currentHash.split(\"\\\\$\");\n        if (parts.length >= 4) {\n            String params = parts[3];\n            return !params.contains(\"m=\" + MEMORY) || !params.contains(\"t=\" + ITERATIONS);\n        }\n        return false;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Password migration strategy:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a user logs in with a legacy hash format, transparently upgrade their hash:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class PasswordMigrationService {\n\n    private final Argon2PasswordHashingService argon2Service;\n    private final UserRepository userRepository;\n\n    public PasswordMigrationService(Argon2PasswordHashingService argon2Service,\n                                     UserRepository userRepository) {\n        this.argon2Service = argon2Service;\n        this.userRepository = userRepository;\n    }\n\n    public boolean authenticateAndUpgrade(String email, String rawPassword) {\n        User user = userRepository.findByEmail(email)\n            .orElseThrow(() -> new BadCredentialsException(\"Invalid credentials\"));\n\n        boolean matches;\n        if (user.getPasswordAlgorithm() == PasswordAlgorithm.BCRYPT) {\n            BCryptPasswordEncoder legacyEncoder = new BCryptPasswordEncoder();\n            matches = legacyEncoder.matches(rawPassword + PEPPER, user.getPasswordHash());\n        } else if (user.getPasswordAlgorithm() == PasswordAlgorithm.ARGON2ID) {\n            matches = argon2Service.verifyPassword(rawPassword, user.getPasswordHash());\n        } else {\n            throw new IllegalStateException(\"Unknown algorithm: \" + user.getPasswordAlgorithm());\n        }\n\n        if (matches) {\n            if (argon2Service.needsUpgrade(user.getPasswordHash())) {\n                String newHash = argon2Service.hashPassword(rawPassword);\n                user.setPasswordHash(newHash);\n                user.setPasswordAlgorithm(PasswordAlgorithm.ARGON2ID);\n                userRepository.save(user);\n            }\n            return true;\n        }\n        return false;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Password policy enforcement:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class PasswordPolicyValidator {\n\n    private static final int MIN_LENGTH = 12;\n    private static final int MAX_LENGTH = 128;\n    private static final int MIN_UPPERCASE = 1;\n    private static final int MIN_LOWERCASE = 1;\n    private static final int MIN_DIGITS = 1;\n    private static final int MIN_SPECIAL = 1;\n    private static final int MAX_CONSECUTIVE_REPEAT = 3;\n    private static final int PASSWORD_HISTORY = 5;\n\n    public ValidationResult validate(String password, List<String> passwordHistory) {\n        List<String> errors = new ArrayList<>();\n        if (password.length() < MIN_LENGTH) errors.add(\"Must be at least \" + MIN_LENGTH + \" characters\");\n        if (password.length() > MAX_LENGTH) errors.add(\"Must not exceed \" + MAX_LENGTH + \" characters\");\n        if (count(password, Character::isUpperCase) < MIN_UPPERCASE) errors.add(\"Need uppercase letter\");\n        if (count(password, Character::isLowerCase) < MIN_LOWERCASE) errors.add(\"Need lowercase letter\");\n        if (count(password, Character::isDigit) < MIN_DIGITS) errors.add(\"Need digit\");\n        if (count(password, c -> !Character.isLetterOrDigit(c)) < MIN_SPECIAL) errors.add(\"Need special character\");\n        if (password.matches(\".*(.)\\\\1{\" + (MAX_CONSECUTIVE_REPEAT - 1) + \",}.*\")) errors.add(\"Too many consecutive characters\");\n\n        for (String oldHash : passwordHistory) {\n            if (new BCryptPasswordEncoder().matches(password, oldHash)) {\n                errors.add(\"Must not match any of the last \" + PASSWORD_HISTORY + \" passwords\");\n                break;\n            }\n        }\n        return new ValidationResult(errors.isEmpty(), errors);\n    }\n\n    private int count(String password, java.util.function.IntPredicate predicate) {\n        return (int) password.chars().filter(predicate).count();\n    }\n\n    public record ValidationResult(boolean valid, List<String> errors) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complete password configuration in Spring Security:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class PasswordConfig {\n\n    @Bean\n    public PasswordEncoder passwordEncoder() {\n        String defaultEncodingId = \"argon2id\";\n        Map<String, PasswordEncoder> encoders = new HashMap<>();\n        encoders.put(\"argon2id\", new Argon2PasswordEncoder(16, 32, 1, 1 << 14, 3));\n        encoders.put(\"bcrypt\", new BCryptPasswordEncoder(12));\n        encoders.put(\"pbkdf2\", Pbkdf2PasswordEncoder.defaultsForSpringSecurity_v5_8());\n\n        DelegatingPasswordEncoder delegatingEncoder = new DelegatingPasswordEncoder(defaultEncodingId, encoders);\n        delegatingEncoder.setDefaultPasswordEncoderForMatches(encoders.get(defaultEncodingId));\n        return delegatingEncoder;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q15-explain-the-oauth2-device-authorization-grant-when-would-you-use-it",
      children: "Q15: Explain the OAuth2 Device Authorization Grant. When would you use it?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The OAuth2 Device Authorization Grant (Device Flow) is designed for devices that have no browser or limited input capabilities → smart TVs, game consoles, IoT devices, CLI tools."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The flow:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The device requests a device code from the authorization server."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The server returns a device code, user code, verification URI, and polling interval."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The device displays the user code and verification URI."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The user navigates to the verification URI on a browser-enabled device and enters the code."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The device polls the token endpoint until authorization is granted or expires."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The server returns an access token to the device."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Device → Auth Server:\nPOST /realms/my-realm/protocol/openid-connect/auth/device\nclient_id=smart-tv-app\n&scope=openid profile streaming:read\n\nAuth Server → Device:\n{\n  \"device_code\": \"dGhpcyBpcyBhbiBleGFtcGxl\",\n  \"user_code\": \"WDJB-MJHT\",\n  \"verification_uri\": \"https://auth.example.com/device\",\n  \"expires_in\": 1800,\n  \"interval\": 5\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot implementation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class DeviceAuthorizationService {\n\n    private final RestTemplate restTemplate;\n    private final String clientId;\n    private final String tokenEndpoint;\n    private final String deviceAuthEndpoint;\n\n    public DeviceAuthorizationService(RestTemplate restTemplate,\n                                       @Value(\"${oauth2.client-id}\") String clientId,\n                                       @Value(\"${oauth2.token-uri}\") String tokenEndpoint,\n                                       @Value(\"${oauth2.device-auth-uri}\") String deviceAuthEndpoint) {\n        this.restTemplate = restTemplate;\n        this.clientId = clientId;\n        this.tokenEndpoint = tokenEndpoint;\n        this.deviceAuthEndpoint = deviceAuthEndpoint;\n    }\n\n    public DeviceAuthorizationResponse requestDeviceAuthorization() {\n        HttpHeaders headers = new HttpHeaders();\n        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);\n        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();\n        body.add(\"client_id\", clientId);\n        body.add(\"scope\", \"openid profile streaming:read\");\n\n        ResponseEntity<DeviceAuthorizationResponse> response = restTemplate.postForEntity(\n            deviceAuthEndpoint, new HttpEntity<>(body, headers), DeviceAuthorizationResponse.class);\n        return response.getBody();\n    }\n\n    public TokenResponse pollForToken(String deviceCode, long expiresIn, int interval) {\n        long startTime = System.currentTimeMillis();\n        long timeout = expiresIn * 1000L;\n\n        while (System.currentTimeMillis() - startTime < timeout) {\n            try { Thread.sleep(interval * 1000L); } catch (InterruptedException e) {\n                Thread.currentThread().interrupt();\n                throw new RuntimeException(\"Polling interrupted\", e);\n            }\n            try {\n                HttpHeaders headers = new HttpHeaders();\n                headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);\n                MultiValueMap<String, String> body = new LinkedMultiValueMap<>();\n                body.add(\"grant_type\", \"urn:ietf:params:oauth:grant-type:device_code\");\n                body.add(\"device_code\", deviceCode);\n                body.add(\"client_id\", clientId);\n\n                ResponseEntity<TokenResponse> response = restTemplate.postForEntity(\n                    tokenEndpoint, new HttpEntity<>(body, headers), TokenResponse.class);\n                return response.getBody();\n            } catch (HttpClientErrorException e) {\n                String errorBody = e.getResponseBodyAsString();\n                try {\n                    String errorCode = new ObjectMapper().readTree(errorBody).get(\"error\").asText();\n                    if (\"authorization_pending\".equals(errorCode)) continue;\n                    if (\"slow_down\".equals(errorCode)) { interval += 5; continue; }\n                    if (\"expired_token\".equals(errorCode)) throw new RuntimeException(\"Device code expired\");\n                    if (\"access_denied\".equals(errorCode)) throw new RuntimeException(\"User denied authorization\");\n                } catch (JsonProcessingException ex) {\n                    throw new RuntimeException(\"Failed to parse error\", ex);\n                }\n            }\n        }\n        throw new RuntimeException(\"Device code timed out\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q16-explain-ssltls-https-and-certificate-pinning-how-does-spring-boot-configure-https",
      children: "Q16: Explain SSL/TLS, HTTPS, and certificate pinning. How does Spring Boot configure HTTPS?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TLS (Transport Layer Security) encrypts data between client and server, providing confidentiality, integrity, and authentication. HTTPS is HTTP over TLS."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How TLS Works:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Client Hello"
        }), ": The client sends supported TLS versions, cipher suites, and a random number."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Server Hello"
        }), ": The server selects protocol and cipher, sends its certificate (with public key), and a server random."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Certificate Verification"
        }), ": The client verifies the certificate against trusted CAs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Key Exchange"
        }), ": The client generates a pre-master secret, encrypts it with the server's public key."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Session Keys"
        }), ": Both parties derive symmetric session keys."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Finished"
        }), ": Encrypted \"Finished\" messages confirm the handshake."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configuring HTTPS in Spring Boot:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generate a keystore:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "keytool -genkeypair -alias myapp -keyalg RSA -keysize 4096 \\\n  -validity 365 -keystore keystore.p12 -storetype PKCS12 \\\n  -dname \"CN=example.com,OU=IT,O=My Company,L=New York,ST=NY,C=US\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "server:\n  port: 8443\n  ssl:\n    enabled: true\n    key-store: classpath:keystore.p12\n    key-store-password: ${KEYSTORE_PASSWORD}\n    key-store-type: PKCS12\n    key-alias: myapp\n    protocol: TLS\n    enabled-protocols:\n      - TLSv1.3\n      - TLSv1.2\n    ciphers:\n      - TLS_AES_256_GCM_SHA384\n      - TLS_AES_128_GCM_SHA256\n      - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP to HTTPS redirect:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "http.requiresChannel(channel -> channel\n    .anyRequest().requiresSecure()\n);\n.portMapper(portMapper -> portMapper\n    .http(8080).mapsTo(8443)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For deployments behind a reverse proxy:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "server:\n  forward-headers-strategy: framework\n  tomcat:\n    remoteip:\n      protocol-header: X-Forwarded-Proto\n      remote-ip-header: X-Forwarded-For\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mutual TLS (mTLS):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "http.x509(x509 -> x509\n    .subjectPrincipalRegex(\"CN=(.*?)(?:,|$)\")\n    .userDetailsService(x509UserDetailsService())\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Certificate Pinning:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Associates a host with its expected certificate or public key. Prevents attacks from compromised CAs."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class CertificatePinningConfig {\n\n    @Bean\n    public RestTemplate pinningRestTemplate() {\n        return new RestTemplate(pinningRequestFactory());\n    }\n\n    private ClientHttpRequestFactory pinningRequestFactory() {\n        try {\n            TrustManager pinnedTrustManager = new X509ExtendedTrustManager() {\n                @Override\n                public void checkServerTrusted(X509Certificate[] chain, String authType) throws CertificateException {\n                    if (chain == null || chain.length == 0) throw new CertificateException(\"Empty chain\");\n                    PublicKey publicKey = chain[0].getPublicKey();\n                    String keyHash = computeSha256Hash(publicKey.getEncoded());\n                    if (!PINNED_KEY_HASHES.contains(keyHash)) {\n                        throw new CertificateException(\"Certificate not pinned: \" + keyHash);\n                    }\n                }\n                @Override\n                public X509Certificate[] getAcceptedIssuers() { return new X509Certificate[0]; }\n                private String computeSha256Hash(byte[] input) throws Exception {\n                    byte[] hash = MessageDigest.getInstance(\"SHA-256\").digest(input);\n                    return Base64.getEncoder().encodeToString(hash);\n                }\n                @Override public void checkClientTrusted(X509Certificate[] chain, String authType) { }\n                @Override public void checkClientTrusted(X509Certificate[] chain, String authType, Socket socket) { }\n                @Override public void checkServerTrusted(X509Certificate[] chain, String authType, Socket socket) {\n                    checkServerTrusted(chain, authType);\n                }\n                @Override public void checkClientTrusted(X509Certificate[] chain, String authType, SSLEngine engine) { }\n                @Override public void checkServerTrusted(X509Certificate[] chain, String authType, SSLEngine engine) {\n                    checkServerTrusted(chain, authType);\n                }\n            };\n            SSLContext sslContext = SSLContext.getInstance(\"TLSv1.3\");\n            sslContext.init(null, new TrustManager[]{pinnedTrustManager}, null);\n            HttpsUrlConnectionDefaultSslSocketFactory factory = new HttpsUrlConnectionDefaultSslSocketFactory(sslContext);\n            return new HttpComponentsClientHttpRequestFactory();\n        } catch (Exception e) {\n            throw new RuntimeException(\"Failed to configure certificate pinning\", e);\n        }\n    }\n\n    private static final Set<String> PINNED_KEY_HASHES = Set.of(\n        \"47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=\",\n        \"2CI5SDPJkW7C+Z0hJk8nEJ1Rq+W8LlYqE3FoFASnFpA=\"\n    );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "HSTS:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "http.headers(headers -> headers\n    .httpStrictTransportSecurity(hsts -> hsts\n        .includeSubDomains(true)\n        .maxAgeInSeconds(31536000)\n        .preload(true)\n    )\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q17-how-do-you-implement-a-custom-authenticationprovider-in-spring-security",
      children: "Q17: How do you implement a custom AuthenticationProvider in Spring Security?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A custom ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AuthenticationProvider"
      }), " allows you to implement non-standard authentication mechanisms → OTP codes, hardware tokens, biometrics, MFA, or integration with legacy systems."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AuthenticationProvider"
      }), " interface has two methods:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "authenticate(Authentication)"
        }), " → performs auth and returns a populated ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Authentication"
        }), " object"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "supports(Class)"
        }), " → returns true if this provider handles the given token type"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Complete TOTP-based MFA authentication provider:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class TotpAuthenticationProvider implements AuthenticationProvider {\n\n    private final UserRepository userRepository;\n    private final TotpService totpService;\n    private final PasswordEncoder passwordEncoder;\n\n    public TotpAuthenticationProvider(UserRepository userRepository,\n                                       TotpService totpService,\n                                       PasswordEncoder passwordEncoder) {\n        this.userRepository = userRepository;\n        this.totpService = totpService;\n        this.passwordEncoder = passwordEncoder;\n    }\n\n    @Override\n    public Authentication authenticate(Authentication authentication)\n            throws AuthenticationException {\n        TotpAuthenticationToken token = (TotpAuthenticationToken) authentication;\n\n        // Stage 1: Initial authentication (username + password)\n        if (token.getTotpCode() == null) {\n            User user = userRepository.findByEmail(token.getPrincipal().toString())\n                .orElseThrow(() -> new BadCredentialsException(\"Invalid credentials\"));\n\n            if (!passwordEncoder.matches(token.getCredentials().toString(), user.getPasswordHash())) {\n                throw new BadCredentialsException(\"Invalid credentials\");\n            }\n\n            if (user.isMfaEnabled()) {\n                return new TotpAuthenticationToken(token.getPrincipal(), token.getCredentials(),\n                    null, user.getMfaSecret(), List.of());\n            }\n\n            return new UsernamePasswordAuthenticationToken(user.getEmail(), null,\n                user.getRoles().stream().map(r -> new SimpleGrantedAuthority(\"ROLE_\" + r.getName())).toList());\n        }\n\n        // Stage 2: TOTP verification\n        User user = userRepository.findByEmail(token.getPrincipal().toString())\n            .orElseThrow(() -> new BadCredentialsException(\"User not found\"));\n\n        boolean isValid = totpService.verifyCode(user.getMfaSecret(), token.getTotpCode());\n        if (!isValid) throw new BadCredentialsException(\"Invalid TOTP code\");\n\n        return new UsernamePasswordAuthenticationToken(user.getEmail(), null,\n            user.getRoles().stream().map(r -> new SimpleGrantedAuthority(\"ROLE_\" + r.getName())).toList());\n    }\n\n    @Override\n    public boolean supports(Class<?> authentication) {\n        return TotpAuthenticationToken.class.isAssignableFrom(authentication);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The custom authentication token:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class TotpAuthenticationToken extends AbstractAuthenticationToken {\n    private final Object principal;\n    private final Object credentials;\n    private final String totpCode;\n    private final String mfaSecret;\n\n    public TotpAuthenticationToken(Object principal, Object credentials,\n                                    String totpCode, String mfaSecret,\n                                    Collection<? extends GrantedAuthority> authorities) {\n        super(authorities);\n        this.principal = principal;\n        this.credentials = credentials;\n        this.totpCode = totpCode;\n        this.mfaSecret = mfaSecret;\n        setAuthenticated(authorities != null && !authorities.isEmpty());\n    }\n\n    @Override public Object getPrincipal() { return principal; }\n    @Override public Object getCredentials() { return credentials; }\n    public String getTotpCode() { return totpCode; }\n    public String getMfaSecret() { return mfaSecret; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The TOTP service:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class TotpService {\n\n    private static final long TIME_STEP_SECONDS = 30;\n    private static final int WINDOW_SIZE = 1;\n\n    public String generateSecret() {\n        byte[] secret = new byte[20];\n        new SecureRandom().nextBytes(secret);\n        return Base32.getEncoder().encodeToString(secret);\n    }\n\n    public String generateQrCodeUri(String secret, String email, String issuer) {\n        return String.format(\"otpauth://totp/%s:%s?secret=%s&issuer=%s&algorithm=SHA1&digits=6&period=%d\",\n            issuer, email, secret, issuer, TIME_STEP_SECONDS);\n    }\n\n    public boolean verifyCode(String secret, String code) {\n        long timeIndex = Instant.now().getEpochSecond() / TIME_STEP_SECONDS;\n        for (int i = -WINDOW_SIZE; i <= WINDOW_SIZE; i++) {\n            if (generateTOTP(secret, timeIndex + i).equals(code)) return true;\n        }\n        return false;\n    }\n\n    private String generateTOTP(String secret, long timeIndex) {\n        try {\n            byte[] key = Base32.getDecoder().decode(secret);\n            byte[] message = ByteBuffer.allocate(8).putLong(timeIndex).array();\n            Mac mac = Mac.getInstance(\"HmacSHA1\");\n            mac.init(new SecretKeySpec(key, \"HmacSHA1\"));\n            byte[] hash = mac.doFinal(message);\n            int offset = hash[hash.length - 1] & 0xF;\n            int binary = ((hash[offset] & 0x7F) << 24) | ((hash[offset + 1] & 0xFF) << 16) |\n                         ((hash[offset + 2] & 0xFF) << 8) | (hash[offset + 3] & 0xFF);\n            return String.format(\"%06d\", binary % 1_000_000);\n        } catch (Exception e) {\n            throw new RuntimeException(\"Failed to generate TOTP\", e);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q18-explain-the-oauth2-authorization-code-flow-with-pkce-in-detail-show-the-complete-implementation",
      children: "Q18: Explain the OAuth2 authorization code flow with PKCE in detail. Show the complete implementation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The authorization code flow with PKCE (Proof Key for Code Exchange) is the recommended OAuth2 flow for public clients → single-page applications, mobile apps, and native desktop apps. PKCE prevents the authorization code interception attack by introducing a cryptographic challenge-verifier pair."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complete step-by-step flow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The client generates a cryptographically random ", (0,jsx_runtime.jsx)(_components.code, {
          children: "code_verifier"
        }), " string."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The client computes a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "code_challenge"
        }), " by SHA-256 hashing the verifier."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The client redirects the user to the authorization server with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "code_challenge"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "code_challenge_method=S256"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The user authenticates and consents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The authorization server redirects back with an authorization code."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The client exchanges the code by sending the original ", (0,jsx_runtime.jsx)(_components.code, {
          children: "code_verifier"
        }), " to the token endpoint."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The server hashes the verifier, compares it to the challenge, and if they match, issues tokens."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Browser → Auth Server: GET /authorize?response_type=code&client_id=myapp&code_challenge=E9Melho...&code_challenge_method=S256\n\nAuth Server → Browser: redirect with ?code=xxxxx\n\nBrowser → Client Backend: POST /callback?code=xxxxx\n\nClient Backend → Auth Server: POST /token\n  grant_type=authorization_code\n  code=xxxxx\n  code_verifier=dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk\n  client_id=myapp\n\nAuth Server → Client Backend: { access_token, id_token, refresh_token }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot controller implementing the client:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\n@RequestMapping(\"/api/auth\")\npublic class PkceAuthController {\n\n    private final RestTemplate restTemplate;\n    private final String tokenEndpoint;\n    private final String clientId;\n    private final String redirectUri;\n\n    public PkceAuthController(RestTemplate restTemplate,\n                               @Value(\"${oauth2.token-uri}\") String tokenEndpoint,\n                               @Value(\"${oauth2.client-id}\") String clientId,\n                               @Value(\"${oauth2.redirect-uri}\") String redirectUri) {\n        this.restTemplate = restTemplate;\n        this.tokenEndpoint = tokenEndpoint;\n        this.clientId = clientId;\n        this.redirectUri = redirectUri;\n    }\n\n    @PostMapping(\"/callback\")\n    public ResponseEntity<TokenResponse> handleCallback(@RequestParam String code,\n                                                          @RequestParam String state,\n                                                          @SessionAttribute String expectedState,\n                                                          @SessionAttribute String codeVerifier) {\n        // Validate state to prevent CSRF\n        if (!expectedState.equals(state)) {\n            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();\n        }\n\n        HttpHeaders headers = new HttpHeaders();\n        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);\n\n        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();\n        body.add(\"grant_type\", \"authorization_code\");\n        body.add(\"code\", code);\n        body.add(\"redirect_uri\", redirectUri);\n        body.add(\"client_id\", clientId);\n        body.add(\"code_verifier\", codeVerifier);\n\n        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(body, headers);\n\n        ResponseEntity<TokenResponse> response = restTemplate.postForEntity(\n            tokenEndpoint, request, TokenResponse.class);\n\n        return ResponseEntity.ok(response.getBody());\n    }\n\n    @GetMapping(\"/authorize\")\n    public ResponseEntity<AuthInitResponse> initiateAuthorization() {\n        try {\n            String codeVerifier = PkceUtil.generateCodeVerifier();\n            String codeChallenge = PkceUtil.generateCodeChallenge(codeVerifier);\n            String state = UUID.randomUUID().toString();\n\n            String authorizeUrl = String.format(\n                \"%s?response_type=code&client_id=%s&redirect_uri=%s&code_challenge=%s&code_challenge_method=S256&state=%s&scope=%s\",\n                authorizeEndpoint, clientId, redirectUri, codeChallenge, state,\n                URLEncoder.encode(\"openid profile email\", \"UTF-8\")\n            );\n\n            return ResponseEntity.ok(new AuthInitResponse(authorizeUrl, state, codeVerifier));\n        } catch (Exception e) {\n            throw new RuntimeException(\"Failed to initiate authorization\", e);\n        }\n    }\n}\n\npublic record AuthInitResponse(String authorizeUrl, String state, String codeVerifier) {}\npublic record TokenResponse(@JsonProperty(\"access_token\") String accessToken,\n                             @JsonProperty(\"id_token\") String idToken,\n                             @JsonProperty(\"refresh_token\") String refreshToken,\n                             @JsonProperty(\"expires_in\") long expiresIn) {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q19-how-does-spring-security-handle-cors-preflight-requests-what-is-the-options-request-handling",
      children: "Q19: How does Spring Security handle CORS preflight requests? What is the OPTIONS request handling?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CORS preflight requests are ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OPTIONS"
      }), " requests sent by browsers before certain cross-origin requests. They check if the actual request is safe to send. Preflight triggers when:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HTTP methods other than GET, HEAD, or POST are used"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom headers (e.g., Authorization, X-Requested-With) are included"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Content-Type is not ", (0,jsx_runtime.jsx)(_components.code, {
          children: "application/x-www-form-urlencoded"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "multipart/form-data"
        }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "text/plain"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The browser sends an OPTIONS request with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Origin"
        }), ": the source origin"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Access-Control-Request-Method"
        }), ": the intended HTTP method"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Access-Control-Request-Headers"
        }), ": the intended custom headers"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The server must respond with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Access-Control-Allow-Origin"
        }), ": the allowed origin"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Access-Control-Allow-Methods"
        }), ": the allowed methods"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Access-Control-Allow-Headers"
        }), ": the allowed headers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Access-Control-Max-Age"
        }), ": how long to cache the preflight result"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Security delegates CORS handling to Spring MVC's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CorsProcessor"
      }), ". The most common issue is that the security filter chain blocks OPTIONS requests before they reach the CORS processor. The fix is to ensure CORS is configured in Spring Security and that OPTIONS requests bypass authentication."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@EnableWebSecurity\npublic class CorsSecurityConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .cors(Customizer.withDefaults())\n            .authorizeHttpRequests(authz -> authz\n                .requestMatchers(HttpMethod.OPTIONS, \"/**\").permitAll()\n                // ... other rules\n            );\n        return http.build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The CORS configuration source:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Bean\npublic CorsConfigurationSource corsConfigurationSource() {\n    CorsConfiguration configuration = new CorsConfiguration();\n    configuration.setAllowedOrigins(Arrays.asList(\"https://app.example.com\"));\n    configuration.setAllowedMethods(Arrays.asList(\"GET\", \"POST\", \"PUT\", \"DELETE\", \"PATCH\", \"OPTIONS\"));\n    configuration.setAllowedHeaders(Arrays.asList(\"*\"));\n    configuration.setAllowCredentials(true);\n    configuration.setMaxAge(3600L);\n\n    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();\n    source.registerCorsConfiguration(\"/**\", configuration);\n    return source;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If your Spring Security version does not have explicit OPTIONS handling, or if a custom filter is intercepting requests, you may see CORS errors. Debug with:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "logging:\n  level:\n    org.springframework.security: DEBUG\n    org.springframework.web.cors: DEBUG\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common CORS troubleshooting checklist:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Access-Control-Allow-Origin"
        }), " must exactly match the request's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Origin"
        }), " header."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "allowCredentials(true)"
        }), " requires ", (0,jsx_runtime.jsx)(_components.code, {
          children: "allowedOrigins"
        }), " to be specific (not ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The browser sends preflight OPTIONS before the actual request → check both in server logs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If CORS is configured in both Spring Security and Spring MVC, Spring Security takes precedence."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For Spring Cloud Gateway or API gateways, ensure the gateway does not strip CORS headers."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q20-explain-secrets-management-in-spring-boot-applications-how-do-you-integrate-with-hashicorp-vault",
      children: "Q20: Explain secrets management in Spring Boot applications. How do you integrate with HashiCorp Vault?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Secrets management involves securely storing, accessing, and rotating sensitive configuration → database passwords, API keys, TLS certificates, and encryption keys. Never hardcode secrets in source code or configuration files."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Spring Cloud Vault Integration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  application:\n    name: my-app\n  cloud:\n    vault:\n      host: vault.example.com\n      port: 8200\n      scheme: https\n      authentication: TOKEN\n      token: ${VAULT_TOKEN}\n      kv:\n        enabled: true\n        backend: secret\n        default-context: my-app\n        profile-separator: /\n      database:\n        enabled: true\n        role: my-app-db-role\n        backend: database\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class VaultConfig {\n\n    @Bean\n    public VaultTemplate vaultTemplate() {\n        VaultEndpoint endpoint = VaultEndpoint.create(\"vault.example.com\", 8200);\n        endpoint.setScheme(\"https\");\n\n        ClientAuthentication auth = new TokenAuthentication(System.getenv(\"VAULT_TOKEN\"));\n        return new VaultTemplate(endpoint, auth);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reading secrets from Vault:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class VaultSecretService {\n\n    private final VaultTemplate vaultTemplate;\n\n    public VaultSecretService(VaultTemplate vaultTemplate) {\n        this.vaultTemplate = vaultTemplate;\n    }\n\n    public String getDatabasePassword() {\n        VaultResponseSupport<Map<String, Object>> response = vaultTemplate\n            .read(\"secret/my-app/database\");\n        if (response != null && response.getData() != null) {\n            return (String) response.getData().get(\"password\");\n        }\n        throw new IllegalStateException(\"Database password not found in Vault\");\n    }\n\n    public Map<String, Object> readSecret(String path) {\n        VaultResponseSupport<Map<String, Object>> response = vaultTemplate.read(path);\n        return response != null ? response.getData() : Map.of();\n    }\n\n    public void writeSecret(String path, Map<String, Object> secrets) {\n        vaultTemplate.write(path, secrets);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dynamic database credentials with Vault:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class VaultDatabaseConfig {\n\n    @Bean\n    public DataSource dataSource(VaultTemplate vaultTemplate) {\n        VaultDatabaseCredentials credentials = vaultTemplate.read(\n            \"database/creds/my-app-db-role\", VaultDatabaseCredentials.class);\n\n        HikariConfig config = new HikariConfig();\n        config.setJdbcUrl(\"jdbc:postgresql://db.example.com:5432/myapp\");\n        config.setUsername(credentials.getUsername());\n        config.setPassword(credentials.getPassword());\n        config.setMaximumPoolSize(10);\n\n        return new HikariDataSource(config);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lease rotation for dynamic secrets:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class VaultLeaseManager {\n\n    private final VaultTemplate vaultTemplate;\n    private final DataSource dataSource;\n\n    public VaultLeaseManager(VaultTemplate vaultTemplate, DataSource dataSource) {\n        this.vaultTemplate = vaultTemplate;\n        this.dataSource = dataSource;\n    }\n\n    @Scheduled(fixedRate = 300_000) // Every 5 minutes\n    public void rotateCredentials() {\n        VaultDatabaseCredentials credentials = vaultTemplate.read(\n            \"database/creds/my-app-db-role\", VaultDatabaseCredentials.class);\n        // Renew the lease\n        vaultTemplate.doWithSession(ops -> ops.renew(credentials.getLeaseId()));\n\n        // Update the datasource with new credentials\n        if (dataSource instanceof HikariDataSource hikariDS) {\n            hikariDS.setUsername(credentials.getUsername());\n            hikariDS.setPassword(credentials.getPassword());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternative: Spring Cloud Config with encrypted values:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  datasource:\n    password: '{cipher}AQA...encrypted_value...'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "AWS Secrets Manager integration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class AwsSecretsManagerService {\n\n    private final SecretsManagerClient secretsClient;\n\n    public AwsSecretsManagerService() {\n        this.secretsClient = SecretsManagerClient.builder()\n            .region(Region.US_EAST_1)\n            .build();\n    }\n\n    public DatabaseSecret getDatabaseSecret() {\n        GetSecretValueRequest request = GetSecretValueRequest.builder()\n            .secretId(\"prod/my-app/database\")\n            .build();\n\n        GetSecretValueResponse response = secretsClient.getSecretValue(request);\n        ObjectMapper mapper = new ObjectMapper();\n        try {\n            return mapper.readValue(response.secretString(), DatabaseSecret.class);\n        } catch (JsonProcessingException e) {\n            throw new RuntimeException(\"Failed to parse database secret\", e);\n        }\n    }\n\n    public record DatabaseSecret(String username, String password, String host, int port, String dbname) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Azure Key Vault integration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>com.azure.spring</groupId>\n    <artifactId>spring-cloud-azure-starter-keyvault-secrets</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  cloud:\n    azure:\n      keyvault:\n        secret:\n          property-sources-enabled: true\n          endpoint: https://myvault.vault.azure.net/\n      credential:\n        managed-identity-enabled: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best practices for secrets management:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Never commit secrets to version control. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".gitignore"
        }), " for configuration files containing secrets."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use environment variables for local development secrets."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use a dedicated secrets manager (Vault, AWS Secrets Manager, Azure Key Vault, GCP Secret Manager) in production."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable audit logging for secret access."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement automatic secret rotation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use dynamic secrets (short-lived, on-demand credentials) when possible."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encrypt secrets at rest and in transit."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Restrict access to secrets using IAM policies and the principle of least privilege."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Kubernetes external secrets operator to sync secrets from vault to pods."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q21-how-do-you-implement-encryption-at-rest-and-in-transit-in-a-spring-boot-application",
      children: "Q21: How do you implement encryption at rest and in transit in a Spring Boot application?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Encryption in Transit:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Encryption in transit protects data as it travels over the network. In a Spring Boot application, this means:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HTTPS/TLS"
        }), " for client-to-server communication → configure as shown in Q16."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Database TLS"
        }), " → configure SSL connection to the database:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  datasource:\n    url: jdbc:postgresql://db.example.com:5432/myapp?ssl=true&sslmode=verify-full\n    hikari:\n      initialization-fail-timeout: -1\n  jpa:\n    properties:\n      hibernate:\n        dialect: org.hibernate.dialect.PostgreSQLDialect\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Message broker TLS"
        }), " → configure SSL for RabbitMQ or Kafka:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  rabbitmq:\n    ssl:\n      enabled: true\n      key-store: classpath:client-key.p12\n      key-store-password: ${KEYSTORE_PASSWORD}\n      trust-store: classpath:truststore.p12\n      trust-store-password: ${TRUSTSTORE_PASSWORD}\n  kafka:\n    ssl:\n      enabled: true\n      truststore-location: classpath:kafka.truststore.jks\n      truststore-password: ${KAFKA_SSL_PASSWORD}\n      keystore-location: classpath:kafka.keystore.jks\n      keystore-password: ${KAFKA_SSL_PASSWORD}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "gRPC TLS"
        }), ":"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Bean\npublic GrpcChannelFactory grpcChannelFactory() throws Exception {\n    SSLContext sslContext = SSLContext.getInstance(\"TLSv1.3\");\n    sslContext.init(null, new TrustManager[]{trustAllManager()}, null);\n    return new InProcessChannelFactory(\"my-service\", sslContext);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Encryption at Rest:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Encryption at rest protects stored data. In a Spring Boot application, this involves:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Database-level encryption"
        }), " → transparent data encryption (TDE) in PostgreSQL, MySQL, or SQL Server."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Column-level encryption"
        }), " with JPA:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Converter\npublic class EncryptionConverter implements AttributeConverter<String, String> {\n\n    private static final String ALGORITHM = \"AES/GCM/NoPadding\";\n    private static final SecretKey KEY = new SecretKeySpec(\n        Hex.decodeHex(System.getenv(\"ENCRYPTION_KEY\")), \"AES\");\n\n    @Override\n    public String convertToDatabaseColumn(String plaintext) {\n        try {\n            Cipher cipher = Cipher.getInstance(ALGORITHM);\n            cipher.init(Cipher.ENCRYPT_MODE, KEY);\n            byte[] iv = cipher.getIV();\n            byte[] encrypted = cipher.doFinal(plaintext.getBytes(StandardCharsets.UTF_8));\n            byte[] combined = ByteBuffer.allocate(iv.length + encrypted.length)\n                .put(iv).put(encrypted).array();\n            return Base64.getEncoder().encodeToString(combined);\n        } catch (Exception e) {\n            throw new RuntimeException(\"Encryption failed\", e);\n        }\n    }\n\n    @Override\n    public String convertToEntityAttribute(String encrypted) {\n        try {\n            byte[] combined = Base64.getDecoder().decode(encrypted);\n            ByteBuffer buffer = ByteBuffer.wrap(combined);\n            byte[] iv = new byte[12];\n            buffer.get(iv);\n            byte[] ciphertext = new byte[buffer.remaining()];\n            buffer.get(ciphertext);\n            Cipher cipher = Cipher.getInstance(ALGORITHM);\n            cipher.init(Cipher.DECRYPT_MODE, KEY, new GCMParameterSpec(128, iv));\n            return new String(cipher.doFinal(ciphertext), StandardCharsets.UTF_8);\n        } catch (Exception e) {\n            throw new RuntimeException(\"Decryption failed\", e);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Using the converter in an entity:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\n@Table(name = \"users\")\npublic class User {\n\n    @Id\n    private Long id;\n\n    @Convert(converter = EncryptionConverter.class)\n    @Column(name = \"ssn\", columnDefinition = \"TEXT\")\n    private String ssn;\n\n    @Convert(converter = EncryptionConverter.class)\n    @Column(name = \"credit_card\", columnDefinition = \"TEXT\")\n    private String creditCardNumber;\n\n    // Getters and setters\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File encryption"
        }), ":"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class FileEncryptionService {\n\n    private static final String ALGORITHM = \"AES/GCM/NoPadding\";\n\n    public byte[] encryptFile(byte[] plaintext, SecretKey key) throws Exception {\n        Cipher cipher = Cipher.getInstance(ALGORITHM);\n        cipher.init(Cipher.ENCRYPT_MODE, key);\n        byte[] iv = cipher.getIV();\n        byte[] encrypted = cipher.doFinal(plaintext);\n        return ByteBuffer.allocate(iv.length + encrypted.length)\n            .put(iv).put(encrypted).array();\n    }\n\n    public byte[] decryptFile(byte[] ciphertext, SecretKey key) throws Exception {\n        ByteBuffer buffer = ByteBuffer.wrap(ciphertext);\n        byte[] iv = new byte[12];\n        buffer.get(iv);\n        byte[] encrypted = new byte[buffer.remaining()];\n        buffer.get(encrypted);\n        Cipher cipher = Cipher.getInstance(ALGORITHM);\n        cipher.init(Cipher.DECRYPT_MODE, key, new GCMParameterSpec(128, iv));\n        return cipher.doFinal(encrypted);\n    }\n\n    public SecretKey generateKey() throws Exception {\n        KeyGenerator keyGen = KeyGenerator.getInstance(\"AES\");\n        keyGen.init(256);\n        return keyGen.generateKey();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spring Cloud Config encryption"
        }), ":"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "encrypt:\n  key: ${ENCRYPT_KEY}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Set encrypted values in application.properties:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  datasource:\n    password: '{cipher}AQA...encrypted_value...'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q22-what-are-spring-security-filter-chain-ordering-rules-how-do-you-add-custom-filters-at-specific-positions",
      children: "Q22: What are Spring Security filter chain ordering rules? How do you add custom filters at specific positions?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Security maintains a strict ordering of its internal filters. Custom filters can be added at specific positions using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "addFilterBefore"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "addFilterAfter"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "addFilterAt"
      }), " methods. Understanding filter ordering is critical because the wrong position can bypass security checks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Default Spring Security filter order (from Spring Security 6.x):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Order"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Filter Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "DisableEncodeUrlFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents session ID in URLs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "WebAsyncManagerIntegrationFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integrates SecurityContext with async requests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SecurityContextHolderFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loads SecurityContext from session"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "HeaderWriterFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adds security headers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CorsFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Processes CORS requests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CsrfFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSRF protection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "LogoutFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handles logout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OAuth2AuthorizationRequestRedirectFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OAuth2 authorization redirect"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Saml2WebSsoAuthenticationRequestFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAML2 auth request"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "X509AuthenticationFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X509 certificate auth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "AbstractPreAuthenticatedProcessingFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-authenticated auth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CasAuthenticationFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAS auth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OAuth2LoginAuthenticationFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OAuth2 login"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Saml2WebSsoAuthenticationFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAML2 authentication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UsernamePasswordAuthenticationFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Form login"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OpenIDAuthenticationFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenID auth (deprecated)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "DefaultLoginPageGeneratingFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default login page"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ConcurrentSessionFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session concurrency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "DigestAuthenticationFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Digest auth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "BearerTokenAuthenticationFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bearer token auth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "BasicAuthenticationFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic auth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RequestCacheAwareFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Saved request cache"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SecurityContextHolderAwareRequestFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wraps request"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "JaasApiIntegrationFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JAAS integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RememberMeAuthenticationFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remember-me auth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "AnonymousAuthenticationFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anonymous auth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "OAuth2AuthorizationCodeGrantFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OAuth2 authorization code grant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SessionManagementFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Session management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "29"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ExceptionTranslationFilter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exception handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FilterSecurityInterceptor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authorization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Adding custom filters:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class CustomFilterConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .addFilterBefore(new RequestTimingFilter(), UsernamePasswordAuthenticationFilter.class)\n            .addFilterAfter(new MfaCheckFilter(), UsernamePasswordAuthenticationFilter.class)\n            .addFilterAt(new CustomAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class)\n            .addFilterBefore(new RateLimitingFilter(), FilterSecurityInterceptor.class);\n        return http.build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "addFilterAt"
      }), " method places the filter at the same position as the specified filter class. Spring Security does not guarantee which filter runs first if two filters are at the same position → it is safer to use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "addFilterBefore"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "addFilterAfter"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing custom filters:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class RequestTimingFilter extends OncePerRequestFilter {\n\n    @Override\n    protected void doFilterInternal(HttpServletRequest request,\n                                     HttpServletResponse response,\n                                     FilterChain filterChain)\n            throws ServletException, IOException {\n        long start = System.currentTimeMillis();\n        try {\n            filterChain.doFilter(request, response);\n        } finally {\n            long duration = System.currentTimeMillis() - start;\n            // Log or expose the timing\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class RateLimitingFilter extends OncePerRequestFilter {\n\n    private final RateLimiter rateLimiter;\n\n    public RateLimitingFilter(RateLimiter rateLimiter) {\n        this.rateLimiter = rateLimiter;\n    }\n\n    @Override\n    protected void doFilterInternal(HttpServletRequest request,\n                                     HttpServletResponse response,\n                                     FilterChain filterChain)\n            throws ServletException, IOException {\n        String clientIp = request.getRemoteAddr();\n        if (!rateLimiter.tryAcquire(clientIp)) {\n            response.setStatus(HttpStatus.TOO_MANY_REQUESTS.value());\n            response.getWriter().write(\"Rate limit exceeded\");\n            return;\n        }\n        filterChain.doFilter(request, response);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Important filter placement rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Place authentication filters before ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UsernamePasswordAuthenticationFilter"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Place authorization auditing filters after ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FilterSecurityInterceptor"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Place logging/observability filters before ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SecurityContextHolderFilter"
        }), " to capture all requests."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Place tenant resolution filters before authentication filters."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Place CORS and rate-limiting filters early in the chain."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q23-what-is-the-spring-security-authentication-architecture-explain-the-authenticationmanager-providermanager-and-authenticationprovider-relationship",
      children: "Q23: What is the Spring Security authentication architecture? Explain the AuthenticationManager, ProviderManager, and AuthenticationProvider relationship."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Spring Security authentication architecture follows a layered design pattern with three main participants:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "AuthenticationManager"
      }), " → The core strategy interface with a single method:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface AuthenticationManager {\n    Authentication authenticate(Authentication authentication)\n        throws AuthenticationException;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ProviderManager"
      }), " → The default implementation of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AuthenticationManager"
      }), ". It holds a list of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AuthenticationProvider"
      }), " instances and iterates through them until one returns a non-null ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Authentication"
      }), " or throws a non-final exception."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class ProviderManager implements AuthenticationManager, MessageSourceAware {\n\n    private List<AuthenticationProvider> providers;\n    private AuthenticationManager parent;\n\n    public Authentication authenticate(Authentication authentication) {\n        Class<? extends Authentication> toTest = authentication.getClass();\n        AuthenticationException lastException = null;\n        Authentication result = null;\n\n        for (AuthenticationProvider provider : getProviders()) {\n            if (!provider.supports(toTest)) continue;\n\n            try {\n                result = provider.authenticate(authentication);\n                if (result != null) {\n                    copyDetails(authentication, result);\n                    break;\n                }\n            } catch (AccountStatusException | InternalAuthenticationServiceException e) {\n                throw e;\n            } catch (AuthenticationException e) {\n                lastException = e;\n            }\n        }\n\n        if (result == null && parent != null) {\n            try {\n                result = parent.authenticate(authentication);\n            } catch (AuthenticationException e) {\n                lastException = e;\n            }\n        }\n\n        if (result != null) {\n            if (eraseCredentialsAfterAuthentication) {\n                result.eraseCredentials();\n            }\n            eventPublisher.publishAuthenticationSuccess(result);\n            return result;\n        }\n\n        if (lastException == null) {\n            lastException = new ProviderNotFoundException(\"No provider found\");\n        }\n        throw lastException;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "AuthenticationProvider"
      }), " → The strategy interface that performs a specific type of authentication:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface AuthenticationProvider {\n    Authentication authenticate(Authentication authentication)\n        throws AuthenticationException;\n    boolean supports(Class<?> authentication);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture flow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A filter (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UsernamePasswordAuthenticationFilter"
        }), ") creates an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Authentication"
        }), " object (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UsernamePasswordAuthenticationToken"
        }), ") from the request."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The filter delegates to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AuthenticationManager.authenticate()"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ProviderManager"
        }), " iterates through its ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AuthenticationProvider"
        }), " list."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The first provider whose ", (0,jsx_runtime.jsx)(_components.code, {
          children: "supports()"
        }), " method matches the authentication token type handles the authentication."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The provider returns a fully populated ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Authentication"
        }), " object with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "authenticated=true"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GrantedAuthority"
        }), " list."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ProviderManager"
        }), " stores the result in the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SecurityContextHolder"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Building the authentication architecture:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@EnableWebSecurity\npublic class AuthArchitectureConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .authenticationManager(authenticationManager())\n            .authenticationProvider(daoAuthenticationProvider())\n            .authenticationProvider(ldapAuthenticationProvider());\n        return http.build();\n    }\n\n    @Bean\n    public AuthenticationManager authenticationManager() {\n        ProviderManager manager = new ProviderManager(\n            daoAuthenticationProvider(),\n            ldapAuthenticationProvider()\n        );\n        manager.setParent(new CustomParentAuthenticationProvider());\n        manager.setEraseCredentialsAfterAuthentication(true);\n        return manager;\n    }\n\n    @Bean\n    public DaoAuthenticationProvider daoAuthenticationProvider() {\n        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();\n        provider.setUserDetailsService(userDetailsService());\n        provider.setPasswordEncoder(passwordEncoder());\n        provider.setUserDetailsPasswordService(passwordUpgradeService());\n        provider.setPreAuthenticationChecks(user -> {\n            if (!user.isEnabled()) throw new DisabledException(\"Account disabled\");\n        });\n        return provider;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Provider iteration rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "supports()"
        }), " is checked first. If false, the provider is skipped."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If a provider throws ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AuthenticationException"
        }), " that is not ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AccountStatusException"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "InternalAuthenticationServiceException"
        }), ", the next provider is tried."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If a provider throws ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AccountStatusException"
        }), " (locked, disabled, expired), the exception is thrown immediately → no fallback."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If no provider succeeds, the parent ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AuthenticationManager"
        }), " is tried."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If no provider succeeds and there is no parent, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ProviderNotFoundException"
        }), " is thrown."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SecurityContext propagation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// After successful authentication\nSecurityContext context = SecurityContextHolder.createEmptyContext();\ncontext.setAuthentication(authentication);\nSecurityContextHolder.setContext(context);\n\n// Later, in a controller\nAuthentication auth = SecurityContextHolder.getContext().getAuthentication();\nString username = auth.getName();\nCollection<? extends GrantedAuthority> roles = auth.getAuthorities();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q24-how-do-you-implement-a-rate-limiter-in-spring-boot-show-both-in-memory-and-distributed-approaches",
      children: "Q24: How do you implement a rate limiter in Spring Boot? Show both in-memory and distributed approaches."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rate limiting protects your APIs from abuse, brute-force attacks, and excessive usage. Two common approaches are in-memory (single instance) and distributed (Redis-backed)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "In-Memory Rate Limiter (Token Bucket):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class InMemoryRateLimiter {\n\n    private final ConcurrentHashMap<String, TokenBucket> buckets = new ConcurrentHashMap<>();\n    private final int capacity;\n    private final int refillTokens;\n    private final long refillDurationMs;\n\n    public InMemoryRateLimiter() {\n        this.capacity = 100;\n        this.refillTokens = 10;\n        this.refillDurationMs = 1000;\n    }\n\n    public boolean tryAcquire(String key) {\n        TokenBucket bucket = buckets.computeIfAbsent(key, k -> new TokenBucket(capacity));\n        return bucket.tryAcquire();\n    }\n\n    private class TokenBucket {\n        private final int capacity;\n        private int tokens;\n        private long lastRefillTimestamp;\n\n        TokenBucket(int capacity) {\n            this.capacity = capacity;\n            this.tokens = capacity;\n            this.lastRefillTimestamp = System.currentTimeMillis();\n        }\n\n        synchronized boolean tryAcquire() {\n            refill();\n            if (tokens > 0) {\n                tokens--;\n                return true;\n            }\n            return false;\n        }\n\n        private void refill() {\n            long now = System.currentTimeMillis();\n            long elapsed = now - lastRefillTimestamp;\n            int tokensToAdd = (int) (elapsed / refillDurationMs) * refillTokens;\n            if (tokensToAdd > 0) {\n                tokens = Math.min(capacity, tokens + tokensToAdd);\n                lastRefillTimestamp = now;\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Applying the rate limiter via filter:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class RateLimitingFilter extends OncePerRequestFilter {\n\n    private final InMemoryRateLimiter rateLimiter;\n\n    public RateLimitingFilter(InMemoryRateLimiter rateLimiter) {\n        this.rateLimiter = rateLimiter;\n    }\n\n    @Override\n    protected void doFilterInternal(HttpServletRequest request,\n                                     HttpServletResponse response,\n                                     FilterChain filterChain)\n            throws ServletException, IOException {\n        String clientIp = request.getRemoteAddr();\n        String apiKey = request.getHeader(\"X-API-Key\");\n        String rateLimitKey = apiKey != null ? apiKey : clientIp;\n\n        if (!rateLimiter.tryAcquire(rateLimitKey)) {\n            response.setStatus(429);\n            response.setHeader(\"Retry-After\", \"1\");\n            response.getWriter().write(\"{\\\"error\\\":\\\"Too Many Requests\\\"}\");\n            return;\n        }\n        filterChain.doFilter(request, response);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Distributed Rate Limiter (Redis + Bucket4j):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>com.bucket4j</groupId>\n    <artifactId>bucket4j-core</artifactId>\n</dependency>\n<dependency>\n    <groupId>com.bucket4j</groupId>\n    <artifactId>bucket4j-redis</artifactId>\n</dependency>\n<dependency>\n    <groupId>org.redisson</groupId>\n    <artifactId>redisson-spring-boot-starter</artifactId>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class DistributedRateLimiter {\n\n    private final RedissonClient redisson;\n    private final ObjectMapper objectMapper;\n\n    public DistributedRateLimiter(RedissonClient redisson, ObjectMapper objectMapper) {\n        this.redisson = redisson;\n        this.objectMapper = objectMapper;\n    }\n\n    public boolean tryAcquire(String key, long capacity, long refillTokens, Duration refillDuration) {\n        RRateLimiter rateLimiter = redisson.getRateLimiter(\"rate-limit:\" + key);\n        rateLimiter.trySetRate(RateType.OVERALL, capacity, refillDuration.toSeconds(), RateIntervalUnit.SECONDS);\n        return rateLimiter.tryAcquire(1);\n    }\n\n    public boolean tryAcquire(String key) {\n        return tryAcquire(key, 100, 10, Duration.ofSeconds(1));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Annotation-based rate limiting:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Target(ElementType.METHOD)\n@Retention(RetentionPolicy.RUNTIME)\npublic @interface RateLimit {\n    String key() default \"\";\n    long capacity() default 100;\n    long refillTokens() default 10;\n    long refillDuration() default 1;\n    TimeUnit refillTimeUnit() default TimeUnit.SECONDS;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Aspect\n@Component\npublic class RateLimitAspect {\n\n    private final DistributedRateLimiter rateLimiter;\n\n    public RateLimitAspect(DistributedRateLimiter rateLimiter) {\n        this.rateLimiter = rateLimiter;\n    }\n\n    @Around(\"@annotation(rateLimit)\")\n    public Object rateLimit(ProceedingJoinPoint joinPoint, RateLimit rateLimit) throws Throwable {\n        String key = resolveKey(joinPoint, rateLimit);\n        if (!rateLimiter.tryAcquire(key, rateLimit.capacity(), rateLimit.refillTokens(),\n                Duration.of(rateLimit.refillDuration(), rateLimit.refillTimeUnit().toChronoUnit()))) {\n            throw new RateLimitExceededException(\"Rate limit exceeded for key: \" + key);\n        }\n        return joinPoint.proceed();\n    }\n\n    private String resolveKey(ProceedingJoinPoint joinPoint, RateLimit rateLimit) {\n        if (!rateLimit.key().isEmpty()) return rateLimit.key();\n        // Use authenticated user or IP\n        Authentication auth = SecurityContextHolder.getContext().getAuthentication();\n        return auth != null ? auth.getName() : \"anonymous\";\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Applying rate limits in controllers:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\n@RequestMapping(\"/api\")\npublic class RateLimitedController {\n\n    @PostMapping(\"/login\")\n    @RateLimit(key = \"login\", capacity = 5, refillTokens = 5, refillDuration = 1, refillTimeUnit = TimeUnit.MINUTES)\n    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {\n        // Rate limited to 5 login attempts per minute\n        return authService.login(request);\n    }\n\n    @GetMapping(\"/orders\")\n    @RateLimit(capacity = 1000, refillTokens = 100, refillDuration = 1, refillTimeUnit = TimeUnit.SECONDS)\n    public List<Order> getOrders() {\n        return orderService.findAll();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q25-what-is-the-difference-between-authenticationentrypoint-and-accessdeniedhandler-in-spring-security",
      children: "Q25: What is the difference between authenticationEntryPoint and accessDeniedHandler in Spring Security?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "AuthenticationEntryPoint"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AccessDeniedHandler"
      }), " handle two different security failure scenarios:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AuthenticationEntryPoint"
        }), " handles unauthenticated requests → when a user tries to access a protected resource without valid credentials."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AccessDeniedHandler"
        }), " handles authenticated but unauthorized requests → when a user has valid credentials but lacks the required permissions for the requested resource."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@EnableWebSecurity\npublic class SecurityExceptionConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .exceptionHandling(ex -> ex\n                .authenticationEntryPoint(restAuthenticationEntryPoint())\n                .accessDeniedHandler(restAccessDeniedHandler())\n            )\n            .authorizeHttpRequests(authz -> authz\n                .requestMatchers(\"/api/public/**\").permitAll()\n                .requestMatchers(\"/api/admin/**\").hasRole(\"ADMIN\")\n                .anyRequest().authenticated()\n            );\n        return http.build();\n    }\n\n    @Bean\n    public AuthenticationEntryPoint restAuthenticationEntryPoint() {\n        return (request, response, authException) -> {\n            response.setContentType(MediaType.APPLICATION_JSON_VALUE);\n            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);\n\n            Map<String, Object> body = new HashMap<>();\n            body.put(\"status\", 401);\n            body.put(\"error\", \"Unauthorized\");\n            body.put(\"message\", authException.getMessage());\n            body.put(\"path\", request.getRequestURI());\n\n            ObjectMapper mapper = new ObjectMapper();\n            mapper.writeValue(response.getOutputStream(), body);\n        };\n    }\n\n    @Bean\n    public AccessDeniedHandler restAccessDeniedHandler() {\n        return (request, response, accessDeniedException) -> {\n            response.setContentType(MediaType.APPLICATION_JSON_VALUE);\n            response.setStatus(HttpServletResponse.SC_FORBIDDEN);\n\n            Map<String, Object> body = new HashMap<>();\n            body.put(\"status\", 403);\n            body.put(\"error\", \"Forbidden\");\n            body.put(\"message\", accessDeniedException.getMessage());\n            body.put(\"path\", request.getRequestURI());\n\n            ObjectMapper mapper = new ObjectMapper();\n            mapper.writeValue(response.getOutputStream(), body);\n        };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When each is triggered:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Handler"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "HTTP Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No token presented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AuthenticationEntryPoint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Expired token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AuthenticationEntryPoint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid token signature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AuthenticationEntryPoint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Valid token, wrong role"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AccessDeniedHandler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "403"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Valid token, @PreAuthorize fails"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AccessDeniedHandler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "403"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Valid token, IP not allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AccessDeniedHandler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "403"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ExceptionTranslationFilter"
      }), " is the filter that catches authentication and authorization exceptions and delegates to the appropriate handler:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ExceptionTranslationFilter\n├── AuthenticationException → AuthenticationEntryPoint\n└── AccessDeniedException  → AccessDeniedHandler\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For form-based login, the default ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AuthenticationEntryPoint"
      }), " redirects to the login page. For REST APIs, you should use a custom entry point that returns 401 with a JSON body."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you use Spring Security's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@EnableMethodSecurity"
      }), ", you can also customize the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AccessDeniedHandler"
      }), " globally:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@EnableMethodSecurity\npublic class MethodSecurityConfig {\n\n    @Bean\n    public MethodSecurityExpressionHandler methodSecurityExpressionHandler() {\n        DefaultMethodSecurityExpressionHandler handler = new DefaultMethodSecurityExpressionHandler();\n        return handler;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q26-what-is-the-spring-boot-actuator-security-how-do-you-securely-expose-actuator-endpoints",
      children: "Q26: What is the Spring Boot actuator security? How do you securely expose actuator endpoints?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot Actuator provides production-ready endpoints for monitoring and managing your application. These endpoints expose sensitive information about your application's health, metrics, environment properties, and thread dumps → so they must be secured properly."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Secure actuator configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "management:\n  endpoints:\n    web:\n      exposure:\n        include: health,info,metrics,prometheus\n      base-path: /internal\n  endpoint:\n    health:\n      show-details: when-authorized\n      roles: ADMIN\n      probes:\n        enabled: true\n    env:\n      enabled: false\n    configprops:\n      enabled: false\n    shutdown:\n      enabled: false\n    info:\n      env:\n        enabled: true\n  info:\n    env:\n      enabled: true\n    java:\n      enabled: true\n    os:\n      enabled: true\n    build:\n      enabled: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security filter chain for actuator:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@EnableWebSecurity\npublic class ActuatorSecurityConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .securityMatcher(\"/internal/**\")\n            .authorizeHttpRequests(authz -> authz\n                .requestMatchers(\"/internal/health\").permitAll()\n                .requestMatchers(\"/internal/info\").permitAll()\n                .requestMatchers(\"/internal/prometheus\").hasRole(\"ADMIN\")\n                .requestMatchers(\"/internal/metrics\").hasRole(\"ADMIN\")\n                .requestMatchers(\"/internal/env\").denyAll()\n                .anyRequest().hasRole(\"ADMIN\")\n            )\n            .httpBasic(Customizer.withDefaults())\n            .sessionManagement(session -> session\n                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)\n            );\n        return http.build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom health indicators:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class DatabaseHealthIndicator implements HealthIndicator {\n\n    private final DataSource dataSource;\n\n    public DatabaseHealthIndicator(DataSource dataSource) {\n        this.dataSource = dataSource;\n    }\n\n    @Override\n    public Health health() {\n        try (Connection conn = dataSource.getConnection()) {\n            if (conn.isValid(5)) {\n                return Health.up()\n                    .withDetail(\"database\", \"reachable\")\n                    .withDetail(\"type\", conn.getMetaData().getDatabaseProductName())\n                    .build();\n            }\n            return Health.down()\n                .withDetail(\"database\", \"unreachable\")\n                .build();\n        } catch (SQLException e) {\n            return Health.down(e)\n                .withDetail(\"database\", \"connection failed\")\n                .build();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom info contributor:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class CustomInfoContributor implements InfoContributor {\n\n    @Override\n    public void contribute(Info.Builder builder) {\n        builder\n            .withDetail(\"application\", Map.of(\n                \"name\", \"My Application\",\n                \"version\", \"1.0.0\",\n                \"environment\", System.getenv(\"APP_ENV\")\n            ))\n            .withDetail(\"team\", Map.of(\n                \"name\", \"Platform Engineering\",\n                \"contact\", \"platform@example.com\",\n                \"slack\", \"#platform-eng\"\n            ));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Securing health information:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "management:\n  endpoint:\n    health:\n      show-details: when-authorized\n      show-components: when-authorized\n      roles: ADMIN\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network-level security for production:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "management:\n  server:\n    port: 8081\n    address: 127.0.0.1\n  endpoints:\n    web:\n      base-path: /actuator\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In Kubernetes, use a separate management port that is only accessible via the service mesh or internal cluster network."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Auditing actuator access:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class ActuatorAuditListener {\n\n    private static final Logger log = LoggerFactory.getLogger(\"ACTUATOR_AUDIT\");\n\n    @EventListener\n    public void onApplicationEvent(AuditApplicationEvent event) {\n        AuditEvent auditEvent = event.getAuditEvent();\n        if (auditEvent.getPrincipal() != null &&\n            auditEvent.getType().startsWith(\"ACTUATOR_\")) {\n            log.warn(\"Actuator access: principal={}, type={}, data={}\",\n                auditEvent.getPrincipal(),\n                auditEvent.getType(),\n                auditEvent.getData());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q27-explain-the-security-considerations-for-a-spring-boot-microservices-architecture-how-do-you-handle-service-to-service-authentication",
      children: "Q27: Explain the security considerations for a Spring Boot microservices architecture. How do you handle service-to-service authentication?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Microservices security requires a defense-in-depth approach across multiple layers: external API gateway, service mesh, service-to-service communication, and data access."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture overview:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Client → API Gateway → Service A → Service B\n                ↓            ↓           ↓\n          Auth Server    Database    Message Queue\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Layer 1: External API Gateway"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The API Gateway handles authentication, rate limiting, TLS termination, and request validation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  cloud:\n    gateway:\n      routes:\n        - id: order-service\n          uri: lb://order-service\n          predicates:\n            - Path=/api/orders/**\n          filters:\n            - StripPrefix=1\n            - name: RequestRateLimiter\n              args:\n                redis-rate-limiter:\n                  replenishRate: 100\n                  burstCapacity: 200\n      default-filters:\n        - TokenRelay\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Layer 2: Service-to-Service Authentication"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Three common approaches for inter-service authentication:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach 1: JWT Token Propagation (recommended)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The service receives a JWT from the API Gateway and validates it locally:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@EnableWebSecurity\npublic class MicroserviceSecurityConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .authorizeHttpRequests(authz -> authz\n                .requestMatchers(\"/internal/health\").permitAll()\n                .anyRequest().authenticated()\n            )\n            .oauth2ResourceServer(oauth2 -> oauth2\n                .jwt(jwt -> jwt\n                    .jwtAuthenticationConverter(jwtAuthenticationConverter())\n                )\n            );\n        return http.build();\n    }\n\n    @Bean\n    public JwtDecoder jwtDecoder() {\n        return NimbusJwtDecoder\n            .withJwkSetUri(\"https://auth.example.com/.well-known/jwks.json\")\n            .jwsAlgorithm(SignatureAlgorithm.RS256)\n            .build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When Service A needs to call Service B, it forwards the original JWT:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class InterServiceClient {\n\n    private final RestTemplate restTemplate;\n\n    public InterServiceClient(RestTemplate restTemplate) {\n        this.restTemplate = restTemplate;\n    }\n\n    public Order getOrderFromServiceB(Long orderId) {\n        Authentication auth = SecurityContextHolder.getContext().getAuthentication();\n        String token = extractJwt(auth);\n\n        HttpHeaders headers = new HttpHeaders();\n        headers.setBearerAuth(token);\n\n        HttpEntity<Void> entity = new HttpEntity<>(headers);\n        ResponseEntity<Order> response = restTemplate.exchange(\n            \"http://order-service/api/orders/{id}\",\n            HttpMethod.GET, entity, Order.class, orderId);\n        return response.getBody();\n    }\n\n    private String extractJwt(Authentication auth) {\n        if (auth instanceof JwtAuthenticationToken jwtAuth) {\n            return jwtAuth.getToken().getTokenValue();\n        }\n        if (auth instanceof BearerTokenAuthentication bearerAuth) {\n            return bearerAuth.getToken().toString();\n        }\n        return null;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach 2: mTLS (Mutual TLS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each service has a client certificate that it presents when calling other services:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "server:\n  ssl:\n    client-auth: need\n    trust-store: classpath:service-truststore.jks\n    trust-store-password: ${TRUSTSTORE_PASSWORD}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach 3: Service Account Tokens"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each service has its own OAuth2 client credentials:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class ServiceMeshClient {\n\n    private final OAuth2AuthorizedClientManager authorizedClientManager;\n\n    public ServiceMeshClient(OAuth2AuthorizedClientManager authorizedClientManager) {\n        this.authorizedClientManager = authorizedClientManager;\n    }\n\n    public String getServiceToken() {\n        OAuth2AuthorizeRequest request = OAuth2AuthorizeRequest\n            .withClientRegistrationId(\"order-service-sa\")\n            .principal(\"order-service\")\n            .build();\n\n        OAuth2AuthorizedClient client = authorizedClientManager.authorize(request);\n        return client.getAccessToken().getTokenValue();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Layer 3: Defence in Depth"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Additional security measures:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network policies"
        }), ": Kubernetes NetworkPolicies restrict which services can communicate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Service mesh"
        }), ": Istio or Linkerd provides mTLS, authorization policies, and observability at the mesh layer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Secret rotation"
        }), ": Automatically rotate service account tokens and database credentials."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Audit logging"
        }), ": All inter-service calls are logged with correlation IDs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Circuit breakers"
        }), ": Prevent cascading failures and limit blast radius."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data encryption"
        }), ": Encrypt sensitive data at rest in each service's database."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Input validation"
        }), ": Each service validates inputs independently → never trust downstream service data."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Istio authorization policy example:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "apiVersion: security.istio.io/v1beta1\nkind: AuthorizationPolicy\nmetadata:\n  name: order-service-policy\n  namespace: prod\nspec:\n  selector:\n    matchLabels:\n      app: order-service\n  rules:\n    - from:\n        - source:\n            principals: [\"cluster.local/ns/prod/sa/api-gateway\"]\n      to:\n        - operation:\n            methods: [\"GET\"]\n            paths: [\"/api/orders/*\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Security checklist for microservices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use a dedicated API Gateway for external traffic."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never expose internal services directly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use JWT propagation or mTLS for inter-service communication."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate all tokens on each service independently."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use network policies to restrict inter-service traffic."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encrypt all data at rest and in transit."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement centralized audit logging with correlation IDs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use a service mesh for advanced security policies."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rotate secrets regularly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply least privilege to service accounts."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use rate limiting and circuit breakers."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This concludes the Security Interview Q&A chapter. Each question covered a critical aspect of application security, from foundational concepts to advanced distributed system security patterns."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contract without state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple inheritance of type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API contracts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Abstract Class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single inheritance, shared state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Template method pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Record"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transparent data carrier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-generated methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DTOs, value objects"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Points"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Interview Frequency"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OOP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulation, Inheritance, Polymorphism, Abstraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every interview"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Collections"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List, Set, Map, Queue, Deque"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9/10 interviews"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "synchronized, volatile, Locks, CompletableFuture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7/10 senior interviews"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Java 8+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambdas, Streams, Optional, CompletableFuture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8/10 interviews"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Skill"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Junior (0-2yr)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mid (3-5yr)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Senior (6-9yr)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Staff (10+)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OOP & Design Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define and identify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply and combine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate and refactor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create and teach"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance trade-offs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrent collections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom implementations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax knowledge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write thread-safe code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debug deadlocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design concurrent systems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between equals() and == in Java?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) They are identical"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) equals() compares values, == compares references"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) == compares values, equals() compares references"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) equals() is for primitives, == is for objects"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) equals() compares logical equality (overridable), == compares reference equality.**\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which collection guarantees insertion order?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) HashMap"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) TreeMap"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) LinkedHashMap"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) HashSet"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) LinkedHashMap.** LinkedHashMap maintains a doubly-linked list of entries to preserve insertion order.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What keyword prevents a method from being overridden?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) static"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) final"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) private"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) abstract"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) final.** A final method cannot be overridden by subclasses.\n"
      })]
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