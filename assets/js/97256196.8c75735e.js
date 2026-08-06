"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[31274],{

/***/ 79440
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_oop_cpp_10_stl_algorithms_md_972_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-oop-cpp-10-stl-algorithms-md-972.json
const site_docs_courses_oop_cpp_10_stl_algorithms_md_972_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/oop-cpp/10-stl-algorithms","title":"Chapter 10: STL Algorithms — Master the C++ Standard Template Library","description":"Previous 11-file-io","source":"@site/docs/courses/oop-cpp/10-stl-algorithms.md","sourceDirName":"courses/oop-cpp","slug":"/oop-cpp/10-stl-algorithms","permalink":"/ai-engineering-journey/oop-cpp/10-stl-algorithms","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"id":"10-stl-algorithms","slug":"/oop-cpp/10-stl-algorithms","title":"Chapter 10: STL Algorithms — Master the C++ Standard Template Library","sidebar_label":"Chapter 10: STL Algorithms — Master the C++ Standard Template Library","sidebar_position":10},"sidebar":"coursesSidebar","previous":{"title":"Chapter 9: STL Containers -- In-Depth Mastery","permalink":"/ai-engineering-journey/oop-cpp/09-stl-containers"},"next":{"title":"Chapter 11: File I/O","permalink":"/ai-engineering-journey/oop-cpp/11-file-io"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/oop-cpp/10-stl-algorithms.md


const frontMatter = {
	id: '10-stl-algorithms',
	slug: '/oop-cpp/10-stl-algorithms',
	title: 'Chapter 10: STL Algorithms — Master the C++ Standard Template Library',
	sidebar_label: 'Chapter 10: STL Algorithms — Master the C++ Standard Template Library',
	sidebar_position: 10
};
const contentTitle = 'Chapter 10: STL Algorithms — Master the C++ Standard Template Library';

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
  "value": "10.1 The Algorithm-Container Separation",
  "id": "101-the-algorithm-container-separation",
  "level": 2
}, {
  "value": "How It Works",
  "id": "how-it-works",
  "level": 3
}, {
  "value": "Iterator Category Requirements",
  "id": "iterator-category-requirements",
  "level": 3
}, {
  "value": "Categories of STL Algorithms",
  "id": "categories-of-stl-algorithms",
  "level": 3
}, {
  "value": "10.2 Non-Modifying Algorithms",
  "id": "102-non-modifying-algorithms",
  "level": 2
}, {
  "value": "10.2.1 std::find — Linear Search",
  "id": "1021-stdfind--linear-search",
  "level": 3
}, {
  "value": "10.2.2 std::count and std::count_if — Count Occurrences",
  "id": "1022-stdcount-and-stdcount_if--count-occurrences",
  "level": 3
}, {
  "value": "10.2.3 std::equal — Range Equality",
  "id": "1023-stdequal--range-equality",
  "level": 3
}, {
  "value": "10.2.4 std::mismatch — First Differing Position",
  "id": "1024-stdmismatch--first-differing-position",
  "level": 3
}, {
  "value": "10.2.5 std::search — Subrange Search",
  "id": "1025-stdsearch--subrange-search",
  "level": 3
}, {
  "value": "Non-Modifying Algorithm Summary",
  "id": "non-modifying-algorithm-summary",
  "level": 3
}, {
  "value": "10.3 Modifying Algorithms",
  "id": "103-modifying-algorithms",
  "level": 2
}, {
  "value": "10.3.1 std::copy — Range Copy",
  "id": "1031-stdcopy--range-copy",
  "level": 3
}, {
  "value": "10.3.2 std::transform — Apply Function to Range",
  "id": "1032-stdtransform--apply-function-to-range",
  "level": 3
}, {
  "value": "10.3.3 std::replace and std::replace_if — Substitute Elements",
  "id": "1033-stdreplace-and-stdreplace_if--substitute-elements",
  "level": 3
}, {
  "value": "10.3.4 std::fill and std::fill_n — Assign Same Value",
  "id": "1034-stdfill-and-stdfill_n--assign-same-value",
  "level": 3
}, {
  "value": "10.3.5 std::generate and std::generate_n — Assign from Generator",
  "id": "1035-stdgenerate-and-stdgenerate_n--assign-from-generator",
  "level": 3
}, {
  "value": "10.3.6 std::remove and std::remove_if — The Erase-Remove Idiom",
  "id": "1036-stdremove-and-stdremove_if--the-erase-remove-idiom",
  "level": 3
}, {
  "value": "10.3.7 std::unique — Remove Consecutive Duplicates",
  "id": "1037-stdunique--remove-consecutive-duplicates",
  "level": 3
}, {
  "value": "Additional Modifying Algorithms",
  "id": "additional-modifying-algorithms",
  "level": 3
}, {
  "value": "10.4 Sorting Algorithms",
  "id": "104-sorting-algorithms",
  "level": 2
}, {
  "value": "10.4.1 std::sort — Default Sort (Introsort)",
  "id": "1041-stdsort--default-sort-introsort",
  "level": 3
}, {
  "value": "10.4.2 std::stable_sort — Stable Sort (MergeSort + InsertionSort)",
  "id": "1042-stdstable_sort--stable-sort-mergesort--insertionsort",
  "level": 3
}, {
  "value": "10.4.3 std::partial_sort — Top N in Order",
  "id": "1043-stdpartial_sort--top-n-in-order",
  "level": 3
}, {
  "value": "10.4.4 std::nth_element — Single Element in Correct Position",
  "id": "1044-stdnth_element--single-element-in-correct-position",
  "level": 3
}, {
  "value": "Dry Run — std::sort on {9, 3, 7, 1, 6, 2, 8, 4, 5, 0}",
  "id": "dry-run--stdsort-on-9-3-7-1-6-2-8-4-5-0",
  "level": 3
}, {
  "value": "Dry Run — std::nth_element for Median on {7, 2, 9, 4, 1, 8, 5, 3, 6}",
  "id": "dry-run--stdnth_element-for-median-on-7-2-9-4-1-8-5-3-6",
  "level": 3
}, {
  "value": "Sorting Algorithm Comparison",
  "id": "sorting-algorithm-comparison",
  "level": 3
}, {
  "value": "10.5 Binary Search Algorithms",
  "id": "105-binary-search-algorithms",
  "level": 2
}, {
  "value": "10.5.1 std::lower_bound — First Element Not Less Than Value",
  "id": "1051-stdlower_bound--first-element-not-less-than-value",
  "level": 3
}, {
  "value": "10.5.2 std::upper_bound — First Element Greater Than Value",
  "id": "1052-stdupper_bound--first-element-greater-than-value",
  "level": 3
}, {
  "value": "10.5.3 std::binary_search — Existence Check",
  "id": "1053-stdbinary_search--existence-check",
  "level": 3
}, {
  "value": "10.5.4 std::equal_range — Complete Range of Equal Values",
  "id": "1054-stdequal_range--complete-range-of-equal-values",
  "level": 3
}, {
  "value": "Dry Run — lower_bound(30) on {10, 20, 30, 30, 30, 40, 50}",
  "id": "dry-run--lower_bound30-on-10-20-30-30-30-40-50",
  "level": 3
}, {
  "value": "Binary Search Complexity Analysis",
  "id": "binary-search-complexity-analysis",
  "level": 3
}, {
  "value": "10.6 Set Operations (on Sorted Ranges)",
  "id": "106-set-operations-on-sorted-ranges",
  "level": 2
}, {
  "value": "10.6.1 std::merge — Merge Two Sorted Ranges",
  "id": "1061-stdmerge--merge-two-sorted-ranges",
  "level": 3
}, {
  "value": "10.6.2 std::set_union — Union of Two Sorted Ranges",
  "id": "1062-stdset_union--union-of-two-sorted-ranges",
  "level": 3
}, {
  "value": "10.6.3 std::set_intersection — Common Elements",
  "id": "1063-stdset_intersection--common-elements",
  "level": 3
}, {
  "value": "10.6.4 std::set_difference — Elements in First but Not Second",
  "id": "1064-stdset_difference--elements-in-first-but-not-second",
  "level": 3
}, {
  "value": "10.6.5 std::set_symmetric_difference — Elements in Either but Not Both",
  "id": "1065-stdset_symmetric_difference--elements-in-either-but-not-both",
  "level": 3
}, {
  "value": "Set Operations Complexity",
  "id": "set-operations-complexity",
  "level": 3
}, {
  "value": "10.7 Min / Max Algorithms",
  "id": "107-min--max-algorithms",
  "level": 2
}, {
  "value": "10.7.1 min, max, minmax — Single Pair Functions",
  "id": "1071-min-max-minmax--single-pair-functions",
  "level": 3
}, {
  "value": "10.7.2 min_element, max_element, minmax_element — Range Functions",
  "id": "1072-min_element-max_element-minmax_element--range-functions",
  "level": 3
}, {
  "value": "10.8 Numeric Algorithms",
  "id": "108-numeric-algorithms",
  "level": 2
}, {
  "value": "10.8.1 std::accumulate — Reduce (Fold Left)",
  "id": "1081-stdaccumulate--reduce-fold-left",
  "level": 3
}, {
  "value": "10.8.2 std::inner_product — Dot Product",
  "id": "1082-stdinner_product--dot-product",
  "level": 3
}, {
  "value": "10.8.3 std::partial_sum — Running Totals",
  "id": "1083-stdpartial_sum--running-totals",
  "level": 3
}, {
  "value": "10.8.4 std::adjacent_difference — Differences Between Neighbors",
  "id": "1084-stdadjacent_difference--differences-between-neighbors",
  "level": 3
}, {
  "value": "10.8.5 std::iota — Fill with Sequential Values (C++11)",
  "id": "1085-stdiota--fill-with-sequential-values-c11",
  "level": 3
}, {
  "value": "Numeric Algorithm Summary",
  "id": "numeric-algorithm-summary",
  "level": 3
}, {
  "value": "10.9 Lambdas with Algorithms",
  "id": "109-lambdas-with-algorithms",
  "level": 2
}, {
  "value": "10.9.1 Lambda Syntax",
  "id": "1091-lambda-syntax",
  "level": 3
}, {
  "value": "10.9.2 Capture Modes",
  "id": "1092-capture-modes",
  "level": 3
}, {
  "value": "10.9.3 Common Lambda + Algorithm Patterns",
  "id": "1093-common-lambda--algorithm-patterns",
  "level": 3
}, {
  "value": "10.10 Algorithm Categories — Comprehensive Comparison",
  "id": "1010-algorithm-categories--comprehensive-comparison",
  "level": 2
}, {
  "value": "Category Selection Guide",
  "id": "category-selection-guide",
  "level": 3
}, {
  "value": "10.11 sort vs stable_sort vs partial_sort vs nth_element",
  "id": "1011-sort-vs-stable_sort-vs-partial_sort-vs-nth_element",
  "level": 2
}, {
  "value": "Which to Choose?",
  "id": "which-to-choose",
  "level": 3
}, {
  "value": "Performance Insight (n = 10,000,000)",
  "id": "performance-insight-n--10000000",
  "level": 3
}, {
  "value": "10.12 Iterator Categories and Algorithm Requirements",
  "id": "1012-iterator-categories-and-algorithm-requirements",
  "level": 2
}, {
  "value": "The Five Iterator Categories",
  "id": "the-five-iterator-categories",
  "level": 3
}, {
  "value": "Algorithm to Iterator Category Mapping",
  "id": "algorithm-to-iterator-category-mapping",
  "level": 3
}, {
  "value": "10.13 Raw Loop vs STL Algorithm — A Systematic Comparison",
  "id": "1013-raw-loop-vs-stl-algorithm--a-systematic-comparison",
  "level": 2
}, {
  "value": "Example 1: Count Positive Elements",
  "id": "example-1-count-positive-elements",
  "level": 3
}, {
  "value": "Example 2: Find First Match",
  "id": "example-2-find-first-match",
  "level": 3
}, {
  "value": "Example 3: Transform All Elements",
  "id": "example-3-transform-all-elements",
  "level": 3
}, {
  "value": "When Raw Loops Are Acceptable",
  "id": "when-raw-loops-are-acceptable",
  "level": 3
}, {
  "value": "The Sean Parent Rule",
  "id": "the-sean-parent-rule",
  "level": 3
}, {
  "value": "10.14 Interview Corner",
  "id": "1014-interview-corner",
  "level": 2
}, {
  "value": "Q1: Why does std::sort fail to compile for std::list?",
  "id": "q1-why-does-stdsort-fail-to-compile-for-stdlist",
  "level": 3
}, {
  "value": "Q2: When would you use nth_element instead of sort + index?",
  "id": "q2-when-would-you-use-nth_element-instead-of-sort--index",
  "level": 3
}, {
  "value": "Q3: What is the erase-remove idiom and why is it necessary?",
  "id": "q3-what-is-the-erase-remove-idiom-and-why-is-it-necessary",
  "level": 3
}, {
  "value": "Q4: Compare lower_bound vs binary_search for finding values.",
  "id": "q4-compare-lower_bound-vs-binary_search-for-finding-values",
  "level": 3
}, {
  "value": "Q5: Why is std::accumulate initial value important for type deduction?",
  "id": "q5-why-is-stdaccumulate-initial-value-important-for-type-deduction",
  "level": 3
}, {
  "value": "Q6: How does std::sort avoid O(n^2) worst-case behavior?",
  "id": "q6-how-does-stdsort-avoid-on2-worst-case-behavior",
  "level": 3
}, {
  "value": "Q7: When is std::for_each preferred over a range-based for loop?",
  "id": "q7-when-is-stdfor_each-preferred-over-a-range-based-for-loop",
  "level": 3
}, {
  "value": "Q8: Explain why std::partial_sort(first, middle, last) is O(n log k).",
  "id": "q8-explain-why-stdpartial_sortfirst-middle-last-is-on-log-k",
  "level": 3
}, {
  "value": "10.15 Applications in Real Systems",
  "id": "1015-applications-in-real-systems",
  "level": 2
}, {
  "value": "std::sort in Databases",
  "id": "stdsort-in-databases",
  "level": 3
}, {
  "value": "std::transform in ETL Pipelines",
  "id": "stdtransform-in-etl-pipelines",
  "level": 3
}, {
  "value": "std::accumulate in Financial Calculations",
  "id": "stdaccumulate-in-financial-calculations",
  "level": 3
}, {
  "value": "std::set_intersection in Recommendation Systems",
  "id": "stdset_intersection-in-recommendation-systems",
  "level": 3
}, {
  "value": "Quick Reference Card",
  "id": "quick-reference-card",
  "level": 2
}, {
  "value": "Chapter Summary",
  "id": "chapter-summary",
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
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    algorithm: "algorithm",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    numeric: "numeric",
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
        id: "chapter-10-stl-algorithms--master-the-c-standard-template-library",
        children: "Chapter 10: STL Algorithms — Master the C++ Standard Template Library"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/09-stl-containers",
          children: "09-stl-containers"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/11-file-io",
          children: "11-file-io"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After studying this chapter, students will be able to:"
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
        href: "../../assets/images/lessons/oop-cpp/10-stl-algorithms/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/oop-cpp/10-stl-algorithms/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/oop-cpp/10-stl-algorithms/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/oop-cpp/10-stl-algorithms/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/oop-cpp/10-stl-algorithms/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/oop-cpp/10-stl-algorithms/visual-explanation.png",
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
        children: "Distinguish among the five STL algorithm categories (non-modifying, modifying, sorting, numeric, set operations)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply std::find, std::count, std::equal, std::mismatch, and std::search on real data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use std::copy, std::transform, std::replace, std::fill, std::generate, std::remove, and std::unique correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the introsort fallback chain and when to choose stable_sort / partial_sort / nth_element"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform binary search with lower_bound, upper_bound, and equal_range"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write lambda expressions and pass them into algorithms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze complexity with WHY behind every Big-O bound"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build composed algorithm pipelines for real-world tasks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Algo-Container Separation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterator design decouples algo from container"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "STL algorithms work with any container"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Non-Modifying"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithms that read but never write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe for const ranges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Modifying"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "copy, transform, replace mutate elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use back_inserter for output"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sorting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "introsort default, stable_sort when order matters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use sort() by default; partial_sort for top-N"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Binary Search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lower_bound/upper_bound return insertion points"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check sorted precondition!"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Set Operations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "merge, set_union, set_intersection work on sorted ranges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) on sorted input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Numeric"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "accumulate, inner_product in <numeric>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pair with lambdas for custom reductions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lambda + Algorithm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambdas are inline callables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capture [], parameters, body"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "mermaid flowchart LR     A[Algo-Container Separation] --> B[Non-Modifying]     A --> C[Modifying]     A --> D[Sorting]     A --> E[Binary Search]     A --> F[Set Operations]     A --> G[Numeric]     D --> H[Lambdas with Algorithms]     E --> H     F --> H     G --> H     H --> I[Algorithm Composition] "
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "101-the-algorithm-container-separation",
      children: "10.1 The Algorithm-Container Separation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["STL algorithms operate on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "iterator ranges"
      }), " rather than containers directly. This decoupling means a single algorithm works across \u000bector, list, deque, \u0007rray, and built-in arrays."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A chef (algorithm) does not care whether ingredients come from a farmer's market (vector), a supermarket (deque), or a home garden (list). The chef only needs a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tray"
      }), " (iterator) to receive each ingredient one at a time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-it-works",
      children: "How It Works"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Algorithms ask for a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "begin iterator"
        }), " and an ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "end iterator"
        }), " marking the half-open range [begin, end)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The algorithm advances the iterator from \begin toward end using ++it"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It reads/writes values through *it"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The container is never mentioned — only iterators"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "iterator-category-requirements",
      children: "Iterator Category Requirements"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Minimum Iterator Required"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Supported Containers"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "std::find"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "InputIterator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All containers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "std::sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RandomAccessIterator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vector, deque, array, string, C-array"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "std::reverse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BidirectionalIterator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vector, deque, list, array, string"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "std::copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "InputIterator / OutputIterator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All (source), All with inserter (dest)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "std::binary_search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ForwardIterator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vector, deque, array, string, C-array"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "`cpp\n#include <algorithm>\n#include <vector>\n#include <list>\n#include <iostream>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "int main() {\nstd::vector<int> vec = {3, 1, 4, 1, 5};\nstd::sort(vec.begin(), vec.end());   // OK: vector has random-access iterators"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "std::list&lt;int&gt; lst = {9, 2, 6, 5, 3};\n// std::sort(lst.begin(), lst.end());  // COMPILE ERROR: list has bidirectional iterators\nlst.sort();                           // list provides its own sort member\n\nfor (int x : vec) std::cout &lt;< x << ' ';  // 1 1 3 4 5\nreturn 0;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\n`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "1 1 3 4 5"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "categories-of-stl-algorithms",
      children: "Categories of STL Algorithms"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Non-Modifying"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read only; never change elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "find, count, equal, mismatch, search, for_each"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Modifying"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Change elements in-place or copy to output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "copy, transform, replace, fill, generate, remove, unique, reverse, rotate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sorting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reorder elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sort, stable_sort, partial_sort, nth_element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Binary Search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast search on sorted ranges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "binary_search, lower_bound, upper_bound, equal_range"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Set Operations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assumes sorted input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "merge, set_union, set_intersection, set_difference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Numeric"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arithmetic reductions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "accumulate, inner_product, partial_sum, iota"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Min/Max"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find extreme values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min, max, min_element, max_element, minmax_element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Heap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary heap operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "push_heap, pop_heap, make_heap, sort_heap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Split by predicate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "partition, stable_partition, partition_point"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "102-non-modifying-algorithms",
      children: "10.2 Non-Modifying Algorithms"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Non-modifying algorithms read elements through input iterators and never write. They are safe for const containers."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1021-stdfind--linear-search",
      children: "10.2.1 std::find — Linear Search"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " You dropped your keys somewhere in the house. You walk from room to room, check each table, and stop the moment you see them — exactly the position where they are."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start at \begin iterator"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare current element with target value using operator=="
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If equal — return iterator pointing to this element"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Otherwise — advance to next element"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If end is reached — return end (not found)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "function find(first, last, value):     while first != last:         if *first == value:             return first         ++first     return last"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      }), "\n`cpp\n#include <algorithm>\n#include <vector>\n#include <iostream>"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "int main() {\nstd::vector<int> numbers = {10, 20, 30, 40, 50, 30, 60};\nauto it = std::find(numbers.begin(), numbers.end(), 30);\nif (it != numbers.end())\nstd::cout << \"Found 30 at position: \"\n<< std::distance(numbers.begin(), it) << '\\n';\nelse\nstd::cout << \"30 not found\\n\";"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Find non-existent value\nit = std::find(numbers.begin(), numbers.end(), 99);\nstd::cout &lt;< \"99 found? \" << (it == numbers.end() ? \"No\" : \"Yes\") << '\\n';\nreturn 0;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\n`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Found 30 at position: 2 99 found? No"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n) — linear. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WHY:"
      }), " In the worst case, the target is at the last position or absent, requiring every element to be compared exactly once. Each element receives exactly one operator== call. No early termination can avoid the full scan when the element does not exist."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1022-stdcount-and-stdcount_if--count-occurrences",
      children: "10.2.2 std::count and std::count_if — Count Occurrences"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A supermarket cashier scans every item in your cart and counts how many are dairy products. She does not stop after finding one — she needs the total."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize counter c = 0"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Visit each element from \begin to end"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For count: if element == value, increment c"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For count_if: if predicate returns true, increment c"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return c"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      }), "\n`cpp\n#include <algorithm>\n#include <vector>\n#include <iostream>"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "int main() {\nstd::vector<int> scores = {85, 92, 78, 92, 88, 92, 70};\nint count_92 = std::count(scores.begin(), scores.end(), 92);\nstd::cout << \"92 appears \" << count_92 << \" times\\n\";"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int count_pass = std::count_if(scores.begin(), scores.end(),\n                                [](int s) { return s >= 80; });\nstd::cout &lt;< \"Passing scores (&gt;=80): \" << count_pass &lt;< '\\n';\nreturn 0;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\n`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "92 appears 3 times Passing scores (>=80): 5"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WHY:"
      }), " Every element must be inspected to count occurrences. Unlike \find which short-circuits, count must visit every element even if the answer is obvious early. The lambda predicate adds a small constant overhead per element."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1023-stdequal--range-equality",
      children: "10.2.3 std::equal — Range Equality"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Two chefs each prepare the same 5-course menu. You taste course 1 from both, course 2 from both, etc. If any pair differs, the meals are not equal."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Iterate both ranges simultaneously"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare element-wise using operator== (or custom predicate)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If any pair differs — return \false"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If all pairs match — return \true"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If first range is longer and no mismatch — UB unless second range is at least as long"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      }), "\n`cpp\n#include <algorithm>\n#include <vector>\n#include <iostream>"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "int main() {\nstd::vector<int> a = {1, 2, 3, 4, 5};\nstd::vector<int> b = {1, 2, 3, 4, 5};\nstd::vector<int> c = {1, 2, 0, 4, 5};"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "std::cout &lt;< std::boolalpha;\nstd::cout &lt;< \"a == b: \" << std::equal(a.begin(), a.end(), b.begin()) << '\\n';\nstd::cout &lt;< \"a == c: \" << std::equal(a.begin(), a.end(), c.begin()) << '\\n';\n\n// With predicate: approximate comparison\nstd::vector&lt;double&gt; x = {1.1, 2.2, 3.3};\nstd::vector&lt;double&gt; y = {1.2, 2.3, 3.4};\nbool approx = std::equal(x.begin(), x.end(), y.begin(),\n    [](double p, double q) { return std::abs(p - q) &lt; 0.2; });\nstd::cout &lt;< \"x approx == y: \" << approx << '\\n';\nreturn 0;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\n`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "a == b: true a == c: false x approx == y: true"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WHY:"
      }), " The algorithm compares the shorter prefix of both ranges element-by-element. At most min(len1, len2) comparisons occur. Each comparison is O(1)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1024-stdmismatch--first-differing-position",
      children: "10.2.4 std::mismatch — First Differing Position"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Two students submit the same homework. The TA lines them up side by side and moves down line by line. At the first line that differs, the TA stamps \"HERE!\" on both papers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Walk both ranges simultaneously"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare each corresponding pair"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When a mismatch is found — stop and return pair of iterators to that position"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If no mismatch — return {first_end, second_at_offset}"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      }), "\n`cpp\n#include <algorithm>\n#include <vector>\n#include <iostream>\n#include <string>"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "int main() {\nstd::vector<int> v1 = {1, 2, 3, 4, 5};\nstd::vector<int> v2 = {1, 2, 3, 0, 5};"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "auto [it1, it2] = std::mismatch(v1.begin(), v1.end(), v2.begin());\nif (it1 != v1.end())\n    std::cout &lt;< \"First mismatch: v1 has \" << *it1\n              << \", v2 has \" << *it2 &lt;< \" at position \"\n              << std::distance(v1.begin(), it1) &lt;< '\\n';\n\n// String example: DNA sequences\nstd::string dna1 = \"ATCGGCTA\";\nstd::string dna2 = \"ATCGTCTA\";\nauto [d1, d2] = std::mismatch(dna1.begin(), dna1.end(), dna2.begin());\nif (d1 != dna1.end())\n    std::cout &lt;< \"DNA differs at position \"\n              << std::distance(dna1.begin(), d1) &lt;< \": \"\n              << *d1 &lt;< \" vs \" << *d2 << '\\n';\nreturn 0;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\n`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "First mismatch: v1 has 4, v2 has 0 at position 3 DNA differs at position 4: G vs T"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WHY:"
      }), " In the worst case, the ranges match fully or the mismatch is at the last position. Every position up to the mismatch must be compared."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1025-stdsearch--subrange-search",
      children: "10.2.5 std::search — Subrange Search"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " You are scanning a long document for the phrase \"confidential\". You check position 0: 'c' matches, 'o' matches ... 'l' at position 10 fails. You slide to position 1: 'o' != 'c'. Position 2: 'n' != 'c'. Continue until you find a full match or reach the end."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each start position in [first1, last1 - (last2-first2))"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Attempt to match the entire subrange [first2, last2)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If full match — return iterator to the start position"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If no start position works — return last1"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      }), "\n`cpp\n#include <algorithm>\n#include <vector>\n#include <iostream>\n#include <string>"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "int main() {\nstd::string text = \"the quick brown fox jumps over the lazy dog\";\nstd::string pattern = \"brown\";"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "auto it = std::search(text.begin(), text.end(),\n                       pattern.begin(), pattern.end());\nif (it != text.end())\n    std::cout &lt;< \"Found '\" << pattern << \"' at position \"\n              << std::distance(text.begin(), it) &lt;< '\\n';\n\n// Using Boyer-Moore searcher (C++17)\nauto searcher = std::boyer_moore_searcher(pattern.begin(), pattern.end());\nit = std::search(text.begin(), text.end(), searcher);\nif (it != text.end())\n    std::cout &lt;< \"Boyer-Moore found at position \"\n              << std::distance(text.begin(), it) &lt;< '\\n';\nreturn 0;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\n`"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "Found 'brown' at position 10 Boyer-Moore found at position 10"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Naive: O(n × m) — worst case when mismatches occur late for every start position"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Boyer-Moore: O(n + m) — skips characters using bad-character and good-suffix heuristics"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WHY:"
        }), " Naive search re-compares the same characters many times. Boyer-Moore preprocesses the pattern to compute skip tables, allowing large jumps that reduce comparisons drastically. For short patterns on random text, the naive version is often faster due to lower overhead."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "non-modifying-algorithm-summary",
      children: "Non-Modifying Algorithm Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Returns"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stop-on-Find?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\find"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterator to first match"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\find_if"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterator to first predicate match"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "count / count_if"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "equal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (on mismatch)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mismatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pair of iterators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (on mismatch)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterator to subrange start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\u0007ll_of / \u0007ny_of /"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "one_of"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (short-circuits)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\for_each"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "void (C++17 returns function)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "103-modifying-algorithms",
      children: "10.3 Modifying Algorithms"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modifying algorithms change elements — either in-place (within the source range) or by writing to a separate output iterator."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1031-stdcopy--range-copy",
      children: "10.3.1 std::copy — Range Copy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A photocopier scans each page of a document and produces an identical copy on fresh paper. The original remains untouched."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "first"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Read ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*first"
        }), ", write to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*result"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Advance both iterators"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Repeat until ", (0,jsx_runtime.jsx)(_components.code, {
          children: "first == last"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return the final output iterator"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function copy(first, last, result):\n    while first != last:\n        *result = *first\n        ++result\n        ++first\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n#include <iterator>\n\nint main() {\n    std::vector<int> src = {1, 2, 3, 4, 5};\n    std::vector<int> dst;  // empty!\n\n    // ERROR: dst must have space — use back_inserter\n    // std::copy(src.begin(), src.end(), dst.begin());\n\n    // Correct: back_inserter calls push_back for each element\n    std::copy(src.begin(), src.end(), std::back_inserter(dst));\n\n    for (int x : dst) std::cout << x << ' ';  // 1 2 3 4 5\n    std::cout << '\\n';\n\n    // Copy only first 3 elements\n    std::vector<int> part;\n    std::copy_n(src.begin(), 3, std::back_inserter(part));\n    for (int x : part) std::cout << x << ' ';  // 1 2 3\n    std::cout << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1 2 3 4 5\n1 2 3\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WHY:"
      }), " Exactly n assignments execute — one per element. Each assignment is O(1). No comparisons are performed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1032-stdtransform--apply-function-to-range",
      children: "10.3.2 std::transform — Apply Function to Range"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A factory assembly line. Each raw part enters the machine, gets processed (drilled, painted, assembled), and exits as a finished product. The machine applies the same operation to every part."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each element in source range:"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply unary operation (or binary operation for two input ranges)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write the result to output iterator"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Advance all iterators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return output iterator"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function transform(first, last, result, unary_op):\n    while first != last:\n        *result = unary_op(*first)\n        ++result\n        ++first\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n#include <iterator>\n#include <cmath>\n\nint main() {\n    std::vector<double> celsius = {0.0, 10.0, 20.0, 30.0, 100.0};\n    std::vector<double> fahrenheit;\n\n    // Unary transform: Celsius -> Fahrenheit\n    std::transform(celsius.begin(), celsius.end(),\n                   std::back_inserter(fahrenheit),\n                   [](double c) { return c * 9.0 / 5.0 + 32.0; });\n\n    std::cout << \"C  ->  F\\n\";\n    for (size_t i = 0; i < celsius.size(); ++i)\n        std::cout << celsius[i] << \"  ->  \" << fahrenheit[i] << '\\n';\n\n    // Binary transform: element-wise sum of two vectors\n    std::vector<int> a = {1, 2, 3};\n    std::vector<int> b = {10, 20, 30};\n    std::vector<int> sum;\n\n    std::transform(a.begin(), a.end(), b.begin(),\n                   std::back_inserter(sum),\n                   [](int x, int y) { return x + y; });\n    // sum: 11 22 33\n\n    std::cout << \"\\nElement-wise sum: \";\n    for (int x : sum) std::cout << x << ' ';\n    std::cout << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "C  ->  F\n0  ->  32\n10  ->  50\n20  ->  68\n30  ->  86\n100  ->  212\n\nElement-wise sum: 11 22 33\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WHY:"
      }), " The operation is applied exactly n times. Each invocation of the unary/binary function is O(1) for simple arithmetic. The total grows linearly with input size."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1033-stdreplace-and-stdreplace_if--substitute-elements",
      children: "10.3.3 std::replace and std::replace_if — Substitute Elements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A recall notice: every copy of \"Batch 7A\" medicine on the shelf must be replaced with \"Batch 8B\". A pharmacist walks the aisle, replaces each match, and leaves everything else alone."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Iterate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[first, last)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For ", (0,jsx_runtime.jsx)(_components.code, {
          children: "replace"
        }), ": if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*it == old_value"
        }), ", assign ", (0,jsx_runtime.jsx)(_components.code, {
          children: "new_value"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For ", (0,jsx_runtime.jsx)(_components.code, {
          children: "replace_if"
        }), ": if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pred(*it)"
        }), " is true, assign ", (0,jsx_runtime.jsx)(_components.code, {
          children: "new_value"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Continue to end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n\nint main() {\n    std::vector<int> data = {1, 5, 2, 5, 3, 5, 4};\n    std::cout << \"Original: \";\n    for (int x : data) std::cout << x << ' ';\n\n    // Replace all 5s with 99\n    std::replace(data.begin(), data.end(), 5, 99);\n    std::cout << \"\\nAfter replace 5 -> 99: \";\n    for (int x : data) std::cout << x << ' ';\n\n    // Replace all values > 50 with 0\n    std::vector<int> scores = {30, 80, 45, 95, 20};\n    std::replace_if(scores.begin(), scores.end(),\n                    [](int s) { return s > 50; }, 0);\n    std::cout << \"\\nAfter replace_if > 50 -> 0: \";\n    for (int x : scores) std::cout << x << ' ';\n    std::cout << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Original: 1 5 2 5 3 5 4\nAfter replace 5 -> 99: 1 99 2 99 3 99 4\nAfter replace_if > 50 -> 0: 30 0 45 0 20\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WHY:"
      }), " Every element is visited exactly once. The comparison (or predicate evaluation) and conditional assignment are each O(1). No element is visited more than once."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1034-stdfill-and-stdfill_n--assign-same-value",
      children: "10.3.4 std::fill and std::fill_n — Assign Same Value"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A hotel cleaner puts a \"Welcome\" card on every pillow in a 50-room hotel. Same card, every room — no exceptions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n\nint main() {\n    std::vector<int> v(10);\n    std::fill(v.begin(), v.end(), 42);\n    std::cout << \"Fill with 42: \";\n    for (int x : v) std::cout << x << ' ';\n\n    // Fill first 5 elements with 99\n    std::fill_n(v.begin(), 5, 99);\n    std::cout << \"\\nAfter fill_n first 5 with 99: \";\n    for (int x : v) std::cout << x << ' ';\n    std::cout << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Fill with 42: 42 42 42 42 42 42 42 42 42 42\nAfter fill_n first 5 with 99: 99 99 99 99 99 42 42 42 42 42\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WHY:"
      }), " Exactly n assignments. Each assignment is O(1). No comparisons."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1035-stdgenerate-and-stdgenerate_n--assign-from-generator",
      children: "10.3.5 std::generate and std::generate_n — Assign from Generator"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A lottery machine spits out a random numbered ball for each participant. The machine (generator) produces a fresh value each time it is called."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n#include <random>\n\nint main() {\n    std::vector<int> v(10);\n\n    // Generate sequential values: 1, 2, 3, ...\n    int n = 1;\n    std::generate(v.begin(), v.end(), [&n]() { return n++; });\n    std::cout << \"Sequential: \";\n    for (int x : v) std::cout << x << ' ';\n\n    // Generate random values\n    std::vector<int> rand_vec(8);\n    std::mt19937 gen(std::random_device{}());\n    std::uniform_int_distribution<int> dist(1, 100);\n    std::generate(rand_vec.begin(), rand_vec.end(),\n                  [&]() { return dist(gen); });\n    std::cout << \"\\nRandom: \";\n    for (int x : rand_vec) std::cout << x << ' ';\n    std::cout << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (random seed-dependent):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sequential: 1 2 3 4 5 6 7 8 9 10\nRandom: 47 83 12 65 91 34 58 22\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WHY:"
      }), " The generator function is called exactly n times. Each call is O(1) for simple generators."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1036-stdremove-and-stdremove_if--the-erase-remove-idiom",
      children: "10.3.6 std::remove and std::remove_if — The Erase-Remove Idiom"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical Insight:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::remove"
      }), " does NOT erase elements. It ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "partitions"
      }), " the range so that kept elements are at the front, and returns an iterator to the new logical end. The removed elements remain at the tail in unspecified state."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A librarian goes through a shelf, pulls out damaged books, and shifts remaining books forward to close the gaps. The empty shelf space at the end is not removed — the librarian just marks where the good books end. A second person (erase) actually removes the empty shelf."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scan from left to right with two pointers: read and write"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When read points to a \"keep\" element, copy it to write position and advance write"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When read points to a \"remove\" element, skip it (do not advance write)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After full scan: return write iterator (new logical end)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "container.erase(new_end, container.end())"
        }), " to actually remove"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function remove(first, last, value):\n    write = first\n    read = first\n    while read != last:\n        if *read != value:\n            *write = *read\n            ++write\n        ++read\n    return write\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n\nint main() {\n    std::vector<int> data = {1, 2, 3, 2, 4, 2, 5};\n\n    // Step 1: remove (move non-2s to front)\n    auto new_end = std::remove(data.begin(), data.end(), 2);\n    std::cout << \"After remove (logical): \";\n    for (int x : data) std::cout << x << ' ';\n    std::cout << \"| new_end at position \" << std::distance(data.begin(), new_end);\n\n    // Step 2: erase (actually delete)\n    data.erase(new_end, data.end());\n    std::cout << \"\\nAfter erase: \";\n    for (int x : data) std::cout << x << ' ';\n\n    // remove_if: remove all odd numbers\n    std::vector<int> nums = {1, 2, 3, 4, 5, 6, 7, 8};\n    nums.erase(\n        std::remove_if(nums.begin(), nums.end(),\n                        [](int x) { return x % 2 != 0; }),\n        nums.end());\n    std::cout << \"\\nAfter remove_if odds: \";\n    for (int x : nums) std::cout << x << ' ';\n    std::cout << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "After remove (logical): 1 3 4 5 2 2 2 | new_end at position 4\nAfter erase: 1 3 4 5\nAfter remove_if odds: 2 4 6 8\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WHY:"
      }), " The algorithm performs exactly n reads and at most n writes (fewer when elements are removed). Each element is examined exactly once, and each kept element is move-assigned exactly once."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1037-stdunique--remove-consecutive-duplicates",
      children: "10.3.7 std::unique — Remove Consecutive Duplicates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " You have a sorted deck of cards: A♠ A♠ A♠ K♠ K♠ Q♠ Q♠ Q♠ Q♠. You go through and keep only the first card of each rank. The result: A♠ K♠ Q♠."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Important:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "unique"
      }), " only removes ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "consecutive"
      }), " duplicates. Always sort the range first unless duplicates are already adjacent."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n\nint main() {\n    std::vector<int> data = {1, 1, 2, 3, 3, 3, 4, 5, 5};\n\n    auto new_end = std::unique(data.begin(), data.end());\n    data.erase(new_end, data.end());\n    std::cout << \"Unique: \";\n    for (int x : data) std::cout << x << ' ';\n\n    // Common pattern: sort + unique + erase\n    std::vector<int> unsorted = {5, 3, 1, 3, 4, 1, 2, 5};\n    std::sort(unsorted.begin(), unsorted.end());\n    unsorted.erase(\n        std::unique(unsorted.begin(), unsorted.end()),\n        unsorted.end());\n    std::cout << \"\\nSort + unique: \";\n    for (int x : unsorted) std::cout << x << ' ';\n    std::cout << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Unique: 1 2 3 4 5\nSort + unique: 1 2 3 4 5\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WHY:"
      }), " Each element is compared with its predecessor exactly once. Linear scan with a single pass."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-modifying-algorithms",
      children: "Additional Modifying Algorithms"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code (reverse, rotate, random_shuffle):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n\nint main() {\n    std::vector<int> v = {1, 2, 3, 4, 5};\n\n    std::reverse(v.begin(), v.end());\n    std::cout << \"Reverse: \";\n    for (int x : v) std::cout << x << ' ';  // 5 4 3 2 1\n\n    std::rotate(v.begin(), v.begin() + 2, v.end());\n    std::cout << \"\\nRotate by 2: \";\n    for (int x : v) std::cout << x << ' ';  // 3 2 1 5 4\n\n    std::shuffle(v.begin(), v.end(), std::mt19937{std::random_device{}()});\n    std::cout << \"\\nShuffle: \";\n    for (int x : v) std::cout << x << ' ';\n    std::cout << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Reverse: 5 4 3 2 1\nRotate by 2: 3 2 1 5 4\nShuffle: 2 5 4 3 1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "reverse complexity:"
      }), " O(n) — n/2 swaps. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "rotate complexity:"
      }), " O(n) — 3 range reversals or gcd-based swaps. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "shuffle complexity:"
      }), " O(n) — Fisher-Yates, n-1 swaps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "104-sorting-algorithms",
      children: "10.4 Sorting Algorithms"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sorting rearranges elements into a specified order. The STL provides four sorting algorithms with different guarantees."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1041-stdsort--default-sort-introsort",
      children: "10.4.1 std::sort — Default Sort (Introsort)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A mailroom clerk needs to sort 10,000 letters by zip code. They use a fast hybrid approach: start with QuickSort for speed, but if the partitions become too unbalanced (danger of O(n^2)), switch to HeapSort. For very small piles, use InsertionSort."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm:"
      }), " Introsort = QuickSort + HeapSort + InsertionSort"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If subrange size < 16: use InsertionSort (fastest for tiny arrays)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Otherwise, median-of-three partition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recurse on both partitions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If recursion depth exceeds 2 × log₂(n): switch to HeapSort"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Final InsertionSort pass at the end (exploits near-sorted state)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n\nint main() {\n    std::vector<int> data = {9, 3, 7, 1, 6, 2, 8, 4, 5, 0};\n\n    std::sort(data.begin(), data.end());\n    std::cout << \"Ascending: \";\n    for (int x : data) std::cout << x << ' ';  // 0 1 2 3 4 5 6 7 8 9\n\n    std::sort(data.begin(), data.end(), std::greater<int>());\n    std::cout << \"\\nDescending: \";\n    for (int x : data) std::cout << x << ' ';  // 9 8 7 6 5 4 3 2 1 0\n\n    // Sort by absolute value\n    std::vector<int> vals = {-5, 3, -2, 8, -1, 4};\n    std::sort(vals.begin(), vals.end(),\n              [](int a, int b) { return std::abs(a) < std::abs(b); });\n    std::cout << \"\\nBy absolute: \";\n    for (int x : vals) std::cout << x << ' ';  // -1 -2 3 4 -5 8\n    std::cout << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Ascending: 0 1 2 3 4 5 6 7 8 9\nDescending: 9 8 7 6 5 4 3 2 1 0\nBy absolute: -1 -2 3 4 -5 8\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n log n) average, O(n log n) worst-case. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WHY:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "QuickSort partition is O(n) per level; log₂(n) levels give n log n"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HeapSort fallback guarantees O(n log n) worst-case — prevents QuickSort's O(n²) degenerate behavior"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "InsertionSort finishes in O(n) on nearly-sorted data (the final pass)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Median-of-three reduces probability of worst-case partition by 95%+"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1042-stdstable_sort--stable-sort-mergesort--insertionsort",
      children: "10.4.2 std::stable_sort — Stable Sort (MergeSort + InsertionSort)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Preserves relative order of equivalent elements."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Sorting students by grade. Two students both have an 'A'. Their original order (Alice before Bob) is preserved in the sorted output."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm:"
      }), " MergeSort with InsertionSort optimization for small runs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n#include <string>\n\nstruct Student {\n    std::string name;\n    int grade;\n};\n\nint main() {\n    std::vector<Student> students = {\n        {\"Alice\", 90}, {\"Bob\", 85}, {\"Charlie\", 90},\n        {\"Diana\", 85}, {\"Eve\", 95}\n    };\n\n    // Sort by grade, keep original order for equal grades\n    std::stable_sort(students.begin(), students.end(),\n        [](const Student& a, const Student& b) {\n            return a.grade < b.grade;\n        });\n\n    for (const auto& s : students)\n        std::cout << s.name << \": \" << s.grade << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Bob: 85\nDiana: 85\nAlice: 90\nCharlie: 90\nEve: 95\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Notice Bob comes before Diana (both 85), and Alice before Charlie (both 90) — original order preserved."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n log² n) if additional memory is unavailable; O(n log n) if buffer of size n is available. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WHY:"
      }), " MergeSort inherently preserves stability. The merge step requires comparing elements and placing the left-range element first when equal. The log² n penalty occurs when merge must fall back to in-place merging (no extra buffer)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1043-stdpartial_sort--top-n-in-order",
      children: "10.4.3 std::partial_sort — Top N in Order"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Places the top N elements in sorted order at the front. The rest are in unspecified order."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " A competition with 100 contestants. You only care about the top 3 podium finishers (1st, 2nd, 3rd). You do not care about the order of positions 4-100."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm:"
      }), " Heap-based. Build max-heap, repeatedly pop top into position."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n\nint main() {\n    std::vector<int> scores = {78, 92, 55, 88, 95, 67, 84, 91, 73, 89};\n\n    // Get top 3 in sorted order\n    std::partial_sort(scores.begin(), scores.begin() + 3, scores.end(),\n                      std::greater<int>());\n\n    std::cout << \"Top 3 scores: \";\n    for (int i = 0; i < 3; ++i)\n        std::cout << scores[i] << ' ';  // 95 92 91\n    std::cout << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Top 3 scores: 95 92 91\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n log k) where k = middle - first. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WHY:"
      }), " Building the initial heap is O(n). Each of the k top elements requires a pop-heap operation taking O(log n). Total: O(n + k log n) = O(n log k) when k << n. This is significantly faster than full sort when k is small."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1044-stdnth_element--single-element-in-correct-position",
      children: "10.4.4 std::nth_element — Single Element in Correct Position"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Places exactly one element (the nth) at its sorted position. All elements before are ≤ it; all after are ≥ it. Neither side is sorted."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " You want to know the median score in a class of 10,000. You do not need the entire sorted list — you just need the 5,000th score in its correct position."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "introselect"
      }), " — QuickSelect with median-of-three pivoting and recursion-depth fallback."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n\nint main() {\n    std::vector<int> v = {9, 3, 7, 1, 6, 2, 8, 4, 5, 0};\n\n    // Place the element at position 4 (5th smallest) in its sorted position\n    std::nth_element(v.begin(), v.begin() + 4, v.end());\n\n    std::cout << \"5th smallest element: \" << v[4] << '\\n';\n    std::cout << \"Array: \";\n    for (int x : v) std::cout << x << ' ';\n    // All elements before position 4 are <= v[4]; after are >= v[4]\n    std::cout << \"\\nBefore v[4]: \";\n    for (int i = 0; i < 4; ++i) std::cout << v[i] << ' ';\n    std::cout << \"\\nAfter v[4]: \";\n    for (size_t i = 5; i < v.size(); ++i) std::cout << v[i] << ' ';\n    std::cout << '\\n';\n\n    // Find median without full sort\n    std::vector<int> data = {7, 2, 9, 4, 1, 8, 5, 3, 6};\n    auto mid = data.begin() + data.size() / 2;\n    std::nth_element(data.begin(), mid, data.end());\n    std::cout << \"Median: \" << *mid << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "5th smallest element: 4\nArray: 0 1 3 2 4 5 7 8 6 9\nBefore v[4]: 0 1 3 2\nAfter v[4]: 5 7 8 6 9\nMedian: 5\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " Average O(n), worst-case O(n log n) with introselect fallback. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WHY:"
      }), " QuickSelect discards half the elements after each partition, creating a geometric series: n + n/2 + n/4 + ... = 2n = O(n). The introselect fallback prevents worst-case O(n²) by switching to a median-of-medians approach when recursion goes too deep."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--stdsort-on-9-3-7-1-6-2-8-4-5-0",
      children: "Dry Run — std::sort on {9, 3, 7, 1, 6, 2, 8, 4, 5, 0}"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Range"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pivot"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Partitioned State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,9]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[9, 3, 7, 1, 6, 2, 8, 4, 5, 0]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Median-of-3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,9]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 (mid)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[5, 3, 0, 1, 4, 2, 6, 8, 7, 9]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurse left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 (mid)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 0, 2, 5, 4, 3, ...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurse left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 1, ...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurse right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[2,5]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 (mid)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[..., 3, 4, 5, ...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurse right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[6,9]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 (mid)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[..., 7, 8, 9]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurse left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[6,6]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[..., 7, ...]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Final"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,9]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace explanation:"
      }), " At each recursion level, the pivot (median-of-3 from first, middle, last) splits the range. Left partition contains elements ≤ pivot; right contains ≥ pivot. Subranges smaller than 16 elements use InsertionSort directly. The recursion tree depth is log₂(10) ≈ 4 levels, each doing O(n) work — total O(n log n)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--stdnth_element-for-median-on-7-2-9-4-1-8-5-3-6",
      children: "Dry Run — std::nth_element for Median on {7, 2, 9, 4, 1, 8, 5, 3, 6}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Target: position 4 (0-indexed, the 5th element = median)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Range"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pivot"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "After Partition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "pivot_pos"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[0,8]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 (mid)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3,2,4,1, 5, 8,7,9,6]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target = 4, found!"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Done"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3,2,4,1, 5, 8,7,9,6]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v[4] = 5 is median"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After partition, elements before position 4: {3,2,4,1} ≤ 5. Elements after: {8,7,9,6} ≥ 5. Neither side is sorted, but the median is at the correct position."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sorting-algorithm-comparison",
      children: "Sorting Algorithm Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Guarantee"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stable?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sort"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default — general sorting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "stable_sort"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n) w/ buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equal-order matters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "partial_sort"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Top-k elements in order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "nth_element"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Median / percentile"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "list::sort"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting std::list"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "105-binary-search-algorithms",
      children: "10.5 Binary Search Algorithms"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Binary search algorithms require a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sorted range"
      }), ". They provide O(log n) lookup by repeatedly halving the search space."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1051-stdlower_bound--first-element-not-less-than-value",
      children: "10.5.1 std::lower_bound — First Element Not Less Than Value"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " You have a sorted stack of exam papers graded 0-100. You want the first paper with grade ≥ 75. You open the middle — 68. Discard left half. Open middle of right half — 82. Discard right half. Continue until you hold exactly the first paper ≥ 75."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lo = first, hi = last, count = distance(first, last)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While ", (0,jsx_runtime.jsx)(_components.code, {
          children: "count > 0"
        }), ":"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "step = count / 2"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mid = lo + step"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*mid < value"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lo = ++mid"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "count -= step + 1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Else: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "count = step"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lo"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function lower_bound(first, last, value):\n    count = distance(first, last)\n    while count > 0:\n        step = count / 2\n        mid = first + step\n        if *mid < value:\n            first = ++mid\n            count -= step + 1\n        else:\n            count = step\n    return first\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n\nint main() {\n    std::vector<int> data = {10, 20, 30, 30, 30, 40, 50};\n\n    // First position where 30 could be inserted without breaking sort\n    auto it = std::lower_bound(data.begin(), data.end(), 30);\n    std::cout << \"lower_bound(30) at position: \"\n              << std::distance(data.begin(), it)\n              << \" (value: \" << *it << \")\\n\";\n\n    // First position >= 35\n    it = std::lower_bound(data.begin(), data.end(), 35);\n    std::cout << \"lower_bound(35) at position: \"\n              << std::distance(data.begin(), it)\n              << \" (value: \" << *it << \")\\n\";\n\n    // First position >= 100 (beyond end)\n    it = std::lower_bound(data.begin(), data.end(), 100);\n    if (it == data.end())\n        std::cout << \"lower_bound(100) = end (all elements < 100)\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "lower_bound(30) at position: 2 (value: 30)\nlower_bound(35) at position: 5 (value: 40)\nlower_bound(100) = end (all elements < 100)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1052-stdupper_bound--first-element-greater-than-value",
      children: "10.5.2 std::upper_bound — First Element Greater Than Value"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Same exam papers. You want the first paper with grade > 75. Binary search again, but this time the comparison is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mid <= value"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n\nint main() {\n    std::vector<int> data = {10, 20, 30, 30, 30, 40, 50};\n\n    // First position > 30\n    auto it = std::upper_bound(data.begin(), data.end(), 30);\n    std::cout << \"upper_bound(30) at position: \"\n              << std::distance(data.begin(), it)\n              << \" (value: \" << *it << \")\\n\";\n\n    // Range of all 30s = [lower_bound, upper_bound)\n    auto lo = std::lower_bound(data.begin(), data.end(), 30);\n    auto hi = std::upper_bound(data.begin(), data.end(), 30);\n    std::cout << \"Occurrences of 30: \"\n              << std::distance(lo, hi) << '\\n';\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "upper_bound(30) at position: 5 (value: 40)\nOccurrences of 30: 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1053-stdbinary_search--existence-check",
      children: "10.5.3 std::binary_search — Existence Check"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Simply returns whether the value exists in sorted range."
      }), " Implemented as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*lower_bound(...) == value"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n\nint main() {\n    std::vector<int> data = {1, 3, 5, 7, 9, 11, 13};\n\n    bool found = std::binary_search(data.begin(), data.end(), 7);\n    std::cout << \"7 exists: \" << std::boolalpha << found << '\\n';\n\n    found = std::binary_search(data.begin(), data.end(), 8);\n    std::cout << \"8 exists: \" << found << '\\n';\n\n    // Always sort before binary_search!\n    std::vector<int> unsorted = {9, 1, 7, 3, 5};\n    std::sort(unsorted.begin(), unsorted.end());  // MUST sort first\n    found = std::binary_search(unsorted.begin(), unsorted.end(), 7);\n    std::cout << \"7 in unsorted (after sort): \" << found << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "7 exists: true\n8 exists: false\n7 in unsorted (after sort): true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1054-stdequal_range--complete-range-of-equal-values",
      children: "10.5.4 std::equal_range — Complete Range of Equal Values"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Returns a pair of iterators: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{lower_bound, upper_bound}"
        }), " in one call."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n\nint main() {\n    std::vector<int> data = {10, 20, 20, 20, 30, 40, 40, 50};\n\n    auto [lo, hi] = std::equal_range(data.begin(), data.end(), 20);\n    std::cout << \"Range of 20: [\" << std::distance(data.begin(), lo)\n              << \", \" << std::distance(data.begin(), hi) << \")\\n\";\n    std::cout << \"Count of 20: \" << std::distance(lo, hi) << '\\n';\n\n    for (auto it = lo; it != hi; ++it)\n        std::cout << *it << ' ';\n    std::cout << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Range of 20: [1, 4)\nCount of 20: 3\n20 20 20\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--lower_bound30-on-10-20-30-30-30-40-50",
      children: "Dry Run — lower_bound(30) on {10, 20, 30, 30, 30, 40, 50}"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iteration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "first"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "count"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "mid"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "*mid"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "*mid < 30?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pos 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pos 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "count = 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pos 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pos 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "first = pos 2, count = 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pos 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pos 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "count = 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "End"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pos 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return pos 2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Iterator to position 2 (first 30). Only 3 comparisons needed for n=7."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "binary-search-complexity-analysis",
      children: "Binary Search Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Comparisons"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "WHY"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "lower_bound"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⌈log₂(n+1)⌉"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each iteration halves the range; at most log₂(n) iterations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "upper_bound"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⌈log₂(n+1)⌉"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identical loop structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "binary_search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⌈log₂(n+1)⌉"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delegates to lower_bound + one equality check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "equal_range"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 × log₂(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finds lower and upper bounds — ~2× work of single bound"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linear search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare with every element"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "WHY O(log n) is powerful:"
      }), " For n = 1,000,000, binary search needs at most 20 comparisons. Linear search needs up to 1,000,000 comparisons — 50,000× more."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "106-set-operations-on-sorted-ranges",
      children: "10.6 Set Operations (on Sorted Ranges)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Set operations require ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sorted input"
      }), " and produce ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sorted output"
      }), ". They operate on arbitrary ranges, not just std::set."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1061-stdmerge--merge-two-sorted-ranges",
      children: "10.6.1 std::merge — Merge Two Sorted Ranges"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Two sorted piles of numbered cards. You compare the top card of each pile, take the smaller one, and place it on the output pile. Repeat until both piles are empty."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n#include <iterator>\n\nint main() {\n    std::vector<int> a = {1, 3, 5, 7, 9};\n    std::vector<int> b = {2, 4, 6, 8, 10};\n    std::vector<int> merged;\n\n    std::merge(a.begin(), a.end(), b.begin(), b.end(),\n               std::back_inserter(merged));\n\n    std::cout << \"Merged: \";\n    for (int x : merged) std::cout << x << ' ';  // 1 2 3 4 5 6 7 8 9 10\n    std::cout << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Merged: 1 2 3 4 5 6 7 8 9 10\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n + m). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WHY:"
      }), " Each element from both ranges is visited exactly once. n + m total comparisons."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1062-stdset_union--union-of-two-sorted-ranges",
      children: "10.6.2 std::set_union — Union of Two Sorted Ranges"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n#include <iterator>\n\nint main() {\n    std::vector<int> a = {1, 2, 3, 4, 5};\n    std::vector<int> b = {3, 4, 5, 6, 7};\n    std::vector<int> result;\n\n    std::set_union(a.begin(), a.end(), b.begin(), b.end(),\n                   std::back_inserter(result));\n    // Result: 1 2 3 4 5 6 7\n    std::cout << \"Union: \";\n    for (int x : result) std::cout << x << ' ';\n    std::cout << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Union: 1 2 3 4 5 6 7\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1063-stdset_intersection--common-elements",
      children: "10.6.3 std::set_intersection — Common Elements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n#include <iterator>\n\nint main() {\n    std::vector<int> a = {1, 2, 3, 4, 5};\n    std::vector<int> b = {3, 4, 5, 6, 7};\n    std::vector<int> result;\n\n    std::set_intersection(a.begin(), a.end(), b.begin(), b.end(),\n                          std::back_inserter(result));\n    // Result: 3 4 5\n    std::cout << \"Intersection: \";\n    for (int x : result) std::cout << x << ' ';\n    std::cout << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Intersection: 3 4 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1064-stdset_difference--elements-in-first-but-not-second",
      children: "10.6.4 std::set_difference — Elements in First but Not Second"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n#include <iterator>\n\nint main() {\n    std::vector<int> a = {1, 2, 3, 4, 5};\n    std::vector<int> b = {3, 4, 5, 6, 7};\n    std::vector<int> result;\n\n    std::set_difference(a.begin(), a.end(), b.begin(), b.end(),\n                        std::back_inserter(result));\n    // Result: 1 2\n    std::cout << \"Difference: \";\n    for (int x : result) std::cout << x << ' ';\n    std::cout << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Difference: 1 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1065-stdset_symmetric_difference--elements-in-either-but-not-both",
      children: "10.6.5 std::set_symmetric_difference — Elements in Either but Not Both"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n#include <iterator>\n\nint main() {\n    std::vector<int> a = {1, 2, 3, 4, 5};\n    std::vector<int> b = {3, 4, 5, 6, 7};\n    std::vector<int> result;\n\n    std::set_symmetric_difference(a.begin(), a.end(), b.begin(), b.end(),\n                                   std::back_inserter(result));\n    // Result: 1 2 6 7\n    std::cout << \"Symmetric difference: \";\n    for (int x : result) std::cout << x << ' ';\n    std::cout << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Symmetric difference: 1 2 6 7\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-operations-complexity",
      children: "Set Operations Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "WHY"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "merge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single pass through both ranges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "set_union"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single pass; elements in both appear once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "set_intersection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only elements that match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "set_difference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Walk first; skip if in second"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "set_symmetric_difference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single pass, XOR logic"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "107-min--max-algorithms",
      children: "10.7 Min / Max Algorithms"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1071-min-max-minmax--single-pair-functions",
      children: "10.7.1 min, max, minmax — Single Pair Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <iostream>\n\nint main() {\n    int a = 10, b = 20;\n\n    std::cout << \"min(10, 20): \" << std::min(a, b) << '\\n';  // 10\n    std::cout << \"max(10, 20): \" << std::max(a, b) << '\\n';  // 20\n\n    auto [lo, hi] = std::minmax(a, b);\n    std::cout << \"minmax: (\" << lo << \", \" << hi << \")\\n\";    // (10, 20)\n\n    // With custom comparator\n    std::cout << \"min by abs: \"\n              << std::min(-5, 3, [](int x, int y) {\n                     return std::abs(x) < std::abs(y);\n                 }) << '\\n';  // 3\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "min(10, 20): 10\nmax(10, 20): 20\nminmax: (10, 20)\nmin by abs: 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1072-min_element-max_element-minmax_element--range-functions",
      children: "10.7.2 min_element, max_element, minmax_element — Range Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n#include <string>\n\nint main() {\n    std::vector<int> scores = {78, 92, 55, 88, 95, 67};\n\n    auto min_it = std::min_element(scores.begin(), scores.end());\n    auto max_it = std::max_element(scores.begin(), scores.end());\n    std::cout << \"Min: \" << *min_it << \" at position \"\n              << std::distance(scores.begin(), min_it) << '\\n';\n    std::cout << \"Max: \" << *max_it << \" at position \"\n              << std::distance(scores.begin(), max_it) << '\\n';\n\n    // minmax_element = single pass for both\n    auto [lo, hi] = std::minmax_element(scores.begin(), scores.end());\n    std::cout << \"Minmax: \" << *lo << \", \" << *hi << '\\n';\n\n    // Custom comparison: longest string\n    std::vector<std::string> words = {\"cat\", \"elephant\", \"dog\", \"hippopotamus\"};\n    auto longest = std::max_element(words.begin(), words.end(),\n        [](const std::string& a, const std::string& b) {\n            return a.length() < b.length();\n        });\n    std::cout << \"Longest word: \" << *longest << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Min: 55 at position 2\nMax: 95 at position 4\nMinmax: 55, 95\nLongest word: hippopotamus\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " min_element: O(n). max_element: O(n). minmax_element: O(3n/2) — uses 3 comparisons per 2 elements, 25% faster than separate min + max calls."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "108-numeric-algorithms",
      children: "10.8 Numeric Algorithms"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Defined in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<numeric>"
      }), ". These algorithms perform arithmetic reductions and transformations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1081-stdaccumulate--reduce-fold-left",
      children: "10.8.1 std::accumulate — Reduce (Fold Left)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " You have a bucket (initial value 0). You pick up each number from the conveyor belt and add it to the bucket. At the end, the bucket contains the sum."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Initialize ", (0,jsx_runtime.jsx)(_components.code, {
          children: "result = init"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each element ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[first, last)"
        }), ":"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "result = result + x"
        }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "op(result, x)"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "result"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <numeric>\n#include <vector>\n#include <iostream>\n\nint main() {\n    std::vector<int> data = {1, 2, 3, 4, 5};\n\n    // Sum\n    int sum = std::accumulate(data.begin(), data.end(), 0);\n    std::cout << \"Sum: \" << sum << '\\n';  // 15\n\n    // Product (custom operation)\n    int product = std::accumulate(data.begin(), data.end(), 1,\n                                   std::multiplies<int>());\n    std::cout << \"Product: \" << product << '\\n';  // 120\n\n    // String concatenation\n    std::vector<std::string> words = {\"Hello\", \" \", \"World\", \"!\"};\n    std::string sentence = std::accumulate(words.begin(), words.end(),\n                                            std::string{});\n    std::cout << \"Concatenated: \" << sentence << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sum: 15\nProduct: 120\nConcatenated: Hello World!\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WHY:"
      }), " Exactly n operations, each O(1). The initial value type determines the result type (important for preventing overflow!)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1082-stdinner_product--dot-product",
      children: "10.8.2 std::inner_product — Dot Product"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Analogy:"
      }), " Two vectors of prices and quantities. The total order value is price[0]×qty[0] + price[1]×qty[1] + ..."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <numeric>\n#include <vector>\n#include <iostream>\n\nint main() {\n    std::vector<int> prices = {10, 20, 30};\n    std::vector<int> quantities = {3, 2, 1};\n\n    int total = std::inner_product(prices.begin(), prices.end(),\n                                    quantities.begin(), 0);\n    std::cout << \"Total order: \" << total << '\\n';\n    // 10*3 + 20*2 + 30*1 = 30 + 40 + 30 = 100\n\n    // Custom: count matching elements\n    std::vector<int> a = {1, 2, 3, 4, 5};\n    std::vector<int> b = {1, 0, 3, 0, 5};\n    int matches = std::inner_product(a.begin(), a.end(), b.begin(), 0,\n        std::plus<int>(),                       // combine: add\n        [](int x, int y) { return x == y ? 1 : 0; }  // pair: compare\n    );\n    std::cout << \"Matches: \" << matches << '\\n';  // 3\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Total order: 100\nMatches: 3\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WHY:"
      }), " n pair operations + n combine operations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1083-stdpartial_sum--running-totals",
      children: "10.8.3 std::partial_sum — Running Totals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <numeric>\n#include <vector>\n#include <iostream>\n#include <iterator>\n\nint main() {\n    std::vector<int> data = {1, 2, 3, 4, 5};\n    std::vector<int> running;\n\n    std::partial_sum(data.begin(), data.end(),\n                     std::back_inserter(running));\n    std::cout << \"Partial sums: \";\n    for (int x : running) std::cout << x << ' ';  // 1 3 6 10 15\n\n    // Running product\n    std::vector<int> products;\n    std::partial_sum(data.begin(), data.end(),\n                     std::back_inserter(products),\n                     std::multiplies<int>());\n    std::cout << \"\\nPartial products: \";\n    for (int x : products) std::cout << x << ' ';  // 1 2 6 24 120\n    std::cout << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Partial sums: 1 3 6 10 15\nPartial products: 1 2 6 24 120\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WHY:"
      }), " n - 1 binary operations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1084-stdadjacent_difference--differences-between-neighbors",
      children: "10.8.4 std::adjacent_difference — Differences Between Neighbors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <numeric>\n#include <vector>\n#include <iostream>\n#include <iterator>\n\nint main() {\n    std::vector<int> data = {1, 3, 6, 10, 15};\n    std::vector<int> diffs;\n\n    std::adjacent_difference(data.begin(), data.end(),\n                              std::back_inserter(diffs));\n    std::cout << \"Adjacent differences: \";\n    for (int x : diffs) std::cout << x << ' ';  // 1 2 3 4 5\n    std::cout << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Adjacent differences: 1 2 3 4 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1085-stdiota--fill-with-sequential-values-c11",
      children: "10.8.5 std::iota — Fill with Sequential Values (C++11)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <numeric>\n#include <vector>\n#include <iostream>\n#include <array>\n\nint main() {\n    std::vector<int> v(10);\n    std::iota(v.begin(), v.end(), 0);  // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9\n    std::cout << \"iota: \";\n    for (int x : v) std::cout << x << ' ';\n\n    std::array<int, 5> arr;\n    std::iota(arr.begin(), arr.end(), 100);  // 100, 101, 102, 103, 104\n    std::cout << \"\\niota 100: \";\n    for (int x : arr) std::cout << x << ' ';\n    std::cout << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "iota: 0 1 2 3 4 5 6 7 8 9\niota 100: 100 101 102 103 104\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WHY:"
      }), " n increments, each O(1)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numeric-algorithm-summary",
      children: "Numeric Algorithm Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "accumulate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fold left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "inner_product"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fold over pairwise op + combine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dot product"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "partial_sum"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Running totals"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "adjacent_difference"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each minus predecessor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discrete derivative"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "iota"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assign incrementing values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "109-lambdas-with-algorithms",
      children: "10.9 Lambdas with Algorithms"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lambda expressions (C++11) are inline callable objects that capture variables from scope. They are the natural way to customize STL algorithm behavior."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1091-lambda-syntax",
      children: "10.9.1 Lambda Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "[capture](parameters) -> return_type { body };\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Part"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[capture]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What from enclosing scope is accessible"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "[x, &y]"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[=]"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[&]"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[this]"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(parameters)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input parameters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(int a, int b)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-> return_type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return type (optional — deduced)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-> bool"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ body }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function body"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{ return a < b; }"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1092-capture-modes",
      children: "10.9.2 Capture Modes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n\nint main() {\n    std::vector<int> data = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n    int threshold = 5;\n    int multiplier = 3;\n\n    // Capture by value: [threshold]\n    auto count_big = std::count_if(data.begin(), data.end(),\n        [threshold](int x) { return x > threshold; });\n    std::cout << \"Elements > \" << threshold << \": \" << count_big << '\\n';\n\n    // Capture by reference: [&multiplier]\n    std::vector<int> scaled;\n    std::transform(data.begin(), data.end(),\n                   std::back_inserter(scaled),\n        [&multiplier](int x) { return x * multiplier; });\n    std::cout << \"Scaled by \" << multiplier << \": \";\n    for (int x : scaled) std::cout << x << ' ';\n    std::cout << '\\n';\n\n    // Capture all by reference: [&]\n    int evens = 0;\n    std::for_each(data.begin(), data.end(),\n        [&](int x) { if (x % 2 == 0) ++evens; });\n    std::cout << \"Evens: \" << evens << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Elements > 5: 5\nScaled by 3: 3 6 9 12 15 18 21 24 27 30\nEvens: 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1093-common-lambda--algorithm-patterns",
      children: "10.9.3 Common Lambda + Algorithm Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 1 — Sorting with Custom Key:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n#include <string>\n\nstruct Employee {\n    std::string name;\n    int id;\n    double salary;\n};\n\nint main() {\n    std::vector<Employee> emps = {\n        {\"Alice\", 103, 75000},\n        {\"Bob\", 101, 65000},\n        {\"Charlie\", 102, 85000}\n    };\n\n    // Sort by ID (ascending)\n    std::sort(emps.begin(), emps.end(),\n        [](const Employee& a, const Employee& b) {\n            return a.id < b.id;\n        });\n    std::cout << \"By ID:\\n\";\n    for (auto& e : emps)\n        std::cout << \"  \" << e.id << \": \" << e.name << \" ($\" << e.salary << \")\\n\";\n\n    // Sort by salary (descending)\n    std::sort(emps.begin(), emps.end(),\n        [](const Employee& a, const Employee& b) {\n            return a.salary > b.salary;\n        });\n    std::cout << \"By salary (desc):\\n\";\n    for (auto& e : emps)\n        std::cout << \"  \" << e.name << \": $\" << e.salary << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "By ID:\n  101: Bob ($65000)\n  102: Charlie ($85000)\n  103: Alice ($75000)\nBy salary (desc):\n  Charlie: $85000\n  Alice: $75000\n  Bob: $65000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 2 — Filter with remove_if + erase:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n#include <string>\n\nint main() {\n    std::vector<std::string> words =\n        {\"apple\", \"banana\", \"cat\", \"dog\", \"elephant\", \"fox\"};\n\n    // Remove words shorter than 4 letters\n    words.erase(\n        std::remove_if(words.begin(), words.end(),\n            [](const std::string& w) { return w.length() < 4; }),\n        words.end());\n\n    std::cout << \"Words >= 4 letters: \";\n    for (const auto& w : words) std::cout << w << ' ';\n    std::cout << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Words >= 4 letters: apple banana elephant\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 3 — Transform with State (mutable lambda):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n#include <iterator>\n\nint main() {\n    std::vector<int> data = {1, 2, 3, 4, 5};\n    std::vector<int> running_sum;\n\n    std::transform(data.begin(), data.end(),\n                   std::back_inserter(running_sum),\n        [sum = 0](int x) mutable {  // C++14 init capture\n            sum += x;\n            return sum;\n        });\n\n    std::cout << \"Running sum via transform: \";\n    for (int x : running_sum) std::cout << x << ' ';  // 1 3 6 10 15\n    std::cout << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Running sum via transform: 1 3 6 10 15\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 4 — Find with Complex Condition:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n#include <string>\n\nstruct Product {\n    std::string name;\n    double price;\n    int stock;\n};\n\nint main() {\n    std::vector<Product> inventory = {\n        {\"Laptop\", 999.99, 5},\n        {\"Mouse\", 25.50, 100},\n        {\"Monitor\", 299.99, 0},\n        {\"Keyboard\", 75.00, 30}\n    };\n\n    // Find first out-of-stock product\n    auto it = std::find_if(inventory.begin(), inventory.end(),\n        [](const Product& p) { return p.stock == 0; });\n    if (it != inventory.end())\n        std::cout << \"Out of stock: \" << it->name << '\\n';\n\n    // Find first product matching multiple criteria\n    it = std::find_if(inventory.begin(), inventory.end(),\n        [](const Product& p) {\n            return p.price > 50 && p.price < 500 && p.stock > 10;\n        });\n    if (it != inventory.end())\n        std::cout << \"Mid-range in stock: \" << it->name\n                  << \" ($\" << it->price << \")\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Out of stock: Monitor\nMid-range in stock: Keyboard ($75)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern 5 — Chaining Algorithms:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n#include <numeric>\n#include <iterator>\n\nint main() {\n    std::vector<int> raw = {5, 2, 8, 1, 9, 3, 7, 4, 6, 0};\n    std::vector<int> processed;\n\n    // Chain: filter evens -> square -> sort -> accumulate sum\n    std::copy_if(raw.begin(), raw.end(),\n                 std::back_inserter(processed),\n                 [](int x) { return x % 2 == 0; });\n    // processed: 2, 8, 4, 6, 0\n\n    std::transform(processed.begin(), processed.end(),\n                   processed.begin(),\n                   [](int x) { return x * x; });\n    // processed: 4, 64, 16, 36, 0\n\n    std::sort(processed.begin(), processed.end());\n    // processed: 0, 4, 16, 36, 64\n\n    int sum = std::accumulate(processed.begin(), processed.end(), 0);\n    std::cout << \"Sum of squares of evens (sorted): \" << sum << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sum of squares of evens (sorted): 120\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1010-algorithm-categories--comprehensive-comparison",
      children: "10.10 Algorithm Categories — Comprehensive Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Header"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requires Sorted?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mutates?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Non-Modifying"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.algorithm, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "find, count, equal, search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modifying"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.algorithm, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "copy, transform, replace, remove"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.algorithm, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (outputs sorted)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sort, stable_sort, partial_sort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.algorithm, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lower_bound, upper_bound"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Set Operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.algorithm, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "merge, set_union, set_intersection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Min/Max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.algorithm, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min, max, min_element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Numeric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.numeric, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "accumulate, inner_product, partial_sum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Heap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.algorithm, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) per op"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (heap property)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "push_heap, pop_heap, make_heap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.algorithm, {})
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "partition, stable_partition"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "category-selection-guide",
      children: "Category Selection Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Need to process data?\n├─ Read-only query? → Non-Modifying (find, count, equal)\n├─ Change in place? → Modifying (replace, remove, fill)\n├─ Change to new range? → Modifying with output iterator (copy, transform)\n├─ Reorder?\n│  ├─ Full sort? → sort (default) or stable_sort (equal-order preservation)\n│  ├─ Top-k only? → partial_sort\n│  └─ Just one position? → nth_element\n├─ Fast lookup?\n│  ├─ Sorted data? → binary_search, lower_bound\n│  └─ Unsorted? → find\n├─ Combine two ranges?\n│  ├─ Both sorted? → set_union, set_intersection, merge\n│  └─ Unsorted? → manual loop\n└─ Arithmetic? → Numeric (accumulate, inner_product, iota)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1011-sort-vs-stable_sort-vs-partial_sort-vs-nth_element",
      children: "10.11 sort vs stable_sort vs partial_sort vs nth_element"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "sort"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "stable_sort"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "partial_sort"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "nth_element"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "What it does"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorts entire range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorts entire range (stable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Places top-k in sorted order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Puts nth element at correct position"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Algorithm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Introsort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MergeSort + InsertionSort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HeapSelect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QuickSelect + Introselect"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n) w/ buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) average"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stable?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Extra memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) or O(n log^2 n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When to use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default sorting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equal-order preservation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Top-k leaderboard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Median/percentile"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First k sorted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only position n correct"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "which-to-choose",
      children: "Which to Choose?"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n\nint main() {\n    std::vector<int> v = {7, 2, 9, 4, 1, 8, 5, 3, 6};\n\n    // Need full sort? Use sort\n    std::vector<int> v1 = v;\n    std::sort(v1.begin(), v1.end());\n    // v1: 1 2 3 4 5 6 7 8 9\n\n    // Need top 3 only? Use partial_sort — much less work\n    std::vector<int> v2 = v;\n    std::partial_sort(v2.begin(), v2.begin() + 3, v2.end(),\n                      std::greater<int>());\n    // v2: 9 8 7 ... (only first 3 sorted — rest in any order)\n\n    // Need median only? Use nth_element — fastest possible\n    std::vector<int> v3 = v;\n    auto mid = v3.begin() + v3.size() / 2;\n    std::nth_element(v3.begin(), mid, v3.end());\n    std::cout << \"Median: \" << *mid << '\\n';\n    // Median at correct position; rest unsorted\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "performance-insight-n--10000000",
      children: "Performance Insight (n = 10,000,000)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Relative Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "WHY"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0x (baseline)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full sort, deterministic introsort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stable_sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.6x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extra copying for stability guarantee"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "partial_sort (k=10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.3x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap-based, stops after top-k"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "partial_sort (k=100)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.4x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slightly more heap pops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nth_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.15x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Just partitions — no sorting at all"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1012-iterator-categories-and-algorithm-requirements",
      children: "10.12 Iterator Categories and Algorithm Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every STL algorithm documents its minimum iterator category requirement. Using an iterator that does not meet this requirement causes a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "compile error"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-five-iterator-categories",
      children: "The Five Iterator Categories"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InputIterator  <-  ForwardIterator  <-  BidirectionalIterator  <-  RandomAccessIterator\n                                     ^\n                                 OutputIterator  (separate hierarchy)\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Supports"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Read/Write"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Input"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "++it"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*it"
            }), " (read), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "=="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "!="
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "istream_iterator"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "find"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "count"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "accumulate"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Output"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "++it"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*it = val"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write only"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ostream_iterator"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "back_inserter"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "copy"
            }), " (dest), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "transform"
            }), " (dest)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Forward"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All Input + multi-pass guarantee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read/Write"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "forward_list"
            }), " iterator, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "unordered_map"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "replace"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fill"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "remove"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bidirectional"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["All Forward + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--it"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read/Write"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "list"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "set"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "map"
            }), " iterators"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "reverse"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stable_partition"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RandomAccess"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["All Bidirectional + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "it+n"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "it-n"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "it[n]"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "it1-it2"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ">"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read/Write"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "vector"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "deque"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "array"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "string"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sort"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "nth_element"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "binary_search"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-to-iterator-category-mapping",
      children: "Algorithm to Iterator Category Mapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <list>\n#include <forward_list>\n\nint main() {\n    std::vector<int> vec = {3, 1, 4, 1, 5};\n    std::list<int> lst = {3, 1, 4, 1, 5};\n    std::forward_list<int> flst = {3, 1, 4, 1, 5};\n\n    // RandomAccess required\n    std::sort(vec.begin(), vec.end());                // OK\n    // std::sort(lst.begin(), lst.end());             // COMPILE ERROR\n\n    // Bidirectional required\n    std::reverse(lst.begin(), lst.end());             // OK\n    // std::reverse(flst.begin(), flst.end());        // COMPILE ERROR\n\n    // Forward required\n    std::replace(flst.begin(), flst.end(), 1, 99);    // OK\n\n    // Input only\n    auto it = std::find(flst.begin(), flst.end(), 4); // OK\n    int c = std::count(vec.begin(), vec.end(), 1);    // OK\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1013-raw-loop-vs-stl-algorithm--a-systematic-comparison",
      children: "10.13 Raw Loop vs STL Algorithm — A Systematic Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Many C++ developers write raw ", (0,jsx_runtime.jsx)(_components.code, {
        children: "for"
      }), " loops where algorithms would be clearer, safer, and faster."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-count-positive-elements",
      children: "Example 1: Count Positive Elements"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Raw loop\nstd::vector<int> data = {-3, 5, -1, 7, 0, 2};\nint count = 0;\nfor (size_t i = 0; i < data.size(); ++i) {\n    if (data[i] > 0)\n        ++count;\n}\n\n// STL algorithm\nint count_algo = std::count_if(data.begin(), data.end(),\n                                [](int x) { return x > 0; });\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Raw Loop"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "STL Algorithm"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lines of code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hidden in loop body"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-documenting (count_if)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Off-by-one risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (i < size vs i <= size)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (begin/end)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Container coupling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tied to vector (uses .size() and [])"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works with any container"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May vectorize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler recognizes pattern + vectorizes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-find-first-match",
      children: "Example 2: Find First Match"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Raw loop\nstd::vector<int> products = { ... };\nint* found = nullptr;\nfor (size_t i = 0; i < products.size(); ++i) {\n    if (products[i] == 0) {\n        found = &products[i];\n        break;\n    }\n}\n\n// STL algorithm\nauto it = std::find(products.begin(), products.end(), 0);\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Raw Loop"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "STL Algorithm"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Early exit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual break"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in short-circuit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Null-safety"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual nullptr check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "it != container.end()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Indexing errors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterator abstraction"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-transform-all-elements",
      children: "Example 3: Transform All Elements"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Raw loop\nstd::vector<double> celsius = {0, 10, 20, 30};\nstd::vector<double> fahr(celsius.size());\nfor (size_t i = 0; i < celsius.size(); ++i)\n    fahr[i] = celsius[i] * 9.0 / 5.0 + 32.0;\n\n// STL algorithm\nstd::vector<double> fahr_algo;\nstd::transform(celsius.begin(), celsius.end(),\n               std::back_inserter(fahr_algo),\n               [](double c) { return c * 9.0 / 5.0 + 32.0; });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-raw-loops-are-acceptable",
      children: "When Raw Loops Are Acceptable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complex control flow"
        }), " — multiple break/continue conditions easier to read inline"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance-critical hot path"
        }), " — though algorithms usually compile to identical assembly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-standard iteration"
        }), " — traversing multiple containers with complex offsets"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Side-effect-heavy operations"
        }), " — logging, I/O, where the loop body is the point"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-sean-parent-rule",
      children: "The Sean Parent Rule"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "If you see a for loop over a range, ask: could an algorithm express this more clearly?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1014-interview-corner",
      children: "10.14 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-why-does-stdsort-fail-to-compile-for-stdlist",
      children: "Q1: Why does std::sort fail to compile for std::list?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " std::sort requires ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RandomAccessIterators"
      }), ", but std::list provides only ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BidirectionalIterators"
      }), ". RandomAccessIterators support ", (0,jsx_runtime.jsx)(_components.code, {
        children: "it + n"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "it - n"
      }), " for pivot calculation during QuickSort partitioning. List iterators cannot jump — they can only step forward/backward one position at a time. std::list provides its own ", (0,jsx_runtime.jsx)(_components.code, {
        children: "list::sort()"
      }), " member using MergeSort, which works with bidirectional iterators and is also stable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-when-would-you-use-nth_element-instead-of-sort--index",
      children: "Q2: When would you use nth_element instead of sort + index?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " When you need only the k-th smallest element (or median) without sorting the entire range. For n = 10,000,000:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "std::sort: O(n log n) ≈ 10M x 24 = 240M operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "std::nth_element: O(n) average ≈ 10M x 3 = 30M operations — 8x faster"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use cases: computing the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "median"
      }), ", finding ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "percentiles"
      }), " (25th, 75th, 90th), splitting data at a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "threshold"
      }), " for divide-and-conquer algorithms, QuickSelect-based pivot selection."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-is-the-erase-remove-idiom-and-why-is-it-necessary",
      children: "Q3: What is the erase-remove idiom and why is it necessary?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " std::remove does NOT erase elements. It reorganizes the range so kept elements are at the front and returns an iterator to the new logical end. Removed elements remain at the tail in unspecified state."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "auto new_end = std::remove(v.begin(), v.end(), value);\nv.erase(new_end, v.end());\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "WHY two steps:"
      }), " (1) remove works with iterators only — it has no knowledge of the container's erase method. (2) The STL separates algorithms (operations) from containers (storage). (3) remove returns a \"watermark\" — erase acts on it. (4) This separation allows remove to work with arrays, std::string, std::vector, std::deque, etc."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-compare-lower_bound-vs-binary_search-for-finding-values",
      children: "Q4: Compare lower_bound vs binary_search for finding values."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "binary_search"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "lower_bound"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Returns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does value exist?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Where can I insert?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Additional info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Position of element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "*lower_bound(...) == value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary search"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::vector<int> v = {10, 20, 30, 30, 30, 40};\n\nbool exists = std::binary_search(v.begin(), v.end(), 30);  // true\n\nauto lo = std::lower_bound(v.begin(), v.end(), 30);\nauto hi = std::upper_bound(v.begin(), v.end(), 30);\nint count = std::distance(lo, hi);  // 3\n\nauto pos = std::lower_bound(v.begin(), v.end(), 35);\nv.insert(pos, 35);  // v stays sorted: 10 20 30 30 30 35 40\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-why-is-stdaccumulate-initial-value-important-for-type-deduction",
      children: "Q5: Why is std::accumulate initial value important for type deduction?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The initial value parameter determines the return type:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::vector<int> v = {1000000, 2000000, 3000000};\n\n// WRONG: int overflow — result type is int\nint bad = std::accumulate(v.begin(), v.end(), 0);  // may overflow\n\n// CORRECT: use long long\nlong long good = std::accumulate(v.begin(), v.end(), 0LL);\n\n// Floating point\nstd::vector<double> vals = {1.5, 2.5, 3.0};\ndouble sum = std::accumulate(vals.begin(), vals.end(), 0.0);\n// 0 (int) would give 6 (truncated) — 0.0 gives 7.0\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key rule:"
      }), " Always match the initial value type to the desired result type. A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0"
      }), " initial value forces ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), " accumulation even if the container holds larger types."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-how-does-stdsort-avoid-on2-worst-case-behavior",
      children: "Q6: How does std::sort avoid O(n^2) worst-case behavior?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " std::sort uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Introsort"
      }), ", a hybrid algorithm:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "QuickSort"
        }), " with median-of-3 partitioning for good pivot selection"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If recursion depth exceeds 2 x log2(n), switch to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "HeapSort"
        }), " for the current partition"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Small subranges (< 16 elements) use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "InsertionSort"
        }), " (fastest for tiny arrays)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Final InsertionSort pass exploits near-sorted state from partitioning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This guarantees O(n log n) worst-case while maintaining QuickSort's speed and cache-friendly behavior. Pure QuickSort degrades to O(n^2) on already-sorted data with naive pivot selection."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-when-is-stdfor_each-preferred-over-a-range-based-for-loop",
      children: "Q7: When is std::for_each preferred over a range-based for loop?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " for_each is useful when: (1) composing with other algorithms in a pipeline, (2) using an existing function object, (3) extracting accumulated state (C++17 returns the functor):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "struct Counter {\n    int count = 0;\n    void operator()(int x) { if (x % 2 == 0) ++count; }\n};\nstd::vector<int> v = {1, 2, 3, 4, 5, 6};\nCounter c = std::for_each(v.begin(), v.end(), Counter{});\nstd::cout << c.count << '\\n';  // 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-explain-why-stdpartial_sortfirst-middle-last-is-on-log-k",
      children: "Q8: Explain why std::partial_sort(first, middle, last) is O(n log k)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The algorithm:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Builds a max-heap of the first k elements: O(k)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each of the remaining n-k elements, compares with heap top (max) and replaces if smaller: each is O(log k) for heap pop+push"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Finally sorts the heap of size k: O(k log k)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Total: O(k + (n-k) log k + k log k) = O(n log k). When k is small (e.g., top 10 of 1M), this is dramatically faster than full sort O(n log n)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1015-applications-in-real-systems",
      children: "10.15 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stdsort-in-databases",
      children: "std::sort in Databases"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Database engines use sorting for ORDER BY, GROUP BY aggregation, B-tree index creation, merge join (both inputs sorted by key), and deduplication."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n#include <string>\n\nstruct QueryResult {\n    int id;\n    double relevance;\n};\n\nstd::vector<QueryResult> search_and_rank(\n    const std::vector<QueryResult>& results, int top_k) {\n\n    if (results.size() <= (size_t)top_k) {\n        std::vector<QueryResult> sorted = results;\n        std::sort(sorted.begin(), sorted.end(),\n            [](const QueryResult& a, const QueryResult& b) {\n                return a.relevance > b.relevance;\n            });\n        return sorted;\n    }\n\n    std::vector<QueryResult> out = results;\n    std::partial_sort(out.begin(), out.begin() + top_k, out.end(),\n        [](const QueryResult& a, const QueryResult& b) {\n            return a.relevance > b.relevance;\n        });\n    out.resize(top_k);\n    return out;\n}\n\nint main() {\n    std::vector<QueryResult> results = {\n        {101, 0.95}, {102, 0.80}, {103, 0.99},\n        {104, 0.45}, {105, 0.72}, {106, 0.88}\n    };\n    auto top3 = search_and_rank(results, 3);\n    std::cout << \"Top 3 results:\\n\";\n    for (const auto& r : top3)\n        std::cout << \"  ID \" << r.id << \" (relevance: \" << r.relevance << \")\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Top 3 results:\n  ID 103 (relevance: 0.99)\n  ID 101 (relevance: 0.95)\n  ID 106 (relevance: 0.88)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stdtransform-in-etl-pipelines",
      children: "std::transform in ETL Pipelines"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Extract-Transform-Load pipelines use transform for data cleaning and normalization:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n#include <string>\n#include <cctype>\n#include <iterator>\n\nstruct RawRecord {\n    std::string name;\n    std::string email;\n    double raw_score;\n};\n\nstruct CleanRecord {\n    std::string name;\n    std::string email;\n    double normalized_score;\n};\n\nint main() {\n    std::vector<RawRecord> raw_data = {\n        {\"  Alice  \", \"ALICE@EXAMPLE.COM\", 85.0},\n        {\"  Bob  \", \"bob@EXAMPLE.COM\", 92.0},\n        {\"  Charlie  \", \"CHARLIE@EXAMPLE.COM\", 78.0}\n    };\n    std::vector<CleanRecord> clean;\n\n    std::transform(raw_data.begin(), raw_data.end(),\n                   std::back_inserter(clean),\n        [](const RawRecord& r) -> CleanRecord {\n            std::string name = r.name;\n            name.erase(0, name.find_first_not_of(\" \"));\n            name.erase(name.find_last_not_of(\" \") + 1);\n\n            std::string email = r.email;\n            std::transform(email.begin(), email.end(), email.begin(),\n                [](unsigned char c) { return std::tolower(c); });\n\n            double normalized = std::clamp(r.raw_score, 0.0, 100.0);\n            return {name, email, normalized};\n        });\n\n    for (const auto& c : clean)\n        std::cout << c.name << \" | \" << c.email << \" | \" << c.normalized_score << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Alice | alice@example.com | 85\nBob | bob@example.com | 92\nCharlie | charlie@example.com | 78\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stdaccumulate-in-financial-calculations",
      children: "std::accumulate in Financial Calculations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <numeric>\n#include <vector>\n#include <iostream>\n\nint main() {\n    std::vector<double> annual_rates = {0.05, 0.06, 0.04, 0.07, 0.05};\n    double principal = 10000.0;\n\n    double final_value = std::accumulate(\n        annual_rates.begin(), annual_rates.end(), principal,\n        [](double current, double rate) {\n            return current * (1.0 + rate);\n        });\n\n    std::cout << \"Initial: $\" << principal << '\\n';\n    std::cout << \"After \" << annual_rates.size() << \" years: $\"\n              << final_value << '\\n';\n\n    // Moving average\n    std::vector<double> prices = {100, 102, 101, 105, 110, 108, 107};\n    std::vector<double> moving_avg;\n    int window = 3;\n\n    for (size_t i = 0; i + window <= prices.size(); ++i) {\n        double sum = std::accumulate(\n            prices.begin() + i, prices.begin() + i + window, 0.0);\n        moving_avg.push_back(sum / window);\n    }\n\n    std::cout << \"\\nPrices: \";\n    for (double p : prices) std::cout << p << ' ';\n    std::cout << \"\\nMA(\" << window << \"): \";\n    for (double m : moving_avg) std::cout << m << ' ';\n    std::cout << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Initial: $10000\nAfter 5 years: $12874.1\n\nPrices: 100 102 101 105 110 108 107\nMA(3): 101 102.667 105.333 107.667 108.333\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stdset_intersection-in-recommendation-systems",
      children: "std::set_intersection in Recommendation Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <algorithm>\n#include <vector>\n#include <iostream>\n#include <iterator>\n\nint main() {\n    std::vector<int> user_a = {1, 5, 7, 9, 12, 15};\n    std::vector<int> user_b = {2, 5, 8, 9, 12, 20};\n    std::vector<int> all_items = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n\n    std::vector<int> common;\n    std::set_intersection(user_a.begin(), user_a.end(),\n                           user_b.begin(), user_b.end(),\n                           std::back_inserter(common));\n    std::cout << \"Common likes: \";\n    for (int x : common) std::cout << x << ' ';\n\n    std::vector<int> recommend;\n    std::set_difference(all_items.begin(), all_items.end(),\n                         user_a.begin(), user_a.end(),\n                         std::back_inserter(recommend));\n    std::cout << \"\\nRecommend to A: \";\n    for (int x : recommend) std::cout << x << ' ';\n    std::cout << '\\n';\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Common likes: 5 9 12\nRecommend to A: 2 3 4 6 8 10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-card",
      children: "Quick Reference Card"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Header"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Returns"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "find"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterator to match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "find_if"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterator to predicate match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "count/count_if"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "equal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mismatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pair of iterators"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n x m) / O(n+m) w/ BM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterator to subrange"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output iterator (end)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "copy_if"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output iterator (end)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "transform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output iterator (end)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "replace/replace_if"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "void"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fill/fill_n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "void (fill) / OutputIterator (fill_n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "generate/generate_n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "void"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "remove/remove_if"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New logical end"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unique"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New logical end"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reverse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "void"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rotate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterator to new first"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "void"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stable_sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "void"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "partial_sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "void"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nth_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) average"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "void"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lower_bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterator first >= value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "upper_bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterator first > value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "binary_search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "equal_range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pair {lower, upper}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "merge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n+m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output iterator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "set_union"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n+m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output iterator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "set_intersection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n+m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output iterator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "set_difference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n+m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output iterator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "min/max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reference"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "min_element/max_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minmax_element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(3n/2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pair of iterators"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accumulate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "numeric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduced value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inner_product"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "numeric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dot product"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "partial_sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "numeric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output iterator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "adjacent_difference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "numeric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output iterator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iota"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "numeric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "void"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "all_of/any_of/none_of"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "for_each"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function (C++17)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-summary",
      children: "Chapter Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Algo-Container Separation"
          }), ": STL algorithms work on iterator ranges, not containers. A single algorithm works with any container whose iterators meet the minimum category requirement."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Non-Modifying Algorithms"
          }), ": find, count, equal, mismatch, and search read ranges without mutation. They are safe for const data and often short-circuit on first match."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Modifying Algorithms"
          }), ": copy, transform, replace, fill, generate, remove, and unique change elements. The erase-remove idiom is the standard pattern for logical deletion followed by physical erasure."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sorting"
          }), ": sort (introsort) is the default. stable_sort preserves equal-element order. partial_sort gives top-k in sorted order. nth_element places one element at its sorted position with O(n) average complexity."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Binary Search"
          }), ": lower_bound, upper_bound, and equal_range provide O(log n) lookup on sorted ranges. Always ensure the range is sorted before calling."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Set Operations"
          }), ": set_union, set_intersection, set_difference work on sorted ranges (not just std::set) in O(n+m) time."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Numeric Algorithms"
          }), ": accumulate (fold), inner_product (dot product), partial_sum (running totals), adjacent_difference (discrete derivative), and iota (sequential fill) from <numeric>."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Lambdas"
          }), ": Inline callables that customize algorithm behavior through capture, parameters, and body. Five capture modes: by value, by reference, init capture (C++14), default all-by-value (=), default all-by-reference (&)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Algorithm > Raw Loop"
          }), ": STL algorithms express intent directly, eliminate off-by-one errors, work across container types, and enable algorithm composition."]
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
        children: "Why does std::sort not compile with std::list iterators? What iterator category does it require?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between std::remove and std::vector::erase? Why must both be used together?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When would std::nth_element be preferred over std::partial_sort? Give a concrete example."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the complexity difference between std::find (O(n)) and std::binary_search (O(log n)). When would you choose each?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What does std::lower_bound return when the value is greater than all elements?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does the initial value parameter of std::accumulate affect the return type?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What happens if you call std::binary_search on an unsorted range?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Given std::vector<int> v = {4, 2, 7, 1, 8, 3, 5, 6}, use STL algorithms to:\na) Count even numbers using count_if\nb) Remove all elements < 4 using remove_if + erase\nc) Sort the remaining elements descending using sort with lambda\nd) Compute sum of squares of the result using transform + accumulate"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a deduplication function using sort + unique:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-cpp",
            children: "template<typename T>\nstd::vector<T> unique_sorted(std::vector<T> v);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a function to merge two sorted vectors using std::merge:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-cpp",
            children: "std::vector<int> merge_sorted(const std::vector<int>& a,\n                               const std::vector<int>& b);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use std::set_intersection to find common elements between two sorted vectors without loops."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a program that reads integers from stdin into a vector, computes the sum and product using std::accumulate with lambdas, and prints both results."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gradebook Analyzer:"
        }), " Write a program that:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Stores student records (name, vector of scores) in a vector"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Computes each student's average using std::accumulate"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Sorts students by average using std::sort with lambda"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Assigns letter grades (A: >=90, B: >=80, C: >=70, D: >=60, F: <60) using std::transform"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Computes class statistics (min, max, median, average) using std::minmax_element, std::nth_element, std::accumulate"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Prints a ranked report"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Achieves all of the above without any raw for loops — use only STL algorithms"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How Concepts Apply"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Science"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sort + unique for dedup, accumulate for statistics, nth_element for median"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Game Dev"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "remove_if for entity culling, sort by draw order, transform for coordinate conversion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Finance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stable_sort for transactions, accumulate for compound interest, inner_product for portfolio valuation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Text Processing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "search for substring, transform for case conversion, count_if for character analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Networking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "copy for buffer management, count_if for packet pattern analysis, accumulate for checksums"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ETL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "transform for data cleaning, merge for sorted feeds, set_difference for change detection"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Proceed to:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/11-file-io",
          children: "11-file-io"
        }), " — Master file input and output in C++"]
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