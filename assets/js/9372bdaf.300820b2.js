"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[91263],{

/***/ 31078
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_03_data_structures_algorithms_03_strings_md_937_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-03-data-structures-algorithms-03-strings-md-937.json
const site_docs_courses_ai_engineering_placement_03_data_structures_algorithms_03_strings_md_937_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/data-structures-algorithms/03-strings","title":"Strings","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/03-data-structures-algorithms/03-strings.md","sourceDirName":"courses/ai-engineering-placement/03-data-structures-algorithms","slug":"/ai-engineering-placement/03-data-structures-algorithms/03-strings","permalink":"/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/03-strings","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":37,"frontMatter":{"id":"03-strings","slug":"/ai-engineering-placement/03-data-structures-algorithms/03-strings","title":"Strings","sidebar_label":"Strings","sidebar_position":37},"sidebar":"coursesSidebar","previous":{"title":"Arrays","permalink":"/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/02-arrays"},"next":{"title":"Sliding Window","permalink":"/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/04-sliding-window"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/03-data-structures-algorithms/03-strings.md


const frontMatter = {
	id: '03-strings',
	slug: '/ai-engineering-placement/03-data-structures-algorithms/03-strings',
	title: 'Strings',
	sidebar_label: 'Strings',
	sidebar_position: 37
};
const contentTitle = 'Strings';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Introduction",
  "id": "introduction",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Key Terminology",
  "id": "key-terminology",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
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
  "value": "3.1 String Fundamentals",
  "id": "31-string-fundamentals",
  "level": 2
}, {
  "value": "3.2 String Operations",
  "id": "32-string-operations",
  "level": 2
}, {
  "value": "3.3 Pattern Matching",
  "id": "33-pattern-matching",
  "level": 2
}, {
  "value": "3.4 Palindrome Problems",
  "id": "34-palindrome-problems",
  "level": 2
}, {
  "value": "3.5 Anagram and Counting",
  "id": "35-anagram-and-counting",
  "level": 2
}, {
  "value": "3.6 Subsequence Problems",
  "id": "36-subsequence-problems",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
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
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "LPS = [0, 1, 0, 1]",
  "id": "lps--0-1-0-1",
  "level": 2
}, {
  "value": "At mismatch on j=3, we set j = LPS[2] = 0",
  "id": "at-mismatch-on-j3-we-set-j--lps2--0",
  "level": 2
}, {
  "value": "This skips already-matched characters</code></pre>",
  "id": "this-skips-already-matched-characters",
  "level": 2
}, {
  "value": "O(n²) — creates new string each iteration",
  "id": "on--creates-new-string-each-iteration",
  "level": 2
}, {
  "value": "O(n) — builds list, joins once",
  "id": "on--builds-list-joins-once",
  "level": 2
}, {
  "value": "For n=10000, join is 1000x faster than +=</code></pre>",
  "id": "for-n10000-join-is-1000x-faster-than-",
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
  "value": "Common Mistakes",
  "id": "common-mistakes",
  "level": 2
}, {
  "value": "Revision Notes",
  "id": "revision-notes",
  "level": 2
}, {
  "value": "Placement Section",
  "id": "placement-section",
  "level": 2
}, {
  "value": "Top 10 Interview Questions",
  "id": "top-10-interview-questions",
  "level": 3
}, {
  "value": "Google Style",
  "id": "google-style",
  "level": 4
}, {
  "value": "Amazon Style",
  "id": "amazon-style",
  "level": 4
}, {
  "value": "Microsoft Style",
  "id": "microsoft-style",
  "level": 4
}, {
  "value": "NVIDIA Style",
  "id": "nvidia-style",
  "level": 4
}, {
  "value": "AI Startup Style",
  "id": "ai-startup-style",
  "level": 4
}, {
  "value": "Resume Tips",
  "id": "resume-tips",
  "level": 3
}, {
  "value": "Interview Day Checklist",
  "id": "interview-day-checklist",
  "level": 3
}, {
  "value": "True/False",
  "id": "truefalse",
  "level": 2
}, {
  "value": "Fill in the Blank",
  "id": "fill-in-the-blank",
  "level": 2
}, {
  "value": "Scenario Questions",
  "id": "scenario-questions",
  "level": 2
}, {
  "value": "Output Questions",
  "id": "output-questions",
  "level": 2
}, {
  "value": "Difficulty Level",
  "id": "difficulty-level",
  "level": 2
}, {
  "value": "Tips &amp; Tricks",
  "id": "tips--tricks",
  "level": 2
}, {
  "value": "Memory Tricks",
  "id": "memory-tricks",
  "level": 2
}, {
  "value": "Further Reading",
  "id": "further-reading",
  "level": 2
}, {
  "value": "Related Topics",
  "id": "related-topics",
  "level": 2
}, {
  "value": "FAQs",
  "id": "faqs",
  "level": 2
}, {
  "value": "Important Notes",
  "id": "important-notes",
  "level": 2
}, {
  "value": "Historical Context",
  "id": "historical-context",
  "level": 2
}, {
  "value": "Security Considerations",
  "id": "security-considerations",
  "level": 2
}, {
  "value": "ML Intuition",
  "id": "ml-intuition",
  "level": 2
}, {
  "value": "Analogies",
  "id": "analogies",
  "level": 2
}, {
  "value": "Capstone Project Link",
  "id": "capstone-project-link",
  "level": 2
}, {
  "value": "Flashcards",
  "id": "flashcards",
  "level": 2
}, {
  "value": "Research References",
  "id": "research-references",
  "level": 2
}, {
  "value": "Open-Source Tools",
  "id": "open-source-tools",
  "level": 2
}, {
  "value": "Debugging Guide",
  "id": "debugging-guide",
  "level": 2
}, {
  "value": "Mock Interview Section",
  "id": "mock-interview-section",
  "level": 2
}, {
  "value": "Optimized Implementation",
  "id": "optimized-implementation",
  "level": 2
}, {
  "value": "Evaluation Metrics",
  "id": "evaluation-metrics",
  "level": 2
}, {
  "value": "Real-World Examples",
  "id": "real-world-examples",
  "level": 2
}, {
  "value": "Next Topic",
  "id": "next-topic",
  "level": 2
}, {
  "value": "Limitations",
  "id": "limitations",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    button: "button",
    code: "code",
    details: "details",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "strings",
        children: "Strings"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Objective"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand string immutability and memory representation in Python"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Master string traversal, slicing, and common built-in methods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement string pattern matching using KMP and Rabin-Karp algorithms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solve palindrome problems using expansion and DP techniques"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle anagram, subsequence, and substring problems efficiently"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply string hashing and rolling hash techniques for comparison"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strings are sequences of characters with unique operations. Many interview problems involve string manipulation, pattern matching, and anagram/subsequence detection. Understanding string algorithms is crucial for NLP and text processing in AI."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Array basics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Character encoding (ASCII/Unicode)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Terms"
      }), ": Core vocabulary and concepts for this topic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition"
      }), ": Essential terms you must know for interviews and production work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding strings is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how strings works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "3.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String Fundamentals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutability, memory layout, Unicode"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String Operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slicing, methods, concatenation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern Matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KMP, Rabin-Karp, Z-algorithm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Palindrome Problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expand around center, DP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anagram and Counting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Character frequency, sliding window"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subsequence Problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LCS, edit distance, distinct subsequences"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[String Fundamentals] --> B[String Operations]\n    B --> C[Pattern Matching]\n    B --> D[Palindrome]\n    B --> E[Anagram & Counting]\n    C --> F[Subsequence]\n    D --> F\n    E --> F\n    F --> G[Practice Problems]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "31-string-fundamentals",
      children: "3.1 String Fundamentals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Strings are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "immutable sequences of Unicode characters"
      }), " in Python. Every string operation that appears to modify a string actually creates a new string object."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Memory representation"
      }), ": Python 3 stores strings as either:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compact ASCII"
        }), " (1 byte per char) — when all characters are ASCII"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compact"
        }), " (1, 2, or 4 bytes per char) — depending on the largest Unicode code point"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Strings are immutable\ns = \"hello\"\n\n## s[0] = \"H\"  # TypeError: 'str' object does not support item assignment\n\n## Every \"modification\" creates a new string\ns = s.upper()  # \"HELLO\" — new string\n\n## String interning — small strings are cached\na = \"hello\"\nb = \"hello\"\nprint(a is b)  # True — interned (CPython may intern some strings)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Unicode support"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Unicode characters — Python 3 strings are Unicode\nemoji = \"🚀🔥🐍\"\nchinese = \"你好世界\"\nhindi = \"नमस्ते दुनिया\"\n\n## Character vs byte length\nprint(len(emoji))      # 3 characters\nprint(len(emoji.encode('utf-8')))  # 12 bytes\n\n## Code points\nprint(ord('A'))   # 65\nprint(ord('🔥'))  # 128293\nprint(chr(65))    # 'A'\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "String creation and conversion"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Different ways to create strings\ns1 = \"double quotes\"\ns2 = 'single quotes'\ns3 = \"\"\"multi-line\nstring\"\"\"\ns4 = str(42)           # \"42\"\ns5 = str(3.14)         # \"3.14\"\ns6 = repr(\"hello\\n\")   # \"'hello\\\\n'\" — with escape sequences\n\n## Join — most efficient for building strings from lists\nwords = [\"hello\", \"world\", \"python\"]\nsentence = \" \".join(words)  # \"hello world python\"\n\n## Split\ndata = \"a,b,c,d\"\nitems = data.split(\",\")     # [\"a\", \"b\", \"c\", \"d\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "32-string-operations",
      children: "3.2 String Operations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Slicing — [start:stop:step]"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "s = \"Hello, World!\"\n\nprint(s[0])       # 'H' — first character\nprint(s[-1])      # '!' — last character\nprint(s[0:5])     # 'Hello' — characters 0-4\nprint(s[7:])      # 'World!' — from index 7 to end\nprint(s[:5])      # 'Hello' — from start to index 4\nprint(s[::2])     # 'Hlo ol!' — every 2nd character\nprint(s[::-1])    # '!dlroW ,olleH' — reversed\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common string methods"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "text = \"  Python Programming  \"\n\n## Whitespace handling\nprint(text.strip())          # \"Python Programming\"\nprint(text.lstrip())         # \"Python Programming  \"\nprint(text.rstrip())         # \"  Python Programming\"\n\n## Case conversion\nprint(text.upper())          # \"  PYTHON PROGRAMMING  \"\nprint(text.lower())          # \"  python programming  \"\nprint(text.swapcase())       # \"  pYTHON pROGRAMMING  \"\nprint(text.title())          # \"  Python Programming  \"\n\n## Searching\nprint(text.find(\"Pro\"))      # 10\nprint(text.find(\"Java\"))     # -1\nprint(text.index(\"Pro\"))     # 10\n\n## print(text.index(\"Java\"))  # ValueError!\nprint(text.count(\"m\"))       # 2\n\n## Checking\nprint(text.startswith(\"  Py\"))  # True\nprint(text.endswith(\"g  \"))     # True\nprint(\"123\".isdigit())          # True\nprint(\"abc\".isalpha())          # True\nprint(\"abc123\".isalnum())       # True\n\n## Replacing\nprint(text.replace(\"Python\", \"Java\"))  # \"  Java Programming  \"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "String formatting"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "name, age, score = \"Alice\", 30, 95.5\n\n## f-strings (preferred)\nprint(f\"{name} is {age} years old with score {score:.1f}\")\n\n## str.format()\nprint(\"{} is {} years old\".format(name, age))\n\n## % formatting (old style)\nprint(\"%s is %d years old\" % (name, age))\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Efficient string building"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Bad — O(n²) because strings are immutable\ndef build_bad(n):\n    result = \"\"\n    for i in range(n):\n        result += str(i)  # Creates new string each time\n    return result\n\n## Good — O(n) using list join\ndef build_good(n):\n    parts = []\n    for i in range(n):\n        parts.append(str(i))\n    return \"\".join(parts)\n\n## Even better — using generator\ndef build_best(n):\n    return \"\".join(str(i) for i in range(n))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "33-pattern-matching",
      children: "3.3 Pattern Matching"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Naive pattern matching"
      }), ": O(n—m) time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def naive_search(text, pattern):\n    n, m = len(text), len(pattern)\n    positions = []\n    for i in range(n - m + 1):\n        match = True\n        for j in range(m):\n            if text[i + j] != pattern[j]:\n                match = False\n                break\n        if match:\n            positions.append(i)\n    return positions\n\nprint(naive_search(\"AABAACAADAABAAABAA\", \"AABA\"))  # [0, 9, 13]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "KMP (Knuth-Morris-Pratt) algorithm"
      }), ": O(n+m) time by preprocessing the pattern."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def kmp_search(text, pattern):\n    \"\"\"KMP pattern matching — O(n+m) time\"\"\"\n    n, m = len(text), len(pattern)\n    if m == 0:\n        return []\n\n    # Compute LPS (Longest Prefix Suffix) array\n    lps = [0] * m\n    length = 0\n    i = 1\n\n    while i < m:\n        if pattern[i] == pattern[length]:\n            length += 1\n            lps[i] = length\n            i += 1\n        else:\n            if length != 0:\n                length = lps[length - 1]\n            else:\n                lps[i] = 0\n                i += 1\n\n    # Search using LPS\n    positions = []\n    i = j = 0\n    while i < n:\n        if text[i] == pattern[j]:\n            i += 1\n            j += 1\n\n        if j == m:\n            positions.append(i - j)\n            j = lps[j - 1]\n        elif i < n and text[i] != pattern[j]:\n            if j != 0:\n                j = lps[j - 1]\n            else:\n                i += 1\n\n    return positions\n\nprint(kmp_search(\"AABAACAADAABAAABAA\", \"AABA\"))  # [0, 9, 13]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rabin-Karp algorithm"
      }), ": Uses rolling hash for pattern matching."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def rabin_karp(text, pattern, d=256, q=101):\n    \"\"\"Rabin-Karp pattern matching using rolling hash\"\"\"\n    n, m = len(text), len(pattern)\n    if m > n or m == 0:\n        return []\n\n    # Precompute d^(m-1) % q\n    h = pow(d, m - 1, q)\n\n    # Compute hash of pattern and first window\n    p_hash = t_hash = 0\n    for i in range(m):\n        p_hash = (d * p_hash + ord(pattern[i])) % q\n        t_hash = (d * t_hash + ord(text[i])) % q\n\n    positions = []\n    for i in range(n - m + 1):\n        if p_hash == t_hash:\n            # Verify character by character\n            if text[i:i + m] == pattern:\n                positions.append(i)\n\n        # Compute next window hash\n        if i < n - m:\n            t_hash = (d * (t_hash - ord(text[i]) * h) + ord(text[i + m])) % q\n            if t_hash < 0:\n                t_hash += q\n\n    return positions\n\nprint(rabin_karp(\"AABAACAADAABAAABAA\", \"AABA\"))  # [0, 9, 13]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Z-algorithm"
      }), ": Computes longest prefix matching at each position."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def z_algorithm(s):\n    \"\"\"Z-algorithm: computes Z-array where Z[i] = longest substring starting\n    at i that matches prefix of s\"\"\"\n    n = len(s)\n    z = [0] * n\n    l = r = 0\n\n    for i in range(1, n):\n        if i <= r:\n            z[i] = min(r - i + 1, z[i - l])\n        while i + z[i] < n and s[z[i]] == s[i + z[i]]:\n            z[i] += 1\n        if i + z[i] - 1 > r:\n            l = i\n            r = i + z[i] - 1\n\n    return z\n\ndef z_search(text, pattern):\n    combined = pattern + \"$\" + text\n    z = z_algorithm(combined)\n    m = len(pattern)\n    return [i - m - 1 for i in range(len(combined)) if z[i] == m]\n\nprint(z_search(\"AABAACAADAABAAABAA\", \"AABA\"))  # [0, 9, 13]\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Preprocessing"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n—m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n—m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "KMP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n+m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rabin-Karp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n+m) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Z-algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n+m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n+m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n+m)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "34-palindrome-problems",
      children: "3.4 Palindrome Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Check if string is palindrome"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def is_palindrome(s):\n    # Remove non-alphanumeric and lowercase\n    cleaned = \"\".join(c.lower() for c in s if c.isalnum())\n    return cleaned == cleaned[::-1]\n\ndef is_palindrome_two_pointer(s):\n    left, right = 0, len(s) - 1\n    while left < right:\n        while left < right and not s[left].isalnum():\n            left += 1\n        while left < right and not s[right].isalnum():\n            right -= 1\n        if s[left].lower() != s[right].lower():\n            return False\n        left += 1\n        right -= 1\n    return True\n\nprint(is_palindrome(\"A man, a plan, a canal: Panama\"))  # True\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Longest palindromic substring — expand around center"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def longest_palindrome(s):\n    \"\"\"Find longest palindromic substring — O(n²) time, O(1) space\"\"\"\n    if not s:\n        return \"\"\n\n    start, max_len = 0, 1\n\n    def expand_around_center(left, right):\n        while left >= 0 and right < len(s) and s[left] == s[right]:\n            left -= 1\n            right += 1\n        return left + 1, right - 1\n\n    for i in range(len(s)):\n        # Odd length palindrome\n        l, r = expand_around_center(i, i)\n        if r - l + 1 > max_len:\n            start, max_len = l, r - l + 1\n\n        # Even length palindrome\n        l, r = expand_around_center(i, i + 1)\n        if r - l + 1 > max_len:\n            start, max_len = l, r - l + 1\n\n    return s[start:start + max_len]\n\nprint(longest_palindrome(\"babad\"))  # \"bab\" or \"aba\"\nprint(longest_palindrome(\"cbbd\"))   # \"bb\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Manacher's algorithm"
      }), ": O(n) time, O(n) space for longest palindrome."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def manacher(s):\n    \"\"\"Manacher's algorithm — O(n) time for longest palindrome\"\"\"\n    # Transform: \"abc\" → \"^#a#b#c#$\"\n    t = \"^#\" + \"#\".join(s) + \"#$\"\n    n = len(t)\n    p = [0] * n\n    center = right = 0\n\n    for i in range(1, n - 1):\n        if i < right:\n            p[i] = min(right - i, p[2 * center - i])\n\n        # Expand around center\n        while t[i + p[i] + 1] == t[i - p[i] - 1]:\n            p[i] += 1\n\n        if i + p[i] > right:\n            center = i\n            right = i + p[i]\n\n    # Find max palindrome\n    max_len, center_idx = max((p[i], i) for i in range(1, n - 1))\n    start = (center_idx - max_len) // 2\n    return s[start:start + max_len]\n\nprint(manacher(\"babad\"))   # \"aba\" or \"bab\"\nprint(manacher(\"cbbd\"))    # \"bb\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Count palindromic substrings"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def count_palindromic_substrings(s):\n    \"\"\"Count all palindromic substrings — O(n²)\"\"\"\n    n = len(s)\n    count = 0\n\n    def expand(left, right):\n        nonlocal count\n        while left >= 0 and right < n and s[left] == s[right]:\n            count += 1\n            left -= 1\n            right += 1\n\n    for i in range(n):\n        expand(i, i)      # Odd length\n        expand(i, i + 1)  # Even length\n\n    return count\n\nprint(count_palindromic_substrings(\"abc\"))    # 3 (a, b, c)\nprint(count_palindromic_substrings(\"aaa\"))    # 6 (a, a, a, aa, aa, aaa)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "35-anagram-and-counting",
      children: "3.5 Anagram and Counting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Valid anagram"
      }), ": Two strings using same characters with same frequencies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import Counter\n\ndef is_anagram(s1, s2):\n    if len(s1) != len(s2):\n        return False\n    return Counter(s1) == Counter(s2)\n\ndef is_anagram_array(s1, s2):\n    if len(s1) != len(s2):\n        return False\n    counts = [0] * 26\n    for c in s1:\n        counts[ord(c) - ord('a')] += 1\n    for c in s2:\n        counts[ord(c) - ord('a')] -= 1\n    return all(c == 0 for c in counts)\n\nprint(is_anagram(\"listen\", \"silent\"))  # True\nprint(is_anagram(\"hello\", \"world\"))   # False\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Group anagrams"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import defaultdict\n\ndef group_anagrams(words):\n    groups = defaultdict(list)\n    for word in words:\n        # Use sorted string as key\n        key = \"\".join(sorted(word))\n        groups[key].append(word)\n    return list(groups.values())\n\nwords = [\"eat\", \"tea\", \"tan\", \"ate\", \"nat\", \"bat\"]\nprint(group_anagrams(words))\n\n## [[\"eat\", \"tea\", \"ate\"], [\"tan\", \"nat\"], [\"bat\"]]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Find all anagrams in a string"
      }), " (sliding window):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import Counter\n\ndef find_anagrams(text, pattern):\n    \"\"\"Find all start indices of pattern's anagrams in text\"\"\"\n    result = []\n    m, n = len(pattern), len(text)\n    if m > n:\n        return result\n\n    p_count = [0] * 26\n    w_count = [0] * 26\n\n    for c in pattern:\n        p_count[ord(c) - ord('a')] += 1\n    for i in range(m):\n        w_count[ord(text[i]) - ord('a')] += 1\n\n    if p_count == w_count:\n        result.append(0)\n\n    for i in range(m, n):\n        # Remove leftmost character\n        w_count[ord(text[i - m]) - ord('a')] -= 1\n        # Add new character\n        w_count[ord(text[i]) - ord('a')] += 1\n        if p_count == w_count:\n            result.append(i - m + 1)\n\n    return result\n\nprint(find_anagrams(\"cbaebabacd\", \"abc\"))  # [0, 6]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Character frequency operations"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Check if two strings are isomorphic\ndef is_isomorphic(s, t):\n    if len(s) != len(t):\n        return False\n    s_to_t, t_to_s = {}, {}\n    for c1, c2 in zip(s, t):\n        if (c1 in s_to_t and s_to_t[c1] != c2) or \\\n           (c2 in t_to_s and t_to_s[c2] != c1):\n            return False\n        s_to_t[c1] = c2\n        t_to_s[c2] = c1\n    return True\n\nprint(is_isomorphic(\"egg\", \"add\"))   # True\nprint(is_isomorphic(\"foo\", \"bar\"))   # False\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"String Problem Patterns\"\n        A[Character Count Array] --> D[Anagram Check]\n        B[Sliding Window + Count] --> E[Anagram in String]\n        C[Hash Map Mapping] --> F[Isomorphic Strings]\n        D --> G[Group Anagrams]\n        E --> G\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "36-subsequence-problems",
      children: "3.6 Subsequence Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "subsequence"
      }), " is a sequence that can be derived by deleting some elements without changing the order. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "substring"
      }), " is a contiguous subsequence."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Check subsequence"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def is_subsequence(sub, main):\n    \"\"\"Check if sub is a subsequence of main — O(n)\"\"\"\n    it = iter(main)\n    return all(c in it for c in sub)\n\ndef is_subsequence_two_pointer(sub, main):\n    i = j = 0\n    while i < len(sub) and j < len(main):\n        if sub[i] == main[j]:\n            i += 1\n        j += 1\n    return i == len(sub)\n\nprint(is_subsequence(\"abc\", \"ahbgdc\"))  # True\nprint(is_subsequence(\"axc\", \"ahbgdc\"))  # False\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Distinct subsequences"
      }), ": Count distinct ways to form T from S by deleting characters."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def num_distinct(s, t):\n    \"\"\"Count distinct subsequences of s equal to t — DP\"\"\"\n    m, n = len(s), len(t)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n\n    # Empty string is subsequence of any string\n    for i in range(m + 1):\n        dp[i][0] = 1\n\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if s[i - 1] == t[j - 1]:\n                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]\n            else:\n                dp[i][j] = dp[i - 1][j]\n\n    return dp[m][n]\n\nprint(num_distinct(\"rabbbit\", \"rabbit\"))  # 3\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Longest common subsequence (LCS)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def longest_common_subsequence(text1, text2):\n    \"\"\"LCS — DP O(m—n) time and space\"\"\"\n    m, n = len(text1), len(text2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if text1[i - 1] == text2[j - 1]:\n                dp[i][j] = dp[i - 1][j - 1] + 1\n            else:\n                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])\n\n    # Reconstruct the LCS\n    i, j = m, n\n    lcs = []\n    while i > 0 and j > 0:\n        if text1[i - 1] == text2[j - 1]:\n            lcs.append(text1[i - 1])\n            i -= 1\n            j -= 1\n        elif dp[i - 1][j] > dp[i][j - 1]:\n            i -= 1\n        else:\n            j -= 1\n\n    return dp[m][n], \"\".join(reversed(lcs))\n\nprint(longest_common_subsequence(\"abcde\", \"ace\"))  # (3, \"ace\")\nprint(longest_common_subsequence(\"abc\", \"def\"))    # (0, \"\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Edit distance"
      }), " (Levenshtein distance):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def edit_distance(word1, word2):\n    \"\"\"Minimum edits (insert, delete, replace) to convert word1 to word2\"\"\"\n    m, n = len(word1), len(word2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n\n    for i in range(m + 1):\n        dp[i][0] = i\n    for j in range(n + 1):\n        dp[0][j] = j\n\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if word1[i - 1] == word2[j - 1]:\n                dp[i][j] = dp[i - 1][j - 1]\n            else:\n                dp[i][j] = 1 + min(\n                    dp[i - 1][j],    # Delete\n                    dp[i][j - 1],    # Insert\n                    dp[i - 1][j - 1]  # Replace\n                )\n\n    return dp[m][n]\n\nprint(edit_distance(\"horse\", \"ros\"))   # 3\nprint(edit_distance(\"intention\", \"execution\"))  # 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Subsequence DP Problems\"\n        A[LCS] --> D[Reconstruction]\n        B[Edit Distance] --> E[Min Operations]\n        C[Distinct Subsequences] --> F[Count Ways]\n        D --> G[Applications]\n        E --> G\n        F --> G\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TypeScript strings provide similar methods with type safety:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// String operations in TypeScript\nconst s: string = \"Hello, World!\";\n\n// Slicing\nconsole.log(s.slice(0, 5));  // \"Hello\"\nconsole.log(s.charAt(0));    // \"H\"\n\n// Palindrome check\nfunction isPalindrome(s: string): boolean {\n    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, \"\");\n    return cleaned === cleaned.split(\"\").reverse().join(\"\");\n}\n\n// Longest common subsequence\nfunction lcs(text1: string, text2: string): number {\n    const m = text1.length, n = text2.length;\n    const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));\n    for (let i = 1; i <= m; i++) {\n        for (let j = 1; j <= n; j++) {\n            dp[i][j] = text1[i - 1] === text2[j - 1]\n                ? dp[i - 1][j - 1] + 1\n                : Math.max(dp[i - 1][j], dp[i][j - 1]);\n        }\n    }\n    return dp[m][n];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python strings are immutable; every modification creates a new string object in memory"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["String concatenation with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+"
        }), " in a loop is O(n²); use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"\".join()"
        }), " for O(n) efficiency"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The KMP algorithm precomputes the LPS array to achieve O(n+m) pattern matching by avoiding redundant comparisons"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rabin-Karp uses rolling hash for O(n) average-case matching but requires hash collision verification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manacher's algorithm finds the longest palindromic substring in O(n) time using symmetry properties"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Palindrome problems can be solved via expand-around-center (O(n²) time, O(1) space) or Manacher (O(n) time, O(n) space)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Anagram checking uses character frequency counting with array of size 26 (ASCII) or Counter (Unicode)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Subsequence problems (LCS, edit distance) are classic DP with O(m—n) time and space"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Space-optimized LCS uses two rows instead of full 2D DP table, reducing space to O(min(m,n))"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "String hashing enables efficient equality checks and is fundamental to many advanced algorithms (rolling hash, suffix arrays)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Do This"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Avoid This"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Building strings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"\".join(list_of_parts)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "result += part"
            }), " in loops"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern matching large text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KMP or Rabin-Karp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Naive O(n—m) for large data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Anagram detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Character count array of size 26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting both strings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Longest palindrome"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manacher's algorithm for O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n³) brute force"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subsequence check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-pointer iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generating all subsequences"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "String comparison"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "=="
            }), " for value comparison"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "is"
            }), " for string comparison"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unicode handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python 3 native strings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encoding to bytes prematurely"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dsa03-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: Explain the KMP algorithm for pattern matching. How does the LPS table work?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "KMP"
          }), " (Knuth-Morris-Pratt) achieves O(n+m) pattern matching by preprocessing the pattern to create an LPS (Longest Prefix Suffix) array."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "LPS array"
          }), ": LPS[i] stores the length of the longest proper prefix of pattern[0..i] that is also a suffix."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How it works"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "When a mismatch occurs at pattern[j], we don't restart from pattern[0]"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Instead, we set j = LPS[j-1] — effectively shifting the pattern to align with the already-matched portion"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "This ensures no character in the text is compared more than once"
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["# Example: pattern = \"AABA\"\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "lps--0-1-0-1",
              children: "LPS = [0, 1, 0, 1]"
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "at-mismatch-on-j3-we-set-j--lps2--0",
              children: "At mismatch on j=3, we set j = LPS[2] = 0"
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.h2, {
            id: "this-skips-already-matched-characters",
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "This skips already-matched characters"
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<p><strong>Complexity</strong>: O(m) for LPS construction, O(n) for search, O(n+m) total.</p>\n"
          })
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dsa03-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: Implement the expand-around-center approach for longest palindromic substring.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: ["def longest_palindrome(s):\n    if not s:\n        return \"\"\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "start, max_len = 0, 1\n\ndef expand(left, right):\n    while left &gt;= 0 and right &lt; len(s) and s[left] == s[right]:\n        left -= 1\n        right += 1\n    return left + 1, right - 1\n\nfor i in range(len(s)):\n    # Odd length palindrome (center at i)\n    l, r = expand(i, i)\n    if r - l + 1 &gt; max_len:\n        start, max_len = l, r - l + 1\n\n    # Even length palindrome (center between i and i+1)\n    l, r = expand(i, i + 1)\n    if r - l + 1 &gt; max_len:\n        start, max_len = l, r - l + 1\n\nreturn s[start:start + max_len]</code></pre>\n<p><strong>Key insight</strong>: Each palindrome has a center (1 char for odd, 2 chars for even). Expanding from each center and checking symmetry is O(n²) total because there are 2n-1 centers, and each expansion may go up to n steps.</p>\n"
              })
            }), "\n  "]
          })
        })]
      }), (0,jsx_runtime.jsxs)(_components.code, {
        children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "✅ Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "🔖 Bookmark"
        }), "\n"]
      })]
    }), (0,jsx_runtime.jsxs)(_components.code, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "dsa03-q3",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    Q3: How does the Rabin-Karp algorithm work? What are its advantages and limitations?\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Rabin-Karp"
            }), " uses a rolling hash function to find pattern matches in O(n) average time."]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Algorithm"
            }), ":"]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Compute hash of the pattern"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Compute hash of the first window (size m) of text"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "If hashes match, verify character by character (to handle collisions)"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Slide the window: remove left char, add right char using rolling hash"
            }), "\n    "]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Rolling hash formula"
            }), ": hash = (d * hash - text[i] * d^{m-1} + text[i+m]) % q"]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Advantages"
            }), ":"]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "O(n+m) average time"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Can be extended to multiple pattern search easily"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Works well for plagiarism detection (fingerprinting documents)"
            }), "\n    "]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Limitations"
            }), ":"]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Worst-case O(n—m) if many hash collisions"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Requires good hash function and large modulus to avoid collisions"
            }), "\n    "]
          }), "\n  "]
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "✅ Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "🔖 Bookmark"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "dsa03-q4",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    Q4: Explain the LCS (Longest Common Subsequence) problem and its DP solution.\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Problem"
            }), ": Find the longest sequence that appears in the same order in both strings (not necessarily contiguous)."]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "DP recurrence"
            }), ":"]
          }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dp[i][j] = LCS of s1[:i] and s2[:j]\ndp[i][j] = 0                              if i=0 or j=0\ndp[i][j] = dp[i-1][j-1] + 1              if s1[i-1] == s2[j-1]\ndp[i][j] = max(dp[i-1][j], dp[i][j-1])   otherwise"
            })
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            }), ": O(m—n). ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            }), ": O(m—n) or O(min(m,n)) with optimization."]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Applications"
            }), ":"]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Diff tools (git diff)"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "DNA sequence alignment"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Plagiarism detection"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Version control merge conflict resolution"
            }), "\n    "]
          }), "\n  "]
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "✅ Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "🔖 Bookmark"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "dsa03-q5",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    Q5: What is the edit distance problem? How is it solved using DP?\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Edit distance"
            }), " (Levenshtein distance): Minimum number of single-character operations (insert, delete, replace) to convert one string to another."]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "DP recurrence"
            }), ":"]
          }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dp[i][j] = edit distance between word1[:i] and word2[:j]\ndp[i][j] = i                                if j=0\ndp[i][j] = j                                if i=0\ndp[i][j] = dp[i-1][j-1]                    if word1[i-1] == word2[j-1]\ndp[i][j] = 1 + min(\n    dp[i-1][j],      # delete from word1\n    dp[i][j-1],      # insert into word1\n    dp[i-1][j-1]     # replace\n)                                          otherwise"
            })
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Applications"
            }), ": Spell checking, autocorrect, DNA sequence alignment, natural language processing."]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Variations"
            }), ": Damerau-Levenshtein adds transposition operation; Hamming distance requires equal length strings and only allows substitution."]
          }), "\n  "]
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "✅ Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "🔖 Bookmark"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "dsa03-q6",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    Q6: How do you check if a string is a valid palindrome while ignoring non-alphanumeric characters?\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "def is_palindrome(s):\n    left, right = 0, len(s) - 1\n    while left < right:\n        # Skip non-alphanumeric from left\n        while left < right and not s[left].isalnum():\n            left += 1\n        # Skip non-alphanumeric from right\n        while left < right and not s[right].isalnum():\n            right -= 1\n        # Compare characters (case-insensitive)\n        if s[left].lower() != s[right].lower():\n            return False\n        left += 1\n        right -= 1\n    return True"
            })
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Key insight"
            }), ": Use two pointers converging from both ends. Skip non-alphanumeric characters rather than preprocessing (which would create a new string)."]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Complexity"
            }), ": O(n) time, O(1) space."]
          }), "\n  "]
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "✅ Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "🔖 Bookmark"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "dsa03-q7",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    Q7: Explain the sliding window approach to find all anagrams of a pattern in a text.\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsxs)(_components.code, {
              children: ["from collections import Counter\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "def find_anagrams(text, pattern):\nresult = []\nm, n = len(pattern), len(text)\nif m > n: return result"
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "p_count = [0] * 26\nw_count = [0] * 26\n\n# Count pattern characters\nfor c in pattern:\n    p_count[ord(c) - ord('a')] += 1\n\n# Initialize window\nfor i in range(m):\n    w_count[ord(text[i]) - ord('a')] += 1\n\nif p_count == w_count:\n    result.append(0)\n\n# Slide window\nfor i in range(m, n):\n    # Remove leftmost character from window\n    w_count[ord(text[i - m]) - ord('a')] -= 1\n    # Add new character to window\n    w_count[ord(text[i]) - ord('a')] += 1\n    if p_count == w_count:\n        result.append(i - m + 1)\n\nreturn result</code></pre>\n<p><strong>Key insight</strong>: Maintain a character count of current window. Slide one character at a time — remove left, add right. Compare counts with pattern counts.</p>\n<p><strong>Complexity</strong>: O(n) time, O(1) space (fixed 26-size array).</p>\n"
                })
              }), "\n  "]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.code, {
          children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
            className: "tp-qa-mark-btn",
            children: "✅ Mark Reviewed"
          }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
            className: "tp-qa-bookmark-btn",
            children: "🔖 Bookmark"
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(_components.code, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
          className: "tp-qa-card",
          "data-qid": "dsa03-q8",
          children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
            className: "tp-qa-question",
            children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
              className: "tp-qa-status"
            }), "\n    Q8: How do you check if two strings are isomorphic?\n  "]
          }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
            className: "tp-qa-answer",
            children: ["\n    ", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "def is_isomorphic(s, t):\n    if len(s) != len(t):\n        return False\n    s_to_t, t_to_s = {}, {}\n    for c1, c2 in zip(s, t):\n        if (c1 in s_to_t and s_to_t[c1] != c2) or \\\n           (c2 in t_to_s and t_to_s[c2] != c1):\n            return False\n        s_to_t[c1] = c2\n        t_to_s[c2] = c1\n    return True"
              })
            }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Key insight"
              }), ": A bijection (one-to-one mapping) must exist between characters of both strings. Use two hash maps to track mappings in both directions."]
            }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Example"
              }), ": \"egg\" → \"add\" (e→a, g→d) — valid. \"foo\" → \"bar\" (f→b, o→a but o→r conflict) — invalid."]
            }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Complexity"
              }), ": O(n) time, O(k) space where k is alphabet size."]
            }), "\n  "]
          }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
            className: "tp-qa-mark-btn",
            children: "✅ Mark Reviewed"
          }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
            className: "tp-qa-bookmark-btn",
            children: "🔖 Bookmark"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
          className: "tp-qa-card",
          "data-qid": "dsa03-q9",
          children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
            className: "tp-qa-question",
            children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
              className: "tp-qa-status"
            }), "\n    Q9: Compare the different string concatenation methods in Python in terms of performance.\n  "]
          }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
            className: "tp-qa-answer",
            children: ["\n    ", (0,jsx_runtime.jsxs)(_components.table, {
              children: ["\n      ", (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "Method"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "Time"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "When to Use"
                  })]
                }), "\n      ", (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "`+` operator"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "O(n²)"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Only for a few concatenations"
                  })]
                }), "\n      ", (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "`join()`"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "O(n)"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Building from list — always preferred"
                  })]
                }), "\n      ", (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "f-strings"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "O(n)"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Template with variables (best readability)"
                  })]
                }), "\n      ", (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "StringIO"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "O(n)"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Building large strings with complex logic"
                  })]
                }), "\n      ", (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "`%` formatting"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "O(n)"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Legacy code; lazy logging"
                  })]
                }), "\n    "]
              })]
            }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
              children: [(0,jsx_runtime.jsxs)(_components.code, {
                children: ["# Performance comparison\nimport timeit\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "on--creates-new-string-each-iteration",
                  children: "O(n²) — creates new string each iteration"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "def concat_plus(n):\ns = \"\"\nfor i in range(n):\ns += str(i)\nreturn s"
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "on--builds-list-joins-once",
                  children: "O(n) — builds list, joins once"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "def concat_join(n):\nreturn \"\".join(str(i) for i in range(n))"
                }), "\n"]
              }), (0,jsx_runtime.jsx)(_components.h2, {
                id: "for-n10000-join-is-1000x-faster-than-",
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "For n=10000, join is 1000x faster than +="
                })
              })]
            }), "\n  "]
          }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
            className: "tp-qa-mark-btn",
            children: "✅ Mark Reviewed"
          }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
            className: "tp-qa-bookmark-btn",
            children: "🔖 Bookmark"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
          className: "tp-qa-card",
          "data-qid": "dsa03-q10",
          children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
            className: "tp-qa-question",
            children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
              className: "tp-qa-status"
            }), "\n    Q10: What is the Z-algorithm and how is it used for pattern matching?\n  "]
          }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
            className: "tp-qa-answer",
            children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Z-algorithm"
              }), " computes a Z-array where Z[i] is the length of the longest substring starting at position i that matches the prefix of the string."]
            }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "For pattern matching"
              }), ": Concatenate pattern + \"$\" + text, then compute the Z-array. Any Z[i] == len(pattern) indicates a match at position i - len(pattern) - 1."]
            }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "def z_algorithm(s):\n    n = len(s)\n    z = [0] * n\n    l = r = 0\n    for i in range(1, n):\n        if i <= r:\n            z[i] = min(r - i + 1, z[i - l])\n        while i + z[i] < n and s[z[i]] == s[i + z[i]]:\n            z[i] += 1\n        if i + z[i] - 1 > r:\n            l, r = i, i + z[i] - 1\n    return z"
              })
            }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Complexity"
              }), ": O(n) — the while loop increments z[i] which is bounded by n."]
            }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Applications"
              }), ": Pattern matching, finding all palindrome prefixes, string compression."]
            }), "\n  "]
          }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
            className: "tp-qa-mark-btn",
            children: "✅ Mark Reviewed"
          }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
            className: "tp-qa-bookmark-btn",
            children: "🔖 Bookmark"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
          className: "tp-qa-card",
          "data-qid": "dsa03-q11",
          children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
            className: "tp-qa-question",
            children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
              className: "tp-qa-status"
            }), "\n    Q11: How do you compute the number of distinct palindromic substrings in a string?\n  "]
          }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
            className: "tp-qa-answer",
            children: ["\n    ", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsxs)(_components.code, {
                children: ["def count_palindromic_substrings(s):\n    \"\"\"Count all palindromic substrings — O(n²)\"\"\"\n    n = len(s)\n    count = 0\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "for center in range(2 * n - 1):\n    left = center // 2\n    right = left + center % 2\n    while left &gt;= 0 and right &lt; n and s[left] == s[right]:\n        count += 1\n        left -= 1\n        right += 1\n\nreturn count</code></pre>\n<p><strong>Key insight</strong>: There are 2n-1 possible centers (n odd + n-1 even). Expand from each center to count palindromes.</p>\n<p><strong>Alternative</strong>: Manacher's algorithm can also count distinct palindromes in O(n) time by tracking the radii in the transformed string.</p>\n"
                  })
                }), "\n  "]
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.code, {
            children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
              className: "tp-qa-mark-btn",
              children: "✅ Mark Reviewed"
            }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
              className: "tp-qa-bookmark-btn",
              children: "🔖 Bookmark"
            }), "\n"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.code, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "dsa03-q12",
            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
              className: "tp-qa-question",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                className: "tp-qa-status"
              }), "\n    Q12: Explain how to check if a string is a valid shuffle of two other strings.\n  "]
            }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Problem"
                }), ": Given strings s1, s2, and s3, check if s3 is formed by interleaving characters of s1 and s2 while preserving order."]
              }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
                children: [(0,jsx_runtime.jsxs)(_components.code, {
                  children: ["def is_interleave(s1, s2, s3):\n    \"\"\"Check if s3 is an interleaving of s1 and s2 — DP\"\"\"\n    m, n = len(s1), len(s2)\n    if m + n != len(s3):\n        return False\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "dp = [[False] * (n + 1) for _ in range(m + 1)]\n\nfor i in range(m + 1):\n    for j in range(n + 1):\n        if i == 0 and j == 0:\n            dp[i][j] = True\n        elif i == 0:\n            dp[i][j] = dp[i][j - 1] and s2[j - 1] == s3[i + j - 1]\n        elif j == 0:\n            dp[i][j] = dp[i - 1][j] and s1[i - 1] == s3[i + j - 1]\n        else:\n            dp[i][j] = (dp[i - 1][j] and s1[i - 1] == s3[i + j - 1]) or \\\n                       (dp[i][j - 1] and s2[j - 1] == s3[i + j - 1])\n\nreturn dp[m][n]\n"
                    })
                  }), "\n"]
                }), (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "print(is_interleave(\"aab\", \"axy\", \"aaxaby\"))  # True\nprint(is_interleave(\"aab\", \"axy\", \"abaaxy\"))  # False"
                  })
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Key insight"
                }), ": dp[i][j] is True if s3[0..i+j-1] is an interleaving of s1[0..i-1] and s2[0..j-1]."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Space optimization"
                }), ": Can be reduced to O(n) using 1D DP."]
              }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
            }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
              className: "tp-qa-mark-btn",
              children: "✅ Mark Reviewed"
            }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
              className: "tp-qa-bookmark-btn",
              children: "🔖 Bookmark"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "chapter-quiz",
            children: "Chapter Quiz"
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Q1"
            }), ": What is the time complexity of the KMP algorithm for pattern matching?"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "a) O(n—m)\nb) O(n+m)\nc) O(n²)\nd) O(m²)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "dsa03-quiz1",
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Show Answer"
            }), (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: [(0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Answer: b) O(n+m)"
                })
              }), (0,jsx_runtime.jsx)(_components.p, {
                children: "KMP achieves O(n+m) by preprocessing the pattern into an LPS array, ensuring no backtracking on the text."
              })]
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Q2"
            }), ": How many centers does expand-around-center check for palindrome substring detection?"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "a) n\nb) 2n - 1\nc) n²\nd) n/2"
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "dsa03-quiz2",
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Show Answer"
            }), (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: [(0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Answer: b) 2n - 1"
                })
              }), (0,jsx_runtime.jsx)(_components.p, {
                children: "There are n odd-length centers (single characters) and n-1 even-length centers (between characters)."
              })]
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Q3"
            }), ": What is the space complexity of the edit distance DP solution?"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "a) O(1)\nb) O(n)\nc) O(m—n)\nd) O(n+m)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "dsa03-quiz3",
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Show Answer"
            }), (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: [(0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Answer: c) O(m—n)"
                })
              }), (0,jsx_runtime.jsx)(_components.p, {
                children: "The standard 2D DP table uses O(m—n) space, though it can be optimized to O(min(m,n))."
              })]
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Q4"
            }), ": Which data structure gives O(1) character frequency comparison for anagram detection?"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "a) Hash map\nb) Array of size 26\nc) Sorted string\nd) Set"
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "dsa03-quiz4",
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Show Answer"
            }), (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: [(0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Answer: b) Array of size 26"
                })
              }), (0,jsx_runtime.jsx)(_components.p, {
                children: "For lowercase letters, a fixed-size integer array of size 26 provides O(1) comparison (26 comparisons), whereas hash maps have overhead."
              })]
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Q5"
            }), ": What encoding does Python 3 use internally for string representation?"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "a) UTF-8\nb) ASCII\nc) Flexible representation (compact ASCII, compact, legacy)\nd) UTF-16"
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "dsa03-quiz5",
            children: [(0,jsx_runtime.jsx)(_components.summary, {
              children: "Show Answer"
            }), (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: [(0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Answer: c) Flexible representation (compact ASCII, compact, legacy)"
                })
              }), (0,jsx_runtime.jsx)(_components.p, {
                children: "Python 3 uses flexible string representation — 1, 2, or 4 bytes per character depending on the largest Unicode code point in the string."
              })]
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "exercises",
            children: "Exercises"
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Easy"
            }), " — Write a function that reverses words in a sentence (e.g., \"Hello World\" → \"World Hello\") without using split."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Medium"
            }), " — Implement a function to find the longest substring without repeating characters using sliding window."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Medium"
            }), " — Implement a function to decode a string encoded with the pattern k[encoded_string] (e.g., \"3[a2[c]]\" → \"accaccacc\")."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Hard"
            }), " — Write a function to find all words that can be typed using only one row of a QWERTY keyboard (e.g., \"alaska\", \"dad\" are valid; \"hello\" is not)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Hard"
            }), " — Implement the Boggle word search — given an m—n board of letters, find all words from a dictionary that can be formed by adjacent letters (using DFS + Trie)."]
          }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "common-mistakes",
            children: "Common Mistakes"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Forgetting strings are immutable in many languages"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Not handling Unicode characters correctly"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Off-by-one in substring operations"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Not considering case sensitivity"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Using wrong pattern matching algorithm"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "revision-notes",
            children: "Revision Notes"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Strings are immutable in Python/Java"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Anagram = same characters, different order"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Substring vs subsequence difference"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "KMP for efficient pattern matching"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Trie for prefix-based string operations"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "placement-section",
            children: "Placement Section"
          }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
            id: "top-10-interview-questions",
            children: "Top 10 Interview Questions"
          }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
            id: "google-style",
            children: "Google Style"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Explain the core idea of Strings in under 60 seconds, then give a real-world analogy."
                }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Design a minimal, well-typed function that demonstrates Strings."
                }), " — Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "**What are the common pitfalls when engineers first learn ** — List 3-4, then explain how you would prevent each in a code review."
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
            id: "amazon-style",
            children: "Amazon Style"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            start: "4",
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Describe a production bug caused by misunderstanding Strings. How did you diagnose and fix it?"
                }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "How would you scale a system that relies on Strings from 10 users to 10 million?"
                }), " — Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
            id: "microsoft-style",
            children: "Microsoft Style"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            start: "6",
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Compare Strings with the closest alternative approach. When would you choose each?"
                }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Walk through how you would test a component that depends on Strings."
                }), " — Unit, integration, property-based tests; mocking boundaries; golden files for outputs."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
            id: "nvidia-style",
            children: "NVIDIA Style"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            start: "8",
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "How does Strings behave differently at scale — memory, throughput, or precision-wise?"
                }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "How would you make an implementation of Strings run faster on GPU hardware?"
                }), " — Batch operations, vectorization, avoiding Python loops, reducing data movement."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
            id: "ai-startup-style",
            children: "AI Startup Style"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            start: "10",
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Write the smallest possible implementation of Strings that is production-quality."
              }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
            id: "resume-tips",
            children: "Resume Tips"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Name Strings explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Strings\")."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Add a bullet describing a project that applies Strings to real data, with numbers."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Mention the tools and libraries you used alongside Strings (linters, test frameworks, profiling tools)."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Keep resume bullets under 15 words and start each with an action verb."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
            id: "interview-day-checklist",
            children: "Interview Day Checklist"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Rehearse a 60-second explanation of Strings and one real-world analogy."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Prepare one STAR story about debugging a Strings-related production issue."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Review complexity and edge cases for the classic Strings interview problem."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Have questions ready: how does the team apply Strings in production today?"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Test your environment (Python, editor, internet) 15 minutes before the interview."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "truefalse",
            children: "True/False"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "True or False:"
              }), " Strings builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "True."
              }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "True or False:"
              }), " You should write at least one code example for Strings before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "True."
              }), " Active recall with hands-on code beats passive reading for retention."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "True or False:"
              }), " The complexity analysis for Strings is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "False."
              }), " Complexity grows with input size; always state best, average, and worst case."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "True or False:"
              }), " Edge cases (empty input, invalid input, boundary values) matter for Strings in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "True."
              }), " Most production bugs come from unhandled edge cases."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "True or False:"
              }), " You should memorize the Strings chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "False."
              }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "fill-in-the-blank",
            children: "Fill in the Blank"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The chapter that covers Strings is Chapter ___ of this module. — Answer: check the module's table of contents."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The time complexity of the standard approach to Strings is ___. — Answer: review the theory section and state big-O notation."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The main edge case to handle when implementing Strings is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The tools commonly used to debug Strings issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The related topic that connects to Strings in the next chapter is ___. — Answer: see the Next Topic section."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "scenario-questions",
            children: "Scenario Questions"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Scenario:"
                }), " A teammate ships a change involving Strings that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Scenario:"
                }), " Your implementation of Strings is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Scenario:"
                }), " A new hire asks you to explain Strings in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Scenario:"
                }), " Your team's codebase has three different patterns for Strings and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "output-questions",
            children: "Output Questions"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "What is the output of the simplest correct implementation of Strings on an empty input?"
              }), " — Trace through the code: it should return the documented default (None, 0, empty collection) without raising."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "What is the output when the input is at the boundary value?"
              }), " — Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "What does the implementation return when given invalid input types?"
              }), " — With type hints and validation, it raises a clear error; without, it may fail silently."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "What is the output for the sample input given in the chapter's Examples section?"
              }), " — Re-run the chapter's example code and compare against the documented output."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "What is the time complexity output when you profile the implementation at 10x input size?"
              }), " — Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear)."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "difficulty-level",
            children: "Difficulty Level"
          }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
            children: [(0,jsx_runtime.jsx)(_components.thead, {
              children: (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.th, {
                  children: "Level"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  children: "Time"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  children: "What It Takes"
                })]
              })
            }), (0,jsx_runtime.jsxs)(_components.tbody, {
              children: [(0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Beginner"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "1-2 sessions"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Read theory, run the chapter examples, solve the Easy exercises"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Intermediate"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "3-5 sessions"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Complete Medium exercises, explain Strings to someone else"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Advanced"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "1+ week"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Solve Hard exercises, optimize for real datasets, answer interview follow-ups"
                })]
              })]
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "tips--tricks",
            children: "Tips & Tricks"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Always write a one-line example of Strings from memory before opening the chapter — active recall first."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Use the chapter's Revision Notes as a checklist: you have mastered Strings when you can explain each bullet."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "For interviews, practice explaining Strings twice: once with a technical audience, once with a non-technical audience."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Keep a personal examples file where you collect your own Strings snippets; interviewers love original examples."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "memory-tricks",
            children: "Memory Tricks"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Acronym"
              }), ": build a mnemonic from the 5 key concepts of Strings listed in the Chapter at a Glance table."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Story"
              }), ": link Strings to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Number anchor"
              }), ": remember the complexity of Strings by connecting it to a known algorithm of the same class."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Color code"
              }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Teach-back"
              }), ": explain Strings to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "further-reading",
            children: "Further Reading"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Official documentation for the primary tool or library used in this chapter"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The chapter referenced in Related Topics for the next-level treatment of Strings"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The classic textbook chapter on Strings (check the Research References below)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Two blog posts from engineers who debugged real Strings problems in production"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The repository of the open-source project that implements Strings"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "related-topics",
            children: "Related Topics"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The previous chapter in this module (see table of contents) — foundational for Strings"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The next chapter (see Next Topic below) — builds on Strings"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The system design chapters in Module 07 — how Strings fits into production architectures"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The interview preparation module — how Strings is asked in screening rounds"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The capstone project — where Strings is applied end-to-end"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "faqs",
            children: "FAQs"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Do I need to memorize all of Strings, or understand the big picture?"
              }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "What if I get stuck on an exercise?"
              }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Is Strings asked in interviews?"
              }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "important-notes",
            children: "Important Notes"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Strings is a core requirement for the rest of this module — do not skip the examples."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Always analyze complexity (time and space) when working with Strings."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Production correctness means handling edge cases, not just the happy path."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Interview answers should start with the definition, then the example, then the trade-offs."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Revisit this chapter after finishing the module; the context from later chapters deepens understanding."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "historical-context",
            children: "Historical Context"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Strings emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The tools used for Strings today evolved from simpler versions; the chapter covers the modern, recommended approach."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Interviewers value knowing one historical fact about Strings — it shows genuine interest, not just cramming."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The library/tooling ecosystem around Strings changes quickly; focus on fundamentals that remain stable."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "security-considerations",
            children: "Security Considerations"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Never trust external input: validate and sanitize data before processing Strings."
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Avoid ", (0,jsx_runtime.jsx)(_components.code, {
                children: "eval()"
              }), " and dynamic code execution on untrusted strings."]
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Log errors without leaking sensitive data (keys, PII, internal paths)."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "For API contexts, add rate limiting and input size limits."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Review the chapter's code examples for injection or overflow risks before using them verbatim."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "ml-intuition",
            children: "ML Intuition"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Strings appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Understanding Strings helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "In production ML, the Strings concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "When optimizing ML systems, Strings skills let you profile and fix the data path, not just the training loop."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Interview follow-up: how would you apply Strings to a dataset of 10 million records? — Batching and vectorization."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "analogies",
            children: "Analogies"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Strings is like a recipe"
              }), ": the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Complexity is like a delivery route"
              }), ": a linear route visits each stop once; a nested route revisits stops, and you feel it at scale."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Edge cases are like weather"
              }), ": the happy path is a sunny day; production is the storm — build for the storm."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "The chapter roadmap is a journey map"
              }), ": each section is a checkpoint; skipping one means getting lost later in the module."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "capstone-project-link",
            children: "Capstone Project Link"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.a, {
                href: "https://github.com/Raushan666java/ai-engineering-journey",
                children: "Module Capstone: End-to-End Project"
              }), " — this chapter contributes the Strings skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "flashcards",
            children: "Flashcards"
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "03datastructuresalgorithms-03strings-flash1",
            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
              className: "tp-qa-question",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                className: "tp-qa-status"
              }), "\n    What is the time complexity of the KMP algorithm for pattern matching?\n  "]
            }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                children: "b) O(n+m)"
              }), "\n  "]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "03datastructuresalgorithms-03strings-flash2",
            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
              className: "tp-qa-question",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                className: "tp-qa-status"
              }), "\n    How many centers does expand-around-center check for palindrome substring detection?\n  "]
            }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                children: "b) 2n - 1"
              }), "\n  "]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "03datastructuresalgorithms-03strings-flash3",
            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
              className: "tp-qa-question",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                className: "tp-qa-status"
              }), "\n    What is the space complexity of the edit distance DP solution?\n  "]
            }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                children: "c) O(m—n)"
              }), "\n  "]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "03datastructuresalgorithms-03strings-flash4",
            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
              className: "tp-qa-question",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                className: "tp-qa-status"
              }), "\n    Which data structure gives O(1) character frequency comparison for anagram detection?\n  "]
            }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                children: "b) Array of size 26"
              }), "\n  "]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "03datastructuresalgorithms-03strings-flash5",
            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
              className: "tp-qa-question",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                className: "tp-qa-status"
              }), "\n    What encoding does Python 3 use internally for string representation?\n  "]
            }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                children: "c) Flexible representation (compact ASCII, compact, legacy)"
              }), "\n  "]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "research-references",
            children: "Research References"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Official documentation of the primary library for Strings (linked in Further Reading)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The classic paper or textbook chapter introducing Strings (see References below)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The standard library reference for Strings-related functions"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Engineering blog posts from companies running Strings in production at scale"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "PEPs and RFCs where applicable (Python and networking standards)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "open-source-tools",
            children: "Open-Source Tools"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The primary library used in this chapter (see the code examples)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Python standard library modules used in the examples (check the imports)"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Testing: pytest for unit tests of Strings code"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Linting and formatting: ruff + black"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Profiling: cProfile or py-spy for performance work on Strings"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "debugging-guide",
            children: "Debugging Guide"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
                children: "print()"
              }), " or a debugger to inspect intermediate values in Strings code."]
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Reproduce the failure with the smallest possible input before changing code."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Check the common failure modes listed in Common Mistakes — most bugs are listed there."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "For performance problems, profile before optimizing: measure, then fix."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "When stuck, re-read the chapter's Examples and compare line by line with your code."
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
                children: "pdb"
              }), " or your IDE's debugger to step through the Strings example code."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "mock-interview-section",
            children: "Mock Interview Section"
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Round 1 — Screening (15 min)"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Explain Strings in 60 seconds."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Write a minimal working example of Strings."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "What is the complexity of your example?"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Round 2 — Coding (45 min)"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Solve the Medium exercise from this chapter under time pressure."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "State your assumptions, then implement with type hints."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Test with edge cases: empty input, boundary values, invalid input."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Round 3 — Behavioral + System (30 min)"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Tell me about a time you debugged a Strings problem in a project."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "How would you design a system where Strings is used at scale?"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "What metrics would you monitor?"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Evaluation rubric"
            }), ": correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%)."]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "optimized-implementation",
            children: "Optimized Implementation"
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "`python\nfrom typing import Any, Optional"
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Strings."
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Strings logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "`"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Keeps the function signature stable so tests written against it stay valid."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Handles the empty-input contract explicitly."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Add unit tests for the edge cases before implementing the logic (test-first)."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "evaluation-metrics",
            children: "Evaluation Metrics"
          }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
            children: [(0,jsx_runtime.jsx)(_components.thead, {
              children: (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.th, {
                  children: "Skill"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  children: "Test"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  children: "Target"
                })]
              })
            }), (0,jsx_runtime.jsxs)(_components.tbody, {
              children: [(0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Concept recall"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Explain Strings without notes"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "60-second explanation"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Code fluency"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Write the chapter example from memory"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "No syntax errors"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Edge cases"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Handle empty/invalid input in exercises"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "All cases pass"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Complexity"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "State time/space for the standard approach"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Correct big-O"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Interview readiness"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Answer 5 Interview Q&A questions out loud"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Fluent, structured answers"
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Retention"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Chapter quiz score after 3 days"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "80%+"
                })]
              })]
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "real-world-examples",
            children: "Real-World Examples"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Startup"
              }), ": a small team uses Strings daily in their data pipeline — the chapter's examples mirror their code."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "E-commerce"
              }), ": Strings patterns appear in order processing, inventory checks, and recommendation feeds."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Fintech"
              }), ": Strings principles apply to transaction validation and fraud detection flows."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "ML platform"
              }), ": Strings shows up in feature engineering and model-serving infrastructure."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Interview insight"
              }), ": recruiters look for engineers who can connect Strings to the business outcome, not just the code."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "next-topic",
            children: "Next Topic"
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/04-sliding-window",
              children: "Sliding Window"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
            id: "limitations",
            children: "Limitations"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Strings, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "Performance of Strings depends on input size and distribution — always benchmark for your own data."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone."
            }), "\n"]
          }), "\n"]
        })]
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