"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[8033],{

/***/ 58048
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_01_python_programming_03_strings_and_formatting_md_567_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-01-python-programming-03-strings-and-formatting-md-567.json
const site_docs_courses_ai_engineering_placement_01_python_programming_03_strings_and_formatting_md_567_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/python-programming/03-strings-and-formatting","title":"Strings & Formatting — Methods, Slicing, F-Strings, and Regex","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/01-python-programming/03-strings-and-formatting.md","sourceDirName":"courses/ai-engineering-placement/01-python-programming","slug":"/ai-engineering-placement/01-python-programming/03-strings-and-formatting","permalink":"/ai-engineering-journey/ai-engineering-placement/01-python-programming/03-strings-and-formatting","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"03-strings-and-formatting","slug":"/ai-engineering-placement/01-python-programming/03-strings-and-formatting","title":"Strings & Formatting — Methods, Slicing, F-Strings, and Regex","sidebar_label":"Strings & Formatting — Methods, Slicing, F-Strings, and Regex","sidebar_position":12},"sidebar":"placementSidebar","previous":{"title":"Control Flow — Conditionals, Loops, and Iteration","permalink":"/ai-engineering-journey/ai-engineering-placement/01-python-programming/02-control-flow"},"next":{"title":"Collections — Lists, Tuples, Sets, and Dictionaries","permalink":"/ai-engineering-journey/ai-engineering-placement/01-python-programming/04-collections"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/01-python-programming/03-strings-and-formatting.md


const frontMatter = {
	id: '03-strings-and-formatting',
	slug: '/ai-engineering-placement/01-python-programming/03-strings-and-formatting',
	title: 'Strings & Formatting — Methods, Slicing, F-Strings, and Regex',
	sidebar_label: 'Strings & Formatting — Methods, Slicing, F-Strings, and Regex',
	sidebar_position: 12
};
const contentTitle = 'Strings & Formatting — Methods, Slicing, F-Strings, and Regex';

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
  "value": "3.1 String Methods",
  "id": "31-string-methods",
  "level": 2
}, {
  "value": "3.2 Slicing",
  "id": "32-slicing",
  "level": 2
}, {
  "value": "3.3 String Formatting",
  "id": "33-string-formatting",
  "level": 2
}, {
  "value": "3.4 Regular Expressions",
  "id": "34-regular-expressions",
  "level": 2
}, {
  "value": "3.5 Unicode and Encoding",
  "id": "35-unicode-and-encoding",
  "level": 2
}, {
  "value": "3.6 Performance and Best Practices",
  "id": "36-performance-and-best-practices",
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
        id: "strings--formatting--methods-slicing-f-strings-and-regex",
        children: "Strings & Formatting — Methods, Slicing, F-Strings, and Regex"
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
            children: "Manipulate strings using built-in methods for transformation, splitting, and joining"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extract substrings with slicing notation and stride patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Format strings using f-strings, .format(), and % formatting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search and replace using regular expressions with the re module"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand string immutability and performance implications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encode and decode strings between str and bytes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python is the lingua franca of AI engineering. Mastering its syntax, data structures, and libraries is non-negotiable for building ML pipelines, APIs, and automation scripts. This module covers everything from basics to advanced concurrency."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding strings and formatting is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how strings and formatting works in practice."
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
            children: "String Methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "case conversion, strip, split, join, find, replace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slicing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[start:stop:step], negative indices, reversing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String Formatting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f-strings, .format(), % formatting, format specifiers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regular Expressions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "re.match, re.search, re.findall, re.sub"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unicode and Encoding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "str.encode(), bytes.decode(), UTF-8, ASCII"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string concatenation, join, StringBuilder pattern"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[String Methods] --> B[Slicing]\r\n    B --> C[Formatting: f-strings]\r\n    C --> D[Regular Expressions]\r\n    D --> E[Unicode & Encoding]\r\n    E --> F[Performance + Best Practices]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "31-string-methods",
      children: "3.1 String Methods"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Python strings provide a rich set of methods for text manipulation. Since strings are immutable, all methods return a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "new string"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "text = \"  Hello, Python World!  \"\r\n\r\n## Case conversion\r\nprint(text.upper())        # \"  HELLO, PYTHON WORLD!  \"\r\nprint(text.lower())        # \"  hello, python world!  \"\r\nprint(text.title())        # \"  Hello, Python World!  \"\r\nprint(text.swapcase())     # \"  hELLO, pYTHON wORLD!  \"\r\nprint(text.capitalize())   # \"  hello, python world!  \"\r\n\r\n## Stripping whitespace\r\nprint(text.strip())        # \"Hello, Python World!\"\r\nprint(text.lstrip())       # \"Hello, Python World!  \"\r\nprint(text.rstrip())       # \"  Hello, Python World!\"\r\n\r\n## Splitting and joining\r\ncsv = \"apple,banana,cherry\"\r\nfruits = csv.split(\",\")\r\nprint(fruits)              # ['apple', 'banana', 'cherry']\r\n\r\njoined = \" | \".join(fruits)\r\nprint(joined)              # \"apple | banana | cherry\"\r\n\r\n## Splitting with maxsplit\r\ndata = \"a b c d e\"\r\nprint(data.split(\" \", 2))  # ['a', 'b', 'c d e']\r\n\r\n## rsplit — splits from the right\r\nprint(data.rsplit(\" \", 2)) # ['a b c', 'd', 'e']\r\n\r\n## splitlines — handles different line endings\r\nlines = \"line1\\nline2\\r\\nline3\"\r\nprint(lines.splitlines())  # ['line1', 'line2', 'line3']\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Finding and replacing"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "s = \"the quick brown fox jumps over the lazy dog\"\r\n\r\nprint(s.find(\"fox\"))       # 16  — index of first occurrence\r\nprint(s.find(\"cat\"))       # -1  — not found\r\nprint(s.index(\"fox\"))      # 16  — raises ValueError if not found\r\nprint(s.rfind(\"the\"))      # 31  — last occurrence\r\nprint(s.count(\"the\"))      # 2\r\n\r\nprint(s.startswith(\"the\"))  # True\r\nprint(s.endswith(\"dog\"))    # True\r\n\r\nprint(s.replace(\"the\", \"a\"))  # \"a quick brown fox jumps over a lazy dog\"\r\nprint(s.replace(\"the\", \"a\", 1))  # replace only first occurrence\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Checking string properties"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "print(\"hello\".isalpha())     # True\r\nprint(\"123\".isdigit())       # True\r\nprint(\"hello123\".isalnum())  # True\r\nprint(\"   \".isspace())       # True\r\nprint(\"Hello\".isupper())     # False\r\nprint(\"HELLO\".isupper())     # True\r\nprint(\"Hello World\".istitle()) # True\r\nprint(\"42\".isnumeric())      # True (handles unicode numerals too)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "32-slicing",
      children: "3.2 Slicing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Slicing extracts substrings using the [start:stop:step] notation. All three components are optional."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "s = \"Python Programming\"\r\n\r\n## Basic slicing\r\nprint(s[0:6])     # \"Python\"   — indices 0 through 5\r\nprint(s[:6])      # \"Python\"   — start defaults to 0\r\nprint(s[7:])      # \"Programming\" — stop defaults to end\r\nprint(s[:])       # \"Python Programming\" — full copy\r\n\r\n## Negative indices (count from end)\r\nprint(s[-1])      # \"g\" — last character\r\nprint(s[-11:])    # \"Programming\"\r\nprint(s[-11:-4])  # \"Progra\"\r\n\r\n## Step (stride)\r\nprint(s[::2])     # \"Pto rgramn\"  — every 2nd character\r\nprint(s[1::2])    # \"yh nrmig\"   — every 2nd starting at 1\r\nprint(s[::-1])    # \"gnimmargorP nohtyP\" — reversed!\r\n\r\n## Negative step\r\nprint(s[10:4:-1]) # \"margor\" — reversed slice\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Practical slicing patterns"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Palindrome check\r\ndef is_palindrome(s):\r\n    s = s.lower().replace(\" \", \"\")\r\n    return s == s[::-1]\r\n\r\nprint(is_palindrome(\"racecar\"))        # True\r\nprint(is_palindrome(\"A man a plan canal Panama\"))  # True\r\n\r\n## First, last, middle characters\r\nword = \"Python\"\r\nfirst = word[0]\r\nlast = word[-1]\r\nmiddle = word[len(word)//2]\r\nprint(first, last, middle)  # P n h\r\n\r\n## Every nth character\r\nprint(\"abcdefgh\"[::2])   # \"aceg\"\r\nprint(\"abcdefgh\"[1::2])  # \"bdfh\"\r\n\r\n## Remove first/last character\r\nprint(\"Hello\"[1:-1])     # \"ell\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "33-string-formatting",
      children: "3.3 String Formatting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Python offers three string formatting approaches, but ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "f-strings are preferred"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "f-strings"
      }), " (Python 3.6+, fastest):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "name = \"Alice\"\r\nage = 30\r\nbalance = 1234.5678\r\n\r\n## Basic\r\nprint(f\"{name} is {age} years old\")\r\n\r\n## Expressions\r\nprint(f\"{2 * 3 * 5 = }\")  # \"2 * 3 * 5 = 30\"\r\n\r\n## Format specifiers\r\nprint(f\"{balance:.2f}\")      # \"1234.57\" — 2 decimal places\r\nprint(f\"{balance:>10.2f}\")   # \"   1234.57\" — right align in width 10\r\nprint(f\"{balance:<10.2f}\")   # \"1234.57   \" — left align\r\nprint(f\"{balance:^10.2f}\")   # \" 1234.57  \" — center\r\nprint(f\"{balance:010.2f}\")   # \"0001234.57\" — zero padding\r\nprint(f\"{balance:,.2f}\")     # \"1,234.57\" — thousands separator\r\n\r\n## Formatting types\r\nprint(f\"{42:b}\")    # \"101010\" — binary\r\nprint(f\"{42:o}\")    # \"52\" — octal\r\nprint(f\"{42:x}\")    # \"2a\" — hex lowercase\r\nprint(f\"{42:X}\")    # \"2A\" — hex uppercase\r\nprint(f\"{42:e}\")    # \"4.200000e+01\" — scientific\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "str.format()"
      }), " (older but still common):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "print(\"{} is {} years old\".format(\"Alice\", 30))\r\nprint(\"{name} is {age} years old\".format(name=\"Bob\", age=25))\r\nprint(\"{:>10.2f}\".format(3.14159))\r\n\r\n## Accessing dictionary\r\ndata = {\"name\": \"Charlie\", \"score\": 95}\r\nprint(\"Name: {0[name]}, Score: {0[score]}\".format(data))\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "% formatting"
      }), " (old style, used in logging):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "print(\"%s is %d years old\" % (\"Alice\", 30))\r\nprint(\"Pi is approximately %.3f\" % 3.14159)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Template strings"
      }), " (safe for user-provided templates):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from string import Template\r\nt = Template(\" has 100\")\r\nprint(t.substitute(name=\"Alice\"))  # \"Alice has \"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "34-regular-expressions",
      children: "3.4 Regular Expressions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The\r\ne module provides full regex support."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import re\r\n\r\ntext = \"Contact: alice@email.com or bob@example.co.uk\"\r\n\r\n## re.search — find first match\r\npattern = r\"\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b\"\r\nmatch = re.search(pattern, text)\r\nif match:\r\n    print(match.group())      # \"alice@email.com\"\r\n    print(match.start())      # 9\r\n    print(match.end())        # 25\r\n\r\n## re.findall — find all matches\r\nemails = re.findall(pattern, text)\r\nprint(emails)  # ['alice@email.com', 'bob@example.co.uk']\r\n\r\n## re.finditer — iterator of match objects\r\nfor m in re.finditer(r\"\\w+@\\w+\\.\\w+\", text):\r\n    print(m.group())\r\n\r\n## re.match — match at beginning only\r\nprint(re.match(r\"Contact\", text))   # Match object\r\nprint(re.match(r\"alice\", text))     # None\r\n\r\n## re.fullmatch — entire string must match\r\nprint(re.fullmatch(r\"\\d{5}\", \"12345\"))  # Match\r\nprint(re.fullmatch(r\"\\d{5}\", \"12345-\")) # None\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Groups and capturing"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Named groups\r\npattern = r\"(?P<name>\\w+)@(?P<domain>\\w+\\.\\w+)\"\r\nmatch = re.search(pattern, \"user@example.com\")\r\nprint(match.group(\"name\"))    # \"user\"\r\nprint(match.group(\"domain\"))  # \"example.com\"\r\n\r\n## Non-capturing groups\r\ntext = \"abc123 def456\"\r\npattern = r\"(?:\\w+)(\\d+)\"\r\nmatches = re.findall(pattern, text)\r\nprint(matches)  # ['123', '456']\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "**\r\ne.sub — search and replace**:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "text = \"Hello, my number is 123-456-7890\"\r\n\r\n## Replace with string\r\nresult = re.sub(r\"\\d{3}-\\d{3}-\\d{4}\", \"[REDACTED]\", text)\r\nprint(result)  # \"Hello, my number is [REDACTED]\"\r\n\r\n## Replace with function\r\ndef mask_digit(match):\r\n    return \"*\" * len(match.group())\r\n\r\nresult = re.sub(r\"\\d\", mask_digit, text)\r\nprint(result)  # \"Hello, my number is ***-***-****\"\r\n\r\n## Replace with backreferences\r\ntext = \"2024-03-15\"\r\nresult = re.sub(r\"(\\d{4})-(\\d{2})-(\\d{2})\", r\"\\3/\\2/\\1\", text)\r\nprint(result)  # \"15/03/2024\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common regex patterns"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "patterns = {\r\n    \"email\": r\"\\b[\\w.%+-]+@[\\w.-]+\\.[A-Za-z]{2,}\\b\",\r\n    \"phone\": r\"\\b\\d{3}[-.]?\\d{3}[-.]?\\d{4}\\b\",\r\n    \"url\": r\"https?://[\\w./-]+\",\r\n    \"ipv4\": r\"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b\",\r\n    \"date_iso\": r\"\\b\\d{4}-\\d{2}-\\d{2}\\b\",\r\n    \"hashtag\": r\"#\\w+\",\r\n}\r\n\r\ntext = \"Visit https://example.com or call 555-123-4567 #AI\"\r\nfor name, pattern in patterns.items():\r\n    matches = re.findall(pattern, text)\r\n    if matches:\r\n        print(f\"{name}: {matches}\")\r\n\r\n## Output:\r\n\r\n## url: ['https://example.com']\r\n\r\n## phone: ['555-123-4567']\r\n\r\n## hashtag: ['#AI']\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Compiled patterns"
      }), " (faster for repeated use):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Compile once, use many times\r\nemail_re = re.compile(r\"[\\w.-]+@[\\w.-]+\")\r\n\r\ntexts = [\"user1@test.com\", \"no-email\", \"user2@test.org\"]\r\nfor text in texts:\r\n    match = email_re.search(text)\r\n    if match:\r\n        print(f\"Found: {match.group()}\")\r\n\r\n## With flags\r\ncase_insensitive = re.compile(r\"python\", re.IGNORECASE)\r\nprint(case_insensitive.findall(\"Python python PYTHON\"))\r\n\r\n## ['Python', 'python', 'PYTHON']\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "35-unicode-and-encoding",
      children: "3.5 Unicode and Encoding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python 3 strings are Unicode by default. Encoding converts str to bytes; decoding converts bytes to str."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## str -> bytes (encoding)\r\ntext = \"Hello, ??\"\r\nutf8_bytes = text.encode(\"utf-8\")\r\nprint(utf8_bytes)         # b'Hello, \\xe4\\xb8\\x96\\xe7\\x95\\x8c'\r\nprint(type(utf8_bytes))   # <class 'bytes'>\r\n\r\n## bytes -> str (decoding)\r\ndecoded = utf8_bytes.decode(\"utf-8\")\r\nprint(decoded)            # \"Hello, ??\"\r\n\r\n## Common encodings\r\nprint(\"Hello\".encode(\"ascii\"))         # b'Hello'\r\nprint(\"Hello\".encode(\"utf-16\"))        # b'\\xff\\xfeH\\x00e\\x00l\\x00l\\x00o\\x00'\r\nprint(\"€\".encode(\"utf-8\"))             # b'\\xe2\\x82\\xac'\r\nprint(\"€\".encode(\"latin-1\"))           # UnicodeEncodeError (€ not in latin-1)\r\n\r\n## Error handling\r\ntext = \"café\"\r\n\r\n## Ignore errors\r\nprint(text.encode(\"ascii\", errors=\"ignore\"))    # b'caf'\r\n\r\n## Replace errors\r\nprint(text.encode(\"ascii\", errors=\"replace\"))   # b'caf?'\r\n\r\n## XML charref\r\nprint(text.encode(\"ascii\", errors=\"xmlcharrefreplace\"))  # b'caf&#233;'\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Unicode properties"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import unicodedata\r\n\r\nchar = \"é\"\r\nprint(unicodedata.name(char))      # \"LATIN SMALL LETTER E WITH ACUTE\"\r\nprint(unicodedata.category(char))  # \"Ll\" (lowercase letter)\r\nprint(unicodedata.east_asian_width(char))  # \"N\" (narrow)\r\n\r\n## Normalization — handles composed vs decomposed forms\r\nnfc = \"é\"  # composed: U+00E9\r\nnfd = \"e\\u0301\"  # decomposed: e + combining acute accent\r\nprint(nfc == nfd)            # False (different code points)\r\nprint(unicodedata.normalize(\"NFC\", nfd) == nfc)  # True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "36-performance-and-best-practices",
      children: "3.6 Performance and Best Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "String concatenation"
      }), " — + is O(n²) in loops. Use join():"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\r\n\r\ndef bad_concat(n):\r\n    result = \"\"\r\n    for i in range(n):\r\n        result += str(i)  # O(n²) — creates new string each time\r\n    return result\r\n\r\ndef good_concat(n):\r\n    parts = []\r\n    for i in range(n):\r\n        parts.append(str(i))\r\n    return \"\".join(parts)  # O(n)\r\n\r\n## Timing comparison\r\nn = 10000\r\nstart = time.time()\r\nbad_concat(n)\r\nprint(f\"bad: {time.time() - start:.4f}s\")\r\n\r\nstart = time.time()\r\ngood_concat(n)\r\nprint(f\"good: {time.time() - start:.4f}s\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "String builder pattern"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Using list + join (preferred)\r\ndef build_sentence(words):\r\n    return \" \".join(words)\r\n\r\n## Using io.StringIO for large builds\r\nfrom io import StringIO\r\n\r\ndef build_large_text(lines):\r\n    buf = StringIO()\r\n    for line in lines:\r\n        buf.write(line)\r\n        buf.write(\"\\n\")\r\n    return buf.getvalue()\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "str1 + str2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n+m) once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple concatenation of few strings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"\".join(list)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Building strings from many parts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "f\"{x} {y}\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) compiled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most readable, good performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "StringIO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Building very large strings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "% formatting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logging (lazy evaluation)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript string methods\r\nconst text: string = \"  Hello, TypeScript!  \";\r\nconsole.log(text.trim().toUpperCase());  // \"HELLO, TYPESCRIPT!\"\r\n\r\n// Template literals (like f-strings)\r\nconst name: string = \"Alice\";\r\nconst age: number = 30;\r\nconsole.log(${name} is  years old);\r\n\r\n// Slicing (substring vs slice)\r\nconst s: string = \"TypeScript\";\r\nconsole.log(s.slice(0, 4));   // \"Type\"\r\nconsole.log(s.slice(-6));     // \"Script\"\r\nconsole.log(s.split(\"\").reverse().join(\"\"));  // reverse\r\n\r\n// Regex\r\nconst emailRegex = /[\\w.-]+@[\\w.-]+\\.\\w+/;\r\nconst match = \"user@example.com\".match(emailRegex);\r\nconsole.log(match?.[0]);\r\n\r\n// Unicode\r\nconst utf8: Uint8Array = new TextEncoder().encode(\"Hello ??\");\r\nconst decoded: string = new TextDecoder().decode(utf8);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strings are immutable sequences of Unicode characters — all \"modifications\" return new strings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use slicing [start:stop:step] for substring extraction; negative indices count from end"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "f-strings are the preferred formatting method: fast, readable, expression-aware"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The\r\ne module provides full regex support: search, match, findall, sub"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encoding converts str to bytes (str.encode()); decoding converts bytes to str (bytes.decode())"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always specify encoding (utf-8) when opening files — never rely on defaults"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "String concatenation with + in loops is O(n²); use \"\".join(list) for building strings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use\r\ne.compile() for patterns used repeatedly to improve performance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unicode normalization (NFC/NFD) ensures consistent comparison of accented characters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Template strings are safe for user-provided templates with $variable syntax"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Build string from parts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\".join(parts)"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "result += part in a loop"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Format output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f-strings: f\"{value:.2f}\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "% formatting or manual concatenation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Check substring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"hello\" in text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text.find(\"hello\") != -1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Split by whitespace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text.split() (default)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "text.split(\" \")"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Regex repeatedly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "re.compile(...) then .search()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recompiling pattern each time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiline string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Triple quotes \"\"\"...\"\"\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit \\n joins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Remove prefix/suffix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ext.removeprefix(\"pre\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ext[len(\"pre\"):]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s03-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q1: Explain Python's string immutability. Why does it matter?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Strings cannot be modified in place — any operation that appears to modify returns a new string. This enables strings to be used as dictionary keys, makes them thread-safe without locking, and allows internal optimizations like interning. The tradeoff is that building strings in loops with + is O(n²)."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s03-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q2: How do f-strings work and what are their limitations?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "f-strings evaluate expressions at runtime and format them using double-quoted or single-quoted strings prefixed with f. Limitations: cannot use backslashes inside expressions, cannot be used with dynamic format strings, and the expression cannot contain comments. They're compiled at bytecode level, making them the fastest formatting option."
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s03-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q3: What is the difference between re.match, re.search, and re.fullmatch?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "re.match()"
          }), " checks only at the start of the string. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "re.search()"
          }), " scans the entire string for the first match anywhere. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "re.fullmatch()"
          }), " requires the entire string to match the pattern. Use search for general-purpose matching, match for anchored prefix patterns, fullmatch when the whole string must conform."]
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s03-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q4: How does slicing with negative indices work?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Negative indices count from the end of the sequence, where -1 is the last element. In slices like ", (0,jsx_runtime.jsx)(_components.code, {
            children: "s[-5:-2]"
          }), ", Python converts negative indices to positive by adding the length. Works with all sequence types (str,.\nlist, tuple). The step can also be negative for reversed traversal: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "s[::-1]"
          }), " reverses a string."]
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s03-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q5: What are raw strings and when should you use them with regex?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Raw strings (prefix r) prevent Python from interpreting backslash escapes like \\n or \\t. In regex patterns, backslashes are used extensively for special sequences (\\d, \\w, \\b). Without raw strings, you'd need double backslashes (\\\\\\\\d), which hurts readability. Always use raw strings for regex patterns: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "r\"\\d+\\.\\d+\""
          }), "."]
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s03-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q6: Explain the split and join methods in detail."]
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "split(sep, maxsplit)"
          }), " divides a string into a list at each occurrence of sep. Without arguments, splits on any whitespace and.\nstrips empty strings. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "rsplit()"
          }), " works from the right. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "join(iterable)"
          }), " is the inverse — concatenates an iterable of strings with the separator.\nstring. They form the primary pattern for string tokenization/assembly in Python."]
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s03-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q7: How do you handle Unicode in Python 3?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Python 3 strings are Unicode natively. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "str.encode()"
          }), " to convert to bytes for storage/transmission, and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bytes.decode()"
          }), " to convert back. UTF-8 is the dominant encoding. The ", (0,jsx_runtime.jsx)(_components.code, {
            children: "unicodedata"
          }), " module provides property lookups. For consistent comparison, normalize with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "unicodedata.normalize('NFC', text)"
          }), ". Always specify encoding in file operations."]
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s03-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q8: Why is string concatenation with + inefficient in loops?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Strings are immutable, so each ", (0,jsx_runtime.jsx)(_components.code, {
            children: "+="
          }), " creates a new string and copies both parts. This results in O(n²) time and.\nO(n²) memory allocation. Using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "\"\".join(list)"
          }), " precomputes the total size, allocates once, and copies each string exactly once — O(n) time. For.\nvery large strings, StringIO or building a list then joining is preferred."]
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s03-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q9: What is the difference between str and bytes in Python 3?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "str"
          }), " represents Unicode text as a sequence of code points. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bytes"
          }), " represents raw binary data as a sequence of integers 0-255. They are different types — you cannot mix them in operations like concatenation. Conversion between them requires explicit ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".encode()"
          }), " and.\n", (0,jsx_runtime.jsx)(_components.code, {
            children: ".decode()"
          }), ". In Python 2, str was bytes and unicode was the text type."]
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s03-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q10: How do you remove a known prefix or suffix from a string?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Python 3.9+ has ", (0,jsx_runtime.jsx)(_components.code, {
            children: "str.removeprefix()"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "str.removesuffix()"
          }), ". For older versions, use slicing: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "text[len(prefix):]"
          }), " if text.startswith(prefix) else text. Similarly for suffix: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "text[:-len(suffix)]"
          }), ". The newer methods are safer as they only remove if present and don't raise errors for non-matching prefixes/suffixes."]
        })
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": What is the output of \"Python\"[::-1]?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) \"nohtyP\"\r\nb) \"Python\"\r\nc) \"P\"\r\nd) \"n\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s03-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: a) nohtyP"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Step of -1 reverses the string."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What does \"a,b,c,d\".split(\",\", 2) return?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) ['a', 'b', 'c,d']\r\nb) ['a', 'b', 'c', 'd']\r\nc) ['a,b', 'c,d']\r\nd) ['a', 'b,c,d']"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s03-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: a) ['a', 'b', 'c,d']"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "maxsplit=2 limits to 2 splits, remaining string is the last element."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": Which regex matches whole words containing only lowercase letters?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) [a-z]+\r\nb) \\b[a-z]+\\b\r\nc) [a-z]*\r\nd) \\w+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s03-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) \\b[a-z]+\\b"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "\\b ensures word boundaries, [a-z]+ matches one or more lowercase letters."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": What is the result of \"café\".encode(\"ascii\", errors=\"ignore\")?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a) b'caf'\r\nb) b'caf?'\r\nc) b'café'\r\nd) UnicodeEncodeError"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s03-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: a) b'caf'"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "é is not in ASCII; errors=\"ignore\" drops unencodable characters."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What is the most efficient way to build a string from 10,000 parts?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a)\r\nresult = \"\"; for p in parts: result += p\r\nb)\r\nresult = \"\".join(parts)\r\nc)\r\nresult = sum(parts, \"\")\r\nd)\r\nresult = f\"{parts}\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s03-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) \"\".join(parts)"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "join precomputes total size and copies once. Option a is O(n²)."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Write a function that takes a sentence and returns it with each word reversed, preserving word order."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Extract all hashtags from a tweet string using regex."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Write a function that validates phone numbers in the format (XXX) XXX-XXXX using regex."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Implement a simple tokenizer that splits text into words, numbers, and punctuation using re.findall."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement a format_exception function that takes a raw traceback string and formats it with color-coded levels using regex substitution."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Build a simple template engine that replaces {{ variable }} placeholders from a dictionary, handling nested paths like {{ user.name }}."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not understanding the fundamental concepts before applying them"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skipping edge cases in implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not analyzing time/space complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forgetting to handle null/empty inputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not practicing enough problems to build pattern recognition"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Core principle: Understand the fundamental concepts thoroughly"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implementation pattern: Practice with real code examples"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complexity: Know the time and space complexity"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Application: Know when to use this in production systems"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Interview: Frequently asked in technical interviews"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Edge cases: Consider common failure scenarios"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Related concepts: Connect to broader system design"
          }), "\n"]
        }), "\n"]
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
            children: "Explain the core idea of Strings & Formatting — Methods, Slicing, F-Strings, and Regex in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates Strings & Formatting — Methods, Slicing, F-Strings, and Regex."
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
            children: "Describe a production bug caused by misunderstanding Strings & Formatting — Methods, Slicing, F-Strings, and Regex. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on Strings & Formatting — Methods, Slicing, F-Strings, and Regex from 10 users to 10 million?"
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
            children: "Compare Strings & Formatting — Methods, Slicing, F-Strings, and Regex with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on Strings & Formatting — Methods, Slicing, F-Strings, and Regex."
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
            children: "How does Strings & Formatting — Methods, Slicing, F-Strings, and Regex behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of Strings & Formatting — Methods, Slicing, F-Strings, and Regex run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of Strings & Formatting — Methods, Slicing, F-Strings, and Regex that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name Strings & Formatting — Methods, Slicing, F-Strings, and Regex explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Strings & Formatting — Methods, Slicing, F-Strings, and Regex\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies Strings & Formatting — Methods, Slicing, F-Strings, and Regex to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside Strings & Formatting — Methods, Slicing, F-Strings, and Regex (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of Strings & Formatting — Methods, Slicing, F-Strings, and Regex and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a Strings & Formatting — Methods, Slicing, F-Strings, and Regex-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic Strings & Formatting — Methods, Slicing, F-Strings, and Regex interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply Strings & Formatting — Methods, Slicing, F-Strings, and Regex in production today?"
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
        }), " Strings & Formatting — Methods, Slicing, F-Strings, and Regex builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Strings & Formatting — Methods, Slicing, F-Strings, and Regex before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Strings & Formatting — Methods, Slicing, F-Strings, and Regex is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Strings & Formatting — Methods, Slicing, F-Strings, and Regex in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Strings & Formatting — Methods, Slicing, F-Strings, and Regex chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Strings & Formatting — Methods, Slicing, F-Strings, and Regex is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 03 Strings And Formatting is ___. — Answer: O(n) for iteration, O(1) for dict lookup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 03 Strings And Formatting is ___. — Answer: empty input, None values, type mismatches"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Strings & Formatting — Methods, Slicing, F-Strings, and Regex issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Strings & Formatting — Methods, Slicing, F-Strings, and Regex in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Strings & Formatting — Methods, Slicing, F-Strings, and Regex that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Strings & Formatting — Methods, Slicing, F-Strings, and Regex is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Strings & Formatting — Methods, Slicing, F-Strings, and Regex in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Strings & Formatting — Methods, Slicing, F-Strings, and Regex and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Strings & Formatting — Methods, Slicing, F-Strings, and Regex on an empty input?"
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
            children: "Complete Medium exercises, explain Strings & Formatting — Methods, Slicing, F-Strings, and Regex to someone else"
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
        children: "Always write a one-line example of Strings & Formatting — Methods, Slicing, F-Strings, and Regex from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered Strings & Formatting — Methods, Slicing, F-Strings, and Regex when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining Strings & Formatting — Methods, Slicing, F-Strings, and Regex twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own Strings & Formatting — Methods, Slicing, F-Strings, and Regex snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of Strings & Formatting — Methods, Slicing, F-Strings, and Regex listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link Strings & Formatting — Methods, Slicing, F-Strings, and Regex to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of Strings & Formatting — Methods, Slicing, F-Strings, and Regex by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain Strings & Formatting — Methods, Slicing, F-Strings, and Regex to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'Fluent Python' by Luciano Ramalho — the definitive advanced Python book"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'Python Cookbook' by David Beazley — practical recipes for real problems"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Real Python tutorials: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://realpython.com",
          children: "https://realpython.com"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Python official docs: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.python.org/3",
          children: "https://docs.python.org/3"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PEP 8 style guide: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://peps.python.org/pep-0008",
          children: "https://peps.python.org/pep-0008"
        }), " & Formatting — Methods, Slicing, F-Strings, and Regex"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 01 — builds the foundation for 03 Strings And Formatting"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 03 Strings And Formatting with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 03 Strings And Formatting fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 03 Strings And Formatting"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 03 Strings And Formatting"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 03 Strings And Formatting?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 03 Strings And Formatting?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 03 Strings And Formatting asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 03 Strings And Formatting?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strings & Formatting — Methods, Slicing, F-Strings, and Regex is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with Strings & Formatting — Methods, Slicing, F-Strings, and Regex."
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
        children: "Strings & Formatting — Methods, Slicing, F-Strings, and Regex emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for Strings & Formatting — Methods, Slicing, F-Strings, and Regex today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about Strings & Formatting — Methods, Slicing, F-Strings, and Regex — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around Strings & Formatting — Methods, Slicing, F-Strings, and Regex changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "secrets"
        }), " module instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "random"
        }), " for cryptographic operations"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate all external inputs with Pydantic before processing"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "subprocess.run()"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shell=False"
        }), " to prevent shell injection"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Store secrets in environment variables or secret managers, never in source code"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pin dependency versions in requirements.txt and scan with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip-audit"
        }), " for vulnerabilities"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python's GIL limits CPU parallelism — use multiprocessing for CPU-bound ML preprocessing, asyncio for I/O-bound API calls"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NumPy vectorization replaces Python loops with C-level operations — 100-1000x speedup for array operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generators enable processing datasets larger than RAM by yielding one batch at a time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Type hints with mypy catch shape mismatches in tensor operations before runtime"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling with cProfile identifies bottlenecks before optimizing — never optimize without measuring first"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "03 Strings And Formatting is like a GPS navigation system"
          }), ": you define the destination (goal), the system plans the route (algorithm), and recalculates when you take a wrong turn (error handling)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Complexity is like a restaurant kitchen"
          }), ": a single chef (O(n)) handles small orders fine, but 1000 simultaneous orders need parallel chefs (O(log n) with proper indexing)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Edge cases are like stress tests"
          }), ": the happy path is a calm day, but production is Black Friday — design for the worst case."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The chapter roadmap is a subway map"
          }), ": each section is a station, and skipping one means you miss the connection to the next destination.## Capstone Project Link"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/Raushan666java/ai-engineering-journey",
            children: "Module Capstone: End-to-End Project"
          }), " — this chapter contributes the Strings & Formatting — Methods, Slicing, F-Strings, and Regex skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "01pythonprogramming-03stringsandformatting-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the output of \"Python\"[::-1]?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "a) nohtyP"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "01pythonprogramming-03stringsandformatting-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What does \"a,b,c,d\".split(\",\", 2) return?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "a) ['a', 'b', 'c,d']"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "01pythonprogramming-03stringsandformatting-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Which regex matches whole words containing only lowercase letters?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "b) \\b[a-z]+\\b"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "01pythonprogramming-03stringsandformatting-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the result of \"café\".encode(\"ascii\", errors=\"ignore\")?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "a) b'caf'"
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for Strings & Formatting — Methods, Slicing, F-Strings, and Regex (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing Strings & Formatting — Methods, Slicing, F-Strings, and Regex (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for Strings & Formatting — Methods, Slicing, F-Strings, and Regex-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running Strings & Formatting — Methods, Slicing, F-Strings, and Regex in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ruff"
        }), " — extremely fast Python linter (replaces flake8, isort, pyupgrade)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "black"
        }), " — opinionated code formatter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "mypy"
        }), " — static type checker"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "pytest"
        }), " — testing framework with fixtures and parametrize"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "uv"
        }), " — fast Python package installer and resolver & Formatting — Methods, Slicing, F-Strings, and Regex"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 1"
        }), ": Reproduce the failure with the smallest possible input — isolate the bug before changing any code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 2"
        }), ": Add structured logging at each stage of the 03 Strings And Formatting pipeline to identify exactly where the failure occurs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 3"
        }), ": Check the Common Mistakes section — 80% of bugs match one of those patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 4"
        }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdb.set_trace()"
        }), " or your IDE debugger to inspect intermediate values at the failure point."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 5"
        }), ": For performance issues, profile with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cProfile"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "py-spy"
        }), " before optimizing — never guess at bottlenecks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 6"
        }), ": Write a regression test that reproduces the bug before fixing it — this prevents recurrence."]
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
        children: "Explain Strings & Formatting — Methods, Slicing, F-Strings, and Regex in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Strings & Formatting — Methods, Slicing, F-Strings, and Regex."
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
        children: "Tell me about a time you debugged a Strings & Formatting — Methods, Slicing, F-Strings, and Regex problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Strings & Formatting — Methods, Slicing, F-Strings, and Regex is used at scale?"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_03_strings_and_formatting(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 03 Strings And Formatting.\r\n\r\n    Key concepts: variables, functions, OOP, modules\r\n    Complexity: O(n) for iteration, O(1) for dict lookup\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 03 Strings And Formatting here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
      })
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
            children: "Explain Strings & Formatting — Methods, Slicing, F-Strings, and Regex without notes"
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
          children: "Instagram"
        }), " serves 2B users with a Python/Django backend, proving Python scales with the right architecture"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dropbox"
        }), " uses Python for their desktop client and backend services"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NASA"
        }), " uses Python for scientific computing and mission analysis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Google"
        }), " uses Python extensively for internal tooling, ML pipelines, and YouTube's backend"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": demonstrate Pythonic code — list comprehensions, context managers, generators, and dataclasses show senior-level fluency"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/01-python-programming/04-collections",
        children: "Collections — Lists, Tuples, Sets, and Dictionaries"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strings & Formatting — Methods, Slicing, F-Strings, and Regex, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of Strings & Formatting — Methods, Slicing, F-Strings, and Regex depends on input size and distribution — always benchmark for your own data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone."
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