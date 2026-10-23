"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[1994],{

/***/ 7382
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_big_data_index_md_eca_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-big-data-index-md-eca.json
const site_docs_courses_big_data_index_md_eca_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/big-data/index","title":"Big Data Engineering","description":"Course Overview","source":"@site/docs/courses/big-data/index.md","sourceDirName":"courses/big-data","slug":"/big-data","permalink":"/ai-engineering-journey/big-data","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"index","slug":"/big-data","title":"Big Data Engineering","sidebar_label":"Big Data Engineering","sidebar_position":6},"sidebar":"course-big-data","previous":{"title":"Chapter 5: Big Data Ecosystem Tools","permalink":"/ai-engineering-journey/big-data/05-ecosystem"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/big-data/index.md


const frontMatter = {
	id: 'index',
	slug: '/big-data',
	title: 'Big Data Engineering',
	sidebar_label: 'Big Data Engineering',
	sidebar_position: 6
};
const contentTitle = 'Big Data Engineering';

const assets = {

};



const toc = [{
  "value": "Course Overview",
  "id": "course-overview",
  "level": 2
}, {
  "value": "Chapter List",
  "id": "chapter-list",
  "level": 2
}, {
  "value": "Version",
  "id": "version",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "big-data-engineering",
        children: "Big Data Engineering"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "course-overview",
      children: "Course Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This course covers distributed data processing at scale. From Hadoop's HDFS and MapReduce through Apache Spark's RDDs, DataFrames, Structured Streaming, and MLlib — you will learn to build production data pipelines that process terabytes to petabytes."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Target Audience:"
      }), " Data engineers, ML engineers, backend developers moving into data-intensive roles."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Prerequisites:"
      }), " Python, SQL, basic Linux CLI."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-list",
      children: "Chapter List"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chapter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topics"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/big-data/01-introduction",
              children: "Introduction to Big Data"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 V's, distributed computing challenges, ecosystem overview"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/big-data/02-hadoop",
              children: "Hadoop: HDFS, MapReduce & YARN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HDFS architecture, MapReduce paradigm, YARN resource management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/big-data/03-spark-basics",
              children: "Apache Spark Basics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RDDs, DataFrames, Spark SQL, Catalyst optimizer, Tungsten"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/big-data/04-spark-mllib",
              children: "Spark MLlib"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML pipelines, feature transformers, distributed training, model export"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/big-data/05-ecosystem",
              children: "Ecosystem Tools"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hive, HBase, Kafka, Parquet, Avro, cloud-native alternatives"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "version",
      children: "Version"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0 — June 2026"]
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



/***/ }

}]);