"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[3134],{

/***/ 53285
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_python_programming_15_decorators_md_c04_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-python-programming-15-decorators-md-c04.json
const site_docs_courses_python_programming_15_decorators_md_c04_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/python-programming/15-decorators","title":"Chapter 15: Decorators","description":"Previous Generators and itertools","source":"@site/docs/courses/python-programming/15-decorators.md","sourceDirName":"courses/python-programming","slug":"/python-programming/15-decorators","permalink":"/ai-engineering-journey/python-programming/15-decorators","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"id":"15-decorators","slug":"/python-programming/15-decorators","title":"Chapter 15: Decorators","sidebar_label":"Chapter 15: Decorators","sidebar_position":15},"sidebar":"course-python-programming","previous":{"title":"Chapter 14: Magic Methods","permalink":"/ai-engineering-journey/python-programming/14-magic-methods"},"next":{"title":"Chapter 16: Generators and itertools","permalink":"/ai-engineering-journey/python-programming/16-generators"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/python-programming/15-decorators.md


const frontMatter = {
	id: '15-decorators',
	slug: '/python-programming/15-decorators',
	title: 'Chapter 15: Decorators',
	sidebar_label: 'Chapter 15: Decorators',
	sidebar_position: 15
};
const contentTitle = 'Chapter 15: Decorators';

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
  "value": "15.1 Function Decorators",
  "id": "151-function-decorators",
  "level": 2
}, {
  "value": "15.2 Decorators with Arguments",
  "id": "152-decorators-with-arguments",
  "level": 2
}, {
  "value": "15.3 functools.wraps",
  "id": "153-functoolswraps",
  "level": 2
}, {
  "value": "15.4 Common Decorator Patterns",
  "id": "154-common-decorator-patterns",
  "level": 2
}, {
  "value": "15.4.1 Timer",
  "id": "1541-timer",
  "level": 3
}, {
  "value": "15.4.2 Debug",
  "id": "1542-debug",
  "level": 3
}, {
  "value": "15.4.3 Cache (Memoization)",
  "id": "1543-cache-memoization",
  "level": 3
}, {
  "value": "15.4.4 Retry",
  "id": "1544-retry",
  "level": 3
}, {
  "value": "15.5 Decorator Factories",
  "id": "155-decorator-factories",
  "level": 2
}, {
  "value": "15.6 Multiple Decorators",
  "id": "156-multiple-decorators",
  "level": 2
}, {
  "value": "15.7 Class Decorators",
  "id": "157-class-decorators",
  "level": 2
}, {
  "value": "15.7.1 Singleton Decorator",
  "id": "1571-singleton-decorator",
  "level": 3
}, {
  "value": "15.8 Decorators with Optional Arguments",
  "id": "158-decorators-with-optional-arguments",
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
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
  "level": 2
}, {
  "value": "Python vs TypeScript Decorators",
  "id": "python-vs-typescript-decorators",
  "level": 3
}, {
  "value": "When to Use Decorators vs Wrappers",
  "id": "when-to-use-decorators-vs-wrappers",
  "level": 3
}, {
  "value": "TypeScript Higher-Order Function Patterns",
  "id": "typescript-higher-order-function-patterns",
  "level": 3
}, {
  "value": "TypeScript Utilities",
  "id": "typescript-utilities",
  "level": 3
}, {
  "value": "TypeScript Decorator &amp; HOF Patterns",
  "id": "typescript-decorator--hof-patterns",
  "level": 3
}, {
  "value": "TypeScript Advanced Decorator Patterns",
  "id": "typescript-advanced-decorator-patterns",
  "level": 3
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
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
        id: "chapter-15-decorators",
        children: "Chapter 15: Decorators"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/14-magic-methods",
          children: "Magic Methods"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/16-generators",
          children: "Generators and itertools"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write function decorators that wrap and modify behaviour"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "functools.wraps"
        }), " to preserve metadata"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement common decorator patterns: timer, debug, cache, retry"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create class decorators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build parameterised decorators (decorator factories)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stack multiple decorators"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/15-decorators.png",
        alt: "Decorator Pattern"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15.1 Function Decorators"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "A decorator wraps a function to extend behaviour without modifying its source."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15.2 Decorators with Arguments"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The wrapper must accept ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*args, **kwargs"
            }), " and forward them to the wrapped function."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15.3 functools.wraps"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Always use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@functools.wraps"
            }), " to preserve ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__name__"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__doc__"
            }), ", and other metadata."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15.4 Common Decorator Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decorator factories take arguments and return the actual decorator."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15.5 Decorator Factories"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Multiple decorators stack bottom-up: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@a @b"
            }), " applies ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a(b(func))"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15.6 Multiple Decorators"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15.7 Class Decorators"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15.8 Decorators with Optional Arguments"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    S0[Function Decorators]\n    S1[Decorators with Arguments]\n    S2[functools.wraps]\n    S3[Common Decorator Patterns]\n    S4[Decorator Factories]\n    S5[Multiple Decorators]\n    S6[Class Decorators]\n    S7[Decorators with Optional Arguments]\n    S0 --> S1\n    S1 --> S2\n    S2 --> S3\n    S3 --> S4\n    S4 --> S5\n    S5 --> S6\n    S6 --> S7\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "151-function-decorators",
      children: "15.1 Function Decorators"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A decorator wraps a function to extend behaviour without modifying its source."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A decorator is a function that takes another function and extends its behaviour without modifying it:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def simple_decorator(func):\n    def wrapper():\n        print(\"Before function call\")\n        func()\n        print(\"After function call\")\n    return wrapper\n\n@simple_decorator\ndef say_hello():\n    print(\"Hello!\")\n\nsay_hello()\n# Before function call\n# Hello!\n# After function call\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@decorator"
      }), " syntax is equivalent to:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def say_hello():\n    print(\"Hello!\")\n\nsay_hello = simple_decorator(say_hello)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "152-decorators-with-arguments",
      children: "15.2 Decorators with Arguments"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The wrapper must accept ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*args, **kwargs"
        }), " and forward them to the wrapped function."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When the wrapped function takes arguments, the wrapper must accept and forward them:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def logger(func):\n    def wrapper(*args, **kwargs):\n        print(f\"Calling {func.__name__} with args={args}, kwargs={kwargs}\")\n        result = func(*args, **kwargs)\n        print(f\"{func.__name__} returned {result!r}\")\n        return result\n    return wrapper\n\n@logger\ndef add(a: int, b: int) -> int:\n    return a + b\n\n@logger\ndef greet(name: str, greeting: str = \"Hello\") -> str:\n    return f\"{greeting}, {name}!\"\n\nprint(add(3, 4))\n# Calling add with args=(3, 4), kwargs={}\n# add returned 7\n# 7\n\nprint(greet(\"Alice\", greeting=\"Hi\"))\n# Calling greet with args=('Alice',), kwargs={'greeting': 'Hi'}\n# greet returned 'Hi, Alice!'\n# Hi, Alice!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "153-functoolswraps",
      children: "15.3 functools.wraps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Always use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@functools.wraps"
        }), " to preserve ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__name__"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "__doc__"
        }), ", and other metadata."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@wraps"
      }), " preserves the original function's metadata (", (0,jsx_runtime.jsx)(_components.code, {
        children: "__name__"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__doc__"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__module__"
      }), ", etc.):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from functools import wraps\n\ndef logger(func):\n    @wraps(func)  # copies func.__name__, __doc__, etc. to wrapper\n    def wrapper(*args, **kwargs):\n        print(f\"Calling {func.__name__}\")\n        return func(*args, **kwargs)\n    return wrapper\n\n@logger\ndef add(a: int, b: int) -> int:\n    \"\"\"Add two numbers.\"\"\"\n    return a + b\n\nprint(add.__name__)  # 'add' (without @wraps, this would be 'wrapper')\nprint(add.__doc__)   # 'Add two numbers.' (would be None without @wraps)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Always use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@wraps"
      }), " when writing decorators."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "154-common-decorator-patterns",
      children: "15.4 Common Decorator Patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Decorator factories take arguments and return the actual decorator."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1541-timer",
      children: "15.4.1 Timer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\nfrom functools import wraps\n\ndef timer(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        start = time.perf_counter()\n        result = func(*args, **kwargs)\n        elapsed = time.perf_counter() - start\n        print(f\"{func.__name__} took {elapsed:.4f}s\")\n        return result\n    return wrapper\n\n@timer\ndef slow_function():\n    time.sleep(0.5)\n    return \"Done\"\n\nslow_function()  # slow_function took 0.5012s\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1542-debug",
      children: "15.4.2 Debug"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def debug(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        args_repr = [repr(a) for a in args]\n        kwargs_repr = [f\"{k}={v!r}\" for k, v in kwargs.items()]\n        signature = \", \".join(args_repr + kwargs_repr)\n        print(f\"DEBUG: {func.__name__}({signature})\")\n        result = func(*args, **kwargs)\n        print(f\"DEBUG: {func.__name__} = {result!r}\")\n        return result\n    return wrapper\n\n@debug\ndef multiply(a: int, b: int) -> int:\n    return a * b\n\nmultiply(3, 4)\n# DEBUG: multiply(3, 4)\n# DEBUG: multiply = 12\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1543-cache-memoization",
      children: "15.4.3 Cache (Memoization)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def cache(func):\n    memo = {}\n    @wraps(func)\n    def wrapper(*args):\n        if args not in memo:\n            memo[args] = func(*args)\n        return memo[args]\n    return wrapper\n\n@cache\ndef fibonacci(n: int) -> int:\n    if n < 2:\n        return n\n    return fibonacci(n - 1) + fibonacci(n - 2)\n\n# Without cache: exponential time. With cache: O(n).\nprint(fibonacci(100))  # 354224848179261915075\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Python 3.9+ includes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "functools.cache"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from functools import cache\n\n@cache\ndef fibonacci(n: int) -> int:\n    if n < 2:\n        return n\n    return fibonacci(n - 1) + fibonacci(n - 2)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1544-retry",
      children: "15.4.4 Retry"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\nfrom functools import wraps\n\ndef retry(max_attempts: int = 3, delay: float = 1.0):\n    def decorator(func):\n        @wraps(func)\n        def wrapper(*args, **kwargs):\n            for attempt in range(1, max_attempts + 1):\n                try:\n                    return func(*args, **kwargs)\n                except Exception as e:\n                    if attempt == max_attempts:\n                        raise\n                    print(f\"Attempt {attempt} failed: {e}. Retrying in {delay}s...\")\n                    time.sleep(delay)\n            return None  # unreachable\n        return wrapper\n    return decorator\n\n@retry(max_attempts=3, delay=0.5)\ndef unstable_network_call(url: str) -> str:\n    import random\n    if random.random() < 0.7:\n        raise ConnectionError(\"Timeout\")\n    return f\"Response from {url}\"\n\nprint(unstable_network_call(\"http://example.com\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "155-decorator-factories",
      children: "15.5 Decorator Factories"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Multiple decorators stack bottom-up: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@a @b"
        }), " applies ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a(b(func))"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A decorator factory takes arguments and returns a decorator:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def repeat(n: int):\n    \"\"\"Decorator factory: repeat the function n times.\"\"\"\n    def decorator(func):\n        @wraps(func)\n        def wrapper(*args, **kwargs):\n            results = []\n            for _ in range(n):\n                results.append(func(*args, **kwargs))\n            return results\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef get_time() -> str:\n    import time\n    return time.strftime(\"%H:%M:%S\")\n\nprint(get_time())  # ['14:30:01', '14:30:01', '14:30:01']\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The syntax ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@repeat(3)"
      }), " breaks down as:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "get_time = repeat(3)(get_time)\n# first:  repeat(3) returns the decorator\n# second: decorator(get_time) returns the wrapper\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "156-multiple-decorators",
      children: "15.6 Multiple Decorators"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Decorators stack bottom-up (the one closest to the function applies first):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@timer\n@debug\ndef compute(x: int) -> int:\n    return x ** 2\n\ncompute(5)\n# Equivalent to: compute = timer(debug(compute))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trace:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "debug(compute)"
        }), " creates a wrapper"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "timer(wrapper)"
        }), " wraps the debug wrapper"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Calling ", (0,jsx_runtime.jsx)(_components.code, {
          children: "compute(5)"
        }), " first enters the timer, which calls the debug wrapper, which calls the original function"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Order matters:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@debug\n@timer\ndef compute(x: int) -> int:\n    return x ** 2\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This differs because ", (0,jsx_runtime.jsx)(_components.code, {
        children: "timer"
      }), " wraps first, then ", (0,jsx_runtime.jsx)(_components.code, {
        children: "debug"
      }), " wraps the timed version."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "157-class-decorators",
      children: "15.7 Class Decorators"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Decorators can also modify classes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def add_repr(cls):\n    \"\"\"Add a __repr__ method to a class.\"\"\"\n    def __repr__(self) -> str:\n        items = \", \".join(f\"{k}={v!r}\" for k, v in self.__dict__.items())\n        return f\"{cls.__name__}({items})\"\n    cls.__repr__ = __repr__\n    return cls\n\n@add_repr\nclass Person:\n    def __init__(self, name: str, age: int):\n        self.name = name\n        self.age = age\n\np = Person(\"Alice\", 30)\nprint(p)  # Person(name='Alice', age=30)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1571-singleton-decorator",
      children: "15.7.1 Singleton Decorator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def singleton(cls):\n    instances = {}\n    @wraps(cls)\n    def get_instance(*args, **kwargs):\n        if cls not in instances:\n            instances[cls] = cls(*args, **kwargs)\n        return instances[cls]\n    return get_instance\n\n@singleton\nclass Database:\n    def __init__(self):\n        print(\"Database instance created\")\n\ndb1 = Database()  # Database instance created\ndb2 = Database()  # no output → reuses instance\nprint(db1 is db2)  # True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "158-decorators-with-optional-arguments",
      children: "15.8 Decorators with Optional Arguments"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Support both ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@decorator"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@decorator(args)"
      }), " syntax:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from functools import wraps\n\ndef log(func=None, *, prefix: str = \"LOG\"):\n    if func is None:\n        # Called as @log(prefix=\"...\")\n        return lambda f: log(f, prefix=prefix)\n    \n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        print(f\"{prefix}: {func.__name__} called\")\n        return func(*args, **kwargs)\n    return wrapper\n\n@log\ndef simple(): pass\n\n@log(prefix=\"INFO\")\ndef detailed(): pass\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@timer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measure execution time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uses time.perf_counter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@debug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log calls and returns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prints args/kwargs/result"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memoize results"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dict keyed on args"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@retry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retry on failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backoff between attempts"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from functools import wraps\n\ndef timer(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        import time\n        start = time.perf_counter()\n        result = func(*args, **kwargs)\n        print(f\"{func.__name__}: {time.perf_counter()-start:.3f}s\")\n        return result\n    return wrapper\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Relevant Section"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web Dev"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route decorators in Flask/FastAPI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Science"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache expensive computations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15.4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DevOps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retry decorator for API calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15.4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logging decorator for task pipelines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15.4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " What is a decorator in Python?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a class that inherits from another"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["a function that wraps another function ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a lambda expression"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a type annotation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " Why use @functools.wraps?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "to add metadata"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["to preserve ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "name"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "doc"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "to improve performance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "to enable recursion"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " How do multiple decorators stack?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "top-down"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["bottom-up ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "in order of definition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "randomly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " What does a decorator factory return?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a wrapped function"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["a decorator ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a class"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a lambda"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " What does @timer decorator typically measure?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "memory usage"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["execution time ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CPU usage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "network latency"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TypeScript has its own decorator proposal (TC39 stage 3) with a different syntax:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript decorator (TS 5.x native decorators)\nfunction logged<T extends (...args: any[]) => any>(\n  target: T,\n  context: ClassMethodDecoratorContext\n): T {\n  function replacement(this: any, ...args: any[]) {\n    console.log(`Calling ${String(context.name)} with`, args);\n    const result = target.call(this, ...args);\n    console.log(`Result:`, result);\n    return result;\n  }\n  return replacement as T;\n}\n\nclass Calculator {\n  @logged\n  add(a: number, b: number): number {\n    return a + b;\n  }\n\n  @logged\n  multiply(a: number, b: number): number {\n    return a * b;\n  }\n}\n\n// Timing decorator\nfunction timed<T extends (...args: any[]) => any>(\n  target: T,\n  context: ClassMethodDecoratorContext\n): T {\n  function replacement(this: any, ...args: any[]) {\n    const start = performance.now();\n    const result = target.call(this, ...args);\n    const elapsed = performance.now() - start;\n    console.log(`${String(context.name)} took ${elapsed.toFixed(2)}ms`);\n    return result;\n  }\n  return replacement as T;\n}\n\n// Higher-order function (more common TS pattern, no decorator needed)\nfunction memoize<T extends (...args: any[]) => any>(fn: T): T {\n  const cache = new Map<string, any>();\n  return function (this: any, ...args: any[]) {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) return cache.get(key);\n    const result = fn.call(this, ...args);\n    cache.set(key, result);\n    return result;\n  } as T;\n}\n\nconst fib = memoize(function (n: number): number {\n  if (n <= 1) return n;\n  return fib(n - 1) + fib(n - 2);\n});\nconsole.log(fib(40));  // computed quickly with memoization\n\n// Property decorator for read-only\nfunction readOnly(target: any, key: string): void {\n  Object.defineProperty(target, key, { writable: false });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-vs-typescript-decorators",
      children: "Python vs TypeScript Decorators"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Python"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TypeScript"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@decorator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@decorator"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Targets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functions + classes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Methods + properties (TS-native)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arguments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Factory wrapper pattern"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "context"
            }), " parameter"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Composition"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@a @b"
            }), " bottom-up"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Common use"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@lru_cache"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@property"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logging, timing, validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core feature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stage 3 (native in TS 5.x)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-use-decorators-vs-wrappers",
      children: "When to Use Decorators vs Wrappers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Option 1: Decorator (applied at definition time)\n@timer\ndef compute(): ...\n\n# Option 2: Explicit wrapper (applied at call time)\ncompute = timer(compute)\n\n# Option 3: Context manager (applied at execution time)\nwith timing(\"compute\"):\n    compute()\n\n# Rule of thumb:\n# - Use decorators when the behavior should apply to ALL calls\n# - Use context managers when timing varies per invocation\n# - Use explicit wrappers when you need conditional application\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Chapter 15: TypeScript Decorator & Higher-Order Function Equivalents\n// Python: decorators wrap functions → TypeScript: higher-order functions\n\n// Simple function wrapper (like a decorator without @ syntax)\nfunction timer<Args extends unknown[], Return>(\n  fn: (...args: Args) => Return\n): (...args: Args) => Return {\n  return (...args: Args): Return => {\n    const start = performance.now();\n    const result = fn(...args);\n    const elapsed = performance.now() - start;\n    console.log(`${fn.name} took ${elapsed.toFixed(2)}ms`);\n    return result;\n  };\n}\n\nconst slowSum = (a: number, b: number): number => {\n  for (let i = 0; i < 1e7; i++);  // simulate work\n  return a + b;\n};\n\nconst timedSum = timer(slowSum);\nconsole.log(timedSum(3, 4));  // logs timing, returns 7\n\n// Python: @lru_cache → TypeScript: memoization wrapper\nfunction memoize<Args extends unknown[], Return>(\n  fn: (...args: Args) => Return\n): (...args: Args) => Return {\n  const cache = new Map<string, Return>();\n  return (...args: Args): Return => {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) return cache.get(key)!;\n    const result = fn(...args);\n    cache.set(key, result);\n    return result;\n  };\n}\n\nconst fib = memoize((n: number): number => {\n  if (n <= 1) return n;\n  return fib(n - 1) + fib(n - 2);\n});\nconsole.log(fib(40));  // 102334155 (fast due to memoization)\n\n// TypeScript native decorators (Stage 3, TS 5.x)\nfunction Logged(target: any, propertyKey: string, descriptor: PropertyDescriptor) {\n  const original = descriptor.value;\n  descriptor.value = function (...args: any[]) {\n    console.log(`Calling ${propertyKey} with`, args);\n    return original.apply(this, args);\n  };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-higher-order-function-patterns",
      children: "TypeScript Higher-Order Function Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Python: retry decorator → TypeScript: retry wrapper\nasync function retry<T>(\n  fn: () => Promise<T>,\n  maxAttempts: number = 3,\n  delayMs: number = 1000\n): Promise<T> {\n  for (let attempt = 1; attempt <= maxAttempts; attempt++) {\n    try {\n      return await fn();\n    } catch (error) {\n      if (attempt === maxAttempts) throw error;\n      console.warn(`Attempt ${attempt} failed, retrying...`);\n      await new Promise((r) => setTimeout(r, delayMs));\n    }\n  }\n  throw new Error(\"Unreachable\");\n}\n\n// Python: @validate_args → TypeScript: runtime type check wrapper\nfunction validateTypes(fn: Function, paramTypes: string[]): Function {\n  return (...args: unknown[]) => {\n    for (let i = 0; i < args.length; i++) {\n      const actual = typeof args[i];\n      const expected = paramTypes[i];\n      if (actual !== expected) {\n        throw new TypeError(`Argument ${i}: expected ${expected}, got ${actual}`);\n      }\n    }\n    return fn(...args);\n  };\n}\nconst safeAdd = validateTypes((a: number, b: number) => a + b, [\"number\", \"number\"]);\nconsole.log(safeAdd(2, 3));  // 5\n// safeAdd(2, \"3\");  // TypeError\n\n// Python: @deprecated → TypeScript: deprecation wrapper\nfunction deprecated(message: string) {\n  return (_target: any, propertyKey: string, descriptor: PropertyDescriptor) => {\n    const original = descriptor.value;\n    descriptor.value = function (...args: unknown[]) {\n      console.warn(`Deprecated: ${propertyKey} — ${message}`);\n      return original.apply(this, args);\n    };\n  };\n}\n\n// Python: @singleton → TypeScript: Singleton pattern\nclass Singleton {\n  private static instance: Singleton;\n  private constructor() {}\n  static getInstance(): Singleton {\n    if (!Singleton.instance) {\n      Singleton.instance = new Singleton();\n    }\n    return Singleton.instance;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-utilities",
      children: "TypeScript Utilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Decorator Factory ===\ntype Decorator<T extends (...args: any[]) => any> = (fn: T, context?: ClassMethodDecoratorContext) => T | void;\nfunction createDecorator<T extends (...args: any[]) => any>(before?: () => void, after?: () => void): Decorator<T> {\n  return ((fn: T, _context?: ClassMethodDecoratorContext) => {\n    return function (this: any, ...args: Parameters<T>): ReturnType<T> {\n      before?.();\n      const result = fn.apply(this, args);\n      after?.();\n      return result;\n    } as T;\n  }) as Decorator<T>;\n}\nconst logCall = createDecorator(() => console.log(\"Before\"), () => console.log(\"After\"));\nclass Service {\n  static process(n: number): number { return n * 2; }\n}\nconsole.log(Service.process(5));\n\n// === Memoize with TTL ===\nfunction memoizeWithTTL<T>(fn: (...args: unknown[]) => T, ttlMs: number): (...args: unknown[]) => T {\n  const cache = new Map<string, { value: T; expiry: number }>();\n  return (...args: unknown[]): T => {\n    const key = JSON.stringify(args);\n    const entry = cache.get(key);\n    if (entry && Date.now() < entry.expiry) return entry.value;\n    const result = fn(...args);\n    cache.set(key, { value: result, expiry: Date.now() + ttlMs });\n    return result;\n  };\n}\nlet callCount = 0;\nconst expensiveFn = (n: number) => { callCount++; return n * n; };\nconst memoized = memoizeWithTTL(expensiveFn, 5000);\nconsole.log(memoized(5), memoized(5), callCount); // 25, 25, 1\n\n// === Retry with Backoff ===\nasync function retryWithBackoff<T>(\n  fn: () => Promise<T>,\n  maxRetries = 3,\n  baseDelay = 1000\n): Promise<T> {\n  for (let attempt = 0; attempt <= maxRetries; attempt++) {\n    try { return await fn(); }\n    catch (err) {\n      if (attempt === maxRetries) throw err;\n      const delay = baseDelay * Math.pow(2, attempt) + Math.random() * 100;\n      await new Promise((r) => setTimeout(r, delay));\n    }\n  }\n  throw new Error(\"Unreachable\");\n}\n// await retryWithBackoff(() => fetch(\"https://api.example.com/data\"));\n\n// === Method Decorator for Timing ===\nfunction timed<T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<(...args: any[]) => T>) {\n  const original = descriptor.value!;\n  descriptor.value = function (...args: any[]) {\n    const start = performance.now();\n    const result = original.apply(this, args);\n    console.log(`${propertyKey} took ${performance.now() - start}ms`);\n    return result;\n  };\n}\n\n// === Property Decorator for Validation ===\nfunction validate(min: number, max: number) {\n  return function (target: any, propertyKey: string) {\n    let value: number;\n    Object.defineProperty(target, propertyKey, {\n      get: () => value,\n      set: (v: number) => { if (v < min || v > max) throw new Error(`Out of range [${min}, ${max}]`); value = v; },\n    });\n  };\n}\nclass Temp {\n  @validate(-273, 1000)\n  celsius = 0;\n}\nconst t = new Temp();\n// t.celsius = -300; // throws\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-decorator--hof-patterns",
      children: "TypeScript Decorator & HOF Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Python-style decorator via higher-order function ===\nfunction logCalls<T extends (...args: unknown[]) => unknown>(fn: T): T {\n  return ((...args: Parameters<T>) => {\n    console.log(`Called ${fn.name}(${args.map(a => JSON.stringify(a)).join(\", \")})`);\n    const result = fn(...args);\n    console.log(`Returned ${JSON.stringify(result)}`);\n    return result;\n  }) as T;\n}\nconst add = logCalls((a: number, b: number) => a + b);\nconsole.log(add(3, 4)); // Logs: Called (3, 4) → 7\n\n// === Timing decorator ===\nfunction timed<T extends (...args: unknown[]) => unknown>(fn: T): T {\n  return ((...args: Parameters<T>) => {\n    const start = performance.now();\n    const result = fn(...args);\n    const elapsed = performance.now() - start;\n    console.log(`${fn.name} took ${elapsed.toFixed(2)}ms`);\n    return result;\n  }) as T;\n}\nconst expensive = timed((n: number) => {\n  let sum = 0;\n  for (let i = 0; i < n; i++) sum += i;\n  return sum;\n});\nconsole.log(expensive(1000000));\n\n// === Retry decorator ===\nfunction retry<T extends (...args: unknown[]) => unknown>(maxAttempts: number, delayMs = 0): (fn: T) => T {\n  return (fn: T) => ((...args: Parameters<T>) => {\n    let lastError: unknown;\n    for (let attempt = 1; attempt <= maxAttempts; attempt++) {\n      try {\n        return fn(...args);\n      } catch (err) {\n        lastError = err;\n        console.log(`Attempt ${attempt}/${maxAttempts} failed: ${err}`);\n        if (attempt < maxAttempts && delayMs > 0) {\n          // wait\n        }\n      }\n    }\n    throw lastError;\n  }) as T;\n}\n\n// === Memoization decorator ===\nfunction memoize2<T extends (...args: unknown[]) => unknown>(fn: T): T {\n  const cache = new Map<string, unknown>();\n  return ((...args: Parameters<T>) => {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) {\n      console.log(`[cache hit] ${key}`);\n      return cache.get(key);\n    }\n    const result = fn(...args);\n    cache.set(key, result);\n    return result;\n  }) as T;\n}\nconst fib = memoize2((n: number): number => {\n  if (n < 2) return n;\n  return fib(n - 1) + fib(n - 2);\n});\nconsole.log(fib(40)); // Fast\n\n// === Validation decorator ===\nfunction validate<T extends (...args: unknown[]) => unknown>(schema: Record<string, string>): (fn: T) => T {\n  return (fn: T) => ((...args: Parameters<T>) => {\n    args.forEach((arg, i) => {\n      const expected = schema[`arg${i}`];\n      if (expected && typeof arg !== expected) {\n        throw new TypeError(`Argument ${i}: expected ${expected}, got ${typeof arg}`);\n      }\n    });\n    return fn(...args);\n  }) as T;\n}\n\n// === Rate limiting decorator ===\nfunction rateLimit<T extends (...args: unknown[]) => unknown>(maxCalls: number, periodMs: number): (fn: T) => T {\n  const calls: number[] = [];\n  return ((...args: Parameters<T>) => {\n    const now = Date.now();\n    while (calls.length > 0 && calls[0] < now - periodMs) calls.shift();\n    if (calls.length >= maxCalls) throw new Error(\"Rate limit exceeded\");\n    calls.push(now);\n    return fn(...args);\n  }) as T;\n}\n\n// === Python @wraps equivalent ===\nfunction wraps<T extends (...args: unknown[]) => unknown>(original: T, wrapper: T): T {\n  Object.defineProperties(wrapper, {\n    name: { value: original.name, configurable: true },\n    length: { value: original.length, configurable: true },\n  });\n  return wrapper;\n}\nconst original = (a: number, b: number) => a + b;\nconst wrapped = wraps(original, ((...args: unknown[]) => {\n  console.log(\"wrapper\");\n  return original(...args as [number, number]);\n}) as typeof original);\nconsole.log(wrapped.name); // original\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-advanced-decorator-patterns",
      children: "TypeScript Advanced Decorator Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Async Decorator with Retry ===\nfunction asyncRetry(maxRetries = 3, delay = 500) {\n  return (_target: any, _key: string, descriptor: PropertyDescriptor) => {\n    const original = descriptor.value;\n    descriptor.value = async function (...args: unknown[]) {\n      for (let i = 0; i < maxRetries; i++) {\n        try { return await original.apply(this, args); } catch (e) {\n          if (i === maxRetries - 1) throw e;\n          await new Promise(r => setTimeout(r, delay * Math.pow(2, i)));\n        }\n      }\n    };\n    return descriptor;\n  };\n}\n\n// === Deprecation Decorator ===\nfunction deprecated(message?: string) {\n  return (target: any, key: string, descriptor: PropertyDescriptor) => {\n    const original = descriptor.value;\n    descriptor.value = function (...args: unknown[]) {\n      console.warn(`Deprecated: ${key}${message ? ` - ${message}` : \"\"}`);\n      return original.apply(this, args);\n    };\n    return descriptor;\n  };\n}\n\n// === Rate Limit Decorator ===\nfunction rateLimit(maxCalls: number, windowMs: number) {\n  let calls: number[] = [];\n  return (_target: any, _key: string, descriptor: PropertyDescriptor) => {\n    const original = descriptor.value;\n    descriptor.value = function (...args: unknown[]) {\n      const now = Date.now();\n      calls = calls.filter(t => now - t < windowMs);\n      if (calls.length >= maxCalls) throw new Error(\"Rate limit exceeded\");\n      calls.push(now);\n      return original.apply(this, args);\n    };\n    return descriptor;\n  };\n}\n\n// === Memoize Decorator ===\nfunction memoize(target: any, key: string, descriptor: PropertyDescriptor) {\n  const original = descriptor.value;\n  const cache = new Map<string, unknown>();\n  descriptor.value = function (...args: unknown[]) {\n    const key2 = JSON.stringify(args);\n    if (!cache.has(key2)) cache.set(key2, original.apply(this, args));\n    return cache.get(key2);\n  };\n  return descriptor;\n}\n\n// === Debounce Decorator ===\nfunction debounceDecorator(delay: number) {\n  let timeouts: ReturnType<typeof setTimeout>[] = [];\n  return (_target: any, _key: string, descriptor: PropertyDescriptor) => {\n    const original = descriptor.value;\n    descriptor.value = function (...args: unknown[]) {\n      for (const t of timeouts) clearTimeout(t);\n      timeouts.push(setTimeout(() => {\n        original.apply(this, args);\n        timeouts = [];\n      }, delay));\n    };\n    return descriptor;\n  };\n}\n\n// === Validation Decorator ===\nfunction validate(...validators: Array<(value: unknown) => boolean | string>) {\n  return (_target: any, _key: string, descriptor: PropertyDescriptor) => {\n    const original = descriptor.value;\n    descriptor.value = function (...args: unknown[]) {\n      for (let i = 0; i < Math.min(validators.length, args.length); i++) {\n        const result = validators[i](args[i]);\n        if (typeof result === \"string\") throw new Error(result);\n        if (!result) throw new Error(`Argument ${i} failed validation`);\n      }\n      return original.apply(this, args);\n    };\n    return descriptor;\n  };\n}\n\nclass DecoratedService {\n  @memoize\n  fibonacci(n: number): number {\n    return n <= 1 ? n : this.fibonacci(n - 1) + this.fibonacci(n - 2);\n  }\n  \n  @deprecated(\"Use newMethod instead\")\n  oldMethod(): string { return \"old result\"; }\n}\n\nconst svc = new DecoratedService();\nconsole.log(svc.fibonacci(40)); // 102334155 (fast due to memoize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decorators wrap functions to extend behaviour."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Always use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@functools.wraps"
        }), " to preserve metadata."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Patterns: timer, debug, cache, retry."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Decorator factories take arguments and return decorators."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple decorators stack bottom-up (closest to function first)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Class decorators modify or replace classes."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "None"
        }), "-default pattern for optional decorator arguments."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@wraps"
        }), " do and why is it important?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How do multiple decorators compose? Which is applied first?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between a decorator and a decorator factory?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does a singleton class decorator work?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When would you use a class decorator vs inheritance?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@memoize"
        }), " decorator with a configurable ", (0,jsx_runtime.jsx)(_components.code, {
          children: "max_size"
        }), " parameter that limits the cache size using an LRU eviction strategy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@validate_args"
        }), " decorator that checks type annotations at runtime and raises ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TypeError"
        }), " if arguments don't match."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@deprecated(since=\"1.0\", removal=\"2.0\")"
        }), " decorator that prints a warning (with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "warnings.warn"
        }), ") when the decorated function is called."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@rate_limit(calls, period)"
      }), " decorator that limits a function to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "calls"
      }), " invocations per ", (0,jsx_runtime.jsx)(_components.code, {
        children: "period"
      }), " seconds. Use a lock or queue to handle concurrency in a thread-safe way. If the limit is exceeded, the caller should wait until a slot becomes available. Provide a test that verifies rate limiting behaviour with multiple concurrent callers."]
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