"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[67874],{

/***/ 23971
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_discrete_mathematics_14_number_theory_md_510_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-discrete-mathematics-14-number-theory-md-510.json
const site_docs_courses_discrete_mathematics_14_number_theory_md_510_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/discrete-mathematics/14-number-theory","title":"Chapter 14: Number Theory","description":"Previous Probability | Next Applications","source":"@site/docs/courses/discrete-mathematics/14-number-theory.md","sourceDirName":"courses/discrete-mathematics","slug":"/discrete-mathematics/14-number-theory","permalink":"/ai-engineering-journey/discrete-mathematics/14-number-theory","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"id":"14-number-theory","slug":"/discrete-mathematics/14-number-theory","title":"Chapter 14: Number Theory","sidebar_label":"Chapter 14: Number Theory","sidebar_position":14},"sidebar":"course-discrete-mathematics","previous":{"title":"Chapter 13: Probability","permalink":"/ai-engineering-journey/discrete-mathematics/13-probability"},"next":{"title":"Chapter 15: Applications of Discrete Mathematics","permalink":"/ai-engineering-journey/discrete-mathematics/15-applications"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/discrete-mathematics/14-number-theory.md


const frontMatter = {
	id: '14-number-theory',
	slug: '/discrete-mathematics/14-number-theory',
	title: 'Chapter 14: Number Theory',
	sidebar_label: 'Chapter 14: Number Theory',
	sidebar_position: 14
};
const contentTitle = 'Chapter 14: Number Theory';

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
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "14.1 Divisibility",
  "id": "141-divisibility",
  "level": 3
}, {
  "value": "14.2 Division Algorithm",
  "id": "142-division-algorithm",
  "level": 3
}, {
  "value": "14.3 GCD and LCM",
  "id": "143-gcd-and-lcm",
  "level": 3
}, {
  "value": "14.4 Euclidean Algorithm",
  "id": "144-euclidean-algorithm",
  "level": 3
}, {
  "value": "14.5 Modular Arithmetic",
  "id": "145-modular-arithmetic",
  "level": 3
}, {
  "value": "14.6 Modular Inverses",
  "id": "146-modular-inverses",
  "level": 3
}, {
  "value": "14.7 Linear Congruences",
  "id": "147-linear-congruences",
  "level": 3
}, {
  "value": "14.8 Chinese Remainder Theorem",
  "id": "148-chinese-remainder-theorem",
  "level": 3
}, {
  "value": "14.9 Prime Numbers",
  "id": "149-prime-numbers",
  "level": 3
}, {
  "value": "14.10 Fermat&#39;s Little Theorem and Euler&#39;s Theorem",
  "id": "1410-fermats-little-theorem-and-eulers-theorem",
  "level": 3
}, {
  "value": "14.11 Public-Key Cryptography: RSA",
  "id": "1411-public-key-cryptography-rsa",
  "level": 3
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "TypeScript Implementations",
  "id": "typescript-implementations",
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
  "value": "14.6 Euclidean Algorithm and Extended Euclidean",
  "id": "146-euclidean-algorithm-and-extended-euclidean",
  "level": 3
}, {
  "value": "14.7 Modular Arithmetic and Inverses",
  "id": "147-modular-arithmetic-and-inverses",
  "level": 3
}, {
  "value": "14.8 Chinese Remainder Theorem",
  "id": "148-chinese-remainder-theorem-1",
  "level": 3
}, {
  "value": "14.9 RSA Cryptosystem ? Complete Implementation",
  "id": "149-rsa-cryptosystem--complete-implementation",
  "level": 3
}, {
  "value": "14.10 Primality Testing",
  "id": "1410-primality-testing",
  "level": 3
}, {
  "value": "Additional Exercises",
  "id": "additional-exercises",
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
  "value": "Application Problems",
  "id": "application-problems",
  "level": 3
}, {
  "value": "Challenge Problem",
  "id": "challenge-problem",
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
        id: "chapter-14-number-theory",
        children: "Chapter 14: Number Theory"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/discrete-mathematics/13-probability",
          children: "Chapter 13: Probability"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/discrete-mathematics/15-applications",
          children: "Chapter 15: Applications"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand divisibility and the division algorithm"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute greatest common divisors using the Euclidean algorithm"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the extended Euclidean algorithm to find B?zout coefficients"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand modular arithmetic and congruence relations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve linear congruences using inverses modulo $n$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the Chinese Remainder Theorem to solve systems of congruences"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand Fermat's Little Theorem and Euler's theorem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate between prime and composite numbers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute Euler's totient function"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the fundamentals of RSA encryption"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Divisibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$a \\mid b$ means $b = a \\cdot k$ for some integer $k$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for all of number theory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Division Algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$a = q \\cdot m + r$ with $0 \\leq r < m$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uniqueness of quotient and remainder"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GCD & LCM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\gcd(a,b) \\cdot \\text{lcm}(a,b) = a \\cdot b$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Euclidean algorithm finds $\\gcd$ efficiently"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Euclidean Algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\gcd(a,b) = \\gcd(b, a \\bmod b)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeated remainder computation; $O(\\log \\min(a,b))$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modular Arithmetic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$a \\equiv b \\pmod{m}$ if $m \\mid (a-b)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arithmetic modulo $m$ is consistent with integers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modular Inverses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$a \\cdot a^{-1} \\equiv 1 \\pmod{m}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exists iff $\\gcd(a,m) = 1$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chinese Remainder Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System of congruences with coprime moduli has a unique solution mod $M$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables parallel computation on large integers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fermat's Little Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$a^p \\equiv a \\pmod{p}$ for prime $p$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation of primality testing and RSA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Euler's Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$a^{\\phi(m)} \\equiv 1 \\pmod{m}$ for $\\gcd(a,m)=1$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generalization of FLT to composite moduli"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption: $c = m^e \\bmod n$, Decryption: $m = c^d \\bmod n$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security depends on hardness of factoring $n$"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Divisibility] --> B[Division Algorithm]\n    B --> C[GCD & LCM]\n    C --> D[Euclidean Algorithm]\n    D --> E[Extended Euclidean]\n    A --> F[Modular Arithmetic]\n    F --> G[Congruences]\n    F --> H[Inverses]\n    F --> I[CRT]\n    A --> J[Prime Numbers]\n    J --> K[Fermat's Little Theorem]\n    J --> L[Euler's Theorem]\n    J --> M[Primality Testing]\n    A --> N[Cryptography]\n    N --> O[RSA]\n    N --> P[Diffie-Hellman]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "141-divisibility",
      children: "14.1 Divisibility"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For integers $a$ and $b$ with $a \\neq 0$, $a$ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "divides"
      }), " $b$ (written $a \\mid b$) if there is an integer $k$ such that $b = a \\cdot k$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 14.1 (Properties of divisibility)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If $a \\mid b$ and $b \\mid c$, then $a \\mid c$ (transitivity)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If $a \\mid b$ and $a \\mid c$, then $a \\mid (b + c)$ and $a \\mid (b - c)$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If $a \\mid b$, then $a \\mid b \\cdot c$ for any integer $c$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If $a \\mid b$ and $b \\neq 0$, then $|a| \\leq |b|$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$1$ divides every integer; every integer divides $0$."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Divisibility $a \\mid b$ means $b$ is a multiple of $a$; it is transitive and closed under linear combinations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "142-division-algorithm",
      children: "14.2 Division Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 14.2 (Division algorithm)."
      }), " For integers $a$ and $m > 0$, there exist unique integers $q$ (quotient) and $r$ (remainder) such that:\n$$a = q \\cdot m + r,\\quad 0 \\leq r < m$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We write $r = a \\bmod m$ and $q = \\lfloor a/m \\rfloor$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Every integer $a$ can be uniquely expressed as $a = qm + r$ with $0 \\leq r < m$; the remainder is the basis of modular arithmetic."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "143-gcd-and-lcm",
      children: "14.3 GCD and LCM"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "greatest common divisor"
      }), " $\\gcd(a,b)$ is the largest integer dividing both $a$ and $b$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "least common multiple"
      }), " $\\text{lcm}(a,b)$ is the smallest positive integer divisible by both $a$ and $b$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 14.3 (GCD-LCM product)."
      }), " $\\gcd(a,b) \\cdot \\text{lcm}(a,b) = |a \\cdot b|$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 14.4 (GCD as linear combination)."
      }), " $\\gcd(a,b)$ is the smallest positive integer of the form $ax + by$ for integers $x, y$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Two integers are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "relatively prime"
      }), " (coprime) if $\\gcd(a,b) = 1$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Every common divisor divides the GCD; the GCD is the smallest positive linear combination of $a$ and $b$."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "144-euclidean-algorithm",
      children: "14.4 Euclidean Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 14.5 (Euclidean algorithm)."
      }), " For $a \\geq b > 0$:\n$$\\gcd(a,b) = \\gcd(b, a \\bmod b)$$\nRepeat until the remainder is 0; the last non-zero remainder is $\\gcd(a,b)$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function gcd(a: number, b: number): number {\n  a = Math.abs(a);\n  b = Math.abs(b);\n  while (b !== 0) {\n    const temp = b;\n    b = a % b;\n    a = temp;\n  }\n  return a;\n}\n\nconsole.log(gcd(252, 198)); // 18\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Extended Euclidean algorithm:"
      }), " Finds integers $x$ and $y$ such that $ax + by = \\gcd(a,b)$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function extendedGcd(a: number, b: number): { gcd: number; x: number; y: number } {\n  if (b === 0) return { gcd: a, x: 1, y: 0 };\n  const { gcd, x: x1, y: y1 } = extendedGcd(b, a % b);\n  return { gcd, x: y1, y: x1 - Math.floor(a / b) * y1 };\n}\n\n// gcd(252, 198) = 18 = 4*252 + (-5)*198\nconsole.log(extendedGcd(252, 198)); // { gcd: 18, x: 4, y: -5 }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The Euclidean algorithm computes GCD by repeated remainder operations in $O(\\log n)$ time; the extended algorithm also finds the B?zout coefficients."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "145-modular-arithmetic",
      children: "14.5 Modular Arithmetic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Congruence:"
      }), " $a \\equiv b \\pmod{m}$ means $m \\mid (a - b)$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 14.6 (Properties of congruences)."
      }), " If $a \\equiv b \\pmod{m}$ and $c \\equiv d \\pmod{m}$, then:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$a + c \\equiv b + d \\pmod{m}$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$a - c \\equiv b - d \\pmod{m}$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$a \\cdot c \\equiv b \\cdot d \\pmod{m}$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$a^k \\equiv b^k \\pmod{m}$ for any $k \\geq 0$."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 14.7 (Cancellation)."
      }), " If $ac \\equiv bc \\pmod{m}$ and $\\gcd(c,m) = 1$, then $a \\equiv b \\pmod{m}$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Congruence modulo $m$ is an equivalence relation compatible with addition, subtraction, and multiplication; cancellation requires the multiplier to be coprime to $m$."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "146-modular-inverses",
      children: "14.6 Modular Inverses"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "modular inverse"
      }), " of $a$ modulo $m$ is an integer $a^{-1}$ such that $a \\cdot a^{-1} \\equiv 1 \\pmod{m}$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 14.8 (Inverse existence)."
      }), " $a^{-1} \\pmod{m}$ exists if and only if $\\gcd(a,m) = 1$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The inverse can be found using the extended Euclidean algorithm: if $ax + my = 1$, then $x$ is the inverse of $a$ modulo $m$."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function modInverse(a: number, m: number): number | null {\n  const { gcd, x } = extendedGcd(a, m);\n  if (gcd !== 1) return null; // no inverse\n  return ((x % m) + m) % m; // ensure non-negative\n}\n\nconsole.log(modInverse(3, 7));  // 5 (since 3*5 = 15 = 1 mod 7)\nconsole.log(modInverse(2, 4));  // null (gcd(2,4) ? 1)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A modular inverse exists exactly when $a$ and $m$ are coprime; use the extended Euclidean algorithm to find it."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "147-linear-congruences",
      children: "14.7 Linear Congruences"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "linear congruence"
      }), " is of the form $ax \\equiv b \\pmod{m}$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 14.9 (Solving linear congruences)."
      }), " $ax \\equiv b \\pmod{m}$ has a solution if and only if $\\gcd(a,m) \\mid b$. If solutions exist, there are exactly $\\gcd(a,m)$ distinct solutions modulo $m$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution method:"
      }), " Divide through by $\\gcd(a,m)$ (if $\\gcd > 1$). Compute the inverse of $a/\\gcd$ modulo $m/\\gcd$. Multiply."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Solve $ax \\equiv b \\pmod{m}$ by dividing through by $\\gcd(a,m)$ and multiplying by the modular inverse of the reduced coefficient."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "148-chinese-remainder-theorem",
      children: "14.8 Chinese Remainder Theorem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 14.10 (Chinese Remainder Theorem)."
      }), " Let $m_1, m_2, \\dots, m_n$ be pairwise coprime positive integers. The system:\n$$x \\equiv a_1 \\pmod{m_1},; x \\equiv a_2 \\pmod{m_2},; \\dots,; x \\equiv a_n \\pmod{m_n}$$\nhas a unique solution modulo $M = m_1 m_2 \\cdots m_n$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution construction:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute $M = \\prod m_i$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each $i$, compute $M_i = M / m_i$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find $y_i$, the inverse of $M_i$ modulo $m_i$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$x = \\sum a_i \\cdot M_i \\cdot y_i \\pmod{M}$."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function chineseRemainder(remainders: number[], moduli: number[]): number {\n  let M = 1;\n  for (const m of moduli) M *= m;\n\n  let result = 0;\n  for (let i = 0; i < moduli.length; i++) {\n    const Mi = M / moduli[i];\n    const yi = modInverse(Mi, moduli[i])!;\n    result += remainders[i] * Mi * yi;\n  }\n  return ((result % M) + M) % M;\n}\n\n// x = 2 (mod 3), x = 3 (mod 5), x = 2 (mod 7)\nconsole.log(chineseRemainder([2, 3, 2], [3, 5, 7])); // 23\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The CRT combines $n$ congruences with pairwise coprime moduli into a unique solution modulo the product ? essential for RSA decryption and large integer arithmetic."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "149-prime-numbers",
      children: "14.9 Prime Numbers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "prime number"
      }), " is an integer $p \\geq 2$ whose only positive divisors are $1$ and $p$. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "composite"
      }), " number has other divisors."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 14.11 (Fundamental Theorem of Arithmetic)."
      }), " Every integer $n \\geq 2$ can be expressed uniquely as a product of primes up to order:\n$$n = p_1^{e_1} \\cdot p_2^{e_2} \\cdots p_k^{e_k}$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 14.12 (Euclid's theorem on primes)."
      }), " There are infinitely many prime numbers."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 14.13 (Prime number theorem)."
      }), " The number of primes $\\leq n$ is $\\pi(n) \\sim n / \\ln n$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sieve of Eratosthenes:"
      }), " Efficient algorithm for finding all primes up to $n$ in $O(n \\log \\log n)$ time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function sieveOfEratosthenes(n: number): number[] {\n  const isPrime = new Array(n + 1).fill(true);\n  isPrime[0] = isPrime[1] = false;\n  for (let i = 2; i * i <= n; i++) {\n    if (isPrime[i]) {\n      for (let j = i * i; j <= n; j += i) {\n        isPrime[j] = false;\n      }\n    }\n  }\n  return Array.from({ length: n + 1 }, (_, i) => i).filter(i => isPrime[i]);\n}\n\nconsole.log(sieveOfEratosthenes(30)); // [2,3,5,7,11,13,17,19,23,29]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Primes are the building blocks of integers (unique factorization); there are infinitely many, and the sieve of Eratosthenes finds them efficiently."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1410-fermats-little-theorem-and-eulers-theorem",
      children: "14.10 Fermat's Little Theorem and Euler's Theorem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 14.14 (Fermat's Little Theorem)."
      }), " If $p$ is prime and $p \\nmid a$, then:\n$$a^{p-1} \\equiv 1 \\pmod{p}$$\nEquivalently, $a^p \\equiv a \\pmod{p}$ for any integer $a$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Euler's totient function:"
      }), " $\\phi(n)$ = number of positive integers $\\leq n$ that are coprime to $n$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\phi(p) = p - 1$ for prime $p$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\phi(p^k) = p^{k} - p^{k-1} = p^{k-1}(p-1)$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If $\\gcd(m,n) = 1$, then $\\phi(mn) = \\phi(m) \\cdot \\phi(n)$ (multiplicative)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 14.15 (Euler's theorem)."
      }), " If $\\gcd(a,m) = 1$, then:\n$$a^{\\phi(m)} \\equiv 1 \\pmod{m}$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When $m = p$ (prime), Euler's theorem reduces to Fermat's Little Theorem."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function totient(n: number): number {\n  let result = n;\n  let m = n;\n  for (let p = 2; p * p <= m; p++) {\n    if (m % p === 0) {\n      while (m % p === 0) m /= p;\n      result -= result / p;\n    }\n  }\n  if (m > 1) result -= result / m;\n  return result;\n}\n\nconsole.log(totient(12)); // 4 (1, 5, 7, 11)\nconsole.log(totient(100)); // 40\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Fermat's Little Theorem gives $a^{p-1} \\equiv 1 \\pmod{p}$ for primes; Euler's theorem extends this to composite moduli via $\\phi(m)$."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1411-public-key-cryptography-rsa",
      children: "14.11 Public-Key Cryptography: RSA"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RSA key generation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose two large distinct primes $p$ and $q$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute $n = p \\cdot q$ and $\\phi(n) = (p-1)(q-1)$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose $e$ with $1 < e < \\phi(n)$ and $\\gcd(e, \\phi(n)) = 1$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute $d \\equiv e^{-1} \\pmod{\\phi(n)}$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Public key: $(e, n)$. Private key: $(d, n)$."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Encryption:"
      }), " $c \\equiv m^e \\pmod{n}$.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decryption:"
      }), " $m \\equiv c^d \\pmod{n}$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 14.16 (RSA correctness)."
      }), " $c^d \\equiv (m^e)^d \\equiv m^{ed} \\equiv m \\pmod{n}$ by Euler's theorem (since $ed \\equiv 1 \\pmod{\\phi(n)}$ when $m$ is coprime to $n$, also holds in general)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function rsaEncrypt(m: number, e: number, n: number): number {\n  return modPow(m, e, n);\n}\n\nfunction rsaDecrypt(c: number, d: number, n: number): number {\n  return modPow(c, d, n);\n}\n\nfunction modPow(base: number, exp: number, mod: number): number {\n  let result = 1;\n  base = base % mod;\n  while (exp > 0) {\n    if (exp % 2 === 1) result = (result * base) % mod;\n    exp = Math.floor(exp / 2);\n    base = (base * base) % mod;\n  }\n  return result;\n}\n\nconst p = 61, q = 53;\nconst n = p * q; // 3233\nconst phi = (p - 1) * (q - 1); // 3120\nconst e = 17; // gcd(17, 3120) = 1\nconst d = modInverse(e, phi)!; // 2753\n\nconst message = 65; // \"A\" in ASCII\nconst ciphertext = rsaEncrypt(message, e, n);  // 2790\nconst plaintext = rsaDecrypt(ciphertext, d, n); // 65\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " RSA's security relies on the practical difficulty of factoring $n$; the public exponent $e$ encrypts, the private exponent $d$ decrypts via $m^{ed} \\equiv m \\pmod{n}$."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cryptography"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Computer Science"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Engineering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mathematics"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GCD & LCM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fraction simplification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gear ratios"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diophantine equations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modular Arithmetic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All modern crypto"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash functions, checksums"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signal processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Congruence theory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chinese Remainder Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA acceleration, secret sharing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large integer arithmetic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Residue number systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combinatorial number theory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fermat's Little Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primality testing (Fermat test)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for Euler's theorem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Euler's Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA correctness proof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generalization of FLT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sieve of Eratosthenes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large prime generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analytic number theory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modular Inverse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RSA key generation, ECC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solving congruences"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is $\\gcd(315, 84)$?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) 7"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) 12"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) 21"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) 42"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** $315 = 2 \\cdot 84 + 147$, $84 = 0 \\cdot 147 + 84$, $147 = 1 \\cdot 84 + 63$, $84 = 1 \\cdot 63 + 21$, $63 = 3 \\cdot 21 + 0$. $\\gcd = 21$."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When does $a$ have a multiplicative inverse modulo $m$?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Always"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) When $a$ and $m$ are coprime"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) When $a > m$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) When $m$ is prime"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** $a^{-1} \\pmod{m}$ exists iff $\\gcd(a,m) = 1$."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The Chinese Remainder Theorem requires that:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) All moduli are equal"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) All moduli are pairwise coprime"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) All remainders are equal"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Moduli are powers of 2"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** The CRT requires pairwise coprime moduli for a unique solution modulo the product."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Fermat's Little Theorem states:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) $a^n \\equiv a \\pmod{n}$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) $a^{p-1} \\equiv 1 \\pmod{p}$ when $p$ is prime and $p \\nmid a$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) $a^p \\equiv 1 \\pmod{p}$ for all $a$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) $(a+b)^p \\equiv a^p + b^p \\pmod{p}$"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** $a^{p-1} \\equiv 1 \\pmod{p}$ when $p$ is prime and $p \\nmid a$."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The totient $\\phi(p^k)$ for prime $p$ equals:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) $p^k$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) $p^k - 1$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) $p^{k-1}(p-1)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) $p-1$"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** $\\phi(p^k) = p^k - p^{k-1} = p^{k-1}(p-1)$."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 14.1"
      }), " (Euclidean algorithm). Find $\\gcd(2024, 748)$:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$2024 = 2 \\cdot 748 + 528$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$748 = 1 \\cdot 528 + 220$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$528 = 2 \\cdot 220 + 88$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$220 = 2 \\cdot 88 + 44$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$88 = 2 \\cdot 44 + 0$\n$\\gcd(2024, 748) = 44$."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 14.2"
      }), " (Extended Euclidean). Find $x, y$ such that $252x + 198y = 18$:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$252 = 1 \\cdot 198 + 54$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$198 = 3 \\cdot 54 + 36$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$54 = 1 \\cdot 36 + 18$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$36 = 2 \\cdot 18 + 0$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Back-substitute:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$18 = 54 - 1 \\cdot 36 = 54 - (198 - 3 \\cdot 54) = 4 \\cdot 54 - 198 = 4(252 - 198) - 198 = 4 \\cdot 252 - 5 \\cdot 198$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "So $x = 4$, $y = -5$. Check: $4(252) - 5(198) = 1008 - 990 = 18$. ?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 14.3"
      }), " (Modular inverse). Find $3^{-1} \\pmod{7}$:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$7 = 2 \\cdot 3 + 1$, so $1 = 7 - 2 \\cdot 3$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Thus $(-2) \\cdot 3 \\equiv 1 \\pmod{7}$, so $3^{-1} \\equiv -2 \\equiv 5 \\pmod{7}$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check: $3 \\cdot 5 = 15 \\equiv 1 \\pmod{7}$. ?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 14.4"
      }), " (Linear congruence). Solve $6x \\equiv 3 \\pmod{15}$:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\gcd(6,15) = 3 \\mid 3$, so there are 3 solutions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Divide through: $2x \\equiv 1 \\pmod{5}$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inverse of 2 mod 5 is 3 (since $2 \\cdot 3 = 6 \\equiv 1 \\pmod{5}$)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$x \\equiv 3 \\pmod{5}$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solutions mod 15: $x = 3, 8, 13$."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 14.5"
      }), " (Chinese Remainder Theorem). Solve $x \\equiv 2 \\pmod{3}$, $x \\equiv 3 \\pmod{5}$, $x \\equiv 2 \\pmod{7}$:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$M = 3 \\cdot 5 \\cdot 7 = 105$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$M_1 = 105/3 = 35$, $y_1 = 35^{-1} \\pmod{3} = 2$ ($35 \\cdot 2 = 70 \\equiv 1$)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$M_2 = 105/5 = 21$, $y_2 = 21^{-1} \\pmod{5} = 1$ ($21 \\equiv 1 \\pmod{5}$)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$M_3 = 105/7 = 15$, $y_3 = 15^{-1} \\pmod{7} = 1$ ($15 \\equiv 1 \\pmod{7}$)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$x = 2 \\cdot 35 \\cdot 2 + 3 \\cdot 21 \\cdot 1 + 2 \\cdot 15 \\cdot 1 = 140 + 63 + 30 = 233 \\equiv 23 \\pmod{105}$."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check: $23 \\equiv 2 \\pmod{3}$, $23 \\equiv 3 \\pmod{5}$, $23 \\equiv 2 \\pmod{7}$. ?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 14.6"
      }), " (Modular exponentiation). Compute $3^{1000} \\bmod 7$:\nBy FLT: $3^{6} \\equiv 1 \\pmod{7}$. $1000 = 6 \\cdot 166 + 4$.\n$3^{1000} = (3^6)^{166} \\cdot 3^4 \\equiv 1^{166} \\cdot 81 \\equiv 81 \\bmod 7 = 4$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "console.log(modPow(3, 1000, 7)); // 4\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 14.7"
      }), " (Sieve of Eratosthenes). Find primes $\\leq 30$:\nStart: ${2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30}$.\nRemove multiples of 2: ${2,3,5,7,9,11,13,15,17,19,21,23,25,27,29}$.\nRemove multiples of 3: ${2,3,5,7,11,13,17,19,23,25,29}$.\n$5^2 = 25 > 30$, so stop. Primes: ${2,3,5,7,11,13,17,19,23,29}$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 14.8"
      }), " (Totient of 100). $100 = 2^2 \\cdot 5^2$.\n$\\phi(100) = \\phi(2^2) \\cdot \\phi(5^2) = (4-2) \\cdot (25-5) = 2 \\cdot 20 = 40$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 14.9"
      }), " (RSA toy example). $p = 7$, $q = 11$:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$n = 77$, $\\phi(n) = 60$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$e = 13$ ($\\gcd(13,60) = 1$)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$d = 13^{-1} \\bmod 60 = 37$ (since $13 \\cdot 37 = 481 = 8 \\cdot 60 + 1$)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encrypt $m = 5$: $c = 5^{13} \\bmod 77 = 26$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decrypt $c = 26$: $m = 26^{37} \\bmod 77 = 5$."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 14.10"
      }), " (GCD-LCM product). $\\gcd(12, 18) = 6$, $\\text{lcm}(12, 18) = 36$. $6 \\cdot 36 = 216 = 12 \\cdot 18$. ?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// --- GCD via Euclidean Algorithm ---\nfunction gcd(a: number, b: number): number {\n  while (b !== 0) { const t = b; b = a % b; a = t; }\n  return a;\n}\nconsole.log('gcd(48, 18):', gcd(48, 18)); // 6\n\n// --- Extended Euclidean Algorithm ---\nfunction extendedEuclid(a: number, b: number): { gcd: number; x: number; y: number } {\n  if (b === 0) return { gcd: a, x: 1, y: 0 };\n  const { gcd: g, x: x1, y: y1 } = extendedEuclid(b, a % b);\n  return { gcd: g, x: y1, y: x1 - Math.floor(a / b) * y1 };\n}\nconst { gcd: g, x, y } = extendedEuclid(48, 18);\nconsole.log(`gcd=48*${x} + 18*${y}:`, g); // 48*1 + 18*(-2) = 12... wait, 48*1 + 18*(-2) = 12\n\n// Real check:\nconst ee = extendedEuclid(48, 18);\nconsole.log(`48*${ee.x} + 18*${ee.y} = ${48*ee.x + 18*ee.y}`); // should be 6\n\n// --- Modular Inverse ---\nfunction modInverse(a: number, m: number): number | null {\n  const { gcd: g, x: x0 } = extendedEuclid(a, m);\n  if (g !== 1) return null; // inverse doesn't exist\n  return ((x0 % m) + m) % m;\n}\nconsole.log('3^-1 mod 11:', modInverse(3, 11)); // 4 (since 3*4=12=1 mod 11)\nconsole.log('Inverse of 6 mod 10:', modInverse(6, 10)); // null (not coprime)\n\n// --- Modular Exponentiation (fast exponentiation) ---\nfunction modPow(base: number, exp: number, mod: number): number {\n  let result = 1;\n  base = base % mod;\n  while (exp > 0) {\n    if (exp & 1) result = (result * base) % mod;\n    base = (base * base) % mod;\n    exp >>= 1;\n  }\n  return result;\n}\nconsole.log('5^13 mod 77:', modPow(5, 13, 77)); // 26 (matches RSA example)\n\n// --- Chinese Remainder Theorem ---\nfunction crt(remainders: number[], moduli: number[]): number {\n  const N = moduli.reduce((a, b) => a * b, 1);\n  let result = 0;\n  for (let i = 0; i < remainders.length; i++) {\n    const Ni = N / moduli[i];\n    const inv = modInverse(Ni, moduli[i])!;\n    result += remainders[i] * Ni * inv;\n  }\n  return result % N;\n}\n// x = 2 (mod 3), x = 3 (mod 5), x = 2 (mod 7)\nconsole.log('CRT solution:', crt([2, 3, 2], [3, 5, 7])); // 23\n\n// --- Euler's Totient ---\nfunction totient(n: number): number {\n  let result = n;\n  let temp = n;\n  for (let p = 2; p * p <= temp; p++) {\n    if (temp % p === 0) {\n      while (temp % p === 0) temp /= p;\n      result -= result / p;\n    }\n  }\n  if (temp > 1) result -= result / temp;\n  return result;\n}\nconsole.log('f(100):', totient(100)); // 40\nconsole.log('f(77):', totient(77));   // 60\n\n// --- Prime Check ---\nfunction isPrime(n: number): boolean {\n  if (n < 2) return false;\n  if (n < 4) return true;\n  if (n % 2 === 0 || n % 3 === 0) return false;\n  for (let i = 5; i * i <= n; i += 6) if (n % i === 0 || n % (i + 2) === 0) return false;\n  return true;\n}\nconsole.log('Is 97 prime:', isPrime(97)); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// --- Sieve of Eratosthenes ---\nfunction primeSieve(limit: number): number[] {\n  const sieve = new Array(limit + 1).fill(true);\n  sieve[0] = sieve[1] = false;\n  for (let i = 2; i * i <= limit; i++)\n    if (sieve[i]) for (let j = i * i; j <= limit; j += i) sieve[j] = false;\n  return sieve.map((v, i) => v ? i : -1).filter(v => v !== -1);\n}\nconsole.log('Primes = 50:', primeSieve(50).join(', '));\n\n// --- Prime Factorization ---\nfunction primeFactors(n: number): Map<number, number> {\n  const factors = new Map<number, number>();\n  let d = n;\n  for (let p = 2; p * p <= d; p++) {\n    while (d % p === 0) { factors.set(p, (factors.get(p) ?? 0) + 1); d /= p; }\n  }\n  if (d > 1) factors.set(d, (factors.get(d) ?? 0) + 1);\n  return factors;\n}\nconsole.log('\\nPrime factors of 84:', [...primeFactors(84)].map(([p, e]) => `${p}^${e}`).join(' ? '));\n\n// --- Euler's Totient Function ---\nfunction totient(n: number): number {\n  let result = n;\n  let temp = n;\n  for (let p = 2; p * p <= temp; p++) {\n    if (temp % p === 0) { while (temp % p === 0) temp /= p; result -= result / p; }\n  }\n  if (temp > 1) result -= result / temp;\n  return result;\n}\nconsole.log('\\nf(12):', totient(12), '(expected: 4)');\nconsole.log('f(100):', totient(100), '(expected: 40)');\n\n// --- Modular Exponentiation ---\nfunction modPow(base: number, exp: number, mod: number): number {\n  let result = 1;\n  let b = base % mod;\n  let e = exp;\n  while (e > 0) { if (e & 1) result = (result * b) % mod; b = (b * b) % mod; e >>= 1; }\n  return result;\n}\nconsole.log('\\n3^5 mod 7:', modPow(3, 5, 7), '(expected: 5)');\nconsole.log('Fermat: 2^10 mod 11:', modPow(2, 10, 11), '(expected: 1)');\n\n// --- RSA Helper ---\nfunction rsaKeygen(p: number, q: number): { n: number; e: number; d: number } {\n  const n = p * q, phi = (p - 1) * (q - 1);\n  let e = 2;\n  while (gcd(e, phi) !== 1) e++;\n  const d = modInverse(e, phi);\n  return { n, e, d };\n}\nfunction rsaEncrypt(msg: number, e: number, n: number): number { return modPow(msg, e, n); }\nfunction rsaDecrypt(cipher: number, d: number, n: number): number { return modPow(cipher, d, n); }\nconst rsa = rsaKeygen(61, 53);\nconsole.log('\\nRSA n=61?53:', rsa.n, 'e:', rsa.e, 'd:', rsa.d);\nconst cipher = rsaEncrypt(42, rsa.e, rsa.n);\nconsole.log('Encrypt 42:', cipher);\nconsole.log('Decrypt:', rsaDecrypt(cipher, rsa.d, rsa.n));\n\n// --- Chinese Remainder Theorem ---\nfunction chineseRemainder(mods: number[], remainders: number[]): number {\n  let result = 0;\n  const M = mods.reduce((a, b) => a * b, 1);\n  for (let i = 0; i < mods.length; i++) {\n    const mi = M / mods[i];\n    result += remainders[i] * modInverse(mi % mods[i], mods[i]) * mi;\n  }\n  return ((result % M) + M) % M;\n}\nconsole.log('\\nCRT: x = 2 (mod 3), x = 3 (mod 5), x = 2 (mod 7):', chineseRemainder([3,5,7], [2,3,2]));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// number theory\n// sets-graphs-probability implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'number theory', data: { topic: 'sets-graphs-probability' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// number theory - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'discrete-math demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'discrete-mathematics', chapter: 'number theory' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('discrete-math'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Divisibility $a \\mid b$ is the foundational concept; the division algorithm gives unique quotient and remainder."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Euclidean algorithm efficiently computes $\\gcd$; the extended version finds B?zout coefficients."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Modular arithmetic preserves congruence under $+$, $-$, $\\times$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Modular inverses exist iff $\\gcd(a,m) = 1$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Chinese Remainder Theorem solves systems of congruences with pairwise coprime moduli."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Primes are the building blocks of integers; there are infinitely many."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fermat's Little Theorem ($a^{p-1} \\equiv 1 \\pmod{p}$) and Euler's theorem generalize to composite moduli."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RSA encryption uses modular exponentiation; security depends on the difficulty of factorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Euclidean algorithm is $O(\\log n)$"
        }), " ? extremely fast even for huge numbers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inverses are essential for division in modular arithmetic"
        }), " ? always check $\\gcd(a,m) = 1$ first."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FLT is a primality test"
        }), " ? if $a^{n-1} \\not\\equiv 1 \\pmod{n}$, then $n$ is composite (but there are Carmichael numbers that deceive this test)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RSA uses large primes"
        }), " ? typical $p, q$ are 2048-bit numbers (~600 decimal digits)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CRT speeds up RSA"
        }), " ? decryption can be done modulo $p$ and $q$ separately and combined, giving 4x speedup."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "146-euclidean-algorithm-and-extended-euclidean",
      children: "14.6 Euclidean Algorithm and Extended Euclidean"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 14.4 (Euclidean Algorithm)."
      }), " For integers $a > b > 0$, $\\gcd(a, b) = \\gcd(b, a \\bmod b)$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function gcdEuclidean(a: number, b: number): number {\n  a = Math.abs(a);\n  b = Math.abs(b);\n  while (b !== 0) {\n    [a, b] = [b, a % b];\n  }\n  return a;\n}\n\nfunction gcdRecursive(a: number, b: number): number {\n  if (b === 0) return Math.abs(a);\n  return gcdRecursive(b, a % b);\n}\n\n// Extended Euclidean: returns (gcd, x, y) such that ax + by = gcd\nfunction extendedEuclidean(a: number, b: number): { gcd: number; x: number; y: number } {\n  if (b === 0) return { gcd: Math.abs(a), x: a >= 0 ? 1 : -1, y: 0 };\n  const { gcd, x: x1, y: y1 } = extendedEuclidean(b, a % b);\n  return { gcd, x: y1, y: x1 - Math.floor(a / b) * y1 };\n}\n\nconsole.log(gcdEuclidean(462, 336)); // 42\nconsole.log(extendedEuclidean(11, 26));\n// { gcd: 1, x: -7, y: 3 } ? 11(-7) + 26(3) = 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "147-modular-arithmetic-and-inverses",
      children: "14.7 Modular Arithmetic and Inverses"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition 14.7 (Modular Inverse)."
      }), " $a^{-1} \\bmod m$ is the integer $x$ such that $ax \\equiv 1 \\pmod{m}$, existing iff $\\gcd(a, m) = 1$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function modInverse(a: number, m: number): number | null {\n  const { gcd, x } = extendedEuclidean(a, m);\n  if (gcd !== 1) return null;\n  return ((x % m) + m) % m;\n}\n\nfunction modExp(base: number, exp: number, mod: number): number {\n  let result = 1;\n  base = base % mod;\n  while (exp > 0) {\n    if (exp & 1) result = (result * base) % mod;\n    exp >>= 1;\n    base = (base * base) % mod;\n  }\n  return result;\n}\n\nconsole.log(modInverse(11, 26)); // 19 (11*19=209=1 mod 26)\nconsole.log(modExp(7, 2023, 11)); // 7^2023 mod 11 using FLT\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "148-chinese-remainder-theorem-1",
      children: "14.8 Chinese Remainder Theorem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 14.5 (Chinese Remainder Theorem)."
      }), " If $m_1, m_2, \\ldots, m_k$ are pairwise coprime, the system $x \\equiv a_i \\pmod{m_i}$ has a unique solution modulo $M = m_1 m_2 \\cdots m_k$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function chineseRemainder(remainders: number[], moduli: number[]): number {\n  const M = moduli.reduce((a, b) => a * b, 1);\n  let x = 0;\n  for (let i = 0; i < moduli.length; i++) {\n    const Mi = M / moduli[i];\n    const inv = modInverse(Mi % moduli[i], moduli[i]);\n    if (inv === null) throw new Error(\"Moduli not coprime\");\n    x = (x + remainders[i] * Mi * inv) % M;\n  }\n  return x;\n}\n\n// x = 1 (mod 4), x = 2 (mod 5), x = 3 (mod 9)\nconst solution = chineseRemainder([1, 2, 3], [4, 5, 9]);\nconsole.log(solution); // 57\n// 57 = 1 mod 4 ?, 57 = 2 mod 5 ?, 57 = 3 mod 9 ?\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "149-rsa-cryptosystem--complete-implementation",
      children: "14.9 RSA Cryptosystem ? Complete Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function generateRSAKeys(p: number, q: number) {\n  const n = p * q;\n  const phi = (p - 1) * (q - 1);\n  // choose e coprime to phi (commonly 65537 or small primes)\n  let e = 3;\n  while (gcdEuclidean(e, phi) !== 1) e += 2;\n  const d = modInverse(e, phi)!;\n  return { publicKey: { e, n }, privateKey: { d, n } };\n}\n\nfunction rsaEncrypt(m: number, e: number, n: number): number {\n  return modExp(m, e, n);\n}\n\nfunction rsaDecrypt(c: number, d: number, n: number): number {\n  return modExp(c, d, n);\n}\n\n// Encrypt/decrypt example\nconst p = 61, q = 53;\nconst keys = generateRSAKeys(p, q);\nconst plaintext = 42;\nconst ciphertext = rsaEncrypt(plaintext, keys.publicKey.e, keys.publicKey.n);\nconst decrypted = rsaDecrypt(ciphertext, keys.privateKey.d, keys.privateKey.n);\nconsole.log({ plaintext, ciphertext, decrypted }); // 42 ? encrypted ? 42\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1410-primality-testing",
      children: "14.10 Primality Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function isPrimeTrial(n: number): boolean {\n  if (n < 2) return false;\n  if (n === 2) return true;\n  if (n % 2 === 0) return false;\n  const limit = Math.floor(Math.sqrt(n));\n  for (let i = 3; i <= limit; i += 2) {\n    if (n % i === 0) return false;\n  }\n  return true;\n}\n\n// Fermat primality test\nfunction fermatTest(n: number, k: number = 5): boolean {\n  if (n < 2) return false;\n  if (n === 2 || n === 3) return true;\n  for (let i = 0; i < k; i++) {\n    const a = 2 + Math.floor(Math.random() * (n - 3));\n    if (modExp(a, n - 1, n) !== 1) return false; // composite\n  }\n  return true; // probably prime\n}\n\n// Sieve of Eratosthenes\nfunction sievePrimes(limit: number): number[] {\n  const isPrime = new Array(limit + 1).fill(true);\n  isPrime[0] = isPrime[1] = false;\n  for (let i = 2; i * i <= limit; i++) {\n    if (isPrime[i]) {\n      for (let j = i * i; j <= limit; j += i) isPrime[j] = false;\n    }\n  }\n  return Array.from({ length: limit + 1 }, (_, i) => i).filter(i => isPrime[i]);\n}\n\nconsole.log(sievePrimes(100));\nconsole.log(isPrimeTrial(7919)); // true\nconsole.log(fermatTest(7919));   // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Number Theory ? Key Algorithms\"\n        A[GCD] --> B[Euclidean: Olog mina,b]\n        A --> C[Extended: ax + by = gcd]\n        C --> D[Modular Inverse]\n        D --> E[RSA Key Generation]\n        E --> F[Encryption: c = m^e mod n]\n        F --> G[Decryption: m = c^d mod n]\n        D --> H[Chinese Remainder Theorem]\n        H --> I[Solve systems of congruences]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 14.6 (Euler's Theorem)."
      }), " If $\\gcd(a, n) = 1$, then $a^{\\phi(n)} \\equiv 1 \\pmod{n}$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function eulerTotient(n: number): number {\n  let result = n;\n  let temp = n;\n  for (let p = 2; p * p <= temp; p++) {\n    if (temp % p === 0) {\n      while (temp % p === 0) temp /= p;\n      result -= result / p;\n    }\n  }\n  if (temp > 1) result -= result / temp;\n  return result;\n}\n\nconsole.log(eulerTotient(12)); // 4 (1,5,7,11)\nconsole.log(eulerTotient(100)); // 40\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof 14.3 (Fermat's Little Theorem)."
      }), " If $p$ is prime and $p \\nmid a$, then $a^{p-1} \\equiv 1 \\pmod{p}$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Proof."
      }), " Consider the set ${a \\bmod p, 2a \\bmod p, \\ldots, (p-1)a \\bmod p}$. These are all nonzero and distinct modulo $p$ (if $ia \\equiv ja \\pmod{p}$, then $p \\mid (i-j)a$, so $p \\mid i-j$, forcing $i=j$). Thus they are a permutation of ${1, 2, \\ldots, p-1}$. Their product: $a^{p-1}(p-1)! \\equiv (p-1)! \\pmod{p}$. Since $(p-1)!$ is coprime to $p$, cancel it: $a^{p-1} \\equiv 1 \\pmod{p}$. $\\square$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 14.9"
      }), " (Fermat's Little Theorem application). Compute $7^{2023} \\bmod 11$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Since 11 is prime and $7 \\not\\equiv 0 \\pmod{11}$, by FLT $7^{10} \\equiv 1 \\pmod{11}$. Write $2023 = 10 \\cdot 202 + 3$, so $7^{2023} = (7^{10})^{202} \\cdot 7^3 \\equiv 1^{202} \\cdot 7^3 \\equiv 343 \\equiv 2 \\pmod{11}$."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "16",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use the Euclidean algorithm to compute $\\gcd(1234, 5678)$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Find all solutions to $3x \\equiv 7 \\pmod{20}$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Solve the system: $x \\equiv 2 \\pmod{3}$, $x \\equiv 3 \\pmod{5}$, $x \\equiv 2 \\pmod{7}$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove that $\\phi(p^k) = p^k - p^{k-1}$ for prime $p$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Write a TypeScript function ", (0,jsx_runtime.jsx)(_components.code, {
            children: "carmichael(n: number): boolean"
          }), " that checks if $n$ is a Carmichael number by verifying $a^{n-1} \\equiv 1 \\pmod{n}$ for several $a$ coprime to $n$."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Show that if $p$ is prime, then $a^p \\equiv a \\pmod{p}$ for all integers $a$ (Fermat's Little Theorem ? alternative form)."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State the division algorithm for integers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What condition ensures that $a$ has an inverse modulo $m$?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State the Chinese Remainder Theorem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What does $\\phi(12)$ equal?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State Fermat's Little Theorem."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compute $\\gcd(462, 336)$ using the Euclidean algorithm."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Find the modular inverse of 11 modulo 26."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Solve $5x \\equiv 3 \\pmod{12}$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Solve the system: $x \\equiv 1 \\pmod{4}$, $x \\equiv 2 \\pmod{5}$, $x \\equiv 3 \\pmod{9}$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compute $\\phi(2024)$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Using FLT, compute $7^{2023} \\bmod 11$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Generate RSA parameters with $p = 11$, $q = 13$, $e = 7$. Encrypt and decrypt $m = 8$."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove: If $p$ and $q$ are distinct primes and $a$ is any integer, then $a^{pq} \\equiv a \\pmod{pq}$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove that there are infinitely many primes (Euclid's proof)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Carmichael number"
          }), " is a composite $n$ such that $a^{n-1} \\equiv 1 \\pmod{n}$ for all $a$ coprime to $n$. Find the smallest Carmichael number and verify the property for several values of $a$."]
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