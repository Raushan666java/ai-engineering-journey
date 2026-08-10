"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[50204],{

/***/ 25680
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_database_management_systems_01_introduction_md_f83_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-database-management-systems-01-introduction-md-f83.json
const site_docs_courses_database_management_systems_01_introduction_md_f83_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/database-management-systems/01-introduction","title":"Chapter 1: Introduction to Database Management Systems","description":"Learning Objectives","source":"@site/docs/courses/database-management-systems/01-introduction.md","sourceDirName":"courses/database-management-systems","slug":"/database-management-systems/01-introduction","permalink":"/ai-engineering-journey/database-management-systems/01-introduction","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"01-introduction","slug":"/database-management-systems/01-introduction","title":"Chapter 1: Introduction to Database Management Systems","sidebar_label":"Chapter 1: Introduction to Database Management Systems","sidebar_position":1},"sidebar":"coursesSidebar","previous":{"title":"Database Management Systems — Complete Textbook","permalink":"/ai-engineering-journey/database-management-systems"},"next":{"title":"Chapter 2: Entity-Relationship Model","permalink":"/ai-engineering-journey/database-management-systems/02-er-model"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/database-management-systems/01-introduction.md


const frontMatter = {
	id: '01-introduction',
	slug: '/database-management-systems/01-introduction',
	title: 'Chapter 1: Introduction to Database Management Systems',
	sidebar_label: 'Chapter 1: Introduction to Database Management Systems',
	sidebar_position: 1
};
const contentTitle = 'Chapter 1: Introduction to Database Management Systems';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "1.1 What Is a DBMS?",
  "id": "11-what-is-a-dbms",
  "level": 3
}, {
  "value": "1.2 File System vs. DBMS",
  "id": "12-file-system-vs-dbms",
  "level": 3
}, {
  "value": "1.3 Three-Schema Architecture",
  "id": "13-three-schema-architecture",
  "level": 3
}, {
  "value": "1.4 Data Independence",
  "id": "14-data-independence",
  "level": 3
}, {
  "value": "1.5 DBMS Languages (DDL / DML / DCL / TCL)",
  "id": "15-dbms-languages-ddl--dml--dcl--tcl",
  "level": 3
}, {
  "value": "1.6 DBMS Users",
  "id": "16-dbms-users",
  "level": 3
}, {
  "value": "1.7 Data Models",
  "id": "17-data-models",
  "level": 3
}, {
  "value": "1.8 DBMS Architecture Components",
  "id": "18-dbms-architecture-components",
  "level": 3
}, {
  "value": "1.9 Database System Architecture Types",
  "id": "19-database-system-architecture-types",
  "level": 3
}, {
  "value": "1.10 Applications in Real Systems",
  "id": "110-applications-in-real-systems",
  "level": 3
}, {
  "value": "1.11 Interview Corner",
  "id": "111-interview-corner",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "1.12 DBMS Architecture Simulation (TypeScript)",
  "id": "112-dbms-architecture-simulation-typescript",
  "level": 3
}, {
  "value": "1.13 Practical DBMS Selection Guide",
  "id": "113-practical-dbms-selection-guide",
  "level": 3
}, {
  "value": "Additional Chapter Quiz Questions",
  "id": "additional-chapter-quiz-questions",
  "level": 3
}, {
  "value": "Additional Exercises",
  "id": "additional-exercises",
  "level": 3
}, {
  "value": "Basic (continued)",
  "id": "basic-continued",
  "level": 4
}, {
  "value": "Intermediate (continued)",
  "id": "intermediate-continued",
  "level": 4
}, {
  "value": "Advanced (continued)",
  "id": "advanced-continued",
  "level": 4
}, {
  "value": "💡 Pro Tips",
  "id": "-pro-tips",
  "level": 2
}, {
  "value": "One-Sentence Takeaways",
  "id": "one-sentence-takeaways",
  "level": 2
}, {
  "value": "Concept Comparison Tables",
  "id": "concept-comparison-tables",
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
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Basic",
  "id": "basic",
  "level": 3
}, {
  "value": "Intermediate",
  "id": "intermediate",
  "level": 3
}, {
  "value": "Advanced",
  "id": "advanced",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "chapter-1-introduction-to-database-management-systems",
        children: "Chapter 1: Introduction to Database Management Systems"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the limitations of file-based data storage and the advantages of DBMS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define and differentiate between various data models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the three-level DBMS architecture and its purpose"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between logical, physical, and external schemas"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify the key components of a DBMS and their roles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classify DBMS languages: DDL, DML, DCL, TCL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare data models with real-world analogies and implementations"
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
        href: "../../assets/images/lessons/database-management-systems/01-introduction/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/database-management-systems/01-introduction/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/database-management-systems/01-introduction/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/database-management-systems/01-introduction/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/database-management-systems/01-introduction/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/database-management-systems/01-introduction/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-what-is-a-dbms",
      children: "1.1 What Is a DBMS?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: The Library Catalog"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Imagine a public library with 100,000 books but no catalog system. To find a specific book, a visitor must walk every aisle scanning shelves. If a book is moved, returned late, or misplaced, it becomes effectively lost. Now imagine the same library with a digital catalog → you search by title, author, or ISBN, see the exact shelf location, check availability, and even reserve it online. The catalog does not replace the books; it manages the metadata about the books and provides efficient access."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "A Database Management System (DBMS)"
      }), " is the digital library catalog for data. It is software that manages, stores, retrieves, and secures data while hiding the complexity of storage, indexing, concurrency, and recovery from users."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Functions of a DBMS:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Definition"
        }), " → CREATE, ALTER, DROP schema objects"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Manipulation"
        }), " → SELECT, INSERT, UPDATE, DELETE data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Security & Integrity"
        }), " → enforce constraints and access controls"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transaction Management"
        }), " → ACID properties (Atomicity, Consistency, Isolation, Durability)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Concurrency Control"
        }), " → serialize simultaneous user access"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recovery Management"
        }), " → restore state after system crash or media failure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Dictionary Management"
        }), " → store metadata about database objects"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps: How a DBMS Processes a Query"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: User submits a query (e.g., SELECT * FROM students WHERE gpa > 3.5)\nStep 2: Parser checks syntax and builds parse tree\nStep 3: Validator checks that tables/columns exist in catalog\nStep 4: Optimizer generates alternative execution plans\nStep 5: Optimizer estimates cost (I/O, CPU, network) for each plan\nStep 6: Executor runs the cheapest plan\nStep 7: Storage manager fetches data from disk/memory\nStep 8: Results are formatted and returned to user\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: Simple Database Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION execute_query(query_string):\n    tokens = tokenize(query_string)                    // Step 1: Lexical analysis\n    parse_tree = parse(tokens)                         // Step 2: Syntax analysis\n    IF error THEN RETURN \"Syntax Error at position X\"\n    \n    validated = validate(parse_tree, catalog)          // Step 3: Semantic check\n    IF error THEN RETURN \"Error: table/column not found\"\n    \n    plan = generate_plan(validated)                    // Step 4: Query plan\n    optimized_plan = optimize(plan, statistics)        // Step 5: Cost-based optimization\n    \n    result = execute(optimized_plan, storage_manager)  // Step 6: Execution\n    FORMAT(result)\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace: Query Execution"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tokenizer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT name FROM students WHERE gpa > 3.5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[SELECT, name, FROM, students, WHERE, gpa, >, 3.5]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tokens extracted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parser"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tokens"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Parse tree: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Query{sel:[name], from:students, where:gpa>3.5}"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree valid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parse tree"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Table ", (0,jsx_runtime.jsx)(_components.code, {
              children: "students"
            }), " exists, columns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "name,gpa"
            }), " exist"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validated tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plans: [SeqScan, IndexScan(gpa), ...]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 plans"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimizer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plans"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cost: SeqScan=1200, IndexScan=85"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Picks IndexScan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimized plan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fetches 42 rows via index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42 rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formatter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formatted result set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output ready"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation: Minimal Database Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <sstream>\n#include <algorithm>\n#include <memory>\n#include <stdexcept>\n\nclass Row {\npublic:\n    std::unordered_map<std::string, std::string> fields;\n    void set(const std::string& col, const std::string& val) { fields[col] = val; }\n    std::string get(const std::string& col) const {\n        auto it = fields.find(col);\n        if (it == fields.end()) throw std::runtime_error(\"Column not found: \" + col);\n        return it->second;\n    }\n};\n\nclass Table {\n    std::string name;\n    std::vector<std::string> columns;\n    std::vector<Row> rows;\npublic:\n    Table(const std::string& n, const std::vector<std::string>& cols)\n        : name(n), columns(cols) {}\n    void insert(const Row& r) { rows.push_back(r); }\n    size_t size() const { return rows.size(); }\n    std::string getName() const { return name; }\n    const std::vector<std::string>& getColumns() const { return columns; }\n\n    std::vector<Row> select(const std::vector<std::string>& cols,\n                            const std::string& whereCol, const std::string& op,\n                            const std::string& whereVal) const {\n        std::vector<Row> result;\n        for (const auto& row : rows) {\n            if (!whereCol.empty()) {\n                auto it = row.fields.find(whereCol);\n                if (it == row.fields.end()) continue;\n                const std::string& val = it->second;\n                bool match = false;\n                if (op == \">\") match = std::stod(val) > std::stod(whereVal);\n                else if (op == \"<\") match = std::stod(val) < std::stod(whereVal);\n                else if (op == \"=\") match = val == whereVal;\n                else if (op == \">=\") match = std::stod(val) >= std::stod(whereVal);\n                else if (op == \"<=\") match = std::stod(val) <= std::stod(whereVal);\n                if (!match) continue;\n            }\n            Row out;\n            if (cols.empty() || cols[0] == \"*\") {\n                for (const auto& c : columns) out.set(c, row.get(c));\n            } else {\n                for (const auto& c : cols) out.set(c, row.get(c));\n            }\n            result.push_back(out);\n        }\n        return result;\n    }\n};\n\nclass DatabaseCatalog {\n    std::unordered_map<std::string, std::shared_ptr<Table>> tables;\npublic:\n    void createTable(const std::string& name, const std::vector<std::string>& cols) {\n        if (tables.find(name) != tables.end())\n            throw std::runtime_error(\"Table already exists: \" + name);\n        tables[name] = std::make_shared<Table>(name, cols);\n        std::cout << \"[DDL] Table '\" << name << \"' created with \"\n                  << cols.size() << \" columns\\n\";\n    }\n\n    std::shared_ptr<Table> getTable(const std::string& name) {\n        auto it = tables.find(name);\n        if (it == tables.end())\n            throw std::runtime_error(\"Table not found: \" + name);\n        return it->second;\n    }\n\n    void insertInto(const std::string& table, const Row& r) {\n        auto t = getTable(table);\n        t->insert(r);\n        std::cout << \"[DML] 1 row inserted into '\" << table << \"' (total: \"\n                  << t->size() << \" rows)\\n\";\n    }\n\n    void query(const std::string& table, const std::vector<std::string>& cols,\n               const std::string& wc = \"\", const std::string& op = \"\",\n               const std::string& wv = \"\") {\n        auto t = getTable(table);\n        auto results = t->select(cols, wc, op, wv);\n        std::cout << \"[DML] SELECT returned \" << results.size() << \" rows\\n\";\n        for (const auto& r : results) {\n            for (const auto& [k, v] : r.fields)\n                std::cout << \"  \" << k << \": \" << v;\n            std::cout << \"\\n\";\n        }\n    }\n};\n\nint main() {\n    DatabaseCatalog db;\n    db.createTable(\"students\", {\"id\", \"name\", \"gpa\", \"major\"});\n\n    Row r1; r1.set(\"id\", \"1\"); r1.set(\"name\", \"Alice\");\n    r1.set(\"gpa\", \"3.8\"); r1.set(\"major\", \"CS\");\n    db.insertInto(\"students\", r1);\n\n    Row r2; r2.set(\"id\", \"2\"); r2.set(\"name\", \"Bob\");\n    r2.set(\"gpa\", \"3.2\"); r2.set(\"major\", \"Math\");\n    db.insertInto(\"students\", r2);\n\n    Row r3; r3.set(\"id\", \"3\"); r3.set(\"name\", \"Carol\");\n    r3.set(\"gpa\", \"3.9\"); r3.set(\"major\", \"CS\");\n    db.insertInto(\"students\", r3);\n\n    std::cout << \"\\n--- Query: gpa > 3.5 ---\\n\";\n    db.query(\"students\", {\"name\", \"gpa\"}, \"gpa\", \">\", \"3.5\");\n\n    std::cout << \"\\n--- Query: all students ---\\n\";\n    db.query(\"students\", {\"*\"});\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation: Minimal Database Engine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\nfrom typing import List, Dict, Optional, Any\nfrom enum import Enum\n\n\nclass DataType(Enum):\n    INTEGER = \"INTEGER\"\n    VARCHAR = \"VARCHAR\"\n    FLOAT = \"FLOAT\"\n    DATE = \"DATE\"\n\n\n@dataclass\nclass Column:\n    name: str\n    dtype: DataType\n    primary_key: bool = False\n    not_null: bool = False\n    unique: bool = False\n\n\nclass ConstraintViolation(Exception):\n    pass\n\n\n@dataclass\nclass Table:\n    name: str\n    columns: List[Column]\n    rows: List[Dict[str, Any]] = field(default_factory=list)\n\n    def insert(self, row: Dict[str, Any]) -> None:\n        for col in self.columns:\n            if col.not_null and (col.name not in row or row[col.name] is None):\n                raise ConstraintViolation(f\"NOT NULL violation on {col.name}\")\n            if col.unique:\n                for existing in self.rows:\n                    if col.name in existing and existing[col.name] == row.get(col.name):\n                        raise ConstraintViolation(f\"UNIQUE violation on {col.name}\")\n        self.rows.append(row)\n\n    def select(self, columns: Optional[List[str]] = None,\n               where: Optional[callable] = None) -> List[Dict[str, Any]]:\n        result = []\n        for row in self.rows:\n            if where and not where(row):\n                continue\n            if columns is None or columns == [\"*\"]:\n                result.append(dict(row))\n            else:\n                result.append({c: row[c] for c in columns if c in row})\n        return result\n\n\nclass SimpleDB:\n    def __init__(self):\n        self.catalog: Dict[str, Table] = {}\n\n    def create_table(self, name: str, columns: List[Column]) -> None:\n        if name in self.catalog:\n            raise ValueError(f\"Table '{name}' already exists\")\n        self.catalog[name] = Table(name, columns)\n        print(f\"[DDL] Table '{name}' created with {len(columns)} columns\")\n\n    def insert_into(self, table: str, row: Dict[str, Any]) -> None:\n        if table not in self.catalog:\n            raise ValueError(f\"Table '{table}' does not exist\")\n        t = self.catalog[table]\n        t.insert(row)\n        print(f\"[DML] 1 row inserted into '{table}' (total: {len(t.rows)} rows)\")\n\n    def query(self, table: str, columns: Optional[List[str]] = None,\n              where_col: str = \"\", op: str = \"\", where_val: Any = None) -> List[Dict[str, Any]]:\n        if table not in self.catalog:\n            raise ValueError(f\"Table '{table}' does not exist\")\n        t = self.catalog[table]\n\n        def make_filter(col, operator, value):\n            if not col:\n                return None\n\n            def filter_fn(row):\n                if col not in row:\n                    return False\n                actual = row[col]\n                try:\n                    if operator == \">\": return float(actual) > float(value)\n                    elif operator == \"<\": return float(actual) < float(value)\n                    elif operator == \">=\": return float(actual) >= float(value)\n                    elif operator == \"<=\": return float(actual) <= float(value)\n                    elif operator == \"=\": return str(actual) == str(value)\n                    elif operator == \"!=\": return str(actual) != str(value)\n                    elif operator == \"LIKE\": return str(value).lower() in str(actual).lower()\n                except (ValueError, TypeError):\n                    return str(actual) == str(value)\n                return False\n            return filter_fn\n\n        where_fn = make_filter(where_col, op, where_val)\n        results = t.select(columns, where_fn)\n        print(f\"[DML] SELECT returned {len(results)} rows\")\n        for row in results:\n            print(f\"  {row}\")\n        return results\n\n\n# Simulation / Dry Run\nif __name__ == \"__main__\":\n    db = SimpleDB()\n\n    # DDL: CREATE TABLE\n    db.create_table(\"employees\", [\n        Column(\"emp_id\", DataType.INTEGER, primary_key=True),\n        Column(\"name\", DataType.VARCHAR, not_null=True),\n        Column(\"salary\", DataType.FLOAT),\n        Column(\"dept\", DataType.VARCHAR),\n    ])\n\n    # DML: INSERT\n    db.insert_into(\"employees\", {\"emp_id\": 101, \"name\": \"Alice\",\n                                  \"salary\": 75000, \"dept\": \"Engineering\"})\n    db.insert_into(\"employees\", {\"emp_id\": 102, \"name\": \"Bob\",\n                                  \"salary\": 65000, \"dept\": \"Marketing\"})\n    db.insert_into(\"employees\", {\"emp_id\": 103, \"name\": \"Carol\",\n                                  \"salary\": 90000, \"dept\": \"Engineering\"})\n\n    # DML: SELECT with filter\n    print(\"\\n--- Query: salary > 70000 ---\")\n    db.query(\"employees\", where_col=\"salary\", op=\">\", where_val=70000)\n\n    # DML: SELECT all\n    print(\"\\n--- Query: all employees ---\")\n    db.query(\"employees\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis with WHY"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE TABLE (DDL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(c) where c = columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Catalog insert is hash-table O(1); column metadata stored once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INSERT (single row)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(r) per row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row appended to dynamic array; amortized O(1). Each row stores column values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT * (no WHERE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full table scan iterates all n rows; result set stored in memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT with index scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) where k = results"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B+ tree lookup is O(log n); k results stored"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT with equality WHERE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Without index, must scan all rows; k matching rows returned"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE single row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must find row first via scan (O(n)), then update in place (O(1))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE single row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find row (O(n)), shift remaining elements (O(n))"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages Table"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data independence (physical + logical)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High initial cost (licensing, hardware, DBA salaries)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient data access via indexes and optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity → steep learning curve for administration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrent access with ACID guarantees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance overhead compared to raw file I/O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security at row/column level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single point of failure risk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data integrity via constraints (PK, FK, CHECK)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor lock-in potential"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reduced data redundancy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource intensive (memory, CPU, disk)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backup and recovery automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overkill for simple, single-user applications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standard interfaces (SQL, ODBC, JDBC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema rigidity → schema changes require migrations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scalability (parallel, distributed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network overhead in client-server deployment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-user access and role-based control"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tuning complexity requires expertise"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DBMS Handling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrent access conflict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two users try to book the same flight seat simultaneously"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lock manager grants one lock; second transaction waits or aborts with serialization error"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "System failure during write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Power outage while writing a transaction log page"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-ahead logging (WAL): log written before data page; recovery replays or undoes on restart"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security breach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL injection attack via user input form"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prepared statements parameterize input; GRANT/REVOKE limits damage scope"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deadlock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction A locks row 1 and waits for row 2; B locks row 2 and waits for row 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deadlock detector chooses a victim transaction to abort and rollback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Schema evolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adding a NOT NULL column to a table with 1M existing rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New column must have a default value; DBMS validates existing rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disk full"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database runs out of disk space mid-transaction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction aborts; DBMS rolls back partial writes; alert triggers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network partition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database replicas cannot communicate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partition tolerance strategy depends on consistency model (CP vs AP in CAP theorem)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NULL in WHERE clause"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT * FROM t WHERE col = NULL"
            }), " returns no rows"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL uses three-valued logic; NULL comparisons require IS NULL operator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate key insertion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INSERT with existing primary key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBMS rejects with duplicate key error; ON DUPLICATE KEY UPDATE alternative"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very large transaction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bulk insert of 10M rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log grows; transaction may hit log size limits; batch commit recommended"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-file-system-vs-dbms",
      children: "1.2 File System vs. DBMS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Filing Cabinets vs. Library"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "file system"
      }), " is like a room full of filing cabinets. Each department has its own cabinet with its own folders. The sales department's cabinet has customer folders, the billing department has its own customer folders, and support has yet another set. When a customer changes their address, three different people must pull three different folders and make the same change. One person might forget, or use a different format, and now the data is inconsistent. There is no central index telling you which cabinet has which information. If someone is using a folder, the next person has to wait → or worse, both make changes simultaneously and one overwrites the other."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DBMS"
      }), " is a library. All books are centrally managed. A single catalog tells you where every book is. When a book's information changes, the catalog is updated in one place. Multiple people can check out books simultaneously because the system tracks who has what. The librarian (DBA) ensures books are properly organized, no duplicates exist in the catalog, and only authorized patrons can access restricted sections."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "12+ Point Comparison: File System vs. DBMS"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "File System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DBMS"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Redundancy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High → same data duplicated across multiple files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal to none → controlled redundancy via normalization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Consistency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low → updates must be applied to every file independently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High → single source of truth; constraints enforce consistency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrent Access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No built-in control → race conditions, lost updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACID transactions with lock-based/multiversion concurrency control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Atomicity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None → partial updates survive crashes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full atomicity via transactions: COMMIT or ROLLBACK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Integrity Constraints"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application code only → easily bypassed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative constraints: PRIMARY KEY, FOREIGN KEY, CHECK, UNIQUE, NOT NULL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File-level permissions only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Granular: row-level, column-level, role-based GRANT/REVOKE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Independence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None → application code depends on file format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical and logical independence via three-level architecture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query Capability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual parsing and processing required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative SQL with query optimization, join algorithms, aggregation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Backup & Recovery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual file copies → no crash recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated backup, point-in-time recovery, transaction log replay"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Sharing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Difficult → file locking is coarse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy → concurrent users with fine-grained locks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scalability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited to single machine capacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal (sharding, replication) and vertical (bigger hardware)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage Efficiency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wasted space due to duplication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Storage optimized via normalization, compression, and indexing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flat → no relationships between files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rich → relational, document, graph, object-oriented"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Metadata Management"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None or scattered"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized data dictionary (catalog)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multi-user Support"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primitive → file-level locking only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sophisticated → transaction isolation levels, locking granularity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time to Develop"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast for small, single-user apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher initial setup; much faster for complex, multi-user apps"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps: File System vs. DBMS Contrast"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "File System Approach:\n  1. Application opens file (e.g., customers.txt)\n  2. Application parses file (CSV, custom format)\n  3. Application searches for matching records\n  4. Application modifies data in memory\n  5. Application writes entire file back to disk\n  6. If another app has the file open → conflict!\n  7. If crash occurs during step 5 → data loss!\n  8. If data format changes → every app must be rewritten!\n\nDBMS Approach:\n  1. Application sends SQL query to DBMS\n  2. DBMS parses, validates, optimizes the query\n  3. DBMS acquires necessary locks\n  4. DBMS reads only required pages from disk\n  5. DBMS applies changes with Write-Ahead Logging (WAL)\n  6. DBMS releases locks\n  7. If crash occurs → log replays or undoes on restart\n  8. If schema changes → views insulate applications\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: File-Based vs. DBMS-Based Data Access"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// FILE-BASED APPROACH\nFUNCTION update_customer_address_file(cust_id, new_address):\n    file = OPEN(\"customers.txt\", READ_WRITE)       // Step 1: Open file\n    records = PARSE_CSV(file)                       // Step 2: Parse entire file\n    \n    FOR EACH record IN records:                     // Step 3: Linear search\n        IF record.id == cust_id:\n            record.address = new_address            // Step 4: Modify in memory\n            BREAK\n    \n    REWRITE(file, records)                          // Step 5: Write entire file back\n    CLOSE(file)                                     // Step 6: Close (no locks held)\n    // PROBLEM: No undo, no concurrency, no atomicity\nEND FUNCTION\n\n// DBMS-BASED APPROACH\nFUNCTION update_customer_address_db(cust_id, new_address):\n    conn = DBMS_CONNECT(\"connection_string\")        // Step 1: Connect\n    BEGIN TRANSACTION                               // Step 2: Start transaction\n        UPDATE customers                            // Step 3: Atomic update\n        SET address = new_address\n        WHERE customer_id = cust_id;\n        // DBMS internally: acquire lock, log change, update page in buffer\n    COMMIT                                          // Step 4: Commit → all or nothing\n    conn.CLOSE()\n    // BENEFIT: Atomic, durable, concurrent-safe, indexed\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace: File System vs. DBMS → Concurrent Booking Conflict"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "File System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DBMS"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Initial"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "seats.txt"
            }), ": Seat 1A=available, Seat 1B=available"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "seats"
            }), " table: seat_1A='available', seat_1B='available'"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User A reads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reads file, sees Seat 1A=available"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT status FROM seats WHERE id='1A'"
            }), " → 'available', shared lock acquired"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User B reads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reads file simultaneously, sees Seat 1A=available"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same query, also gets shared lock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User A writes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changes seat 1A to 'booked', writes file"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "UPDATE seats SET status='booked' WHERE id='1A'"
            }), " → exclusive lock requested"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User B writes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changes seat 1A to 'booked' (same!), overwrites A's change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lock conflict! B waits or gets deadlock error"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Outcome"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double booking! Both users think they have the seat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only A succeeds; B gets \"could not serialize access\" error"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lost. File has B's version only (A's change gone)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preserved. Only one booking per seat"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation: File vs. DBMS Simulation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <fstream>\n#include <string>\n#include <vector>\n#include <sstream>\n#include <mutex>\n#include <thread>\n#include <chrono>\n\n// --- File-based approach (simulated) ---\nclass FileSystemStore {\n    std::string filename;\npublic:\n    FileSystemStore(const std::string& f) : filename(f) {}\n\n    void writeAll(const std::vector<std::string>& data) {\n        std::ofstream out(filename);\n        for (const auto& line : data)\n            out << line << \"\\n\";\n    }\n\n    std::vector<std::string> readAll() {\n        std::vector<std::string> data;\n        std::ifstream in(filename);\n        std::string line;\n        while (std::getline(in, line))\n            data.push_back(line);\n        return data;\n    }\n\n    // Simulates race condition → no locking\n    void unsafeBook(const std::string& seatId, const std::string& user) {\n        auto data = readAll();\n        for (auto& line : data) {\n            if (line.find(seatId) != std::string::npos && line.find(\"available\") != std::string::npos) {\n                std::this_thread::sleep_for(std::chrono::milliseconds(10)); // window for race\n                line = seatId + \",booked,\" + user;\n                writeAll(data);\n                std::cout << \"[FILE] \" << user << \" booked \" << seatId << \"\\n\";\n                return;\n            }\n        }\n        std::cout << \"[FILE] \" << seatId << \" already taken\\n\";\n    }\n};\n\n// --- DBMS approach (simulated with mutex) ---\nclass DBMSStore {\n    std::mutex mtx;\n    struct Seat { std::string id, status, user; };\n    std::vector<Seat> seats;\npublic:\n    DBMSStore() {\n        seats = {{\"1A\", \"available\", \"\"}, {\"1B\", \"available\", \"\"}, {\"1C\", \"available\", \"\"}};\n    }\n\n    bool book(const std::string& seatId, const std::string& user) {\n        std::lock_guard<std::mutex> lock(mtx);  // Transaction isolation\n        for (auto& seat : seats) {\n            if (seat.id == seatId && seat.status == \"available\") {\n                std::this_thread::sleep_for(std::chrono::milliseconds(10)); // same delay\n                seat.status = \"booked\";\n                seat.user = user;\n                std::cout << \"[DBMS] \" << user << \" booked \" << seatId << \"\\n\";\n                return true;\n            }\n        }\n        std::cout << \"[DBMS] \" << seatId << \" already taken → \" << user << \" denied\\n\";\n        return false;\n    }\n\n    void printStatus() {\n        for (const auto& s : seats)\n            std::cout << \"  \" << s.id << \": \" << s.status\n                      << (s.user.empty() ? \"\" : \" by \" + s.user) << \"\\n\";\n    }\n};\n\nvoid concurrentTestFile(FileSystemStore& fs, const std::string& seat, const std::string& user) {\n    fs.unsafeBook(seat, user);\n}\n\nvoid concurrentTestDBMS(DBMSStore& db, const std::string& seat, const std::string& user) {\n    db.book(seat, user);\n}\n\nint main() {\n    std::cout << \"=== FILE SYSTEM: Concurrent Booking ===\\n\";\n    {\n        FileSystemStore fs(\"seats.txt\");\n        fs.writeAll({\"1A,available,\", \"1B,available,\", \"1C,available,\"});\n\n        std::thread t1(concurrentTestFile, std::ref(fs), \"1A\", \"Alice\");\n        std::thread t2(concurrentTestFile, std::ref(fs), \"1A\", \"Bob\");\n        t1.join(); t2.join();\n\n        std::cout << \"Final state:\\n\";\n        for (const auto& line : fs.readAll())\n            std::cout << \"  \" << line << \"\\n\";\n        std::cout << \"==> RACE CONDITION: both may succeed or last write wins!\\n\\n\";\n    }\n\n    std::cout << \"=== DBMS: Concurrent Booking ===\\n\";\n    {\n        DBMSStore db;\n        std::thread t1(concurrentTestDBMS, std::ref(db), \"1A\", \"Alice\");\n        std::thread t2(concurrentTestDBMS, std::ref(db), \"1A\", \"Bob\");\n        t1.join(); t2.join();\n\n        std::cout << \"Final state:\\n\";\n        db.printStatus();\n        std::cout << \"==> MUTUAL EXCLUSION: only one succeeds!\\n\";\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation: File vs. DBMS Simulation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import threading\nimport time\nimport os\n\n\nclass FileSystemStore:\n    \"\"\"Simulates a naive file-based system with race conditions.\"\"\"\n    \n    def __init__(self, filename: str):\n        self.filename = filename\n    \n    def init_data(self, seats: list) -> None:\n        with open(self.filename, \"w\") as f:\n            for seat in seats:\n                f.write(f\"{seat},available,\\n\")\n    \n    def read_all(self) -> list:\n        with open(self.filename, \"r\") as f:\n            return [line.strip() for line in f.readlines()]\n    \n    def write_all(self, lines: list) -> None:\n        with open(self.filename, \"w\") as f:\n            for line in lines:\n                f.write(line + \"\\n\")\n    \n    def unsafe_book(self, seat_id: str, user: str) -> bool:\n        \"\"\"No locking → demonstrates race condition.\"\"\"\n        data = self.read_all()\n        for i, line in enumerate(data):\n            parts = line.split(\",\")\n            if parts[0] == seat_id and parts[1] == \"available\":\n                time.sleep(0.01)  # Window for race condition\n                data[i] = f\"{seat_id},booked,{user}\"\n                self.write_all(data)\n                print(f\"[FILE] {user} booked {seat_id}\")\n                return True\n        print(f\"[FILE] {seat_id} already taken → {user} denied\")\n        return False\n\n\nclass DBMSStore:\n    \"\"\"Simulates DBMS with mutex-based concurrency control.\"\"\"\n    \n    def __init__(self):\n        self.lock = threading.Lock()\n        self.seats = {\n            \"1A\": {\"status\": \"available\", \"user\": \"\"},\n            \"1B\": {\"status\": \"available\", \"user\": \"\"},\n            \"1C\": {\"status\": \"available\", \"user\": \"\"},\n        }\n    \n    def book(self, seat_id: str, user: str) -> bool:\n        with self.lock:  # Transaction isolation\n            if seat_id in self.seats and self.seats[seat_id][\"status\"] == \"available\":\n                time.sleep(0.01)  # Same delay\n                self.seats[seat_id][\"status\"] = \"booked\"\n                self.seats[seat_id][\"user\"] = user\n                print(f\"[DBMS] {user} booked {seat_id}\")\n                return True\n            print(f\"[DBMS] {seat_id} already taken → {user} denied\")\n            return False\n    \n    def print_status(self) -> None:\n        for sid, info in self.seats.items():\n            print(f\"  {sid}: {info['status']}\"\n                  f\"{' by ' + info['user'] if info['user'] else ''}\")\n\n\ndef file_concurrent_test():\n    print(\"=== FILE SYSTEM: Concurrent Booking ===\")\n    fs = FileSystemStore(\"seats_test.txt\")\n    fs.init_data([\"1A\", \"1B\", \"1C\"])\n    \n    t1 = threading.Thread(target=fs.unsafe_book, args=(\"1A\", \"Alice\"))\n    t2 = threading.Thread(target=fs.unsafe_book, args=(\"1A\", \"Bob\"))\n    t1.start(); t2.start()\n    t1.join(); t2.join()\n    \n    print(\"Final state:\")\n    for line in fs.read_all():\n        print(f\"  {line}\")\n    print(\"==> RACE CONDITION: both may succeed or last write wins!\\n\")\n    os.remove(\"seats_test.txt\")\n\n\ndef dbms_concurrent_test():\n    print(\"=== DBMS: Concurrent Booking ===\")\n    db = DBMSStore()\n    \n    t1 = threading.Thread(target=db.book, args=(\"1A\", \"Alice\"))\n    t2 = threading.Thread(target=db.book, args=(\"1A\", \"Bob\"))\n    t1.start(); t2.start()\n    t1.join(); t2.join()\n    \n    print(\"Final state:\")\n    db.print_status()\n    print(\"==> MUTUAL EXCLUSION: only one succeeds!\\n\")\n\n\nif __name__ == \"__main__\":\n    file_concurrent_test()\n    dbms_concurrent_test()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis with WHY"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "File System Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DBMS Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read (exact match)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) with B+ tree index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File system must scan entire file; DBMS uses tree index"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read (range)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n + k) with index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree index finds start point; sequential scan for k results"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) append"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) index update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File appends to end; DBMS maintains sorted index"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) rewrite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) locate + O(1) write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File must rewrite entire file; DBMS updates page in place"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) rewrite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) locate + mark"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File rewrite vs. tombstone marking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrent Access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) but unsafe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) lock acquire"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File: no coordination. DBMS: lock manager overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consistency Check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) manual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) constraint check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File: no automatic checks. DBMS: constraint enforced at write"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual → O(n) restore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) log replay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File: restore from backup. DBMS: replay/undo WAL"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages: File System vs. DBMS"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "File System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DBMS"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Simplicity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple for small datasets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex setup and administration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast for sequential I/O, single-user"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead for trivial operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free (OS built-in)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "License, hardware, DBA salary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Portability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any OS can read text files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vendor-specific format"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Atomicity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None → partial writes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full ACID transaction support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrent Access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None → file-level locking only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row-level locking, MVCC, isolation levels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File permissions only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row/column-level GRANT/REVOKE, encryption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Integrity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None → application must enforce"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative constraints, triggers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Independence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None → format change breaks everything"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical/logical independence via abstraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query Flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual parsing for each query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative SQL with joins, subqueries, aggregation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recovery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual restore from backup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automated crash recovery, point-in-time restore"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multi-user"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not designed for it"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built for concurrent multi-user access"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases Specific to File System vs. DBMS"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "File System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DBMS"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Two users editing same record"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Last write wins → data loss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First committer wins → second gets serialization error"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "System crash during write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Corrupted file, partial write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Atomic recovery via WAL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disk space exhaustion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incomplete write, no recovery"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction aborts cleanly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Schema change (add column)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every app must be rewritten"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALTER TABLE with default value; views insulate apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-file consistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No referential integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOREIGN KEY constraints enforced"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Million-record search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow sequential scan (minutes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indexed lookup (milliseconds)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simultaneous backup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File locked → no access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Online backup with consistent snapshot"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data encryption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypt entire file or nothing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column-level transparent encryption"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-three-schema-architecture",
      children: "1.3 Three-Schema Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Building Blueprint"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Think of a large building:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Physical Level"
        }), " = The actual construction → concrete foundation, steel beams, electrical wiring, plumbing pipes. The architect does not show wiring diagrams to the office tenants."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conceptual Level"
        }), " = The architectural blueprint → floor plans showing rooms, hallways, doors, windows. It describes what is in the building without specifying pipe diameters or wire gauges."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "External Level"
        }), " = The tenant's view. The CEO sees a corner office with a view. The IT team sees a server room with cooling ducts. The janitor sees the cleaning supply closet. Same building, different perspectives."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The three-level architecture (ANSI-SPARC standard, 1975) separates these concerns so that changes at one level do not cascade to others."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Three-Level Architecture Table"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Physical (Internal) Schema"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Conceptual Schema"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "External Schema (Views)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Focus"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HOW data is stored"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WHAT data is stored"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WHAT specific users see"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Designed by"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBA, system administrator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBA, database designer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application developers, end users"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Abstraction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lowest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Middle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Users"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBA, storage team"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBA, designers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application users, report writers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Changes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add index, change file org, compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add column, new table, new relationship"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add/modify/drop user views"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Table stored as heap file, B+ tree index on PK, 4KB blocks, LZ4 compression\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Customer has orders; each order has items; customer has name, address, phone;\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Shipping clerk sees only customer address and order ID\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Independence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changes hidden from upper levels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changes may affect external views"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Isolated from conceptual/physical changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hardware dependency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High → depends on disk, memory, CPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Number of schemas"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple (one per user group)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Dictionary entry"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Storage parameters, file paths, indexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table/column definitions, relationships, constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View definitions, access privileges"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps: Three-Schema Mapping"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: Application issues a query (e.g., \"Show my orders\")\nStep 2: External schema determines user sees only order_id, date, status (not credit_card)\nStep 3: External-to-conceptual mapping translates view query to conceptual query\nStep 4: Conceptual schema processes the logical query against base tables\nStep 5: Conceptual-to-physical mapping determines how to access data\nStep 6: Physical schema locates the file, index, and blocks on disk\nStep 7: Storage manager reads the physical pages into buffer pool\nStep 8: Results propagate back through the levels (physical → conceptual → external → user)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: Three-Level Query Resolution"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION resolve_user_query(user_query, user_role):\n    // Step 1-2: External level → apply view restrictions\n    view = GET_VIEW_FOR_ROLE(user_role)\n    allowed_columns = view.get_allowed_columns(user_query.table)\n    row_filter = view.get_row_filter(user_query.table)\n    \n    // Step 3: Map external to conceptual\n    conceptual_query = external_to_conceptual(user_query, view)\n    \n    // Step 4-5: Conceptual level → validate against catalog\n    schema = catalog.get_schema(conceptual_query.table)\n    VALIDATE(conceptual_query, schema)\n    \n    // Step 5-6: Map conceptual to physical\n    storage_info = conceptual_to_physical(schema)\n    index_path = storage_info.index_for(conceptual_query.where_condition)\n    \n    // Step 7-8: Physical execution\n    data_pages = storage_manager.read_pages(\n        file=storage_info.file_path,\n        index=index_path,\n        filter=conceptual_query.where_condition\n    )\n    RETURN apply_view_filter(data_pages, row_filter, allowed_columns)\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace: Three-Level Query → \"Show my orders\""
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Processing"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "External"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View Definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User role = 'customer'"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Maps to view ", (0,jsx_runtime.jsx)(_components.code, {
              children: "customer_orders"
            }), " that shows only ", (0,jsx_runtime.jsx)(_components.code, {
              children: "order_id, date, status, total"
            }), " (hides ", (0,jsx_runtime.jsx)(_components.code, {
              children: "credit_card, internal_notes"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["View query: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT order_id, date, status, total FROM orders WHERE customer_id = ?"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conceptual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema Mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View query"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Translates to conceptual query; validates table ", (0,jsx_runtime.jsx)(_components.code, {
              children: "orders"
            }), " has columns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "order_id, date, status, total, customer_id"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Logical query: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT ... FROM orders WHERE customer_id=101"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Physical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Storage Mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical query"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Index on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "customer_id"
            }), " selected; file ", (0,jsx_runtime.jsx)(_components.code, {
              children: "orders.ibd"
            }), " page 42-48; buffer pool cache checked"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical plan: IndexScan(orders_cid_idx) → Fetch(blocks 42,45)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Physical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical plan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer pool hit page 42 (cached), page 45 read from disk (5ms I/O)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 rows returned"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conceptual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formatting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 raw rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Columns filtered per conceptual schema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row set with all allowed cols"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "External"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View Filtering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full row set"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "credit_card"
            }), " column removed; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "internal_notes"
            }), " column removed"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 rows, 4 visible columns"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation: Three-Level Architecture Simulation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <memory>\n#include <functional>\n\n// ===== PHYSICAL LEVEL =====\nstruct StorageBlock {\n    int block_id;\n    std::string data;\n};\n\nstruct PhysicalSchema {\n    std::string file_path;\n    std::string file_organization;  // \"heap\", \"sorted\", \"hash\"\n    int block_size;\n    std::string compression;\n    std::unordered_map<std::string, std::string> indexes;  // column -> index type\n};\n\nclass StorageManager {\n    std::unordered_map<std::string, std::vector<StorageBlock>> files;\npublic:\n    void createFile(const std::string& path, int blockSize) {\n        files[path] = {};\n        std::cout << \"[PHYSICAL] File created: \" << path\n                  << \" (block size: \" << blockSize << \"B)\\n\";\n    }\n\n    std::vector<StorageBlock> readBlocks(const std::string& path,\n                                          const std::vector<int>& blockIds) {\n        std::vector<StorageBlock> result;\n        auto it = files.find(path);\n        if (it == files.end()) return result;\n        for (int id : blockIds) {\n            if (id < (int)it->second.size()) {\n                result.push_back(it->second[id]);\n                std::cout << \"[PHYSICAL] Read block \" << id << \" from \" << path << \"\\n\";\n            }\n        }\n        return result;\n    }\n};\n\n// ===== CONCEPTUAL LEVEL =====\nstruct ColumnDef {\n    std::string name;\n    std::string type;\n    bool isPrimaryKey;\n};\n\nstruct ConceptualSchema {\n    std::string tableName;\n    std::vector<ColumnDef> columns;\n    std::unordered_map<std::string, std::string> relationships;  // FK references\n};\n\nclass CatalogManager {\n    std::unordered_map<std::string, ConceptualSchema> schemas;\npublic:\n    void defineSchema(const ConceptualSchema& s) {\n        schemas[s.tableName] = s;\n        std::cout << \"[CONCEPTUAL] Schema defined: \" << s.tableName\n                  << \" (\" << s.columns.size() << \" columns)\\n\";\n    }\n\n    ConceptualSchema getSchema(const std::string& table) {\n        auto it = schemas.find(table);\n        if (it == schemas.end()) throw std::runtime_error(\"Table not found\");\n        return it->second;\n    }\n};\n\n// ===== EXTERNAL LEVEL =====\nstruct ViewDefinition {\n    std::string viewName;\n    std::string baseTable;\n    std::vector<std::string> allowedColumns;\n    std::function<bool(const std::unordered_map<std::string, std::string>&)> rowFilter;\n};\n\nclass ViewManager {\n    std::unordered_map<std::string, std::vector<ViewDefinition>> viewsByRole;\npublic:\n    void addView(const std::string& role, const ViewDefinition& view) {\n        viewsByRole[role].push_back(view);\n        std::cout << \"[EXTERNAL] View '\" << view.viewName << \"' added for role '\" << role << \"'\\n\";\n    }\n\n    ViewDefinition getView(const std::string& role, const std::string& table) {\n        auto it = viewsByRole.find(role);\n        if (it == viewsByRole.end()) throw std::runtime_error(\"No views for role\");\n        for (const auto& v : it->second) {\n            if (v.baseTable == table) return v;\n        }\n        throw std::runtime_error(\"No view for table \" + table);\n    }\n};\n\n// ===== DATABASE SYSTEM =====\nclass ThreeLevelDatabase {\n    StorageManager storage;\n    CatalogManager catalog;\n    ViewManager views;\npublic:\n    void setup() {\n        // Physical\n        storage.createFile(\"orders.dat\", 4096);\n\n        // Conceptual\n        ConceptualSchema ordersSchema{\n            \"orders\",\n            {{\"order_id\", \"INT\", true}, {\"customer_id\", \"INT\", false},\n             {\"date\", \"DATE\", false}, {\"status\", \"VARCHAR(20)\", false},\n             {\"total\", \"DECIMAL\", false}, {\"credit_card\", \"VARCHAR(4)\", false}},\n            {{\"customer_id\", \"customers(customer_id)\"}}\n        };\n        catalog.defineSchema(ordersSchema);\n\n        // External\n        views.addView(\"customer\", {\"customer_orders\", \"orders\",\n            {\"order_id\", \"date\", \"status\", \"total\"},\n            [](const auto& row) { return true; }\n        });\n        views.addView(\"accounting\", {\"accounting_orders\", \"orders\",\n            {\"order_id\", \"total\", \"credit_card\"},\n            [](const auto& row) { return true; }\n        });\n        views.addView(\"shipping\", {\"shipping_orders\", \"orders\",\n            {\"order_id\", \"customer_id\", \"status\"},\n            [](const auto& row) { return row.at(\"status\") != \"cancelled\"; }\n        });\n    }\n\n    void query(const std::string& role, const std::string& table) {\n        std::cout << \"\\n--- User Role: \" << role << \" ---\\n\";\n        try {\n            // External level\n            auto view = views.getView(role, table);\n            std::cout << \"[EXTERNAL] View '\" << view.viewName\n                      << \"' allows columns: \";\n            for (const auto& c : view.allowedColumns) std::cout << c << \" \";\n            std::cout << \"\\n\";\n\n            // Conceptual level\n            auto schema = catalog.getSchema(table);\n            std::cout << \"[CONCEPTUAL] Base table '\" << table\n                      << \"' has \" << schema.columns.size() << \" columns\\n\";\n\n            // Show only allowed columns from conceptual schema\n            std::cout << \"[QUERY RESULT] Columns visible to '\" << role << \"': \";\n            for (const auto& c : view.allowedColumns) std::cout << c << \" \";\n            std::cout << \"\\n\";\n\n        } catch (const std::exception& e) {\n            std::cout << \"ERROR: \" << e.what() << \"\\n\";\n        }\n    }\n};\n\nint main() {\n    ThreeLevelDatabase db;\n    db.setup();\n    db.query(\"customer\", \"orders\");\n    db.query(\"accounting\", \"orders\");\n    db.query(\"shipping\", \"orders\");\n    db.query(\"customer\", \"nonexistent\"); // Error case\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation: Three-Level Architecture Simulation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\nfrom typing import List, Dict, Optional, Callable\n\n\n# ===== PHYSICAL LEVEL =====\n@dataclass\nclass StorageBlock:\n    block_id: int\n    data: str\n\n\n@dataclass\nclass PhysicalSchema:\n    file_path: str\n    file_organization: str  # \"heap\", \"sorted\", \"hash\"\n    block_size: int\n    compression: Optional[str] = None\n    indexes: Dict[str, str] = field(default_factory=dict)\n\n\nclass StorageManager:\n    def __init__(self):\n        self.files: Dict[str, List[StorageBlock]] = {}\n\n    def create_file(self, path: str, block_size: int) -> None:\n        self.files[path] = []\n        print(f\"[PHYSICAL] File created: {path} (block size: {block_size}B)\")\n\n    def read_blocks(self, path: str, block_ids: List[int]) -> List[StorageBlock]:\n        if path not in self.files:\n            return []\n        result = []\n        for bid in block_ids:\n            if bid < len(self.files[path]):\n                result.append(self.files[path][bid])\n                print(f\"[PHYSICAL] Read block {bid} from {path}\")\n        return result\n\n\n# ===== CONCEPTUAL LEVEL =====\n@dataclass\nclass ColumnDef:\n    name: str\n    dtype: str\n    is_primary_key: bool = False\n\n\n@dataclass\nclass ConceptualSchema:\n    table_name: str\n    columns: List[ColumnDef]\n    relationships: Dict[str, str] = field(default_factory=dict)\n\n\nclass CatalogManager:\n    def __init__(self):\n        self.schemas: Dict[str, ConceptualSchema] = {}\n\n    def define_schema(self, schema: ConceptualSchema) -> None:\n        self.schemas[schema.table_name] = schema\n        print(f\"[CONCEPTUAL] Schema defined: {schema.table_name}\"\n              f\" ({len(schema.columns)} columns)\")\n\n    def get_schema(self, table: str) -> ConceptualSchema:\n        if table not in self.schemas:\n            raise ValueError(f\"Table '{table}' not found in catalog\")\n        return self.schemas[table]\n\n\n# ===== EXTERNAL LEVEL =====\n@dataclass\nclass ViewDefinition:\n    view_name: str\n    base_table: str\n    allowed_columns: List[str]\n    row_filter: Optional[Callable] = None\n\n\nclass ViewManager:\n    def __init__(self):\n        self.views_by_role: Dict[str, List[ViewDefinition]] = {}\n\n    def add_view(self, role: str, view: ViewDefinition) -> None:\n        if role not in self.views_by_role:\n            self.views_by_role[role] = []\n        self.views_by_role[role].append(view)\n        print(f\"[EXTERNAL] View '{view.view_name}' added for role '{role}'\")\n\n    def get_view(self, role: str, table: str) -> ViewDefinition:\n        if role not in self.views_by_role:\n            raise ValueError(f\"No views defined for role '{role}'\")\n        for v in self.views_by_role[role]:\n            if v.base_table == table:\n                return v\n        raise ValueError(f\"No view for table '{table}' under role '{role}'\")\n\n\nclass ThreeLevelDatabase:\n    def __init__(self):\n        self.storage = StorageManager()\n        self.catalog = CatalogManager()\n        self.views = ViewManager()\n\n    def setup(self) -> None:\n        # Physical\n        self.storage.create_file(\"orders.dat\", 4096)\n\n        # Conceptual\n        orders_schema = ConceptualSchema(\n            table_name=\"orders\",\n            columns=[\n                ColumnDef(\"order_id\", \"INT\", True),\n                ColumnDef(\"customer_id\", \"INT\"),\n                ColumnDef(\"date\", \"DATE\"),\n                ColumnDef(\"status\", \"VARCHAR(20)\"),\n                ColumnDef(\"total\", \"DECIMAL\"),\n                ColumnDef(\"credit_card\", \"VARCHAR(4)\"),\n            ],\n            relationships={\"customer_id\": \"customers(customer_id)\"}\n        )\n        self.catalog.define_schema(orders_schema)\n\n        # External views\n        self.views.add_view(\"customer\", ViewDefinition(\n            \"customer_orders\", \"orders\",\n            [\"order_id\", \"date\", \"status\", \"total\"]\n        ))\n        self.views.add_view(\"accounting\", ViewDefinition(\n            \"accounting_orders\", \"orders\",\n            [\"order_id\", \"total\", \"credit_card\"]\n        ))\n        self.views.add_view(\"shipping\", ViewDefinition(\n            \"shipping_orders\", \"orders\",\n            [\"order_id\", \"customer_id\", \"status\"],\n            row_filter=lambda row: row.get(\"status\") != \"cancelled\"\n        ))\n\n    def query(self, role: str, table: str) -> None:\n        print(f\"\\n--- User Role: {role} ---\")\n        try:\n            # External level\n            view = self.views.get_view(role, table)\n            print(f\"[EXTERNAL] View '{view.view_name}' allows: {view.allowed_columns}\")\n\n            # Conceptual level\n            schema = self.catalog.get_schema(table)\n            print(f\"[CONCEPTUAL] Base table '{table}' has {len(schema.columns)} columns\")\n\n            # Result\n            print(f\"[RESULT] Columns visible to '{role}': {view.allowed_columns}\")\n\n        except ValueError as e:\n            print(f\"ERROR: {e}\")\n\n\nif __name__ == \"__main__\":\n    db = ThreeLevelDatabase()\n    db.setup()\n    db.query(\"customer\", \"orders\")\n    db.query(\"accounting\", \"orders\")\n    db.query(\"shipping\", \"orders\")\n    db.query(\"customer\", \"nonexistent\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis with WHY"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "External view resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View definition is a hash lookup by role + table name"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conceptual schema lookup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Catalog is hash-indexed by table name"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Physical storage mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File path and organization stored in schema metadata"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "View-to-conceptual mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(c) where c = view columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column subset selection → linear in number of columns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conceptual-to-physical mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct mapping via schema-stored physical parameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full query resolution (E→C→P→C→E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(c + n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column mapping + optional data fetching"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages of Three-Schema Architecture"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data independence (physical and logical)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity → three levels to design and maintain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple user views from same data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance overhead of mapping between levels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security → sensitive columns hidden per role"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema evolution management complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simplified application development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial design effort is significant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized control with flexible access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some DBMS do not fully implement all three levels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supports multiple external schemas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mapping rules must be defined and maintained"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "View update ambiguity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User tries to UPDATE through a view that joins multiple tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBMS rejects non-updatable views; INSTEAD OF triggers handle complex cases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cascading schema changes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dropping a column that is exposed in a view"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DROP COLUMN rejected if any view references the column; CASCADE option"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "External schema mismatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application expects column that was removed from view"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application receives SQL error; view definition change needs app coordination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security through views"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User creates a new view that exposes hidden data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View creation requires privileges on base tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance regression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex view joins 10 tables, runs slowly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View materialization (materialized view) caches result"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Circular view dependency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View A references View B which references View A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBMS detects circular dependency at definition time, rejects it"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-data-independence",
      children: "1.4 Data Independence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: The Restaurant Kitchen"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In a restaurant:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Physical Independence"
        }), ": The chef can replace the old gas stove with an induction cooktop. The waiters still deliver the same dishes to customers. They do not need to change how they write orders."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Logical Independence"
        }), ": The chef changes the menu → replaces \"Beef Wellington\" with \"Lobster Thermidor\" on the printed menu. The suppliers still deliver ingredients the same way. The kitchen equipment does not change."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Logical vs. Physical Data Independence Comparison"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Physical Data Independence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Logical Data Independence"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Definition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ability to change storage structures without affecting conceptual/external schemas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ability to change conceptual schema without affecting external views or applications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "What Changes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indexing strategy, file organization, compression, block size, storage hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table structure, column additions, relationship changes, constraint modifications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "What Stays Same"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conceptual schema (table definitions), external views (user queries)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External views (user queries), application code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Affected By"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adding/removing indexes, switching from heap to sorted file, changing block size, migrating to SSD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adding/dropping columns, splitting tables, normalizing, adding new relationships"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Protection Mechanism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conceptual-to-physical mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External-to-conceptual mapping (views)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation Level"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Between physical and conceptual schemas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Between conceptual and external schemas"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Difficulty"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easier → only DBA/storage team involved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harder → may require view redefinition, application testing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Adding a B+ tree index on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "last_name"
            }), " does not change any ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT"
            }), " query"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Splitting ", (0,jsx_runtime.jsx)(_components.code, {
              children: "employees"
            }), " into ", (0,jsx_runtime.jsx)(_components.code, {
              children: "employees + employee_details"
            }), " requires updating views"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact of Change"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero impact on applications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May require view updates; application changes minimized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Risk"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low → storage changes are transparent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium → view definitions must be carefully rewritten"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real DBMS Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MySQL changing from MyISAM to InnoDB engine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL adding a column with ALTER TABLE ... ADD COLUMN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Frequency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequent (performance tuning, hardware upgrades)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less frequent (schema evolution, new features)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps: How Data Independence Works"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Physical Independence Example → Adding an Index:\n  1. DBA identifies slow query: SELECT * FROM orders WHERE customer_id = 101\n  2. DBA creates index: CREATE INDEX idx_customer_id ON orders(customer_id)\n  3. Physical schema now has a B+ tree index on customer_id\n  4. Physical-to-conceptual mapping is updated internally\n  5. All applications continue to run the same SELECT query unchanged\n  6. The query optimizer uses the new index automatically\n  7. Result: faster query, zero application changes\n\nLogical Independence Example → Adding a Column:\n  1. Business requirement: track employee department\n  2. DBA alters conceptual schema: ALTER TABLE employees ADD COLUMN dept VARCHAR(50)\n  3. External views that do NOT include `dept` are unaffected\n  4. Application using view `employee_basics` (name, email, salary) runs unchanged\n  5. Application using view `employee_full` now sees the new column\n  6. Result: schema evolves, existing queries continue to work\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: Data Independence Resolution"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION physical_independence_test(query):\n    original_plan = optimizer.generate_plan(query)\n    // Plan uses sequential scan: O(n)\n    \n    DBA CREATES INDEX ON query.where_column\n    \n    new_plan = optimizer.generate_plan(query)\n    // Plan uses index scan: O(log n)\n    \n    ASSERT original_plan != new_plan          // Physical execution changed\n    ASSERT original_plan.result == new_plan.result  // Results identical\n    PRINT \"Physical independence verified: storage change, same results\"\nEND FUNCTION\n\nFUNCTION logical_independence_test():\n    // Before schema change\n    old_view = catalog.get_view(\"employee_basics\")\n    old_columns = old_view.allowed_columns    // [id, name, email, salary]\n    \n    ALTER TABLE employees ADD COLUMN dept VARCHAR(50)\n    \n    // After schema change\n    new_view = catalog.get_view(\"employee_basics\")\n    new_columns = new_view.allowed_columns    // [id, name, email, salary] ← unchanged!\n    \n    ASSERT old_columns == new_columns          // View definition preserved\n    PRINT \"Logical independence verified: schema changed, view unchanged\"\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation: Data Independence Demo"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <unordered_map>\n#include <chrono>\n\nclass QueryResult {\npublic:\n    std::vector<std::string> rows;\n    std::string strategy;\n    long long duration_us;\n};\n\nclass DataIndependentDB {\n    std::unordered_map<int, std::string> data;  // id -> name\n    std::unordered_map<int, int> indexByValue;  // value_hash -> id\n    bool hasIndex = false;\n\npublic:\n    DataIndependentDB() {\n        for (int i = 0; i < 10000; i++)\n            data[i] = \"User_\" + std::to_string(i);\n    }\n\n    void createIndex() {\n        for (const auto& [id, name] : data)\n            indexByValue[std::hash<std::string>{}(name)] = id;\n        hasIndex = true;\n        std::cout << \"[PHYSICAL CHANGE] Index created on name column\\n\";\n    }\n\n    QueryResult findByName(const std::string& name) {\n        auto start = std::chrono::high_resolution_clock::now();\n        QueryResult result;\n\n        if (hasIndex) {\n            result.strategy = \"INDEX SCAN (after physical change)\";\n            int hash = std::hash<std::string>{}(name);\n            auto it = indexByValue.find(hash);\n            if (it != indexByValue.end()) {\n                result.rows.push_back(data[it->second]);\n            }\n        } else {\n            result.strategy = \"SEQUENTIAL SCAN (before physical change)\";\n            for (const auto& [id, n] : data) {\n                if (n == name) {\n                    result.rows.push_back(n);\n                }\n            }\n        }\n\n        auto end = std::chrono::high_resolution_clock::now();\n        result.duration_us = std::chrono::duration_cast<std::chrono::microseconds>(\n            end - start).count();\n        return result;\n    }\n\n    // Simulate logical independence → adding column without breaking view\n    struct EmployeeView {\n        std::vector<std::string> columns;  // What the view exposes\n        std::vector<std::unordered_map<std::string, std::string>> data;\n    };\n\n    EmployeeView employeeBasics;\n    std::unordered_map<int, std::string> departments;  // Logical change adds this\n\n    void setupEmployeeData() {\n        employeeBasics.columns = {\"id\", \"name\", \"email\", \"salary\"};\n        employeeBasics.data = {\n            {{\"id\",\"1\"}, {\"name\",\"Alice\"}, {\"email\",\"alice@co.com\"}, {\"salary\",\"75000\"}},\n            {{\"id\",\"2\"}, {\"name\",\"Bob\"},   {\"email\",\"bob@co.com\"},   {\"salary\",\"65000\"}},\n        };\n        std::cout << \"[CONCEPTUAL SCHEMA] employees: id, name, email, salary\\n\";\n    }\n\n    void addDepartmentColumn() {\n        departments[1] = \"Engineering\";\n        departments[2] = \"Marketing\";\n        // The existing employeeBasics view does NOT change\n        std::cout << \"[LOGICAL CHANGE] Added department column.\\n\";\n        std::cout << \"[VERIFICATION] employee_basics view still has: \";\n        for (const auto& c : employeeBasics.columns)\n            std::cout << c << \" \";\n        std::cout << \"\\n\";\n    }\n};\n\nint main() {\n    DataIndependentDB db;\n\n    // Physical Independence Demo\n    std::cout << \"=== PHYSICAL DATA INDEPENDENCE ===\\n\";\n    auto r1 = db.findByName(\"User_500\");\n    std::cout << r1.strategy << \" -> \" << r1.duration_us << \" us\\n\";\n\n    db.createIndex();\n\n    auto r2 = db.findByName(\"User_500\");\n    std::cout << r2.strategy << \" -> \" << r2.duration_us << \" us\\n\";\n    std::cout << \"Same query, different execution, same result ✓\\n\\n\";\n\n    // Logical Independence Demo\n    std::cout << \"=== LOGICAL DATA INDEPENDENCE ===\\n\";\n    db.setupEmployeeData();\n    db.addDepartmentColumn();\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation: Data Independence Demo"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\nimport hashlib\nfrom dataclasses import dataclass, field\nfrom typing import Dict, List, Optional\n\n\n@dataclass\nclass QueryResult:\n    rows: List[str]\n    strategy: str\n    duration_us: float\n\n\nclass DataIndependentDB:\n    def __init__(self):\n        self.data: Dict[int, str] = {}\n        self.index_by_value: Dict[str, int] = {}\n        self.has_index = False\n        for i in range(10000):\n            self.data[i] = f\"User_{i}\"\n\n    def create_index(self) -> None:\n        for uid, name in self.data.items():\n            h = hashlib.md5(name.encode()).hexdigest()\n            self.index_by_value[h] = uid\n        self.has_index = True\n        print(\"[PHYSICAL CHANGE] Hash index created on name column\")\n\n    def find_by_name(self, name: str) -> QueryResult:\n        start = time.perf_counter_ns()\n\n        if self.has_index:\n            strategy = \"INDEX SCAN (after physical change)\"\n            h = hashlib.md5(name.encode()).hexdigest()\n            uid = self.index_by_value.get(h)\n            rows = [self.data[uid]] if uid is not None else []\n        else:\n            strategy = \"SEQUENTIAL SCAN (before physical change)\"\n            rows = [n for n in self.data.values() if n == name]\n\n        duration_us = (time.perf_counter_ns() - start) / 1000\n        return QueryResult(rows, strategy, duration_us)\n\n    # Logical independence demo\n    def demo_logical_independence(self) -> None:\n        print(\"\\n--- Logical Data Independence ---\")\n        view_columns = [\"id\", \"name\", \"email\", \"salary\"]\n        print(f\"[CONCEPTUAL SCHEMA] employees: {view_columns}\")\n\n        # Logical change: add department\n        departments = {1: \"Engineering\", 2: \"Marketing\"}\n        print(\"[LOGICAL CHANGE] Added department column to conceptual schema\")\n        print(\"[VERIFICATION] View columns unchanged:\", view_columns)\n        print(\"Applications using employee_basics view are NOT affected ✓\")\n\n\nif __name__ == \"__main__\":\n    db = DataIndependentDB()\n\n    print(\"=== PHYSICAL DATA INDEPENDENCE ===\")\n    r1 = db.find_by_name(\"User_500\")\n    print(f\"{r1.strategy} -> {r1.duration_us:.0f} us\")\n\n    db.create_index()\n    r2 = db.find_by_name(\"User_500\")\n    print(f\"{r2.strategy} -> {r2.duration_us:.0f} us\")\n    print(f\"Speedup: {r1.duration_us / r2.duration_us:.1f}x\")\n    print(\"Same query, different execution plan, identical results ✓\")\n\n    db.demo_logical_independence()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis with WHY"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Physical change (add index)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) build, O(log n) query"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index construction scans all n rows; query uses tree for logarithmic lookup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Physical independence cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) mapping overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mapping layer indirection is constant-time pointer resolution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logical change (add column)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) schema change + O(n) default fill"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata update is O(1); filling default for n existing rows is O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logical independence benefit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) view resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View definition hides change; only k view columns need resolution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Query with physical change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) vs original O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index scan replaces full table scan → exponential improvement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Query with logical change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as before change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View definition unchanged; no query impact"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-dbms-languages-ddl--dml--dcl--tcl",
      children: "1.5 DBMS Languages (DDL / DML / DCL / TCL)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Restaurant Operations"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DDL (Data Definition Language)"
        }), " = The architect who designs the restaurant layout → decides where the kitchen, dining room, bathrooms, and storage go. This is done once (or rarely, during renovations)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DML (Data Manipulation Language)"
        }), " = The waitstaff who takes orders, brings food, and clears tables. This happens hundreds of times a day."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DCL (Data Control Language)"
        }), " = The manager who decides who has keys to the building, who can access the safe, who can enter the wine cellar."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TCL (Transaction Control Language)"
        }), " = The cashier who processes payment as an atomic unit → either the full payment goes through (including credit card charge and receipt printing) or none of it does."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DBMS Languages → Complete Table"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Full Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Commands"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Who Uses It"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frequency"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DDL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Definition Language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE, ALTER, DROP, TRUNCATE, RENAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define and modify database structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBA, database designer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (schema creation, migrations)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DML"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Manipulation Language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT, INSERT, UPDATE, DELETE, MERGE, CALL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query and modify data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application developers, analysts, end users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (every application request)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DCL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Control Language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GRANT, REVOKE, DENY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manage user permissions and access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBA, security administrator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-medium (user onboarding, audits)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TCL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction Control Language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BEGIN, COMMIT, ROLLBACK, SAVEPOINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manage transaction boundaries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application developers, DBA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (per transaction unit)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps: Lifecycle of a Database Operation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: DBA designs and creates the schema (DDL)\n  CREATE TABLE accounts (\n      account_id INT PRIMARY KEY,\n      owner VARCHAR(100),\n      balance DECIMAL(10,2) CHECK (balance >= 0)\n  );\n\nStep 2: DBA grants access to application users (DCL)\n  GRANT SELECT, INSERT, UPDATE ON accounts TO banking_app;\n\nStep 3: Application begins a transaction (TCL)\n  BEGIN TRANSACTION;\n\nStep 4: Application manipulates data (DML)\n  UPDATE accounts SET balance = balance - 500 WHERE account_id = 101;\n  UPDATE accounts SET balance = balance + 500 WHERE account_id = 102;\n\nStep 5: Application commits or rolls back (TCL)\n  COMMIT;  -- or ROLLBACK; if error occurred\n\nStep 6: DBA revokes access if needed (DCL)\n  REVOKE DELETE ON accounts FROM former_employee;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode: SQL Parser that Classifies Statements"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION classify_sql(statement):\n    tokens = UPPERCASE(statement).split()\n    first_word = tokens[0]\n    \n    SWITCH first_word:\n        CASE \"CREATE\", \"ALTER\", \"DROP\", \"TRUNCATE\", \"RENAME\":\n            category = \"DDL\"\n            description = \"Schema definition\"\n        CASE \"SELECT\", \"INSERT\", \"UPDATE\", \"DELETE\", \"MERGE\":\n            category = \"DML\"\n            description = \"Data manipulation\"\n        CASE \"GRANT\", \"REVOKE\", \"DENY\":\n            category = \"DCL\"\n            description = \"Access control\"\n        CASE \"BEGIN\", \"COMMIT\", \"ROLLBACK\", \"SAVEPOINT\":\n            category = \"TCL\"\n            description = \"Transaction control\"\n        DEFAULT:\n            category = \"UNKNOWN\"\n            description = \"Unrecognized SQL\"\n    \n    RETURN category, description\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace: SQL Classification"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Input SQL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "First Token"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CREATE TABLE students (id INT)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema definition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ALTER TABLE students ADD COLUMN gpa FLOAT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ALTER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema definition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SELECT * FROM students WHERE gpa > 3.5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data manipulation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "INSERT INTO students VALUES (1, 'Alice', 3.8)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INSERT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data manipulation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UPDATE students SET gpa = 4.0 WHERE id = 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data manipulation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "DELETE FROM students WHERE id = 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data manipulation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "GRANT SELECT ON students TO analyst"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GRANT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DCL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "REVOKE INSERT ON students FROM analyst"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REVOKE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DCL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "BEGIN TRANSACTION"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BEGIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "COMMIT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ROLLBACK"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ROLLBACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SAVEPOINT sp1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAVEPOINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TCL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transaction control"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation: SQL Parser and Classifier"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <string>\n#include <vector>\n#include <sstream>\n#include <algorithm>\n#include <cctype>\n\nclass SQLStatement {\npublic:\n    std::string original;\n    std::string category;\n    std::string command;\n    std::string details;\n    bool valid = true;\n};\n\nstd::string toUpper(const std::string& s) {\n    std::string result = s;\n    std::transform(result.begin(), result.end(), result.begin(), ::toupper);\n    return result;\n}\n\nSQLStatement parseSQL(const std::string& sql) {\n    SQLStatement stmt;\n    stmt.original = sql;\n\n    std::istringstream iss(sql);\n    std::string firstWord, secondWord;\n    iss >> firstWord >> secondWord;\n    firstWord = toUpper(firstWord);\n    secondWord = toUpper(secondWord);\n\n    if (firstWord == \"CREATE\" || firstWord == \"ALTER\" ||\n        firstWord == \"DROP\" || firstWord == \"TRUNCATE\" ||\n        firstWord == \"RENAME\") {\n        stmt.category = \"DDL\";\n        stmt.command = firstWord;\n        stmt.details = \"Schema definition\";\n    }\n    else if (firstWord == \"SELECT\" || firstWord == \"INSERT\" ||\n             firstWord == \"UPDATE\" || firstWord == \"DELETE\" ||\n             firstWord == \"MERGE\" || firstWord == \"CALL\") {\n        stmt.category = \"DML\";\n        stmt.command = firstWord;\n        stmt.details = (firstWord == \"SELECT\") ? \"Data retrieval\" : \"Data modification\";\n    }\n    else if (firstWord == \"GRANT\" || firstWord == \"REVOKE\" ||\n             firstWord == \"DENY\") {\n        stmt.category = \"DCL\";\n        stmt.command = firstWord;\n        stmt.details = \"Access control\";\n    }\n    else if (firstWord == \"BEGIN\" || firstWord == \"COMMIT\" ||\n             firstWord == \"ROLLBACK\" || firstWord == \"SAVEPOINT\") {\n        stmt.category = \"TCL\";\n        stmt.command = firstWord;\n        stmt.details = \"Transaction control\";\n    }\n    else {\n        stmt.valid = false;\n        stmt.category = \"UNKNOWN\";\n        stmt.details = \"Unrecognized SQL statement\";\n    }\n\n    return stmt;\n}\n\nint main() {\n    std::vector<std::string> testCases = {\n        \"CREATE TABLE employees (id INT PRIMARY KEY)\",\n        \"ALTER TABLE employees ADD COLUMN salary DECIMAL\",\n        \"SELECT name, salary FROM employees WHERE salary > 50000\",\n        \"INSERT INTO employees VALUES (1, 'Alice', 75000)\",\n        \"UPDATE employees SET salary = 80000 WHERE id = 1\",\n        \"DELETE FROM employees WHERE id = 1\",\n        \"GRANT SELECT, INSERT ON employees TO hr_app\",\n        \"REVOKE DELETE ON employees FROM temp_user\",\n        \"BEGIN TRANSACTION\",\n        \"COMMIT\",\n        \"ROLLBACK\",\n        \"SAVEPOINT before_update\",\n        \"MERGE INTO target USING source ON (target.id = source.id)\",\n        \"TRUNCATE TABLE temp_data\",\n        \"DROP TABLE old_records\",\n        \"NOT A VALID SQL STATEMENT\"\n    };\n\n    printf(\"%-60s %-12s %-8s %s\\n\", \"SQL Statement\", \"Category\", \"Command\", \"Details\");\n    printf(\"%-60s %-12s %-8s %s\\n\",\n           std::string(60, '-').c_str(),\n           std::string(12, '-').c_str(),\n           std::string(8, '-').c_str(),\n           \"-------\");\n\n    for (const auto& test : testCases) {\n        auto result = parseSQL(test);\n        printf(\"%-60s %-12s %-8s %s\\n\",\n               result.original.c_str(),\n               result.category.c_str(),\n               result.command.c_str(),\n               result.valid ? result.details.c_str() : \"INVALID\");\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation: SQL Parser and Classifier"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass\nfrom typing import List\n\n\n@dataclass\nclass SQLStatement:\n    original: str\n    category: str = \"\"\n    command: str = \"\"\n    details: str = \"\"\n    valid: bool = True\n\n\nDDL_COMMANDS = {\"CREATE\", \"ALTER\", \"DROP\", \"TRUNCATE\", \"RENAME\"}\nDML_COMMANDS = {\"SELECT\", \"INSERT\", \"UPDATE\", \"DELETE\", \"MERGE\", \"CALL\"}\nDCL_COMMANDS = {\"GRANT\", \"REVOKE\", \"DENY\"}\nTCL_COMMANDS = {\"BEGIN\", \"COMMIT\", \"ROLLBACK\", \"SAVEPOINT\"}\n\nDETAILS_MAP = {\n    \"SELECT\": \"Data retrieval\",\n    \"INSERT\": \"Data modification\",\n    \"UPDATE\": \"Data modification\",\n    \"DELETE\": \"Data modification\",\n    \"MERGE\": \"Data modification\",\n    \"CALL\": \"Procedure call\",\n}\n\n\ndef parse_sql(sql: str) -> SQLStatement:\n    stmt = SQLStatement(original=sql)\n    tokens = sql.strip().split()\n    if not tokens:\n        stmt.valid = False\n        stmt.category = \"UNKNOWN\"\n        stmt.details = \"Empty statement\"\n        return stmt\n\n    first = tokens[0].upper()\n\n    if first in DDL_COMMANDS:\n        stmt.category = \"DDL\"\n        stmt.command = first\n        stmt.details = \"Schema definition\"\n    elif first in DML_COMMANDS:\n        stmt.category = \"DML\"\n        stmt.command = first\n        stmt.details = DETAILS_MAP.get(first, \"Data manipulation\")\n    elif first in DCL_COMMANDS:\n        stmt.category = \"DCL\"\n        stmt.command = first\n        stmt.details = \"Access control\"\n    elif first in TCL_COMMANDS:\n        stmt.category = \"TCL\"\n        stmt.command = first\n        stmt.details = \"Transaction control\"\n    else:\n        stmt.valid = False\n        stmt.category = \"UNKNOWN\"\n        stmt.details = \"Unrecognized SQL statement\"\n\n    return stmt\n\n\ndef demo_sql_parser():\n    test_cases = [\n        \"CREATE TABLE employees (id INT PRIMARY KEY)\",\n        \"ALTER TABLE employees ADD COLUMN salary DECIMAL\",\n        \"SELECT name, salary FROM employees WHERE salary > 50000\",\n        \"INSERT INTO employees VALUES (1, 'Alice', 75000)\",\n        \"UPDATE employees SET salary = 80000 WHERE id = 1\",\n        \"DELETE FROM employees WHERE id = 1\",\n        \"GRANT SELECT, INSERT ON employees TO hr_app\",\n        \"REVOKE DELETE ON employees FROM temp_user\",\n        \"BEGIN TRANSACTION\",\n        \"COMMIT\",\n        \"ROLLBACK\",\n        \"SAVEPOINT before_update\",\n        \"MERGE INTO target USING source ON (target.id = source.id)\",\n        \"TRUNCATE TABLE temp_data\",\n        \"DROP TABLE old_records\",\n        \"INVALID SQL HERE\",\n    ]\n\n    print(f\"{'SQL Statement':<55} {'Category':<10} {'Cmd':<8} {'Details'}\")\n    print(\"-\" * 90)\n    for test in test_cases:\n        result = parse_sql(test)\n        status = result.details if result.valid else \"INVALID\"\n        print(f\"{result.original:<55} {result.category:<10} \"\n              f\"{result.command:<8} {status}\")\n\n\nif __name__ == \"__main__\":\n    demo_sql_parser()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis with WHY"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQL classification (first token)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single hash lookup on first word"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DDL: CREATE TABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(c) where c = columns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define column metadata, allocate initial storage pages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DDL: CREATE INDEX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must scan all n rows and build tree structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DML: SELECT (no WHERE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full table scan → must read all rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DML: SELECT (with PK equality)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B+ tree primary key lookup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DML: INSERT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append to page + update index(es)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DML: UPDATE (with index)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n + k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find row (log n) + update data + update indexes (k indexes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DML: DELETE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n + k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Similar to update but removes row"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DCL: GRANT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insert into system catalog permissions table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TCL: BEGIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create transaction record in log"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TCL: COMMIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) + fsync"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flush log buffer to disk (I/O bound)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TCL: ROLLBACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m) where m = modifications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undo each modification using log records"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages of DBMS Languages"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Language"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DDL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative schema definition; supports constraints (PK, FK, CHECK); transactional DDL in modern DBMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema changes may lock tables; migrations require careful planning; some changes cannot be reversed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DML"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative → specifies WHAT not HOW; set-based operations; can express complex joins and aggregations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance depends on query optimizer; complex queries may be hard to debug; no procedural logic without extensions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DCL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fine-grained access control; row-level security; supports roles and inheritance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Managing permissions at scale is complex; permission explosion with many users"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TCL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensures atomicity; supports savepoints for partial rollbacks; integrates with error handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead of logging and locking; long transactions block others"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases for DBMS Languages"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DDL during active transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some DBMS implicitly commit open transaction before DDL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use dedicated migration windows or online DDL tools (gh-ost, pt-online-schema-change)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DML with NULL comparisons"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "WHERE col = NULL"
            }), " returns no rows"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use IS NULL operator; understand three-valued logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DCL with inherited roles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Revoking from a role may not cascade to members"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use REVOKE ... CASCADE; audit effective permissions regularly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TCL with DDL statements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDL may not be rollbackable in some DBMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test migration scripts; use transactional DDL in PostgreSQL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deadlock in concurrent DML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two transactions each hold locks the other needs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement retry logic; set lock timeout; keep transactions short"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GRANT on future tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New tables created after GRANT are inaccessible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grant on schema level, or use default privileges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Long-running SELECT with MVCC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Old row versions accumulate (bloat) for concurrent readers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configure autovacuum (PostgreSQL) or version cleanup intervals"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MERGE concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrent MERGE on same row causes serialization errors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use upsert patterns with ON CONFLICT ... DO UPDATE (PostgreSQL) or INSERT ... ON DUPLICATE KEY UPDATE (MySQL)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-dbms-users",
      children: "1.6 DBMS Users"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: The Hospital"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Database Administrator (DBA)"
        }), " = The hospital administrator → manages the entire facility, hires staff, sets policies, ensures compliance with regulations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Application Programmers"
        }), " = The doctors → use tools (instruments, tests) to diagnose and treat patients. They need deep access to specific data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sophisticated Users"
        }), " = The medical researchers → analyze patient outcomes across thousands of cases to find patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Naive Users"
        }), " = The patients → interact through the front desk, see only their own information, do not access the database directly."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DBMS User Types Table"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "User Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Interface"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQL Knowledge"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Naive Users"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use pre-built applications; do not interact with DBMS directly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forms, web apps, mobile apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ATM user, airline booking customer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Application Programmers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write code that embeds SQL queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host language (Java, Python, C#) with embedded SQL or ORM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (SELECT, INSERT, UPDATE, DELETE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backend developer for e-commerce site"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sophisticated Users"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use query language directly for complex analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL query tools, BI platforms (Tableau, Power BI)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced (joins, subqueries, aggregation, window functions)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data analyst running sales reports"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Specialized Users"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build specialized database applications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAD/CASE tools, expert systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain-specific"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GIS engineer managing spatial data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Database Administrator (DBA)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manages the database environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBMS admin tools, command-line, monitoring dashboards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expert (all DDL, DCL, TCL, performance tuning)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBA optimizing indexes and managing backups"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DBA Responsibilities → Numbered Steps"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Schema Design: Define tables, columns, constraints, relationships\n2. Storage Management: Choose file organization, indexing strategy, block size\n3. Performance Tuning: Monitor slow queries, add/remove indexes, optimize joins\n4. Security Administration: Create users, assign roles, grant/revoke privileges\n5. Backup & Recovery: Schedule backups, test restore procedures, plan for disasters\n6. Migration Management: Plan and execute schema changes, version migrations\n7. Monitoring: Track disk usage, memory, CPU, query throughput, lock contention\n8. Capacity Planning: Estimate future growth, provision hardware resources\n9. Data Dictionary Management: Maintain metadata about all database objects\n10. Compliance: Ensure data handling meets regulatory requirements (GDPR, HIPAA, SOX)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "17-data-models",
      children: "1.7 Data Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Maps of the Same City"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Different maps serve different purposes for the same city:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ER Model"
        }), " = A tourist map showing landmarks (entities) and walking paths (relationships) between them"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Relational Model"
        }), " = A spreadsheet with cross-references → each sheet (table) lists items of one type, and columns link across sheets"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hierarchical Model"
        }), " = A tree-structured org chart → each department has sub-departments, employees report to managers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network Model"
        }), " = A subway map → stations (records) are connected by lines (sets) in multiple paths"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Object-Oriented Model"
        }), " = An interactive 3D model → each building is an object with properties and behaviors"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data Models Comparison Table"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ER Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Relational Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hierarchical Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Network Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Object-Oriented Model"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Introduced"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1976 (Peter Chen)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1970 (E.F. Codd)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1960s (IBM IMS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1971 (CODASYL DBTG)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1990s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Structure"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entities + Relationships"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tables (relations)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trees (parent-child)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graphs (records + sets)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Objects (class hierarchy)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Relationship Type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit (diamond)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit (foreign keys)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-to-many (parent-child)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many-to-many (sets with pointers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "References between objects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conceptual design tool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL (declarative)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Navigational (top-down)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Navigational (via set pointers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Method calls, OQL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (conceptual)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (schema changes easy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (rigid hierarchy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (polymorphism, inheritance)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A (design only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good with indexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent for hierarchical data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good for complex relationships"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good for complex objects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Redundancy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal (normalized)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (duplication in subtrees)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Independence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (intuitive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (simple tree)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (complicated pointer mgmt)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Adoption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal for DB design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dominant (95%+ of market)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy mainframe systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Niche (ObjectDB, Versant)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Modern Usage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database design tool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MySQL, PostgreSQL, Oracle, SQL Server"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMS, some mainframe apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare (some IDMS systems remain)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hibernate/JPA (ORM), NoSQL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query Language"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ER diagram notation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DL/I (Data Language/I)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CODASYL DML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OQL, JPA-QL"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ER Model Real-World Analogy: The Family Tree"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An ER model is like a family tree showing people (entities), their attributes (name, birth date), and relationships (married_to, parent_of). Just as a family tree makes clear who is connected to whom without worrying about how the information is stored, the ER model captures the real-world meaning of data independently of implementation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Relational Model Real-World Analogy: Spreadsheet with Cross-References"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A relational database is like a set of Excel spreadsheets where each sheet has a unique ID column. One sheet lists customers (each with a customer_id). Another lists orders (each order references a customer_id). To find all orders for a customer, you look up the customer_id in the orders sheet → no duplication of customer data needed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hierarchical Model Real-World Analogy: Company Org Chart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A hierarchical database is like an organization chart: CEO at the top, VPs below, directors below them, managers, then employees. To find an employee, you start at the top and navigate down the tree. If an employee works for two managers, you must duplicate the employee record (one in each subtree) → this is the model's main limitation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network Model Real-World Analogy: Subway Map"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A network database is like a subway map where stations (records) are connected by lines (sets). You can navigate from any station to any connected station. Unlike the hierarchical model's strict tree, the network model allows many-to-many relationships naturally → a route may connect multiple stations, and a station may be on multiple routes."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Object-Oriented Model Real-World Analogy: Lego Set"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An OO database is like a Lego set. Each piece is an object with properties (color, size) and behaviors (can_connect_to). You build complex structures by composing objects. Just as you can reuse a Lego wheel in a car, a boat, or a robot, OO databases support inheritance and polymorphism."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation: Data Models Comparison"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\n#include <vector>\n#include <string>\n#include <map>\n#include <memory>\n\n// ===== ER MODEL (conceptual → represented as metadata) =====\nstruct ERAttribute {\n    std::string name;\n    std::string type;\n    bool isKey;\n};\n\nstruct EREntity {\n    std::string name;\n    std::vector<ERAttribute> attributes;\n};\n\nstruct ERRelationship {\n    std::string name;\n    std::string entity1;\n    std::string entity2;\n    std::string type;  // \"1:1\", \"1:N\", \"M:N\"\n};\n\nclass ERModel {\npublic:\n    std::vector<EREntity> entities;\n    std::vector<ERRelationship> relationships;\n\n    void addEntity(const std::string& name, const std::vector<ERAttribute>& attrs) {\n        entities.push_back({name, attrs});\n        std::cout << \"[ER] Entity: \" << name << \" (\" << attrs.size() << \" attributes)\\n\";\n    }\n\n    void addRelationship(const std::string& name, const std::string& e1,\n                         const std::string& e2, const std::string& type) {\n        relationships.push_back({name, e1, e2, type});\n        std::cout << \"[ER] Relationship: \" << name << \" (\" << e1 << \" \" << type << \" \" << e2 << \")\\n\";\n    }\n\n    void print() {\n        std::cout << \"\\nER Model Diagram:\\n\";\n        for (const auto& e : entities) {\n            std::cout << \"  [\" << e.name << \"] \";\n            for (const auto& a : e.attributes)\n                std::cout << (a.isKey ? \"*\" : \"\") << a.name << \" \";\n            std::cout << \"\\n\";\n        }\n        for (const auto& r : relationships)\n            std::cout << \"  \" << r.entity1 << \" --(\" << r.type << \")--> \" << r.entity2 << \"\\n\";\n    }\n};\n\n// ===== RELATIONAL MODEL =====\nclass RelationalTable {\npublic:\n    std::string name;\n    std::vector<std::string> columns;\n    std::vector<std::map<std::string, std::string>> rows;\n    int pkColumn = -1;\n\n    void insert(const std::map<std::string, std::string>& row) {\n        rows.push_back(row);\n    }\n\n    void print() {\n        std::cout << \"\\n[\" << name << \"]\\n\";\n        for (const auto& c : columns) std::cout << c << \"\\t\";\n        std::cout << \"\\n\";\n        for (const auto& r : rows) {\n            for (const auto& c : columns)\n                std::cout << (r.find(c) != r.end() ? r.at(c) : \"NULL\") << \"\\t\";\n            std::cout << \"\\n\";\n        }\n    }\n};\n\n// ===== HIERARCHICAL MODEL =====\nstruct HierarchicalNode {\n    std::string name;\n    std::map<std::string, std::string> attributes;\n    std::vector<HierarchicalNode> children;\n\n    void print(int depth = 0) {\n        std::cout << std::string(depth * 2, ' ') << \"|- \" << name;\n        for (const auto& [k, v] : attributes)\n            std::cout << \" (\" << k << \"=\" << v << \")\";\n        std::cout << \"\\n\";\n        for (auto& child : children)\n            child.print(depth + 1);\n    }\n};\n\n// ===== NETWORK MODEL =====\nstruct NetworkRecord {\n    std::string name;\n    std::map<std::string, std::string> data;\n    std::vector<NetworkRecord*> connections;  // Sets (pointers)\n\n    void connect(NetworkRecord* other) {\n        connections.push_back(other);\n    }\n\n    void print(int depth = 0) {\n        std::cout << std::string(depth * 2, ' ') << \"[REC] \" << name << \"\\n\";\n    }\n};\n\nint main() {\n    std::cout << \"====== DATA MODELS COMPARISON ======\\n\\n\";\n\n    // ER Model\n    std::cout << \"--- ER Model (Conceptual Design) ---\\n\";\n    ERModel er;\n    er.addEntity(\"Student\", {{\"id\", \"INT\", true}, {\"name\", \"VARCHAR\", false}});\n    er.addEntity(\"Course\", {{\"code\", \"VARCHAR\", true}, {\"title\", \"VARCHAR\", false}});\n    er.addRelationship(\"Enrolls\", \"Student\", \"Course\", \"M:N\");\n    er.print();\n\n    // Relational Model\n    std::cout << \"\\n--- Relational Model ---\\n\";\n    RelationalTable students;\n    students.name = \"students\";\n    students.columns = {\"id\", \"name\"};\n    students.insert({{\"id\",\"1\"}, {\"name\",\"Alice\"}});\n    students.insert({{\"id\",\"2\"}, {\"name\",\"Bob\"}});\n    students.print();\n\n    // Hierarchical Model\n    std::cout << \"\\n--- Hierarchical Model (Tree) ---\\n\";\n    HierarchicalNode dept;\n    dept.name = \"Computer Science\";\n    dept.attributes = {{\"code\", \"CS\"}};\n    HierarchicalNode prof;\n    prof.name = \"Prof. Smith\";\n    prof.attributes = {{\"title\", \"Professor\"}};\n    HierarchicalNode course1;\n    course1.name = \"CS101\";\n    HierarchicalNode student;\n    student.name = \"Alice\";\n    course1.children.push_back(student);\n    prof.children.push_back(course1);\n    dept.children.push_back(prof);\n    dept.print();\n\n    // Network Model\n    std::cout << \"\\n--- Network Model (Graph with Sets) ---\\n\";\n    NetworkRecord student1{{\"Student1\", {{\"name\",\"Alice\"}}}};\n    NetworkRecord student2{{\"Student2\", {{\"name\",\"Bob\"}}}};\n    NetworkRecord course{{\"CS101\", {{\"title\",\"Databases\"}}}};\n    student1.connect(&course);\n    student2.connect(&course);\n    student1.print();\n    student2.print();\n    std::cout << \"  both connect to -> \";\n    course.print();\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation: Data Models Comparison"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from dataclasses import dataclass, field\nfrom typing import List, Dict, Optional\n\n\n# ===== ER MODEL =====\n@dataclass\nclass ERAttribute:\n    name: str\n    dtype: str\n    is_key: bool = False\n\n\n@dataclass\nclass EREntity:\n    name: str\n    attributes: List[ERAttribute]\n\n\n@dataclass\nclass ERRelationship:\n    name: str\n    entity1: str\n    entity2: str\n    rel_type: str  # \"1:1\", \"1:N\", \"M:N\"\n\n\nclass ERModelDemo:\n    def __init__(self):\n        self.entities: List[EREntity] = []\n        self.relationships: List[ERRelationship] = []\n\n    def add_entity(self, name: str, attrs: List[ERAttribute]) -> None:\n        self.entities.append(EREntity(name, attrs))\n        print(f\"[ER] Entity: {name} ({len(attrs)} attributes)\")\n\n    def add_relationship(self, name: str, e1: str, e2: str, rtype: str) -> None:\n        self.relationships.append(ERRelationship(name, e1, e2, rtype))\n        print(f\"[ER] Relationship: {name} ({e1} {rtype} {e2})\")\n\n    def print_model(self) -> None:\n        print(\"\\nER Model Diagram:\")\n        for e in self.entities:\n            attrs = \" \".join(f\"{'*' if a.is_key else ''}{a.name}\" for a in e.attributes)\n            print(f\"  [{e.name}] {attrs}\")\n        for r in self.relationships:\n            print(f\"  {r.entity1} --({r.rel_type})--> {r.entity2}\")\n\n\n# ===== RELATIONAL MODEL =====\n@dataclass\nclass RelationalModel:\n    name: str\n    columns: List[str]\n    rows: List[Dict[str, str]] = field(default_factory=list)\n\n    def insert(self, row: Dict[str, str]) -> None:\n        self.rows.append(row)\n\n    def print_table(self) -> None:\n        print(f\"\\n[{self.name}]\")\n        print(\"\\t\".join(self.columns))\n        for r in self.rows:\n            print(\"\\t\".join(r.get(c, \"NULL\") for c in self.columns))\n\n\n# ===== HIERARCHICAL MODEL =====\n@dataclass\nclass HierarchicalNode:\n    name: str\n    attributes: Dict[str, str] = field(default_factory=dict)\n    children: List['HierarchicalNode'] = field(default_factory=list)\n\n    def print_tree(self, depth: int = 0) -> None:\n        prefix = \"  \" * depth + \"|- \"\n        attrs = \" \".join(f\"({k}={v})\" for k, v in self.attributes.items())\n        print(f\"{prefix}{self.name} {attrs}\")\n        for child in self.children:\n            child.print_tree(depth + 1)\n\n\n# ===== NETWORK MODEL =====\n@dataclass\nclass NetworkRecord:\n    name: str\n    data: Dict[str, str] = field(default_factory=dict)\n    connections: List['NetworkRecord'] = field(default_factory=list)\n\n    def connect(self, other: 'NetworkRecord') -> None:\n        self.connections.append(other)\n\n    def print_record(self, depth: int = 0) -> None:\n        prefix = \"  \" * depth\n        print(f\"{prefix}[REC] {self.name} {self.data}\")\n\n\ndef demo_data_models():\n    print(\"====== DATA MODELS COMPARISON ======\\n\")\n\n    # ER Model\n    print(\"--- ER Model (Conceptual Design) ---\")\n    er = ERModelDemo()\n    er.add_entity(\"Student\", [ERAttribute(\"id\", \"INT\", True), ERAttribute(\"name\", \"VARCHAR\")])\n    er.add_entity(\"Course\", [ERAttribute(\"code\", \"VARCHAR\", True), ERAttribute(\"title\", \"VARCHAR\")])\n    er.add_relationship(\"Enrolls\", \"Student\", \"Course\", \"M:N\")\n    er.print_model()\n\n    # Relational\n    print(\"\\n--- Relational Model ---\")\n    students = RelationalModel(\"students\", [\"id\", \"name\"])\n    students.insert({\"id\": \"1\", \"name\": \"Alice\"})\n    students.insert({\"id\": \"2\", \"name\": \"Bob\"})\n    students.print_table()\n\n    # Hierarchical\n    print(\"\\n--- Hierarchical Model (Tree) ---\")\n    root = HierarchicalNode(\"University\", {\"type\": \"Institution\"})\n    dept = HierarchicalNode(\"CS Dept\", {\"code\": \"CS\"})\n    course = HierarchicalNode(\"CS101\", {\"title\": \"Databases\"})\n    student_h = HierarchicalNode(\"Alice\", {\"gpa\": \"3.8\"})\n    course.children.append(student_h)\n    dept.children.append(course)\n    root.children.append(dept)\n    root.print_tree()\n\n    # Network\n    print(\"\\n--- Network Model (Graph) ---\")\n    s1 = NetworkRecord(\"Student1\", {\"name\": \"Alice\"})\n    s2 = NetworkRecord(\"Student2\", {\"name\": \"Bob\"})\n    c1 = NetworkRecord(\"CS101\", {\"title\": \"Databases\"})\n    s1.connect(c1)\n    s2.connect(c1)\n    for s in [s1, s2]:\n        s.print_record()\n        print(\"  -> connected to:\", s.connections[0].name)\n\n\nif __name__ == \"__main__\":\n    demo_data_models()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18-dbms-architecture-components",
      children: "1.8 DBMS Architecture Components"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DBMS Module Interaction Diagram (Text)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User Query (SQL)\n     |\n[Query Processor]\n  |-- Parser (syntax check, parse tree)\n  |-- Validator (semantic check, catalog lookup)\n  |-- Optimizer (cost-based plan selection)\n  |-- Executor (run plan, call storage manager)\n     |\n[Storage Manager]\n  |-- Buffer Manager (cache pages in memory)\n  |-- File Manager (read/write OS files)\n  |-- Index Manager (B+ tree, hash index operations)\n     |\n[Transaction Manager]\n  |-- Lock Manager (acquire/release locks)\n  |-- Log Manager (write-ahead logging)\n  |-- Recovery Manager (redo/undo on restart)\n     |\n[Catalog Manager] -- stores metadata (data dictionary)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Component Responsibilities Table"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Primary Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Subcomponents"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Performance Impact"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query Processor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parse, validate, optimize, execute SQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parser, Validator, Optimizer, Executor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High → bad optimization = 1000x slower queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage Manager"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manage persistent data on disk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer Manager, File Manager, Index Manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High → buffer hit rate determines I/O cost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transaction Manager"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensure ACID properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lock Manager, Log Manager, Recovery Manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium → locking overhead, log write latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Catalog Manager"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintain metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Dictionary, System Tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low → mostly read cache, rare writes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19-database-system-architecture-types",
      children: "1.9 Database System Architecture Types"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Centralized"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single server, single database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, low cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single point of failure, limited scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small business, personal apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Client-Server"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Server manages data, clients run apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separation of concerns, scalable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network overhead, server bottleneck"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most modern applications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parallel (Shared Memory)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple CPUs share same memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast inter-processor communication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expensive, limited to 16-32 CPUs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-performance OLTP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parallel (Shared Disk)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple servers share same disk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good availability, load balancing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk bottleneck, complex cache coherency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data warehousing, failover clusters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parallel (Shared Nothing)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each node has own CPU, memory, disk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear scalability, high availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex to manage, data partitioning overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large-scale data (Google Bigtable, Cassandra)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Distributed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data across multiple geographic locations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local autonomy, fault tolerance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network latency, consistency challenges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global enterprise systems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "110-applications-in-real-systems",
      children: "1.10 Applications in Real Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "DBMS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Language"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Users"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MySQL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relational (RDBMS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C++"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ease of use, replication, InnoDB ACID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web applications, e-commerce"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Facebook, Twitter, Wikipedia"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PostgreSQL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object-Relational (ORDBMS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extensibility, advanced SQL, MVCC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex queries, geospatial, analytics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apple, Instagram, Reddit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Oracle Database"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relational (RDBMS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C, C++"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise features, RAC, partitioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large enterprises, banking, ERP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80%+ Fortune 500"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SQLite"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded Relational"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serverless, zero configuration, single file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile apps, embedded systems, IoT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android, iOS, Chrome, Firefox"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MongoDB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document (NoSQL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C++"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON documents, flexible schema, horizontal scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rapid prototyping, content management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "eBay, Adobe, LinkedIn"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How Each DBMS Implements Key Concepts"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MySQL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PostgreSQL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Oracle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQLite"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MongoDB"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage Engine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "InnoDB (default), MyISAM, etc."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom (heap-based + MVCC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Oracle Managed Files (OMF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single file (B-tree)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WiredTiger (LSM + B-tree)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row-level locking, MVCC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MVCC with snapshots"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MVCC with undo segments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reader-writer locks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document-level locking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Index Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B+ Tree, Hash, Full-text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B+ Tree, Hash, GiST, GIN, BRIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B+ Tree, Bitmap, Function-based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B+ Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-tree, Geospatial, TTL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Replication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Async, Semi-sync, Group"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Streaming, Logical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Guard, Active Data Guard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (backup only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replica Sets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partitioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RANGE, LIST, HASH, KEY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RANGE, LIST, HASH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RANGE, LIST, HASH, Composite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No built-in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sharding (Config Server + Shards)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SQL Compliance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~80% (no FULL JOIN, limited window)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~95% (most ANSI:2008 features)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~100% (full SQL standard)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~70% (no stored procs fully)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No SQL (MongoDB Query Language)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (InnoDB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (fully)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (fully)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (limited concurrency)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-document ACID (v4.0+)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "License"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPL (Community), Commercial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PostgreSQL License (open)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Commercial (expensive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public Domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSPL (Server Side Public License)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-interview-corner",
      children: "1.11 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1: What is the difference between DBMS and RDBMS?"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DBMS"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RDBMS"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Definition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General system for managing databases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBMS based on the relational model (E.F. Codd, 1970)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Model"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supports various models (hierarchical, network, relational)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strictly relational (tables, tuples, attributes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Relationships"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May not support relationships between data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enforces relationships via FOREIGN KEY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Normalization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normalization for reduced redundancy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ACID"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May not guarantee all four properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guarantees ACID (Atomicity, Consistency, Isolation, Durability)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Integrity Constraints"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (some may support none)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full support: PRIMARY KEY, FOREIGN KEY, CHECK, UNIQUE, NOT NULL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Redundancy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (normalized)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Codd's Rules"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May satisfy 0-5 of 12 rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Should satisfy at least 8 of 12 rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Examples"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File systems, XML databases, Excel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MySQL, PostgreSQL, Oracle, SQL Server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrency Control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal or none"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sophisticated locking and MVCC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query Language"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies (may not support SQL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL (standardized)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2: What is the difference between Schema and Instance?"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Schema"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Instance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Definition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The logical structure/blueprint of the database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The actual data in the database at a specific moment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Change Frequency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rarely changes (logical design)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changes continuously (INSERT/UPDATE/DELETE)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Analogy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The floor plan of a house"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The furniture and people in the house right now"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Representation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tables, columns, constraints, views"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actual row values, record counts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lifespan"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent (exists even with no data)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transient (changes with every transaction)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SQL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDL (CREATE, ALTER)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DML (SELECT, INSERT, UPDATE, DELETE)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "students(id INT PK, name VARCHAR)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{1, 'Alice'}, {2, 'Bob'}"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3: What are the three levels of data abstraction?"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Also Called"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Describes"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Who Cares"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Physical Level"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal Schema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How data is stored on disk (file paths, indexes, block sizes, compression)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBA, storage engineer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Logical Level"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conceptual Schema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What data is stored and relationships between data (table definitions, constraints)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBA, database designer, application developer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "View Level"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External Schema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How different users see the data (views with column/row restrictions)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End users, application developers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4: What is the difference between Primary Key and Unique Key?"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Primary Key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Unique Key"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Nullability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot be NULL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can be NULL (one NULL in SQL Server, multiple in Oracle)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Count per Table"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One per table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple per table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Clustered Index"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates clustered index by default"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates non-clustered index by default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Purpose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uniquely identifies each row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensures uniqueness of non-key columns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "student_id INT PRIMARY KEY"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "email VARCHAR(255) UNIQUE"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5: What is a candidate key?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "candidate key"
      }), " is a minimal set of attributes that can uniquely identify each tuple in a relation. There can be multiple candidate keys; one is selected as the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "primary key"
      }), ", the rest are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "alternate keys"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Example: In an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "employees"
      }), " table, both ", (0,jsx_runtime.jsx)(_components.code, {
        children: "employee_id"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "national_id"
      }), " can uniquely identify a row. Both are candidate keys. We choose ", (0,jsx_runtime.jsx)(_components.code, {
        children: "employee_id"
      }), " as the primary key; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "national_id"
      }), " becomes an alternate key."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q6: What is the difference between DROP, TRUNCATE, and DELETE?"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DROP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TRUNCATE"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DELETE"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Category"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DML"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "What It Does"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removes entire table structure + data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removes all rows, keeps structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removes specific rows (with WHERE)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very fast (metadata only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (deallocates pages)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (row-by-row, logged)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transaction Log"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal (page deallocation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full (each row logged)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rollback Possible"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (in most DBMS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (in most DBMS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (within transaction)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "WHERE Clause"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supported"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Triggers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fires DROP triggers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not fire triggers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fires DELETE triggers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Identity Reset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loses entire table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resets identity seed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not reset identity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space Recovery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full (table + indexes removed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full (pages deallocated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial (rows marked as deleted)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "DROP TABLE students;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "TRUNCATE TABLE students;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "DELETE FROM students WHERE id = 5;"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1.1: File System vs. DBMS → The Registration Problem"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A university uses three separate file systems:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "students.csv"
        }), " → managed by admissions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "courses.txt"
        }), " → managed by the registrar"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "enrollments.dat"
        }), " → managed by department administrators"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a student changes their name after marriage:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Admissions updates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "students.csv"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The registrar must remember to update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "courses.txt"
        }), " independently"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Department administrators update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enrollments.dat"
        }), " independently"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Results: The student's name becomes inconsistent across systems. Emails are sent to the wrong name. Transcripts use the old name. The DBMS solves this by storing the student name in exactly one place → any application that needs the name references the single source of truth."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1.2: Atomicity in Banking"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Without transaction support, this sequence can fail partially:\nUPDATE accounts SET balance = balance - 500 WHERE account_id = 'A123';\n-- CRASH OCCURS HERE\nUPDATE accounts SET balance = balance + 500 WHERE account_id = 'B456';\n\n-- With DBMS transaction support:\nBEGIN TRANSACTION;\n    UPDATE accounts SET balance = balance - 500 WHERE account_id = 'A123';\n    UPDATE accounts SET balance = balance + 500 WHERE account_id = 'B456';\nCOMMIT;\n-- Either both succeed or neither does (ROLLBACK restores A123's balance)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1.3: Three-Schema in a Hospital"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A hospital uses three-level architecture:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "External"
        }), ": Doctors see medical history (not billing). Accountants see billing (not medical history). Patients see appointment dates only."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conceptual"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "patients(id, name, dob, diagnosis, treatment, insurance, billing_code, amount_due)"
        }), " with constraints and relationships."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Physical"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "patients.ibd"
        }), " stored as InnoDB with B+ tree on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), ", compression on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "diagnosis"
        }), " column, replica on standby server."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1.4: DCL in a Banking Application"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sql",
        children: "-- Create roles\nCREATE ROLE teller;\nCREATE ROLE manager;\nCREATE ROLE auditor;\n\n-- Grant appropriate privileges\nGRANT SELECT, UPDATE ON accounts TO teller;\nGRANT ALL PRIVILEGES ON accounts TO manager;\nGRANT SELECT ON accounts TO auditor;\n\n-- Revoke when employee leaves\nREVOKE ALL PRIVILEGES ON accounts FROM former_employee;\nDROP USER former_employee;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-dbms-architecture-simulation-typescript",
      children: "1.12 DBMS Architecture Simulation (TypeScript)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Below is a TypeScript implementation that models the core DBMS architecture components — query processor, storage manager, transaction manager, and catalog manager — demonstrating how they interact to process a user query."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ============================================================\n// DBMS Architecture Simulator — TypeScript\n// ============================================================\n\ninterface ColumnSchema {\n  name: string;\n  type: 'INTEGER' | 'VARCHAR' | 'DECIMAL' | 'DATE';\n  isPrimaryKey: boolean;\n  isNullable: boolean;\n}\n\ninterface TableSchema {\n  name: string;\n  columns: ColumnSchema[];\n}\n\ninterface Row {\n  [column: string]: unknown;\n}\n\n// --- Catalog Manager ---\nclass CatalogManager {\n  private tables: Map<string, TableSchema> = new Map();\n\n  createTable(schema: TableSchema): void {\n    this.tables.set(schema.name, schema);\n    const colCount = schema.columns.length;\n    console.log('[Catalog] Created table \\'' + schema.name + '\\' with ' + colCount + ' columns');\n  }\n\n  getTableSchema(name: string): TableSchema | undefined {\n    return this.tables.get(name);\n  }\n\n  listTables(): string[] {\n    return Array.from(this.tables.keys());\n  }\n}\n\n// --- Storage Manager ---\nclass StorageManager {\n  private data: Map<string, Row[]> = new Map();\n  private catalog: CatalogManager;\n\n  constructor(catalog: CatalogManager) {\n    this.catalog = catalog;\n  }\n\n  insert(tableName: string, row: Row): boolean {\n    const schema = this.catalog.getTableSchema(tableName);\n    if (!schema) {\n      console.error('[Storage] Table \\'' + tableName + '\\' not found');\n      return false;\n    }\n    if (!this.data.has(tableName)) {\n      this.data.set(tableName, []);\n    }\n    this.data.get(tableName)!.push(row);\n    return true;\n  }\n\n  select(tableName: string, predicate?: (row: Row) => boolean): Row[] {\n    const rows = this.data.get(tableName) || [];\n    if (!predicate) return [...rows];\n    return rows.filter(predicate);\n  }\n\n  update(tableName: string, predicate: (row: Row) => boolean, updates: Partial<Row>): number {\n    const rows = this.data.get(tableName);\n    if (!rows) return 0;\n    let count = 0;\n    for (let i = 0; i < rows.length; i++) {\n      if (predicate(rows[i])) {\n        rows[i] = { ...rows[i], ...updates };\n        count++;\n      }\n    }\n    return count;\n  }\n\n  delete(tableName: string, predicate: (row: Row) => boolean): number {\n    const rows = this.data.get(tableName);\n    if (!rows) return 0;\n    const before = rows.length;\n    this.data.set(tableName, rows.filter(r => !predicate(r)));\n    return before - this.data.get(tableName)!.length;\n  }\n}\n\n// --- Transaction Manager ---\nclass Transaction {\n  private logs: string[] = [];\n  private storage: StorageManager;\n\n  constructor(storage: StorageManager) {\n    this.storage = storage;\n  }\n\n  begin(): void {\n    this.logs = [];\n    console.log('[TX] Transaction started');\n  }\n\n  insert(tableName: string, row: Row): boolean {\n    this.logs.push('INSERT INTO ' + tableName);\n    return this.storage.insert(tableName, row);\n  }\n\n  update(tableName: string, predicate: (row: Row) => boolean, updates: Partial<Row>): number {\n    this.logs.push('UPDATE ' + tableName);\n    return this.storage.update(tableName, predicate, updates);\n  }\n\n  delete(tableName: string, predicate: (row: Row) => boolean): number {\n    this.logs.push('DELETE FROM ' + tableName);\n    return this.storage.delete(tableName, predicate);\n  }\n\n  commit(): void {\n    const opCount = this.logs.length;\n    console.log('[TX] COMMIT \\u2014 ' + opCount + ' operations persisted');\n    this.logs = [];\n  }\n\n  rollback(): void {\n    const opCount = this.logs.length;\n    console.log('[TX] ROLLBACK \\u2014 undoing ' + opCount + ' operations');\n    this.logs = [];\n  }\n}\n\n// --- Query Processor ---\nclass QueryProcessor {\n  private storage: StorageManager;\n\n  constructor(storage: StorageManager) {\n    this.storage = storage;\n  }\n\n  executeSelect(tableName: string, whereClause?: (row: Row) => boolean): Row[] {\n    console.log('[QueryProcessor] Executing SELECT on \\'' + tableName + '\\'');\n    const result = this.storage.select(tableName, whereClause);\n    console.log('[QueryProcessor] Returned ' + result.length + ' rows');\n    return result;\n  }\n\n  explain(query: string): string {\n    return (\n      '\\nQuery Plan for: ' + query + '\\n' +\n      '\\u2514\\u2500\\u2500 Seq Scan on target_table  (cost=0.00..35.50 rows=10)\\n' +\n      '    \\u2514\\u2500\\u2500 Filter: (condition)\\n' +\n      '\\u2514\\u2500\\u2500 Projection (columns)\\n'\n    );\n  }\n}\n\n// --- Demo ---\nconst catalog = new CatalogManager();\nconst storage = new StorageManager(catalog);\nconst processor = new QueryProcessor(storage);\n\ncatalog.createTable({\n  name: 'employees',\n  columns: [\n    { name: 'id', type: 'INTEGER', isPrimaryKey: true, isNullable: false },\n    { name: 'name', type: 'VARCHAR', isPrimaryKey: false, isNullable: false },\n    { name: 'salary', type: 'DECIMAL', isPrimaryKey: false, isNullable: true },\n    { name: 'dept', type: 'VARCHAR', isPrimaryKey: false, isNullable: true },\n  ],\n});\n\nconst tx = new Transaction(storage);\ntx.begin();\ntx.insert('employees', { id: 1, name: 'Alice', salary: 75000, dept: 'Engineering' });\ntx.insert('employees', { id: 2, name: 'Bob', salary: 82000, dept: 'Engineering' });\ntx.insert('employees', { id: 3, name: 'Charlie', salary: 65000, dept: 'Sales' });\ntx.commit();\n\nconst result = processor.executeSelect(\n  'employees',\n  (row) => (row.salary as number) > 70000\n);\nconsole.log('High earners:', result);\nconsole.log(processor.explain('SELECT * FROM employees WHERE salary > 70000'));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mermaid Diagram: DBMS Query Flow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant User as Application / User\n    participant QP as Query Processor\n    participant Parser as Parser\n    participant Optimizer as Optimizer\n    participant Executor as Executor\n    participant SM as Storage Manager\n    participant TM as Transaction Manager\n    participant Disk as Disk Storage\n\n    User->>QP: SQL Query\n    QP->>Parser: Parse & Validate\n    Parser->>Optimizer: Parse Tree\n    Optimizer->>Optimizer: Generate Plans\n    Optimizer->>Executor: Best Execution Plan\n    Executor->>TM: BEGIN TX\n    TM->>SM: Read/Write Requests\n    SM->>Disk: Page I/O\n    Disk-->>SM: Data Pages\n    SM-->>TM: Results\n    TM->>TM: Write WAL Log\n    TM->>Executor: COMMIT / ROLLBACK\n    Executor-->>QP: Result Set\n    QP-->>User: Query Result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-practical-dbms-selection-guide",
      children: "1.13 Practical DBMS Selection Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Choosing the right DBMS depends on workload characteristics, consistency requirements, and operational constraints."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MySQL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PostgreSQL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Oracle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SQLite"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "MongoDB"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Read-heavy OLTP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (single-user)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Write-heavy OLTP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (InnoDB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complex analytics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Geospatial data"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic (5.7+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (PostGIS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (Spatial)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (2dsphere)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Full-text search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic (InnoDB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (tsvector)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (Oracle Text)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic (FTS5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (text index)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "JSON support"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (JSON type)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (JSONB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (JSON)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native (BSON)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ACID compliance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (InnoDB)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (fully)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (fully)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (limited)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (4.0+)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "High availability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Group Replication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Streaming Replication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data Guard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replica Sets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Horizontal scaling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sharding (MySQL Cluster)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Citus, Patroni"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RAC, Sharding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native sharding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cloud-native"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS RDS/Aurora, GCP Cloud SQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AWS RDS/Aurora, GCP Cloud SQL, Supabase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Oracle Cloud, AWS RDS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Atlas (MongoDB Cloud)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "License cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free (Community)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very expensive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free (Community)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Learning curve"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-chapter-quiz-questions",
      children: "Additional Chapter Quiz Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following is NOT a component of a DBMS?\na) Query Processor\nb) Storage Manager\nc) Compiler\nd) Transaction Manager"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The Write-Ahead Log (WAL) is primarily used to ensure:\na) Consistency\nb) Isolation\nc) Atomicity and Durability\nd) Security"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which type of data independence allows changing the storage structure without modifying the conceptual schema?\na) Logical data independence\nb) Physical data independence\nc) External data independence\nd) View data independence"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In a client-server DBMS architecture, the server is responsible for:\na) Running the user interface\nb) Managing data and processing queries\nc) Rendering graphics\nd) Compiling application code"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which DBMS architecture is best suited for global enterprise applications with geographically distributed teams?\na) Centralized\nb) Client-Server\nc) Distributed\nd) Parallel (Shared Memory)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The catalog manager in a DBMS stores:\na) Actual row data\nb) Metadata about database objects\nc) Index files\nd) Transaction logs"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A naive user typically interacts with a database through:\na) SQL queries\nb) Pre-built forms and applications\nc) Data definition language\nd) System catalogs"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following is an example of logical data independence?\na) Changing block size from 4KB to 8KB\nb) Splitting a table into two tables without breaking existing views\nc) Adding a new index to speed up queries\nd) Moving the database to a faster disk"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 13-c, 14-c, 15-b, 16-b, 17-c, 18-b, 19-b, 20-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "basic-continued",
      children: "Basic (continued)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "16",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Identify which of the following are advantages of DBMS over file systems: (a) Concurrent access with isolation, (b) Lower cost, (c) Declarative querying, (d) Automatic recovery, (e) Simpler to set up."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For each of the following scenarios, recommend a DBMS architecture (centralized, client-server, distributed, or parallel):"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A small pharmacy with five local terminals"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A multinational bank with branches in 50 countries"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A scientific research lab running complex data analysis on a supercomputer"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "An e-commerce website handling 10,000 concurrent users"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "intermediate-continued",
      children: "Intermediate (continued)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "18",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Draw the three-level architecture for a university database. For each level, list three specific elements that would appear at that level. Explain how adding a new column to the student table exemplifies logical data independence."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Given the following file system scenario: A hospital maintains patient records in three separate files \\u2014 admissions.txt, billing.csv, and prescriptions.dat. When a patient\\u2019s insurance information changes, it must be updated in all three files. Describe three specific problems this creates and explain how a DBMS would solve each one."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a TypeScript function that simulates a transaction manager. The function should accept a list of database operations and execute them atomically \\u2014 if any operation fails, all previous operations should be rolled back. Test it with a fund transfer scenario."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advanced-continued",
      children: "Advanced (continued)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "21",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design and implement a mini DBMS in TypeScript that includes:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A parser that accepts a subset of SQL (CREATE TABLE, INSERT, SELECT with WHERE)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A storage engine that supports in-memory tables with row-level locking"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A transaction manager that supports BEGIN, COMMIT, and ROLLBACK"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Demonstrate ACID properties with a concurrent transfer scenario"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compare and contrast the ACID guarantees of MongoDB (v4.0+) with PostgreSQL. Under what circumstances would you choose MongoDB over PostgreSQL, despite MongoDB\\u2019s more recent ACID implementation?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Research cloud-native database offerings (AWS Aurora, Google Cloud Spanner, Azure Cosmos DB). For each, explain:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "How they implement distribution and replication"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Their consistency model (strong vs. eventual)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "The storage architecture (shared-storage vs. shared-nothing)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A use case where each would be the best choice"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-pro-tips",
      children: "💡 Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Learn the three-level architecture early"
        }), " → it is the foundation for understanding data independence, a concept that appears in almost every database interview and design discussion."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Understand why file systems fail"
        }), " before learning how DBMS solves each problem → this gives you a framework for evaluating when a DBMS is (and isn't) the right tool."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The relational model dominates for a reason"
        }), " → its mathematical foundation (set theory, predicate logic) enables powerful optimizations that other models struggle to match."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ACID properties are not optional"
        }), " → any system claiming to be a true DBMS must guarantee all four; partial guarantees belong to NoSQL eventual-consistency systems."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DBAs are the unsung heroes"
        }), " → without proper indexing, backup strategy, and performance tuning, even the best-designed schema performs terribly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Know your SQL categories cold"
        }), " → interviewers love asking \"which category does CREATE TABLE belong to?\" (DDL) and \"can you ROLLBACK a TRUNCATE?\" (no, in most DBMS)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always ask \"with or without index?\""
        }), " when estimating query complexity → the difference between O(n) and O(log n) is the single most impactful optimization in databases."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1.1:"
        }), " A DBMS is library catalog software that manages, stores, retrieves, and secures data with ACID guarantees."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1.2:"
        }), " File systems lack concurrency, atomicity, integrity, security, and independence → a DBMS solves all five systematically."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1.3:"
        }), " The ANSI-SPARC three-level architecture decouples physical storage from logical structure from user views."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1.4:"
        }), " Physical data independence hides storage changes; logical data independence hides schema changes → both shield applications."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1.5:"
        }), " DDL defines structure, DML manipulates data, DCL controls access, and TCL manages transactions → the four SQL language pillars."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1.6:"
        }), " Database users range from naive (pre-built forms) to DBA (full control), each interacting at different abstraction levels."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1.7:"
        }), " Data models (ER, Relational, Hierarchical, Network, OO) provide different ways to structure and think about data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1.8:"
        }), " A DBMS is built from query processor, storage manager, transaction manager, and catalog manager interacting together."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1.9:"
        }), " Database architectures range from centralized single-server to massively parallel shared-nothing clusters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1.10:"
        }), " MySQL dominates web, PostgreSQL leads in extensibility, Oracle rules enterprise, SQLite owns embedded, MongoDB leads document stores."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-tables",
      children: "Concept Comparison Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "File System vs. DBMS (Full Comparison)"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "File System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DBMS"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Redundancy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High → data duplicated across files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal → single source of truth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrent Access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No built-in control → race conditions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACID transactions with concurrency control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Atomicity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No transaction support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BEGIN/COMMIT/ROLLBACK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Integrity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application-level only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative constraints (PK, FK, CHECK, UNIQUE)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File-level permissions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row/column-level GRANT/REVOKE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Independence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical and logical independence via three-level architecture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query Capability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual file parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declarative SQL with query optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recovery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual backups"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic recovery via WAL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scalability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited to single machine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel and distributed architectures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrency Unit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row/Tuple"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schema Flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rigid → format change breaks apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible → views insulate applications"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Metadata Management"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized data dictionary"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File System Problems"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redundancy, inconsistency, concurrent access, atomicity, integrity, security"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Three-Level Architecture"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical (storage), Conceptual (schema), External (views)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Independence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical: change storage without affecting schema. Logical: change schema without affecting views"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Models"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ER (conceptual), Relational (tables), Hierarchical (tree), Network (graph), OO (objects)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DBMS Components"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query processor, storage manager, transaction manager, catalog manager"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SQL Language Categories"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DDL (CREATE/ALTER/DROP), DML (SELECT/INSERT/UPDATE/DELETE), DCL (GRANT/REVOKE), TCL (BEGIN/COMMIT/ROLLBACK)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Database User Types"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Naive, application programmer, sophisticated, specialized, DBA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Architecture Types"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized, client-server, parallel (shared-memory/disk/nothing), distributed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interview Terms"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBMS vs RDBMS, Schema vs Instance, Data Abstraction (3 levels), Candidate Key, DROP vs TRUNCATE vs DELETE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Applies To"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Matters"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ACID Properties"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Banking, e-commerce, booking systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensures money transfers, orders, and reservations are never partially executed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Three-Level Architecture"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise applications with multiple user roles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allows different departments to see different data from the same database"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Independence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large-scale schema migrations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add new columns without breaking existing application queries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transaction Management"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inventory management, airline reservations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents overselling when multiple users purchase simultaneously"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DCL (GRANT/REVOKE)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Healthcare, finance, government systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enforces regulatory compliance (HIPAA, GDPR, SOX)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrency Control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Social media, ticketing systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handles millions of concurrent users reading/writing the same data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Models"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application design phase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choosing the right model affects scalability, query complexity, and developer productivity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the primary purpose of the conceptual level in the three-level architecture?\na) To define how data is stored on disk\nb) To describe what data is stored and the relationships among data\nc) To provide user-specific views\nd) To manage user permissions"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following is NOT a disadvantage of file-based systems?\na) Data redundancy\nb) Atomicity problems\nc) Efficient query optimization\nd) Weak security"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A database administrator is responsible for:\na) Writing application code\nb) Schema definition, tuning, backups, and access control\nc) Designing user interfaces\nd) Only running SELECT queries"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Physical data independence means:\na) Users can change the conceptual schema without affecting applications\nb) Changes to storage structures don't affect the conceptual schema\nc) Data is stored on multiple physical servers\nd) The database can run on any operating system"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which SQL statement belongs to DCL?\na) CREATE TABLE\nb) SELECT\nc) GRANT\nd) INSERT"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The Entity-Relationship model is best described as:\na) A physical storage model\nb) A high-level conceptual data model for database design\nc) An implementation-specific model\nd) A query language"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In a file-based system, if two travel agents book the last seat simultaneously, this is a problem of:\na) Data redundancy\nb) Atomicity\nc) Concurrent access\nd) Security"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which component of a DBMS is responsible for ensuring ACID properties?\na) Query processor\nb) Storage manager\nc) Transaction manager\nd) Catalog manager"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which DBMS language category does COMMIT belong to?\na) DDL\nb) DML\nc) DCL\nd) TCL"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following is an example of logical data independence?\na) Adding a B+ tree index without changing queries\nb) Adding a column to a table without breaking existing views\nc) Moving the database to a faster SSD\nd) Changing the block size from 4KB to 8KB"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the main advantage of the relational model over the hierarchical model?\na) Faster data access\nb) Support for many-to-many relationships without data duplication\nc) Lower storage requirements\nd) Better security"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which DBMS user type writes application code with embedded SQL?\na) Naive user\nb) Application programmer\nc) Sophisticated user\nd) DBA"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 1-b, 2-c, 3-b, 4-b, 5-c, 6-b, 7-c, 8-c, 9-d, 10-b, 11-b, 12-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DBMS"
        }), " overcomes file system limitations: redundancy, concurrent access problems, atomicity violations, and weak security."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A DBMS provides data definition, manipulation, security, transaction management, concurrency control, and recovery."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "three-level architecture"
        }), " (external, conceptual, physical) provides data independence."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data models"
        }), " structure how we think about and organize data; the relational model is dominant."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DDL"
        }), " defines structure, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DML"
        }), " manipulates data, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DCL"
        }), " controls access, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "TCL"
        }), " manages transactions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Different ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "user roles"
        }), " (naive, programmer, sophisticated, DBA) interact with the database at different levels."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Real-world ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DBMS implementations"
        }), " (MySQL, PostgreSQL, Oracle, SQLite, MongoDB) each make different trade-offs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview topics"
        }), " include DBMS vs RDBMS, schema vs instance, data abstraction levels, and SQL categories."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic",
      children: "Basic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "List four disadvantages of using file systems to store data compared to a DBMS."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the difference between logical and physical data independence? Give an example of each."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Identify which DBMS language (DDL, DML, DCL, or TCL) each SQL statement belongs to:\na) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CREATE INDEX idx_name ON employees(last_name);"
          }), "\nb) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "GRANT SELECT ON employees TO analyst;"
          }), "\nc) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "SELECT * FROM employees WHERE salary > 50000;"
          }), "\nd) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ALTER TABLE employees ADD COLUMN phone VARCHAR(15);"
          }), "\ne) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "BEGIN TRANSACTION;"
          }), "\nf) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ROLLBACK;"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Name the three levels of the ANSI-SPARC architecture and briefly describe what each level represents."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain the difference between schema and instance with an example."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intermediate",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain how a DBMS maintains data consistency when two users attempt to book the same flight seat simultaneously. What would happen in a file-based system?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "You are designing a database for a library system. The system needs to track books, members, and borrowings. Draw the three-level architecture:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "What would the external level look like for a librarian vs. a member?"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "What would be in the conceptual schema?"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "What physical details might be hidden?"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A hospital database stores patient records. Doctors should see medical history but not billing information. Accountants should see billing but not medical history. Explain how the three-level architecture supports this requirement."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compare the ER model and the relational model. How are they related? When would you use each?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a classification function (in pseudocode or Python) that takes a SQL statement and returns its category (DDL, DML, DCL, TCL). Test it with at least 8 different statements."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A bank's file-based system crashes while processing a fund transfer. The system had debited $1,000 from account X but had not yet credited account Y. Describe the problem and explain how a DBMS would prevent it. Write the SQL transaction that would ensure atomicity."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Research and compare the role of a Database Administrator (DBA) versus a Database Developer. What tasks overlap? What tasks are distinct? Present your findings in a short paragraph."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Design a simple conceptual schema for an e-commerce platform with customers, products, orders, and payments. List at least five constraints that the DBMS should enforce that would be difficult to maintain in a file-based system (e.g., \"An order must reference a valid customer\")."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a mini DBMS (in C++ or Python) that supports:"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DDL: CREATE TABLE with column types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DML: INSERT, SELECT with WHERE clause"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TCL: BEGIN, COMMIT, ROLLBACK (simulated with state snapshots)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Demonstrate that a crash between two UPDATE statements is rolled back correctly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "15",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the concept of data independence to a non-technical stakeholder using the restaurant or building analogy. Write a brief dialogue showing how you would explain why schema changes will not break their existing reports."
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