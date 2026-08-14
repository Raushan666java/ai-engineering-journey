"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[56560],{

/***/ 70603
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_python_programming_05_strings_md_a9d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-python-programming-05-strings-md-a9d.json
const site_docs_courses_python_programming_05_strings_md_a9d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/python-programming/05-strings","title":"Chapter 5: Strings","description":"Previous Lists","source":"@site/docs/courses/python-programming/05-strings.md","sourceDirName":"courses/python-programming","slug":"/python-programming/05-strings","permalink":"/ai-engineering-journey/python-programming/05-strings","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"05-strings","slug":"/python-programming/05-strings","title":"Chapter 5: Strings","sidebar_label":"Chapter 5: Strings","sidebar_position":5},"sidebar":"course-python-programming","previous":{"title":"Chapter 4: Loops and Iteration","permalink":"/ai-engineering-journey/python-programming/04-loops"},"next":{"title":"Chapter 6: Lists","permalink":"/ai-engineering-journey/python-programming/06-lists"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/python-programming/05-strings.md


const frontMatter = {
	id: '05-strings',
	slug: '/python-programming/05-strings',
	title: 'Chapter 5: Strings',
	sidebar_label: 'Chapter 5: Strings',
	sidebar_position: 5
};
const contentTitle = 'Chapter 5: Strings';

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
  "value": "5.1 String Literals",
  "id": "51-string-literals",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
  "level": 3
}, {
  "value": "5.2 Indexing and Slicing",
  "id": "52-indexing-and-slicing",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-1",
  "level": 3
}, {
  "value": "5.3 String Methods",
  "id": "53-string-methods",
  "level": 2
}, {
  "value": "5.3.1 Searching and Counting",
  "id": "531-searching-and-counting",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-2",
  "level": 3
}, {
  "value": "5.3.2 Case Manipulation",
  "id": "532-case-manipulation",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-3",
  "level": 3
}, {
  "value": "5.3.3 Stripping and Padding",
  "id": "533-stripping-and-padding",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-4",
  "level": 3
}, {
  "value": "5.3.4 Splitting and Joining",
  "id": "534-splitting-and-joining",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-5",
  "level": 3
}, {
  "value": "5.3.5 Replacement",
  "id": "535-replacement",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-6",
  "level": 3
}, {
  "value": "5.3.6 Character Classification",
  "id": "536-character-classification",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-7",
  "level": 3
}, {
  "value": "5.3.7 Prefix and Suffix",
  "id": "537-prefix-and-suffix",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-8",
  "level": 3
}, {
  "value": "5.4 String Formatting",
  "id": "54-string-formatting",
  "level": 2
}, {
  "value": "5.4.1 f-strings (Python 3.6+)",
  "id": "541-f-strings-python-36",
  "level": 3
}, {
  "value": "5.4.2 Format Specifiers",
  "id": "542-format-specifiers",
  "level": 3
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-9",
  "level": 3
}, {
  "value": "5.4.3 str.format()",
  "id": "543-strformat",
  "level": 3
}, {
  "value": "5.4.4 %-formatting (Legacy)",
  "id": "544--formatting-legacy",
  "level": 3
}, {
  "value": "5.5 Raw Strings",
  "id": "55-raw-strings",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-10",
  "level": 3
}, {
  "value": "5.6 Bytes and str",
  "id": "56-bytes-and-str",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-11",
  "level": 3
}, {
  "value": "5.7 Unicode Support",
  "id": "57-unicode-support",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-12",
  "level": 3
}, {
  "value": "5.8 Performance Considerations",
  "id": "58-performance-considerations",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel-13",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
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
  "value": "More TypeScript String Patterns",
  "id": "more-typescript-string-patterns",
  "level": 3
}, {
  "value": "TypeScript Utilities",
  "id": "typescript-utilities",
  "level": 3
}, {
  "value": "TypeScript String Patterns",
  "id": "typescript-string-patterns",
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
}, {
  "value": "TypeScript Challenge",
  "id": "typescript-challenge",
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
        id: "chapter-5-strings",
        children: "Chapter 5: Strings"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/04-loops",
          children: "Loops and Iteration"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/06-lists",
          children: "Lists"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create strings using all literal forms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Index and slice strings to extract substrings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the extensive set of string methods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write formatted output with f-strings, format specifiers, and str.format()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish raw strings, byte strings, and Unicode strings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Process text data efficiently"
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
        href: "../../assets/images/lessons/python-programming/05-strings/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/python-programming/05-strings/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/python-programming/05-strings/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/python-programming/05-strings/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/python-programming/05-strings/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/python-programming/05-strings/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/05-strings.png",
        alt: "Python Strings"
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
            children: "5.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String Literals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quotes, escape sequences, raw strings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indexing and Slicing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "start:stop:step, negative indices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String Methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search, case, split, join, replace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formatting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f-strings, format specs, .format()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw Strings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r\"\" disables escaping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bytes and str"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "encode()/decode()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unicode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normalization, code points"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "join() over +="
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Literals] --> B[Indexing/Slicing]\n    B --> C[Methods]\n    C --> D[Formatting]\n    D --> E[Raw Strings]\n    E --> F[Bytes vs str]\n    F --> G[Unicode]\n    G --> H[Performance]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "51-string-literals",
      children: "5.1 String Literals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Strings can use single, double, or triple quotes; escape sequences start with backslash."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python offers several ways to write string literals:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "single = 'Hello'\ndouble = \"Hello\"\ntriple = \"\"\"Multi-line\nstring literal\"\"\"\ntriple_single = '''Also multi-line'''\n\n# Adjacent literals are concatenated\njoined = \"Hello\" \" \" \"World\"\nprint(joined)  # Hello World\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Triple-quoted strings also preserve indentation. Use inspect.cleandoc() to clean up indented docstrings.\nTriple-quoted strings preserve line breaks and are commonly used for docstrings:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def example():\n    \"\"\"This is a docstring explaining the function.\"\"\"\n    pass\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Escape sequences begin with a backslash:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "escaped = 'It\\'s a \"nice\" day\\nNew line\\tTab'\nraw = r'It\\'s a \"nice\" day\\nNew line\\tTab'\nprint(escaped)\nprint(raw)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "It's a \"nice\" day\nNew line\tTab\nIt\\'s a \"nice\" day\\nNew line\\tTab\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Common escape sequences: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\n"
      }), " (newline), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\t"
      }), " (tab), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\\\"
      }), " (backslash), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\'"
      }), " (single quote), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\\""
      }), " (double quote), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\0"
      }), " (null), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\xHH"
      }), " (hex byte), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\uHHHH"
      }), " (Unicode BMP), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\UHHHHHHHH"
      }), " (Unicode full)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: single, double, backtick quotes\nconst single: string = 'Hello';\nconst double: string = \"Hello\";\nconst template: string = `Multi-line\nstring literal`;\n\n// TypeScript template literals (backtick) support interpolation:\nconst name: string = \"Alice\";\nconst greeting: string = `Hello, ${name}!`;  // f-string equivalent\n\n// Same escape sequences:\nconst escaped: string = 'It\\'s a \"nice\" day\\nNew line\\tTab';\nconsole.log(escaped);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TypeScript uses backtick (", (0,jsx_runtime.jsx)(_components.code, {
        children: "`"
      }), ") for template literals, which are similar to f-strings. Python uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "f\"\""
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "f''"
      }), " prefixed strings."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "52-indexing-and-slicing",
      children: "5.2 Indexing and Slicing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Slice syntax is s[start:stop:step] -- all components are optional and indices clamp automatically."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strings are sequences of Unicode code points and support indexing:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "s = \"Python\"\n#  P  y  t  h  o  n\n#  0  1  2  3  4  5\n# -6 -5 -4 -3 -2 -1\n\nprint(s[0])    # P\nprint(s[-1])   # n\nprint(s[2:5])  # tho  (start:end, exclusive of end)\nprint(s[:3])   # Pyt  (from beginning)\nprint(s[3:])   # hon  (to end)\nprint(s[::2])  # Pto  (step)\nprint(s[::-1]) # nohtyP  (reverse)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " s[::-1] reverses any sequence -- one of Python's most elegant idioms.\nSlice semantics: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "s[start:stop:step]"
        }), ". All components are optional. Indices are clamped to the sequence bounds -- no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IndexError"
        }), " for out-of-range slices:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "print(s[0:100])  # Python\nprint(s[100:])   # \"\" (empty)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-1",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: strings also support indexing and slicing\nconst s: string = \"Python\";\n\nconsole.log(s[0]);       // P  (indexing)\nconsole.log(s.at(-1));   // n  (Python-style negative index - ES2022+)\nconsole.log(s.slice(2, 5));  // tho  (end-exclusive, like Python)\nconsole.log(s.slice(0, 3));  // Pyt  (from beginning)\nconsole.log(s.slice(3));     // hon  (to end)\n\n// Python: s[::2] -> step/stride\n// TypeScript: no direct step equivalent\n// Manual approach:\nconst stepped = s.split(\"\").filter((_, i) => i % 2 === 0).join(\"\");\nconsole.log(stepped);  // Pto\n\n// Python: s[::-1] reverse\n// TypeScript:\nconsole.log(s.split(\"\").reverse().join(\"\"));  // nohtyP\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Python"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TypeScript"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "s[i]"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "s[i]"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "s.at(i)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Negative index"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Yes (", (0,jsx_runtime.jsx)(_components.code, {
              children: "s[-1]"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "s.at(-1)"
            }), " (ES2022)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slice"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "s[start:stop:step]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "s.slice(start, stop)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Step/stride"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Yes (", (0,jsx_runtime.jsx)(_components.code, {
              children: "s[::2]"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual filter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "s[::-1]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "s.split(\"\").reverse().join(\"\")"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Out-of-range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clamped (no error)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clamped (no error)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "53-string-methods",
      children: "5.3 String Methods"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Strings are immutable -- every method returns a new string without modifying the original."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strings are immutable -- all methods return a new string."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "531-searching-and-counting",
      children: "5.3.1 Searching and Counting"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "text = \"hello world, hello universe\"\n\nprint(text.count(\"hello\"))      # 2\nprint(text.find(\"world\"))       # 6  (first index, or -1)\nprint(text.index(\"world\"))      # 6  (first index, or ValueError)\nprint(text.rfind(\"hello\"))      # 13 (last index)\nprint(text.startswith(\"hello\")) # True\nprint(text.endswith(\"verse\"))   # True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-2",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: similar search methods\nconst text: string = \"hello world, hello universe\";\n\n// Python: text.count(\"hello\") -> 2\nconst count = (text.match(/hello/g) || []).length;\nconsole.log(count);  // 2\n\n// Python: text.find(\"world\") -> 6\nconsole.log(text.indexOf(\"world\"));    // 6  (or -1, like find)\nconsole.log(text.includes(\"world\"));   // true  (boolean check)\nconsole.log(text.startsWith(\"hello\")); // true\nconsole.log(text.endsWith(\"verse\"));   // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "532-case-manipulation",
      children: "5.3.2 Case Manipulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "s = \"Hello World\"\nprint(s.upper())          # HELLO WORLD\nprint(s.lower())          # hello world\nprint(s.title())          # Hello World\nprint(s.capitalize())     # Hello world\nprint(s.swapcase())       # hELLO wORLD\nprint(s.casefold())       # hello world (aggressive lower for caseless matching)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "casefold()"
      }), " is more aggressive than ", (0,jsx_runtime.jsx)(_components.code, {
        children: "lower()"
      }), " for Unicode caseless comparison:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "print(\"ß\".lower())    # ß\nprint(\"ß\".casefold()) # ss\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-3",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: case methods (identical naming)\nconst s: string = \"Hello World\";\nconsole.log(s.toUpperCase());      // HELLO WORLD\nconsole.log(s.toLowerCase());      // hello world\nconsole.log(s.replace(/\\b\\w/g, c => c.toUpperCase()));  // title case (manual)\n\n// TypeScript does NOT have casefold() or swapcase()\n// Unicode normalization:\nconsole.log(\"ß\".toLowerCase());    // ß\nconsole.log(\"ß\".toLocaleLowerCase(\"de\"));  // ß (no automatic decomposition)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "533-stripping-and-padding",
      children: "5.3.3 Stripping and Padding"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "s = \"  hello  \\n\"\nprint(s.strip())        # \"hello\"\nprint(s.lstrip())       # \"hello  \\n\"\nprint(s.rstrip())       # \"  hello\"\n\nprint(\"###hello###\".strip(\"#\"))    # hello\nprint(\"42\".zfill(5))               # 00042\nprint(\"hi\".center(11))             # \"    hi     \"\nprint(\"hi\".ljust(10, \"-\"))         # \"hi--------\"\nprint(\"hi\".rjust(10, \"-\"))         # \"--------hi\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-4",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: trim methods\nconst s: string = \"  hello  \\n\";\nconsole.log(s.trim());          // \"hello\"  (strip)\nconsole.log(s.trimStart());     // \"hello  \\n\"  (lstrip)\nconsole.log(s.trimEnd());       // \"  hello\"  (rstrip)\n\n// Padding\nconsole.log(\"42\".padStart(5, \"0\"));    // \"00042\"  (zfill)\nconsole.log(\"hi\".padStart(11));        // \"         hi\"  (rjust)\nconsole.log(\"hi\".padEnd(10, \"-\"));     // \"hi--------\"  (ljust)\n\n// No direct center equivalent:\nfunction center(str: string, width: number): string {\n    const padding = Math.max(0, width - str.length);\n    const left = Math.floor(padding / 2);\n    const right = padding - left;\n    return \" \".repeat(left) + str + \" \".repeat(right);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "534-splitting-and-joining",
      children: "5.3.4 Splitting and Joining"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "csv = \"a,b,c,d\"\nprint(csv.split(\",\"))             # ['a', 'b', 'c', 'd']\nprint(csv.split(\",\", 2))          # ['a', 'b', 'c,d']\n\nlines = \"one\\ntwo\\nthree\"\nprint(lines.splitlines())         # ['one', 'two', 'three']\n\ndata = \"a b  c   d\"\nprint(data.split())               # ['a', 'b', 'c', 'd'] (any whitespace)\n\nparts = [\"Python\", \"is\", \"fun\"]\nprint(\" \".join(parts))            # \"Python is fun\"\nprint(\", \".join(parts))           # \"Python, is, fun\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-5",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: split and join (identical concept)\nconst csv: string = \"a,b,c,d\";\nconsole.log(csv.split(\",\"));              // ['a', 'b', 'c', 'd']\nconsole.log(csv.split(\",\", 2));           // ['a', 'b']\n\nconst parts: string[] = [\"Python\", \"is\", \"fun\"];\nconsole.log(parts.join(\" \"));             // \"Python is fun\"  (inverse of split)\nconsole.log(parts.join(\", \"));            // \"Python, is, fun\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "535-replacement",
      children: "5.3.5 Replacement"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "s = \"hello world\"\nprint(s.replace(\"hello\", \"goodbye\"))  # goodbye world\nprint(s.replace(\"l\", \"L\"))            # heLLo worLd\nprint(s.replace(\"l\", \"L\", 2))         # heLLo world (max 2 replacements)\n\n# Translation table\ntable = str.maketrans(\"aeiou\", \"AEIOU\")\nprint(\"hello world\".translate(table))  # hEllO wOrld\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-6",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: replace with strings or regex\nlet s: string = \"hello world\";\nconsole.log(s.replace(\"hello\", \"goodbye\"));   // goodbye world (first match)\nconsole.log(s.replace(/l/g, \"L\"));            // heLLo worLd (all: /g flag)\nconsole.log(s.replace(/l/g, \"L\").replace(/l/, \"L\"));\n// Note: replace() replaces first match only (use /g for all)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "536-character-classification",
      children: "5.3.6 Character Classification"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "print(\"hello\".isalpha())       # True\nprint(\"123\".isdigit())         # True\nprint(\"abc123\".isalnum())      # True\nprint(\"   \".isspace())         # True\nprint(\"Hello\".istitle())       # True\nprint(\"42\".isdecimal())        # True\nprint(\"42\".isnumeric())        # True (also handles \"⅕\")\nprint(\"hello\".isidentifier())  # True\nprint(\"True\".isidentifier())   # True\nprint(\"2fast\".isidentifier())  # False (starts with digit)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-7",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: regex-based character classification\nconsole.log(/^[a-zA-Z]+$/.test(\"hello\"));      // isalpha\nconsole.log(/^\\d+$/.test(\"123\"));               // isdigit\nconsole.log(/^[a-zA-Z0-9]+$/.test(\"abc123\"));   // isalnum\nconsole.log(/^\\s+$/.test(\"   \"));               // isspace\n\n// Python has more built-in methods; TypeScript uses regex\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "537-prefix-and-suffix",
      children: "5.3.7 Prefix and Suffix"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "url = \"https://python.org\"\nprint(url.removeprefix(\"https://\"))  # python.org\nprint(url.removesuffix(\".org\"))      # https://python\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-8",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: same concept (node >= 18 or similar)\nconst url: string = \"https://python.org\";\n// No direct removeprefix/removesuffix prior to ES2024:\nconsole.log(url.replace(/^https:\\/\\//, \"\"));   // python.org\nconsole.log(url.replace(/\\.org$/, \"\"));         // https://python\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "54-string-formatting",
      children: "5.4 String Formatting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " f-strings with format specifiers are the recommended formatting approach in modern Python."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "541-f-strings-python-36",
      children: "5.4.1 f-strings (Python 3.6+)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["f-strings embed expressions inside ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{}"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "name = \"Alice\"\nage = 30\nprint(f\"{name} is {age} years old\")   # Alice is 30 years old\nprint(f\"{name!r}\")                     # 'Alice'  (repr)\nprint(f\"{2 * 21}\")                     # 42\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "542-format-specifiers",
      children: "5.4.2 Format Specifiers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "pi = 3.1415926535\nprint(f\"{pi:.2f}\")            # 3.14\nprint(f\"{pi:.4f}\")            # 3.1416\nprint(f\"{pi:10.2f}\")          # \"      3.14\"  (width 10)\nprint(f\"{pi:010.2f}\")         # \"0000003.14\"\n\nn = 42\nprint(f\"{n:b}\")               # 101010 (binary)\nprint(f\"{n:o}\")               # 52 (octal)\nprint(f\"{n:x}\")               # 2a (hex)\n\npct = 0.125\nprint(f\"{pct:.1%}\")           # 12.5%\n\nbig = 1234567\nprint(f\"{big:,}\")             # 1,234,567\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alignment:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "print(f\"{'left':<10}|\")       # \"left      |\"\nprint(f\"{'center':^10}|\")     # \"  center  |\"\nprint(f\"{'right':>10}|\")      # \"     right|\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-9",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: template literals with similar formatting\nconst name: string = \"Alice\";\nconst age: number = 30;\nconsole.log(`${name} is ${age} years old`);  // Alice is 30\n\n// TypeScript does NOT have built-in format specifiers\n// Number formatting:\nconst pi: number = 3.1415926535;\nconsole.log(pi.toFixed(2));            // \"3.14\"  (like f\"{pi:.2f}\")\nconsole.log(pi.toPrecision(4));        // \"3.142\"\nconsole.log(pi.toString().padStart(10));  // \"  3.14159\"  (width)\n\n// Binary, octal, hex:\nconst n: number = 42;\nconsole.log(n.toString(2));    // \"101010\"  (binary)\nconsole.log(n.toString(8));    // \"52\"  (octal)\nconsole.log(n.toString(16));   // \"2a\"  (hex)\n\n// Percentage:\nconst pct: number = 0.125;\nconsole.log(`${(pct * 100).toFixed(1)}%`);  // \"12.5%\"\n\n// Thousands separator:\nconst big: number = 1234567;\nconsole.log(big.toLocaleString());  // \"1,234,567\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "543-strformat",
      children: "5.4.3 str.format()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "template = \"{} x {} = {}\"\nprint(template.format(3, 4, 12))\n\ntemplate = \"{name} is {age}\"\nprint(template.format(name=\"Bob\", age=25))\n\npoint = (3, 4)\nprint(\"({0[0]}, {0[1]})\".format(point))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "544--formatting-legacy",
      children: "5.4.4 %-formatting (Legacy)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "print(\"%s is %d years old\" % (\"Charlie\", 35))\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Avoid ", (0,jsx_runtime.jsx)(_components.code, {
        children: "%"
      }), "-formatting in new code -- use f-strings or ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".format()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "55-raw-strings",
      children: "5.5 Raw Strings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Raw strings treat backslashes as literal characters -- essential for regex and Windows paths."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Raw strings treat backslashes as literal characters. Prefix with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "r"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "R"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "normal = \"C:\\newfolder\\text.txt\"    # \\n is newline, \\t is tab\nraw = r\"C:\\newfolder\\text.txt\"      # C:\\newfolder\\text.txt\n\n# Useful for regex patterns\nimport re\npattern = r\"\\d+\\.\\d+\"  # matches decimal numbers\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-10",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: no raw strings, but regex literals handle this\n// TypeScript regex: /pattern/flags (backslash = literal in regex)\nconst pattern: RegExp = /\\d+\\.\\d+/;  // matches decimal numbers\n\n// For string escapes, TypeScript has the same backslash rules\n// Windows paths use double backslash:\nconst path: string = \"C:\\\\newfolder\\\\text.txt\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "56-bytes-and-str",
      children: "5.6 Bytes and str"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " str is Unicode text; bytes is binary data -- convert with .encode()/.decode()."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "b = b\"hello\"\nprint(type(b))         # <class 'bytes'>\nprint(b[0])            # 104  (int, not str)\n\ns = \"café\"\nencoded = s.encode(\"utf-8\")\nprint(encoded)         # b'caf\\xc3\\xa9'\ndecoded = encoded.decode(\"utf-8\")\nprint(decoded)         # café\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Wrong encoding causes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UnicodeDecodeError"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "try:\n    b\"caf\\xe9\".decode(\"ascii\")\nexcept UnicodeDecodeError as e:\n    print(e)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-11",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: TextEncoder/TextDecoder for encode/decode\nconst s: string = \"café\";\nconst encoded = new TextEncoder().encode(s);\nconsole.log(encoded);  // Uint8Array [99, 97, 102, 195, 169]\n\nconst decoded = new TextDecoder().decode(encoded);\nconsole.log(decoded);  // \"café\"\n\n// TypeScript uses Uint8Array, not a separate bytes type\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "57-unicode-support",
      children: "5.7 Unicode Support"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Python 3 strings are Unicode; use unicodedata.normalize() for robust comparison."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "print(\"\\u00e9\")             # é\nprint(\"\\U0001F600\")         # 😀\nprint(len(\"\\U0001F600\"))    # 1 (one code point)\n\nfrom unicodedata import normalize\ns1 = \"caf\\u00e9\"            # composed: café\ns2 = \"cafe\\u0301\"           # decomposed: cafe + combining accent\nprint(s1 == s2)             # False\nprint(normalize(\"NFC\", s1) == normalize(\"NFC\", s2))  # True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-12",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: same Unicode support\nconsole.log(\"\\u00e9\");              // é\nconsole.log(\"\\u{1F600}\");           // 😀\n\n// Normalization:\nconst s1: string = \"caf\\u00e9\";          // composed\nconst s2: string = \"cafe\\u0301\";         // decomposed\nconsole.log(s1 === s2);                  // false\nconsole.log(s1.normalize(\"NFC\") === s2.normalize(\"NFC\"));  // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "58-performance-considerations",
      children: "5.8 Performance Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Use \"\".join(parts) instead of repeated += for building strings -- it is O(n) instead of O(n^2)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# SLOW\ns = \"\"\nfor i in range(10000):\n    s += str(i)\n\n# FAST\nparts = []\nfor i in range(10000):\n    parts.append(str(i))\ns = \"\".join(parts)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-parallel-13",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript: Same performance concerns\n// SLOW:\nlet s: string = \"\";\nfor (let i = 0; i < 10000; i++) {\n    s += String(i);\n}\n\n// FAST - using array join:\nconst parts: string[] = [];\nfor (let i = 0; i < 10000; i++) {\n    parts.push(String(i));\n}\ns = parts.join(\"\");\n\n// TypeScript alternative: array + join (identical pattern)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Common Mistake"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slicing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "s[start:stop:step]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confusing stop (exclusive) with inclusive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Immutability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Methods return new strings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assuming replace() modifies original"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "f-strings"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "f\"{var}\""
            }), " for formatting"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%"
            }), "-formatting in new code"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "join()"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "\"\".join(list)"
            }), " is O(n)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "+="
            }), " in loops is O(n^2)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Raw strings"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "r\"\\n\""
            }), " is literal backslash-n"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting raw strings don't end with backslash"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Python vs TS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TS has template literals but no format specs"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Expecting ", (0,jsx_runtime.jsx)(_components.code, {
              children: "${var:.2f}"
            }), " to work"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "f-strings"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "str.format()"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "%-formatting"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f\"{var}\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"{}\".format(var)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"%s\" % var"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Readability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Expression support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Python version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.6+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.6+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recommendation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preferred"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# String methods\ns.upper(), s.lower(), s.strip()\ns.split(), \" \".join(list)\ns.find(sub), s.replace(old, new)\ns.startswith(p), s.endswith(s)\n\n# f-strings\nname = \"Alice\"\nf\"{name} is {age}\"\nf\"{pi:.2f}\"          # 3.14\nf\"{n:08b}\"           # binary\n\n# Raw strings\npath = r\"C:\\Users\\name\"\n\n# Encoding\ns.encode(\"utf-8\")\nb.decode(\"utf-8\")\n"
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
            children: "Template rendering with f-strings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Science"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSV parsing with split/join"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.3.4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input sanitisation with strip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.3.3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Regex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw strings for patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.5"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " What does \"hello\"[::-1] return?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) \"hello\""
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) \"olleh\" ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) \"hlo\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) TypeError"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " Best method for building large string from parts?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) + concatenation"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) \"\".join(parts) ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) str.concat()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Template strings"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " What does f\"{3.14159:.2f}\" produce?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A) 3.14 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) 3.14159"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) 3.142"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) 3"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " Difference between str and bytes?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A) str is text, bytes is binary ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) bytes is faster"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) str holds numbers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) No difference"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " Which escape is newline?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) \\t"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B) \\n ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) \\r"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) \\0"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Chapter 5: TypeScript String Equivalents\n// Python: str concatenation\nconst greeting: string = \"Hello\";\nconst name: string = \"World\";\nconsole.log(greeting + \", \" + name + \"!\");  // \"Hello, World!\"\n\n// Python: f-strings → TypeScript: template literals\nconst age: number = 30;\nconsole.log(`Name: ${name}, Age: ${age}`);\n// Python equivalent: print(f\"Name: {name}, Age: {age}\")\n\n// Python: str.split() → TypeScript: .split()\nconst sentence: string = \"Hello World Python\";\nconst words: string[] = sentence.split(\" \");\nconsole.log(words);  // [\"Hello\", \"World\", \"Python\"]\n\n// Python: str.join() → TypeScript: .join()\nconsole.log(words.join(\", \"));  // \"Hello, World, Python\"\n// Python: \", \".join(words)\n\n// Python: str.strip() → TypeScript: .trim()\nconst padded: string = \"  hello  \";\nconsole.log(padded.trim());  // \"hello\"\n\n// Python: str.upper() / str.lower()\nconsole.log(\"Hello\".toUpperCase());  // \"HELLO\"\nconsole.log(\"Hello\".toLowerCase());  // \"hello\"\n\n// Python: str.replace() → TypeScript: .replaceAll()\nconst text: string = \"cat and dog and cat\";\nconsole.log(text.replaceAll(\"cat\", \"bird\"));  // \"bird and dog and bird\"\n// Note: Python uses .replace() (all occurrences by default)\n\n// Python: slicing (s[1:4]) → TypeScript: .slice()\nconst s: string = \"hello\";\nconsole.log(s.slice(1, 4));   // \"ell\"  (Python: s[1:4])\nconsole.log(s.slice(-3));     // \"llo\"  (Python: s[-3:])\nconsole.log(s.slice(0, -1));  // \"hell\" (Python: s[:-1])\n\n// Python: len(s) → TypeScript: .length\nconsole.log(s.length);  // 5\n\n// Python: str.find() → TypeScript: .indexOf()\nconsole.log(\"hello\".indexOf(\"l\"));  // 2\n\n// Python: str.startswith() / str.endswith()\nconsole.log(\"hello\".startsWith(\"he\"));  // true\nconsole.log(\"hello\".endsWith(\"lo\"));    // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "more-typescript-string-patterns",
      children: "More TypeScript String Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Python: regex sub → TypeScript: replace with RegExp\nconst phone = \"Call me at 555-123-4567\";\nconst masked = phone.replace(/\\d{4}$/, \"XXXX\");\nconsole.log(masked);  // \"Call me at 555-123-XXXX\"\n\n// Python: str.partition → TypeScript: split with limit\nconst email = \"user@example.com\";\nconst [local, domain] = email.split(\"@\");\nconsole.log(local, domain);  // \"user\" \"example.com\"\n\n// Python: str.zfill → TypeScript: padStart\nconsole.log(\"42\".padStart(5, \"0\"));  // \"00042\"\n// Python: \"42\".zfill(5)\n\n// Python: str.center → TypeScript: padStart + padEnd\nfunction center(s: string, width: number, fill: string = \" \"): string {\n  const left = Math.floor((width - s.length) / 2);\n  const right = width - s.length - left;\n  return fill.repeat(left) + s + fill.repeat(right);\n}\nconsole.log(center(\"hello\", 11, \"-\"));  // \"---hello---\"\n\n// Python: str.translate → TypeScript: replace with callback\nconst leet = { a: \"4\", e: \"3\", l: \"1\", o: \"0\" };\nconst translated = \"hello world\".replace(\n  /[aelo]/g,\n  (c) => leet[c as keyof typeof leet]\n);\nconsole.log(translated);  // \"h3ll0 w0rld\"\n\n// Python: textwrap.wrap → TypeScript: manual wrapping\nfunction wrap(text: string, width: number): string[] {\n  const words = text.split(\" \");\n  const lines: string[] = [];\n  let current = \"\";\n  for (const word of words) {\n    if ((current + \" \" + word).trim().length > width) {\n      lines.push(current.trim());\n      current = word;\n    } else {\n      current += \" \" + word;\n    }\n  }\n  if (current.trim()) lines.push(current.trim());\n  return lines;\n}\nconsole.log(wrap(\"This is a long sentence that needs wrapping\", 20));\n\n// Python: str.format_map → TypeScript: template function\nfunction template(str: string, data: Record<string, string>): string {\n  return str.replace(/\\{\\{(\\w+)\\}\\}/g, (_, key) => data[key] ?? `{{${key}}}`);\n}\nconsole.log(template(\"Hello {{name}}, you are {{age}}\", { name: \"Bob\", age: \"25\" }));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-utilities",
      children: "TypeScript Utilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Template Evaluator (Python f-string style) ===\nfunction fmt(template: string, vars: Record<string, string | number>): string {\n  return template.replace(/\\{(\\w+)\\}/g, (_, k) => String(vars[k] ?? `{${k}}`));\n}\nconsole.log(fmt(\"Hello {name}, you are {age}\", { name: \"Bob\", age: 25 }));\n\n// === String Builder (performance comparison) ===\nclass StringBuilder {\n  private parts: string[] = [];\n  append(s: string): this { this.parts.push(s); return this; }\n  build(sep = \"\"): string { return this.parts.join(sep); }\n  clear(): void { this.parts = []; }\n}\nconst sb = new StringBuilder();\nsb.append(\"Hello\").append(\"World\").append(\"!\");\nconsole.log(sb.build(\" \"));\n\n// === Unicode Normalizer ===\ntype UnicodeForm = \"NFC\" | \"NFD\" | \"NFKC\" | \"NFKD\";\nfunction normalizeUnicode(s: string, form: UnicodeForm = \"NFC\"): string {\n  return s.normalize(form);\n}\nconst composed = \"\\u00E9\";    // é (precomposed)\nconst decomposed = \"\\u0065\\u0301\"; // e + combining acute\nconsole.log(normalizeUnicode(decomposed) === composed); // true (NFC)\n\n// === Case Converter ===\nfunction toSnakeCase(s: string): string {\n  return s.replace(/([A-Z])/g, \"_$1\").toLowerCase().replace(/^_/, \"\");\n}\nfunction toCamelCase(s: string): string {\n  return s.replace(/_([a-z])/g, (_, c) => c.toUpperCase());\n}\nconsole.log(toSnakeCase(\"helloWorld\"));   // hello_world\nconsole.log(toCamelCase(\"hello_world\"));  // helloWorld\n\n// === Regex Builder ===\nclass RegexBuilder {\n  private parts: string[] = [];\n  literal(s: string): this { this.parts.push(s.replace(/[.*+?^${}()|[\\]\\\\]/g, \"\\\\$&\")); return this; }\n  digit(): this { this.parts.push(\"\\\\d\"); return this; }\n  word(): this { this.parts.push(\"\\\\w+\"); return this; }\n  optional(): this { this.parts.push(\"?\"); return this; }\n  build(): RegExp { return new RegExp(this.parts.join(\"\")); }\n}\nconst rx = new RegexBuilder().literal(\"id:\").digit().digit().build();\nconsole.log(rx.test(\"id:42\")); // true\n\n// === Slug Generator ===\nfunction slugify(s: string): string {\n  return s.toLowerCase().replace(/[^a-z0-9]+/g, \"-\").replace(/^-|-$/g, \"\");\n}\nconsole.log(slugify(\"Hello World! How Are You?\")); // hello-world-how-are-you\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-string-patterns",
      children: "TypeScript String Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Template Literals (Python: f-strings) ===\nconst name = \"Alice\", age = 30, city = \"Paris\";\nconsole.log(`${name} is ${age} years old from ${city}`);\nconst greeting = `Hello, ${name}! You are ${age > 18 ? \"an adult\" : \"a minor\"}.`;\nconsole.log(greeting);\n\n// === String Methods Comparison ===\nconst str = \"  Hello, World!  \";\nconsole.log({\n  trim: str.trim(),                         // Python: .strip()\n  trimStart: str.trimStart(),               // Python: .lstrip()\n  trimEnd: str.trimEnd(),                   // Python: .rstrip()\n  upper: str.toUpperCase(),                 // Python: .upper()\n  lower: str.toLowerCase(),                 // Python: .lower()\n  replace: str.replace(\"World\", \"TypeScript\"), // Python: .replace()\n  replaceAll: \"aabbcc\".replaceAll(\"a\", \"x\"),   // Python: .replace() with all\n  includes: str.includes(\"World\"),           // Python: \"World\" in str\n  startsWith: str.startsWith(\"  Hello\"),    // Python: .startswith()\n  endsWith: str.endsWith(\"!  \"),            // Python: .endswith()\n});\n\n// === Split, Join, Slice ===\nconst csv = \"apple,banana,cherry,date\";\nconst parts = csv.split(\",\");\nconsole.log(parts);                        // [\"apple\", \"banana\", \"cherry\", \"date\"]\nconsole.log(parts.join(\" | \"));            // \"apple | banana | cherry | date\"\nconsole.log(str.slice(2, 7));              // \"Hello\"\nconsole.log(str.substring(2, 7));           // \"Hello\"\nconsole.log(str.slice(-6, -1));            // \"World\"\n\n// === Regex (Python: re module) ===\nconst emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;\nconsole.log(emailRegex.test(\"user@example.com\")); // true\nconst text = \"Contact: alice@x.com or bob@y.org\";\nconst emails = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/g);\nconsole.log(emails); // [\"alice@x.com\", \"bob@y.org\"]\n\n// === Pad and Repeat ===\nconsole.log(\"42\".padStart(5, \"0\"));        // \"00042\" (Python: zfill)\nconsole.log(\"42\".padEnd(5, \"0\"));          // \"42000\"\nconsole.log(\"ha \".repeat(3).trim());        // \"ha ha ha\" (Python: *)\n\n// === Character Access ===\nconsole.log(\"Hello\"[0]);                    // \"H\" (Python: \"Hello\"[0])\nconsole.log(\"Hello\".charCodeAt(0));         // 72 (Python: ord(\"H\"))\nconsole.log(String.fromCharCode(72));        // \"H\" (Python: chr(72))\n\n// === Multiline Strings ===\nconst multiline = `\n  Line 1\n  Line 2\n  Line 3\n`.trim();\nconsole.log(multiline);\n\n// === Tagged Template Literals ===\nfunction highlight(strings: TemplateStringsArray, ...values: unknown[]): string {\n  return strings.reduce((result, str, i) =>\n    result + str + (i < values.length ? `**${values[i]}**` : \"\"), \"\");\n}\nconst highlighted = highlight`User ${name} is ${age} years old`;\nconsole.log(highlighted); // \"User **Alice** is **30** years old\"\n\n// === String Builder ===\nclass StringBuilder {\n  private parts: string[] = [];\n  append(s: string): this { this.parts.push(s); return this; }\n  appendLine(s = \"\"): this { this.parts.push(s + \"\\n\"); return this; }\n  toString(): string { return this.parts.join(\"\"); }\n}\nconst sb = new StringBuilder().appendLine(\"Header\").appendLine(\"Body\").appendLine(\"Footer\");\nconsole.log(sb.toString());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strings are immutable sequences of Unicode code points."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Indexing starts at 0; slicing uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "start:stop:step"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rich method set: searching, case manipulation, splitting, joining, stripping, replacing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "f-strings with format specifiers are the recommended formatting approach."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Raw strings (", (0,jsx_runtime.jsx)(_components.code, {
          children: "r\"\""
        }), ") disable backslash escaping."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "bytes"
        }), " is for binary data; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "str"
        }), " is for text."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Python 3 strings are Unicode; use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "encode()"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "decode()"
        }), " to convert."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["TypeScript template literals use backticks with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "${}"
        }), " interpolation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["TypeScript has no format specifiers for binary/hex/percentage -- use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "toFixed()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "toString(16)"
        }), ", etc."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why are strings immutable and what does that imply for methods?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "s[::-1]"
        }), " do and why does it work?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compare f-strings, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "str.format()"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "%"
        }), "-formatting. Which is preferred in modern Python?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bytes"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "str"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "casefold()"
        }), " differ from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lower()"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How do TypeScript template literals compare to Python f-strings?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"\".join(parts)"
        }), " faster than ", (0,jsx_runtime.jsx)(_components.code, {
          children: "s += part"
        }), " in a loop?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a program that reads a sentence and prints the word count, character count (excluding spaces), and the average word length."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a simple password strength checker: evaluates length, presence of uppercase, lowercase, digits, and special characters. Print a strength rating."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a function ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pluralize(n, singular, plural)"
        }), " that returns either the singular or plural form based on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "n"
        }), ": e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pluralize(1, \"apple\", \"apples\")"
        }), " returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"1 apple\""
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pluralize(3, \"apple\", \"apples\")"
        }), " returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"3 apples\""
        }), ". Use an f-string."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a function ", (0,jsx_runtime.jsx)(_components.code, {
          children: "reverse_words(sentence)"
        }), " that reverses the order of words in a sentence (not the characters). Test with \"Hello World Python\" -> \"Python World Hello\"."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert a given snake_case string to camelCase. Example: \"hello_world\" -> \"helloWorld\"."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a simple template engine. Accept a template string with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{{name}}"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{{age}}"
      }), " style placeholders and a dictionary of replacements. Replace all placeholders. Then extend it to support loops: mark sections with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{% for item in list %}...{{item}}...{% endfor %}"
      }), " and repeat them. Test with a template for generating HTML list items."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-challenge",
      children: "TypeScript Challenge"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Rewrite the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pluralize"
      }), " function from Application Problem 3 in TypeScript. Implement a more general ", (0,jsx_runtime.jsx)(_components.code, {
        children: "formatCount(n, singular, plural)"
      }), " that handles edge cases (0, 1, 1000+). Then extend it to a localization function that accepts a dictionary of word forms for different counts (e.g., Russian has singular, few, many forms)."]
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