"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[21914],{

/***/ 41038
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_artificial_intelligence_13_computer_vision_md_05d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-artificial-intelligence-13-computer-vision-md-05d.json
const site_docs_courses_artificial_intelligence_13_computer_vision_md_05d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/artificial-intelligence/13-computer-vision","title":"Chapter 13: Computer Vision","description":"Previous Natural Language Processing | Next Robotics","source":"@site/docs/courses/artificial-intelligence/13-computer-vision.md","sourceDirName":"courses/artificial-intelligence","slug":"/artificial-intelligence/13-computer-vision","permalink":"/ai-engineering-journey/artificial-intelligence/13-computer-vision","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":21,"frontMatter":{"id":"13-computer-vision","slug":"/artificial-intelligence/13-computer-vision","title":"Chapter 13: Computer Vision","sidebar_label":"Chapter 13: Computer Vision","sidebar_position":21},"sidebar":"course-artificial-intelligence","previous":{"title":"Chapter 12: Natural Language Processing","permalink":"/ai-engineering-journey/artificial-intelligence/12-nlp"},"next":{"title":"Chapter 14: Robotics","permalink":"/ai-engineering-journey/artificial-intelligence/14-robotics"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/artificial-intelligence/13-computer-vision.md


const frontMatter = {
	id: '13-computer-vision',
	slug: '/artificial-intelligence/13-computer-vision',
	title: 'Chapter 13: Computer Vision',
	sidebar_label: 'Chapter 13: Computer Vision',
	sidebar_position: 21
};
const contentTitle = 'Chapter 13: Computer Vision';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Computer Vision Matters",
  "id": "why-computer-vision-matters",
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
  "value": "13.1 Image Representation",
  "id": "131-image-representation",
  "level": 2
}, {
  "value": "13.1.1 Pixels and Color Spaces",
  "id": "1311-pixels-and-color-spaces",
  "level": 3
}, {
  "value": "13.1.2 Image as a Tensor",
  "id": "1312-image-as-a-tensor",
  "level": 3
}, {
  "value": "13.1.3 Algorithm: Load and Inspect Image",
  "id": "1313-algorithm-load-and-inspect-image",
  "level": 3
}, {
  "value": "13.1.4 Python Implementation",
  "id": "1314-python-implementation",
  "level": 3
}, {
  "value": "13.1.5 Complexity Analysis",
  "id": "1315-complexity-analysis",
  "level": 3
}, {
  "value": "13.1.6 Advantages and Disadvantages",
  "id": "1316-advantages-and-disadvantages",
  "level": 3
}, {
  "value": "13.1.7 Edge Cases",
  "id": "1317-edge-cases",
  "level": 3
}, {
  "value": "13.2 Image Filtering",
  "id": "132-image-filtering",
  "level": 2
}, {
  "value": "13.2.1 Convolution Operation",
  "id": "1321-convolution-operation",
  "level": 3
}, {
  "value": "13.2.2 Algorithm: 2D Convolution",
  "id": "1322-algorithm-2d-convolution",
  "level": 3
}, {
  "value": "13.2.3 Common Filters",
  "id": "1323-common-filters",
  "level": 3
}, {
  "value": "13.2.4 Python Implementation",
  "id": "1324-python-implementation",
  "level": 3
}, {
  "value": "13.2.5 Complexity Analysis",
  "id": "1325-complexity-analysis",
  "level": 3
}, {
  "value": "13.2.6 Advantages and Disadvantages",
  "id": "1326-advantages-and-disadvantages",
  "level": 3
}, {
  "value": "13.2.7 Edge Cases",
  "id": "1327-edge-cases",
  "level": 3
}, {
  "value": "13.3 Edge Detection",
  "id": "133-edge-detection",
  "level": 2
}, {
  "value": "13.3.1 Image Gradients",
  "id": "1331-image-gradients",
  "level": 3
}, {
  "value": "13.3.2 Algorithm: Canny Edge Detector",
  "id": "1332-algorithm-canny-edge-detector",
  "level": 3
}, {
  "value": "13.3.3 Python Implementation",
  "id": "1333-python-implementation",
  "level": 3
}, {
  "value": "13.3.4 Complexity Analysis",
  "id": "1334-complexity-analysis",
  "level": 3
}, {
  "value": "13.3.5 Advantages and Disadvantages",
  "id": "1335-advantages-and-disadvantages",
  "level": 3
}, {
  "value": "13.3.6 Edge Cases",
  "id": "1336-edge-cases",
  "level": 3
}, {
  "value": "13.4 Feature Extraction",
  "id": "134-feature-extraction",
  "level": 2
}, {
  "value": "13.4.1 SIFT (Scale-Invariant Feature Transform)",
  "id": "1341-sift-scale-invariant-feature-transform",
  "level": 3
}, {
  "value": "13.4.2 Python Implementation",
  "id": "1342-python-implementation",
  "level": 3
}, {
  "value": "13.4.3 Complexity Analysis",
  "id": "1343-complexity-analysis",
  "level": 3
}, {
  "value": "13.4.4 Advantages and Disadvantages",
  "id": "1344-advantages-and-disadvantages",
  "level": 3
}, {
  "value": "13.4.5 Edge Cases",
  "id": "1345-edge-cases",
  "level": 3
}, {
  "value": "13.5 Convolutional Neural Networks",
  "id": "135-convolutional-neural-networks",
  "level": 2
}, {
  "value": "13.5.1 CNN Building Blocks",
  "id": "1351-cnn-building-blocks",
  "level": 3
}, {
  "value": "13.5.2 Algorithm: Forward Pass Through a CNN",
  "id": "1352-algorithm-forward-pass-through-a-cnn",
  "level": 3
}, {
  "value": "13.5.3 Python Implementation (PyTorch)",
  "id": "1353-python-implementation-pytorch",
  "level": 3
}, {
  "value": "13.5.4 Complexity Analysis",
  "id": "1354-complexity-analysis",
  "level": 3
}, {
  "value": "13.5.5 Advantages and Disadvantages",
  "id": "1355-advantages-and-disadvantages",
  "level": 3
}, {
  "value": "13.5.6 Edge Cases",
  "id": "1356-edge-cases",
  "level": 3
}, {
  "value": "13.6 Object Detection",
  "id": "136-object-detection",
  "level": 2
}, {
  "value": "13.6.1 Evaluation Metric: IoU and mAP",
  "id": "1361-evaluation-metric-iou-and-map",
  "level": 3
}, {
  "value": "13.6.2 Two-Stage Detectors: R-CNN Family",
  "id": "1362-two-stage-detectors-r-cnn-family",
  "level": 3
}, {
  "value": "13.6.3 Single-Stage Detectors: YOLO",
  "id": "1363-single-stage-detectors-yolo",
  "level": 3
}, {
  "value": "13.6.4 Python Implementation",
  "id": "1364-python-implementation",
  "level": 3
}, {
  "value": "13.6.5 Complexity Analysis",
  "id": "1365-complexity-analysis",
  "level": 3
}, {
  "value": "13.6.6 Advantages and Disadvantages",
  "id": "1366-advantages-and-disadvantages",
  "level": 3
}, {
  "value": "13.6.7 Edge Cases",
  "id": "1367-edge-cases",
  "level": 3
}, {
  "value": "13.7 Segmentation",
  "id": "137-segmentation",
  "level": 2
}, {
  "value": "13.7.1 Semantic Segmentation",
  "id": "1371-semantic-segmentation",
  "level": 3
}, {
  "value": "13.7.2 Instance Segmentation: Mask R-CNN",
  "id": "1372-instance-segmentation-mask-r-cnn",
  "level": 3
}, {
  "value": "13.7.3 Python Implementation",
  "id": "1373-python-implementation",
  "level": 3
}, {
  "value": "13.7.4 Complexity Analysis",
  "id": "1374-complexity-analysis",
  "level": 3
}, {
  "value": "13.7.5 Advantages and Disadvantages",
  "id": "1375-advantages-and-disadvantages",
  "level": 3
}, {
  "value": "13.7.6 Edge Cases",
  "id": "1376-edge-cases",
  "level": 3
}, {
  "value": "13.8 CV Tasks Comparison",
  "id": "138-cv-tasks-comparison",
  "level": 2
}, {
  "value": "Task Selection Guide",
  "id": "task-selection-guide",
  "level": 3
}, {
  "value": "13.9 CNN Architectures Comparison",
  "id": "139-cnn-architectures-comparison",
  "level": 2
}, {
  "value": "13.9.1 Architecture Decision Guide",
  "id": "1391-architecture-decision-guide",
  "level": 3
}, {
  "value": "13.9.2 Evolution Timeline",
  "id": "1392-evolution-timeline",
  "level": 3
}, {
  "value": "13.10 Interview Corner",
  "id": "1310-interview-corner",
  "level": 2
}, {
  "value": "Q1: Explain the convolution operation in CNNs. How does it differ from correlation?",
  "id": "q1-explain-the-convolution-operation-in-cnns-how-does-it-differ-from-correlation",
  "level": 3
}, {
  "value": "Q2: What is receptive field? How do you compute it?",
  "id": "q2-what-is-receptive-field-how-do-you-compute-it",
  "level": 3
}, {
  "value": "Q3: What is transfer learning? When and why do we use it?",
  "id": "q3-what-is-transfer-learning-when-and-why-do-we-use-it",
  "level": 3
}, {
  "value": "Q4: Explain the vanishing gradient problem and how ResNet solves it.",
  "id": "q4-explain-the-vanishing-gradient-problem-and-how-resnet-solves-it",
  "level": 3
}, {
  "value": "Q5: What is the difference between semantic segmentation and instance segmentation?",
  "id": "q5-what-is-the-difference-between-semantic-segmentation-and-instance-segmentation",
  "level": 3
}, {
  "value": "Q6: How does Non-Maximum Suppression (NMS) work?",
  "id": "q6-how-does-non-maximum-suppression-nms-work",
  "level": 3
}, {
  "value": "Q7: What is data augmentation and why is it critical for CV?",
  "id": "q7-what-is-data-augmentation-and-why-is-it-critical-for-cv",
  "level": 3
}, {
  "value": "13.11 Applications in Real Systems",
  "id": "1311-applications-in-real-systems",
  "level": 2
}, {
  "value": "13.11.1 Face Recognition",
  "id": "13111-face-recognition",
  "level": 3
}, {
  "value": "13.11.2 Autonomous Driving",
  "id": "13112-autonomous-driving",
  "level": 3
}, {
  "value": "13.11.3 Medical Imaging",
  "id": "13113-medical-imaging",
  "level": 3
}, {
  "value": "13.11.4 Augmented Reality Filters",
  "id": "13114-augmented-reality-filters",
  "level": 3
}, {
  "value": "13.12 Vision Transformers (ViT)",
  "id": "1312-vision-transformers-vit",
  "level": 2
}, {
  "value": "13.12.1 Architecture",
  "id": "13121-architecture",
  "level": 3
}, {
  "value": "13.12.2 Algorithm: ViT Forward Pass",
  "id": "13122-algorithm-vit-forward-pass",
  "level": 3
}, {
  "value": "13.12.3 Key Advantages and Limitations",
  "id": "13123-key-advantages-and-limitations",
  "level": 3
}, {
  "value": "13.12.4 Efficient Variants",
  "id": "13124-efficient-variants",
  "level": 3
}, {
  "value": "13.13 Generative Image Models",
  "id": "1313-generative-image-models",
  "level": 2
}, {
  "value": "13.13.1 Generative Adversarial Networks (GANs)",
  "id": "13131-generative-adversarial-networks-gans",
  "level": 3
}, {
  "value": "13.13.2 Diffusion Models",
  "id": "13132-diffusion-models",
  "level": 3
}, {
  "value": "13.13.3 Latent Diffusion Models (Stable Diffusion)",
  "id": "13133-latent-diffusion-models-stable-diffusion",
  "level": 3
}, {
  "value": "13.13.4 Python Implementation",
  "id": "13134-python-implementation",
  "level": 3
}, {
  "value": "13.13.5 Evaluation Metrics",
  "id": "13135-evaluation-metrics",
  "level": 3
}, {
  "value": "13.13.6 Advantages and Disadvantages",
  "id": "13136-advantages-and-disadvantages",
  "level": 3
}, {
  "value": "13.13.7 Edge Cases",
  "id": "13137-edge-cases",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 2
}, {
  "value": "Quick Reference \\u2014 CNN Components",
  "id": "quick-reference-u2014-cnn-components",
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
  "value": "Q1: What key innovation enabled ResNet to train 152-layer networks?",
  "id": "q1-what-key-innovation-enabled-resnet-to-train-152-layer-networks",
  "level": 3
}, {
  "value": "Q2: What is the main advantage of YOLO over R-CNN-style detectors?",
  "id": "q2-what-is-the-main-advantage-of-yolo-over-r-cnn-style-detectors",
  "level": 3
}, {
  "value": "Q3: Diffusion models generate images by:",
  "id": "q3-diffusion-models-generate-images-by",
  "level": 3
}, {
  "value": "Q4: What does Non-Maximum Suppression (NMS) accomplish in object detection?",
  "id": "q4-what-does-non-maximum-suppression-nms-accomplish-in-object-detection",
  "level": 3
}, {
  "value": "Q5: Which of the following correctly describes the receptive field of a CNN?",
  "id": "q5-which-of-the-following-correctly-describes-the-receptive-field-of-a-cnn",
  "level": 3
}, {
  "value": "Q6: A 3\\u00d73 convolution with 64 filters operating on a 224\\u00d7224\\u00d73 image has how many parameters (including bias)?",
  "id": "q6-a-3u00d73-convolution-with-64-filters-operating-on-a-224u00d7224u00d73-image-has-how-many-parameters-including-bias",
  "level": 3
}, {
  "value": "Q7: What is the key advantage of Vision Transformers over CNNs?",
  "id": "q7-what-is-the-key-advantage-of-vision-transformers-over-cnns",
  "level": 3
}, {
  "value": "Q8: In the Canny edge detector, what is the purpose of non-maximum suppression?",
  "id": "q8-in-the-canny-edge-detector-what-is-the-purpose-of-non-maximum-suppression",
  "level": 3
}, {
  "value": "Q9: What does the triplet loss in FaceNet enforce?",
  "id": "q9-what-does-the-triplet-loss-in-facenet-enforce",
  "level": 3
}, {
  "value": "Q10: Which segmentation task distinguishes between individual object instances (e.g., two different cars)?",
  "id": "q10-which-segmentation-task-distinguishes-between-individual-object-instances-eg-two-different-cars",
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
  "value": "Challenge Problems",
  "id": "challenge-problems",
  "level": 3
}, {
  "value": "Project: Real-Time Face Filter AR Application",
  "id": "project-real-time-face-filter-ar-application",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "chapter-13-computer-vision",
        children: "Chapter 13: Computer Vision"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Previous:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/12-nlp",
        children: "Chapter 12: Natural Language Processing"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/artificial-intelligence/14-robotics",
        children: "Chapter 14: Robotics"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the conclusion of this chapter, the student will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe how images are formed and represented as numerical arrays."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement image filtering operations (blurring, sharpening, edge detection)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute image gradients and apply the Canny edge detection pipeline."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extract feature descriptors (SIFT, HOG) for object recognition."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain CNN building blocks (convolution, pooling, fully connected layers)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare object detection paradigms: YOLO (single-shot) vs R-CNN (two-stage)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate semantic segmentation, instance segmentation, and panoptic segmentation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand Vision Transformer architecture and its divergence from CNNs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe how diffusion models generate high-quality images from noise."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-computer-vision-matters",
      children: "Why Computer Vision Matters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy → How Humans See vs How Machines \"See\""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When you look at a photograph, your brain performs an extraordinary sequence of operations in milliseconds: your retinas capture photons, the optic nerve transmits electrical signals to the primary visual cortex (V1), which detects edges and orientations. Higher cortical areas (V2, V4, IT) progressively assemble these edges into contours, shapes, and finally object identities. You don't \"see\" pixels → you see meaning."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Computer vision mimics this biological pipeline using mathematics and software:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Biological Process"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Computer Vision Equivalent"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Photoreceptors capture light"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Camera sensor records pixel intensities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V1 detects oriented edges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sobel / Canny edge detection filters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V2 groups edges into contours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contour detection / region grouping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IT cortex recognizes objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CNN classifiers + object detectors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Visual memory recalls past objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training data + learned weights"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Without computer vision, self-driving cars would be blind, medical X-rays would require purely manual review, smartphone face unlock would be impossible, and augmented reality filters would have nothing to track. CV transforms unstructured pixel data into structured understanding → enabling machines to interpret the visual world as humans do, but at scales and speeds no human can match."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Topics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Terms"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image Representation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pixels, color spaces, tensors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RGB, grayscale, H×W×3, normalization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Filtering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convolution, Gaussian, Sobel, median"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel, stride, padding, blur"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Edge Detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canny, gradient, non-max suppression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hysteresis, gradient magnitude"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Feature Extraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIFT, HOG, ORB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keypoints, descriptors, scale-invariant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CNNs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conv layers, pooling, ReLU, backprop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature map, stride, parameter sharing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Object Detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YOLO, Faster R-CNN, SSD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bounding box, anchor box, IoU, mAP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic, instance, U-Net, Mask R-CNN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pixel-wise, mask, panoptic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vision Transformers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ViT, patch embedding, self-attention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patch size, positional encoding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generative Models"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAN, Diffusion, Stable Diffusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latent space, denoising, FID"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Image Representation] --> B[Filtering & Convolution]\n    B --> C[Edge Detection]\n    B --> D[Feature Extraction]\n    A --> E[CNN Architecture]\n    E --> F[Classification]\n    E --> G[Object Detection]\n    G --> H[YOLO / R-CNN Family]\n    E --> I[Segmentation]\n    I --> J[U-Net / Mask R-CNN]\n    A --> K[Vision Transformer]\n    A --> L[Generative Models]\n    L --> M[GAN]\n    L --> N[Diffusion]\n    F --> O[CV Tasks Comparison]\n    G --> O\n    I --> O\n    O --> P[Interview Corner]\n    P --> Q[Real-World Applications]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "131-image-representation",
      children: "13.1 Image Representation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy → Digital Images as Number Grids"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Think of a grayscale image as a spreadsheet where each cell holds a number between 0 (pure black) and 255 (pure white). A 4×4 grayscale image is simply a 4×4 grid of integers. A color image is three such spreadsheets stacked → one for red, one for green, one for blue. Computer vision algorithms are mathematical operations performed on these number grids."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1311-pixels-and-color-spaces",
      children: "13.1.1 Pixels and Color Spaces"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An image is a function $I(x, y)$ mapping spatial coordinates to intensity values. For a grayscale image:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$I(x, y) \\in {0, 1, \\dots, 255}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For a color (RGB) image:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$I(x, y) = [R(x, y), G(x, y), B(x, y)]^\\top$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common color spaces:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Color Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Channels"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RGB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Red, Green, Blue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Display, cameras"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Grayscale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Luminance only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge detection, OCR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HSV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hue, Saturation, Value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Color-based segmentation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LAB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lightness, A (green-red), B (blue-yellow)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perceptually uniform, color difference"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1312-image-as-a-tensor",
      children: "13.1.2 Image as a Tensor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In deep learning frameworks, images are represented as tensors:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shape:"
        }), " $(C, H, W)$ in PyTorch (channels-first), $(H, W, C)$ in TensorFlow (channels-last)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Batch:"
        }), " $(N, C, H, W)$ for N images processed together"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Normalization:"
        }), " Pixel values scaled to $[0, 1]$ or $[-1, 1]$ for stable training"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1313-algorithm-load-and-inspect-image",
      children: "13.1.3 Algorithm: Load and Inspect Image"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Read image file from disk.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Decode into pixel matrix.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Determine shape (height, width, channels).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Access specific pixel value at $(x, y)$.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Convert between color spaces (RGB → Grayscale).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6:"
      }), " Normalize pixel values to $[0, 1]$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION load_image(path):\n    img ← read_file(path)\n    pixels ← decode_to_matrix(img)\n    height, width, channels ← pixels.shape\n    PRINT \"Image size:\", width, \"×\", height, \", channels:\", channels\n    pixel_val ← pixels[y, x]        // Access pixel at (x, y)\n    gray ← rgb_to_grayscale(pixels) // Weighted sum: 0.299R + 0.587G + 0.114B\n    normalized ← gray / 255.0       // Scale to [0, 1]\n    RETURN normalized\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace (4×4 Grayscale Image):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pixel Grid (4×4)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw pixels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[[200, 210, 180, 50], [190, 205, 170, 45], [30, 35, 28, 10], [25, 30, 20, 8]]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read shape"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "height=4, width=4, channels=1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access (1,2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I(1,2) = 170"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "To grayscale (already gray)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "same grid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normalize ÷255"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[[0.784, 0.824, 0.706, 0.196], [0.745, 0.804, 0.667, 0.176], [0.118, 0.137, 0.110, 0.039], [0.098, 0.118, 0.078, 0.031]]"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1314-python-implementation",
      children: "13.1.4 Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import cv2\nimport numpy as np\n\n# Read image\nimg = cv2.imread('input.jpg')                    # Shape: (H, W, 3) BGR\nimg_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)    # Convert BGR → RGB\n\n# Inspect properties\nh, w, c = img_rgb.shape\nprint(f'Dimensions: {w}×{h}, Channels: {c}')\n\n# Access pixel at row=100, col=200\npixel = img_rgb[100, 200]                          # [R, G, B] values\n\n# Convert to grayscale\ngray = cv2.cvtColor(img_rgb, cv2.COLOR_RGB2GRAY)   # Shape: (H, W)\n\n# Normalize to [0, 1]\ngray_norm = gray.astype(np.float32) / 255.0\n\nprint(f'Grayscale shape: {gray.shape}')\nprint(f'Pixel (100,200): {pixel}, Normalized range: [{gray_norm.min():.3f}, {gray_norm.max():.3f}]')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1315-complexity-analysis",
      children: "13.1.5 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(H \\times W \\times C)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(H \\times W \\times C)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must read every pixel from disk into memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Color conversion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(H \\times W)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$ extra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted sum per pixel, no extra storage proportional to input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Normalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(H \\times W)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(1)$ extra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single divide per pixel, in-place possible"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1316-advantages-and-disadvantages",
      children: "13.1.6 Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Simple matrix representation works with standard linear algebra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No semantic meaning captured (just raw intensities)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple color spaces available for different tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RGB is highly correlated → not optimal for all algorithms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tensor format integrates directly with deep learning frameworks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large images (4K, 8K) require significant memory ($H \\times W \\times C \\times 4$ bytes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware-agnostic (CPU, GPU, TPU all process arrays)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensitive to lighting changes at raw pixel level"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1317-edge-cases",
      children: "13.1.7 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Different lighting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same scene at noon vs dusk produces vastly different pixel values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use normalized color spaces (LAB, HSV); augment training data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compression artifacts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JPEG introduces blocking artifacts that change pixel values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use higher quality JPEG; apply slight blur before processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Occlusion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Part of object hidden; pixel values don't represent full object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use feature-based methods (SIFT) that work with partial views"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Viewpoint change"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same object from different angles gives different pixel arrangements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use scale/rotation-invariant features or data augmentation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sensor noise"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dark images have shot noise affecting pixel values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply Gaussian or median filtering as preprocessing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Heterogeneous input sizes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Images from different sources have different resolutions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resize to fixed dimensions; use adaptive pooling in CNNs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "132-image-filtering",
      children: "13.2 Image Filtering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy → Smoothing a Rough Surface"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Imagine running your hand over a rough wooden table. If you press hard and move slowly, your hand glides over the surface → the fine bumps average out. This is a low-pass filter: high-frequency details (bumps) are removed, leaving the smooth overall shape. If you instead trace the edges of the table with your fingernail, you feel the sharp boundary where the table ends → this is a high-pass filter, emphasizing rapid changes (edges)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Image filtering applies a small matrix called a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "kernel"
      }), " (or filter) across every pixel of the image. The kernel defines how each pixel's new value is computed from its neighbors."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1321-convolution-operation",
      children: "13.2.1 Convolution Operation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The fundamental operation in image filtering is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "convolution"
      }), ". Given an input image $I$ and a kernel $K$ of size $k \\times k$:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$(I * K)[i, j] = \\sum_{m=-a}^{a} \\sum_{n=-b}^{b} I[i+m, j+n] \\cdot K[m+a, n+b]$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where $a = \\lfloor k/2 \\rfloor$ and $b = \\lfloor k/2 \\rfloor$."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1322-algorithm-2d-convolution",
      children: "13.2.2 Algorithm: 2D Convolution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Define kernel $K$ (e.g., 3×3 Gaussian blur kernel).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Flip kernel 180° (convolution requires kernel reversal; correlation does not).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Slide kernel over every pixel position in the input image.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " At each position, multiply kernel values with overlapping pixel values.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Sum all products → output pixel value.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6:"
      }), " Handle borders via padding (zero, replicate, reflect) or truncation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION convolve2d(image[1..H][1..W], kernel[1..k][1..k]):\n    pad ← floor(k / 2)\n    padded ← ZERO_PAD(image, pad)     // Add border of zeros\n    output ← new_array[H][W]\n\n    FOR y ← 1 TO H:\n        FOR x ← 1 TO W:\n            sum ← 0\n            FOR i ← 1 TO k:\n                FOR j ← 1 TO k:\n                    sum ← sum + padded[y + i - 1][x + j - 1] * kernel[i][j]\n                END FOR\n            END FOR\n            output[y][x] ← sum\n        END FOR\n    END FOR\n\n    RETURN output\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace → 3×3 Image, 2×2 Kernel (No Padding):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Region"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Computation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input image (3×3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All pixels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[[5, 3, 1], [2, 8, 4], [7, 6, 9]]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel (2×2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[[1, 0], [0, -1]]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(1,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Top-left 2×2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5×1 + 3×0 + 2×0 + 8×(-1) = 5 - 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "-3"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(1,2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Top-right 2×2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3×1 + 1×0 + 8×0 + 4×(-1) = 3 - 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "-1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(2,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bottom-left 2×2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2×1 + 8×0 + 7×0 + 6×(-1) = 2 - 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "-4"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(2,2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bottom-right 2×2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8×1 + 4×0 + 6×0 + 9×(-1) = 8 - 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "-1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Output (2×2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[[-3, -1], [-4, -1]]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edge-enhanced"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1323-common-filters",
      children: "13.2.3 Common Filters"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Filter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gaussian Blur"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\frac{1}{16}\\begin{bmatrix}1&2&1\\2&4&2\\1&2&1\\end{bmatrix}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smooths noise, removes high frequencies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sobel X"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\begin{bmatrix}-1&0&1\\-2&0&2\\-1&0&1\\end{bmatrix}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vertical edge detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sobel Y"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\begin{bmatrix}-1&-2&-1\\0&0&0\\1&2&1\\end{bmatrix}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal edge detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Laplacian"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\begin{bmatrix}0&-1&0\\-1&4&-1\\0&-1&0\\end{bmatrix}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Second derivative → detects edges in all directions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sharpen"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\begin{bmatrix}0&-1&0\\-1&5&-1\\0&-1&0\\end{bmatrix}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amplifies high frequencies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Median"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ (non-linear)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replaces pixel with median of neighbors; excellent for salt-and-pepper noise"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1324-python-implementation",
      children: "13.2.4 Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import cv2\nimport numpy as np\n\n# ===== Gaussian Blur =====\nimg = cv2.imread('input.jpg', cv2.IMREAD_GRAYSCALE)\ngaussian = cv2.GaussianBlur(img, (5, 5), sigmaX=1.5)\n\n# ===== Manual 3×3 Convolution =====\ndef convolve_manual(image, kernel):\n    k_h, k_w = kernel.shape\n    pad_h, pad_w = k_h // 2, k_w // 2\n    padded = np.pad(image, ((pad_h, pad_h), (pad_w, pad_w)), mode='constant')\n    output = np.zeros_like(image)\n    for y in range(image.shape[0]):\n        for x in range(image.shape[1]):\n            region = padded[y:y + k_h, x:x + k_w]\n            output[y, x] = np.sum(region * kernel)\n    return output\n\nsobel_x = np.array([[-1, 0, 1],\n                     [-2, 0, 2],\n                     [-1, 0, 1]], dtype=np.float32)\nedges_x = convolve_manual(img, sobel_x)\n\n# ===== Median Filter =====\nmedian = cv2.medianBlur(img, 5)            # 5×5 kernel → removes salt-and-pepper\n\n# ===== Sharpening =====\nsharpen_k = np.array([[0, -1, 0],\n                      [-1, 5, -1],\n                      [0, -1, 0]], dtype=np.float32)\nsharpened = cv2.filter2D(img, -1, sharpen_k)\n\n# Display results\ncv2.imshow('Original', img)\ncv2.imshow('Gaussian Blur', gaussian)\ncv2.imshow('Sobel X', np.abs(edges_x).astype(np.uint8))\ncv2.imshow('Sharpened', sharpened)\ncv2.waitKey(0)\ncv2.destroyAllWindows()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1325-complexity-analysis",
      children: "13.2.5 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convolution (naive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(H \\times W \\times k^2)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(H \\times W)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every pixel requires $k^2$ multiply-adds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gaussian blur (separable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(H \\times W \\times k)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(H \\times W)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2D Gaussian = 1D horizontal × 1D vertical; $k$ vs $k^2$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Median filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(H \\times W \\times k^2 \\log k)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(k^2)$ per pixel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting the window requires $k^2 \\log k$ comparisons"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FFT-based convolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(HW \\log HW)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(HW)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FFT converts spatial convolution to frequency-domain multiplication"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " For small kernels ($k \\leq 7$), naive convolution is faster due to FFT overhead. For large kernels ($k \\geq 15$), FFT-based convolution wins."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1326-advantages-and-disadvantages",
      children: "13.2.6 Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Simple mathematical operation, easy to implement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Naive $O(HWk^2)$ is slow for large kernels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Highly parallelizable on GPU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed kernel = uniform treatment across entire image"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Separable filters reduce cost significantly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blurring removes fine details irreversibly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Well-understood frequency-domain properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-linear filters (median) break nice mathematical properties"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wide hardware support (OpenCV, GPU, SIMD)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boundary handling requires approximation (padding)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1327-edge-cases",
      children: "13.2.7 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Image borders"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel extends beyond image boundaries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use padding (zero, reflect, replicate, wrap)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Salt-and-pepper noise"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear blur spreads noise rather than removing it"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use median filter (non-linear)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "High-frequency textures"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filtering removes texture that may be informative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use guided filter or bilateral filter (edge-preserving)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Saturation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negative values clipped to 0; overflow above 255"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normalize output to valid range after convolution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Color images"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Applying grayscale filter to each channel independently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convert to HSV or LAB and filter luminance only"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "133-edge-detection",
      children: "13.3 Edge Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy → Finding the Outline in a Coloring Book"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When you color inside the lines of a coloring book, you first identify the boundaries → the dark lines separating one region from another. Your brain detects these boundaries by noticing sudden changes: the ink line is much darker than the paper. Edge detection algorithms do the same thing mathematically → they locate pixels where image intensity changes abruptly, indicating object boundaries, surface discontinuities, or depth changes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1331-image-gradients",
      children: "13.3.1 Image Gradients"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The gradient of an image $I$ at pixel $(x, y)$ is:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\nabla I(x, y) = \\begin{bmatrix} \\frac{\\partial I}{\\partial x} \\ \\frac{\\partial I}{\\partial y} \\end{bmatrix}$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gradient magnitude:"
        }), " $|\\nabla I| = \\sqrt{(\\frac{\\partial I}{\\partial x})^2 + (\\frac{\\partial I}{\\partial y})^2}$ → Strength of the edge."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gradient direction:"
        }), " $\\theta = \\text{atan2}(\\frac{\\partial I}{\\partial y}, \\frac{\\partial I}{\\partial x})$ → Orientation of the edge (perpendicular to edge direction)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1332-algorithm-canny-edge-detector",
      children: "13.3.2 Algorithm: Canny Edge Detector"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Canny detector (1986) remains the gold standard for edge detection. It is a multi-stage pipeline:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1 → Gaussian Smoothing:"
      }), " Blur the image with a Gaussian kernel to reduce noise and spurious gradients.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2 → Compute Gradients:"
      }), " Apply Sobel operators to compute $G_x$ and $G_y$ (gradients in x and y directions).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3 → Compute Magnitude and Direction:"
      }), " $M = \\sqrt{G_x^2 + G_y^2}$, $\\theta = \\text{atan2}(G_y, G_x)$.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4 → Non-Maximum Suppression (NMS):"
      }), " For each pixel, check if it is the maximum along the gradient direction. Keep only local maxima → this thins edges to single-pixel width.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5 → Double Thresholding:"
      }), " Classify each pixel as strong ($M > T_{\\text{high}}$), weak ($T_{\\text{low}} < M \\leq T_{\\text{high}}$), or suppressed ($M \\leq T_{\\text{low}}$).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6 → Edge Tracking by Hysteresis:"
      }), " Keep weak pixels only if they are connected to strong pixels. This removes weak edges from noise while preserving genuine edges that happen to have lower contrast."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION canny_edge(image, sigma, T_low, T_high):\n    // Step 1: Smooth\n    blurred ← gaussian_blur(image, sigma)\n\n    // Step 2: Compute gradients\n    Gx ← sobel_x(blurred)\n    Gy ← sobel_y(blurred)\n\n    // Step 3: Magnitude and direction\n    M ← sqrt(Gx^2 + Gy^2)\n    theta ← atan2(Gy, Gx)\n    theta ← QUANTIZE(theta)              // Round to 0°, 45°, 90°, 135°\n\n    // Step 4: Non-maximum suppression\n    suppressed ← ZEROS_LIKE(M)\n    FOR each pixel (y, x):\n        neighbors ← GET_NEIGHBORS_ALONG_GRADIENT(M, y, x, theta[y][x])\n        IF M[y][x] ≥ max(neighbors):\n            suppressed[y][x] ← M[y][x]\n        END IF\n    END FOR\n\n    // Step 5: Double threshold\n    strong ← suppressed > T_high\n    weak ← (suppressed > T_low) AND (suppressed ≤ T_high)\n\n    // Step 6: Edge tracking by hysteresis\n    edges ← strong\n    FOR each weak pixel:\n        IF any neighbor in 3×3 is strong:\n            edges[y][x] ← True\n        END IF\n    END FOR\n\n    RETURN edges\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace → 5×5 Gradient Magnitude with NMS:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assume gradient magnitudes ($M$) and quantized directions ($\\theta$) for a 5×5 region:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "5×5 Grid"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradient magnitude $M$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\begin{bmatrix} 10 & 12 & 40 & 42 & 15 \\ 15 & 18 & 95 & 88 & 20 \\ 12 & 16 & \\mathbf{120} & 90 & 18 \\ 8 & 10 & 85 & 78 & 14 \\ 5 & 8 & 30 & 28 & 10 \\end{bmatrix}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quantized $\\theta$ (0=horizontal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All pixels $\\theta = 0$ (edge running N-S, gradient E-W)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NMS check at (2,2)=120"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare with (2,1)=16 and (2,3)=90. 120 ≥ max(16, 90) ✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NMS check at (2,3)=90"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare with (2,2)=120 and (2,4)=18. 90 < 120 ❌ → suppress"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NMS check at (1,2)=95"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare with (1,1)=18 and (1,3)=88. 95 ≥ 88 ✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After NMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\begin{bmatrix} 0 & 0 & 40 & 0 & 0 \\ 0 & 0 & 95 & 0 & 0 \\ 0 & 0 & 120 & 0 & 0 \\ 0 & 0 & 85 & 0 & 0 \\ 0 & 0 & 30 & 0 & 0 \\end{bmatrix}$ (single-pixel vertical edge)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double threshold: $T_{\\text{low}}=50, T_{\\text{high}}=100$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong: 120 ($>$100). Weak: 95, 85 ($50<$...$≤100$). Suppressed: 40, 30"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hysteresis: 95 connected to 120? YES. 85 connected to 120? YES."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Final edge: 95, 120, 85 retained"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1333-python-implementation",
      children: "13.3.3 Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import cv2\nimport numpy as np\n\ndef canny_from_scratch(image_path, sigma=1.0, low_thresh=50, high_thresh=100):\n    img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE).astype(np.float32)\n\n    # Step 1: Gaussian smoothing\n    kernel_size = int(2 * np.ceil(3 * sigma) + 1)\n    blurred = cv2.GaussianBlur(img, (kernel_size, kernel_size), sigma)\n\n    # Step 2: Sobel gradients\n    Gx = cv2.Sobel(blurred, cv2.CV_64F, 1, 0, ksize=3)\n    Gy = cv2.Sobel(blurred, cv2.CV_64F, 0, 1, ksize=3)\n\n    # Step 3: Magnitude and direction\n    mag = np.sqrt(Gx**2 + Gy**2)\n    theta = np.arctan2(Gy, Gx) * 180.0 / np.pi\n    theta = (theta + 180) % 180  # Map to [0, 180)\n\n    # Step 4: Non-maximum suppression\n    nms = np.zeros_like(mag)\n    for y in range(1, mag.shape[0] - 1):\n        for x in range(1, mag.shape[1] - 1):\n            angle = theta[y, x]\n            if (0 <= angle < 22.5) or (157.5 <= angle <= 180):\n                n1, n2 = mag[y, x-1], mag[y, x+1]       # horizontal\n            elif 22.5 <= angle < 67.5:\n                n1, n2 = mag[y-1, x+1], mag[y+1, x-1]   # 45° diagonal\n            elif 67.5 <= angle < 112.5:\n                n1, n2 = mag[y-1, x], mag[y+1, x]       # vertical\n            else:\n                n1, n2 = mag[y-1, x-1], mag[y+1, x+1]   # 135° diagonal\n            if mag[y, x] >= n1 and mag[y, x] >= n2:\n                nms[y, x] = mag[y, x]\n\n    # Step 5 & 6: Double threshold + hysteresis\n    strong = 255\n    weak = 75\n    edges = np.zeros_like(nms, dtype=np.uint8)\n    strong_y, strong_x = np.where(nms > high_thresh)\n    weak_y, weak_x = np.where((nms >= low_thresh) & (nms <= high_thresh))\n    edges[strong_y, strong_x] = strong\n    edges[weak_y, weak_x] = weak\n\n    # Hysteresis: keep weak if connected to strong\n    for y in range(1, edges.shape[0] - 1):\n        for x in range(1, edges.shape[1] - 1):\n            if edges[y, x] == weak:\n                if np.any(edges[y-1:y+2, x-1:x+2] == strong):\n                    edges[y, x] = strong\n                else:\n                    edges[y, x] = 0\n\n    return edges\n\n# ===== OpenCV built-in (production use) =====\nimg = cv2.imread('input.jpg', cv2.IMREAD_GRAYSCALE)\nedges_cv = cv2.Canny(img, threshold1=50, threshold2=100)\n\ncv2.imshow('Canny from scratch', canny_from_scratch('input.jpg'))\ncv2.imshow('Canny OpenCV', edges_cv)\ncv2.waitKey(0)\ncv2.destroyAllWindows()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1334-complexity-analysis",
      children: "13.3.4 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Stage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gaussian blur"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(H \\times W \\times k)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separable 1D convolution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sobel gradients"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(H \\times W)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two 3×3 convolutions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(H \\times W)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single pass, constant neighbors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double threshold"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(H \\times W)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hysteresis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(H \\times W)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single pass with 3×3 neighbor check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$O(H \\times W \\times k)$"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dominated by Gaussian blur"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1335-advantages-and-disadvantages",
      children: "13.3.5 Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Low error rate → good detection of real edges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensitive to threshold parameters ($T_{\\text{low}}$, $T_{\\text{high}}$)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Well-localized → detected edges close to true edges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gaussian blur may remove fine edge details"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single-pixel edge response (NMS ensures minimal response)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower than simple gradient-based methods (Sobel alone)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Robust to noise (Gaussian pre-filtering)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Struggles with very noisy images regardless of tuning"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1336-edge-cases",
      children: "13.3.6 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Occlusion boundaries"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True object edges may have low contrast where objects overlap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower $T_{\\text{high}}$; use multi-scale Canny"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Texture vs edges"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fine texture produces many spurious edges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increase Gaussian $\\sigma$ to suppress texture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Variable lighting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradient magnitudes vary across the image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use adaptive thresholding instead of fixed $T_{\\text{low}}$, $T_{\\text{high}}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Noisy images"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gaussian smoothing may not eliminate heavy noise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply stronger blur; use bilateral filter for edge-preserving smoothing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Thick edges after gradient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sobel produces 2-3 pixel wide edges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NMS step is critical → cannot be skipped"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "134-feature-extraction",
      children: "13.4 Feature Extraction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy → Detecting Landmarks in a Familiar City"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When you navigate a city, you recognize locations by distinctive landmarks → a tall clock tower, a curved bridge, a colorful mural. Even if the weather changes (different lighting) or you approach from a different street (different viewpoint), you recognize the landmark because its distinctive structure remains. Feature extraction in CV does the same: it identifies \"interesting\" points in an image that are distinctive, repeatable, and invariant to transformations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1341-sift-scale-invariant-feature-transform",
      children: "13.4.1 SIFT (Scale-Invariant Feature Transform)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SIFT (Lowe, 2004) detects keypoints that are invariant to scale, rotation, and partially invariant to illumination and viewpoint changes."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1 → Scale-Space Construction:"
      }), " Build a pyramid of progressively blurred images. For each octave, generate $S$ scales using Gaussian blur with increasing $\\sigma$.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2 → Difference of Gaussian (DoG):"
      }), " Subtract adjacent blurred images to approximate the Laplacian of Gaussian → this highlights edges and corners at multiple scales.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3 → Keypoint Localization:"
      }), " Find local extrema in the DoG pyramid. Each candidate keypoint is compared with 8 neighbors at the same scale and 9 neighbors in each adjacent scale (26 total).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4 → Keypoint Refinement:"
      }), " Interpolate to sub-pixel precision. Remove low-contrast keypoints and eliminate edge responses (using Hessian ratio).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5 → Orientation Assignment:"
      }), " Compute gradient magnitude and direction around each keypoint. Build a 36-bin orientation histogram. Assign the dominant orientation (peak) to the keypoint.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6 → Descriptor Computation:"
      }), " Extract a $16 \\times 16$ window around each keypoint, divide into $4 \\times 4$ sub-blocks, compute 8-bin gradient histogram per block. Concatenate → $4 \\times 4 \\times 8 = 128$-dimensional descriptor."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION sift_keypoints(image):\n    // Step 1-2: Build DoG pyramid\n    pyramid ← []\n    FOR octave ← 1 TO num_octaves:\n        scale_img ← RESIZE(image, 1/2^(octave-1))\n        dog_images ← []\n        FOR s ← 1 TO num_scales:\n            blurred ← gaussian_blur(scale_img, sigma * k^(s-1))\n            IF s > 1:\n                dog ← blurred - prev_blurred\n                APPEND dog TO dog_images\n            prev_blurred ← blurred\n        APPEND dog_images TO pyramid\n\n    // Step 3: Find extrema\n    keypoints ← []\n    FOR each dog in pyramid:\n        FOR each pixel (y, x):\n            IF pixel is max OR min among 26 neighbors:\n                APPEND {x, y, scale, octave} TO keypoints\n\n    // Step 4: Refine → sub-pixel, remove low contrast / edges\n    keypoints ← SUB_PIXEL_REFINE(keypoints)\n    keypoints ← FILTER_CONTRAST(keypoints, min_contrast)\n    keypoints ← FILTER_EDGE(keypoints, max_ratio)\n\n    // Step 5: Assign orientation\n    FOR each kp in keypoints:\n        hist ← [0...35]    // 36 bins, each = 10°\n        FOR each pixel in 4.5σ neighborhood:\n            weight ← magnitude * gaussian_weight(distance)\n            bin ← FLOOR(angle / 10)\n            hist[bin] ← hist[bin] + weight\n        kp.orientation ← MAX_BIN(hist)\n\n    // Step 6: Build descriptor (128-d vector)\n    FOR each kp in keypoints:\n        desc ← []\n        FOR each 4×4 sub-block in 16×16 window:\n            hist_8bin ← [0...7]\n            FOR each pixel in sub-block:\n                bin ← FLOOR(angle / 45)    // 45° per bin\n                hist_8bin[bin] ← hist_8bin[bin] + magnitude\n            APPEND hist_8bin TO desc\n        NORMALIZE(desc)\n        CLIP(desc, max_val=0.2)     // Reduce illumination effects\n        NORMALIZE(desc)\n        kp.descriptor ← desc\n\n    RETURN keypoints, descriptors   // 128-dimensional per keypoint\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace → Orientation Assignment for One Keypoint:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assume a keypoint at scale $\\sigma = 1.6$ and a $4.5\\sigma = 7.2$ pixel neighborhood:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Values"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7×7 gradient magnitudes around keypoint at (10, 10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\begin{bmatrix}0&2&5&8&6&3&1\\2&8&15&20&14&5&2\\5&20&40&\\mathbf{50}&35&12&3\\8&25&45&55&40&15&5\\6&18&35&42&30&10&3\\3&8&12&15&10&4&1\\1&2&3&5&3&1&0\\end{bmatrix}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gradient directions (quantized to 8 bins, 0-315°, each 45°)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\begin{bmatrix}0&0&45&90&45&0&0\\0&45&90&90&90&45&0\\0&90&90&90&90&45&0\\45&90&90&90&90&45&45\\45&90&90&90&90&45&45\\0&45&90&90&90&45&0\\0&0&45&45&45&0&0\\end{bmatrix}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build 36-bin orientation histogram weighted by magnitude × Gaussian"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Bin 90° gets contributions from pixels with direction~90°: 50+55+45+40+35+42 ≈ ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "267"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find peak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Peak at 90° (vertical gradient = horizontal edge). Keypoint orientation = 90°"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assign descriptor"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["16 sub-blocks × 8 bins = 128 values. First sub-block (top-left 4×4): ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[0, 2, 8, 15, 6, 1, 0, 0]"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normalize + clip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unit vector with each element clipped to ≤0.2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1342-python-implementation",
      children: "13.4.2 Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import cv2\nimport numpy as np\n\n# ===== SIFT with OpenCV =====\nimg = cv2.imread('input.jpg', cv2.IMREAD_GRAYSCALE)\nsift = cv2.SIFT_create()                        # Default parameters\nkeypoints, descriptors = sift.detectAndCompute(img, mask=None)\n\nprint(f'Detected {len(keypoints)} keypoints')\nprint(f'Descriptor shape: {descriptors.shape}')  # (N, 128)\n\n# Draw keypoints\nimg_kp = cv2.drawKeypoints(img, keypoints, None, flags=cv2.DRAW_MATCHES_FLAGS_DRAW_RICH_KEYPOINTS)\ncv2.imshow('SIFT Keypoints', img_kp)\ncv2.waitKey(0)\ncv2.destroyAllWindows()\n\n# ===== Feature Matching Between Two Images =====\nimg2 = cv2.imread('input2.jpg', cv2.IMREAD_GRAYSCALE)\nkp2, desc2 = sift.detectAndCompute(img2, None)\n\nbf = cv2.BFMatcher(cv2.NORM_L2, crossCheck=True)\nmatches = bf.match(descriptors, desc2)\nmatches = sorted(matches, key=lambda x: x.distance)\n\n# Draw top 50 matches\nimg_matches = cv2.drawMatches(img, keypoints, img2, kp2, matches[:50], None,\n                               flags=cv2.DrawMatchesFlags_NOT_DRAW_SINGLE_POINTS)\ncv2.imshow('SIFT Matches', img_matches)\ncv2.waitKey(0)\ncv2.destroyAllWindows()\n\n# ===== HOG Descriptor (for pedestrian detection) =====\nhog = cv2.HOGDescriptor()\nhog.setSVMDetector(cv2.HOGDescriptor_getDefaultPeopleDetector())\nimg_color = cv2.imread('street.jpg')\nboxes, weights = hog.detectMultiScale(img_color, winStride=(8, 8))\nfor (x, y, w, h) in boxes:\n    cv2.rectangle(img_color, (x, y), (x + w, y + h), (0, 255, 0), 2)\ncv2.imshow('HOG Pedestrian Detection', img_color)\ncv2.waitKey(0)\ncv2.destroyAllWindows()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1343-complexity-analysis",
      children: "13.4.3 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIFT detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(H \\times W \\times S \\times O)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(H \\times W)$ pyramid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each scale-octave level processed; $S$ = scales, $O$ = octaves"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIFT descriptor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(N \\times 128)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(N \\times 128)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$N$ keypoints, each with 128-d normalized vector"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HOG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(H \\times W)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(H \\times W)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-pass gradient computation + block normalization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Feature matching (brute force)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(N_1 \\times N_2 \\times D)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(D)$ per match"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$N_1$, $N_2$ = keypoints, $D$ = descriptor dimension"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1344-advantages-and-disadvantages",
      children: "13.4.4 Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Scale invariant"
            }), " → works at multiple resolutions"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computationally expensive (patented, slow)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Rotation invariant"
            }), " → orientation normalization"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128-d descriptor is memory-heavy for large datasets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Robust to illumination changes"
            }), " → gradient-based, intensity-normalized"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not robust to extreme affine transformations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Highly distinctive"
            }), " → 128-d vector provides strong matching"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIFT was patented (US expired 2020; free now)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Occlusion-tolerant → works with partial views"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires textured regions; fails on blank walls"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1345-edge-cases",
      children: "13.4.5 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Low texture"
            }), " (e.g., blank wall)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No keypoints detected (no distinctive features)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use global descriptors (HOG, GIST) instead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Extreme blur"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keypoints shift; descriptor becomes noisy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deblur before feature extraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Repeated patterns"
            }), " (e.g., grid)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many similar keypoints cause matching ambiguity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use ratio test (Lowe's 0.7 threshold)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Large viewpoint change"
            }), " (>50°)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SIFT's affine invariance is limited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use ASIFT (affine-SIFT) or learned features (SuperPoint)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compression artifacts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JPEG blocks create false keypoints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slight Gaussian blur before detection"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "135-convolutional-neural-networks",
      children: "13.5 Convolutional Neural Networks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy → Hierarchical Vision in the Brain"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The human visual cortex processes images hierarchically: V1 detects simple edges and oriented bars, V2 groups these into contours and simple shapes, V4 recognizes more complex features like object parts, and the IT cortex puts it all together to recognize complete objects (a face, a car, a dog)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CNNs mirror this hierarchy exactly:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Early layers"
        }), " detect edges, corners, color blobs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Middle layers"
        }), " detect patterns like eyes, wheels, windows"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Late layers"
        }), " detect complete objects or object parts"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1351-cnn-building-blocks",
      children: "13.5.1 CNN Building Blocks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convolutional Layer:"
      }), " A learnable filter bank slides over the input, computing dot products at every position."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given input $X \\in \\mathbb{R}^{H \\times W \\times C_{\\text{in}}}$ and filter $W \\in \\mathbb{R}^{k \\times k \\times C_{\\text{in}} \\times C_{\\text{out}}}$:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$Y[i, j, o] = \\sum_{m=0}^{k-1} \\sum_{n=0}^{k-1} \\sum_{c=0}^{C_{\\text{in}}-1} X[i+m, j+n, c] \\cdot W[m, n, c, o] + b_o$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output size formula:"
      }), "\nGiven input size $W_{\\text{in}}$, kernel size $k$, padding $p$, stride $s$:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$W_{\\text{out}} = \\left\\lfloor \\frac{W_{\\text{in}} - k + 2p}{s} \\right\\rfloor + 1$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Activation Function (ReLU):"
      }), " $f(x) = \\max(0, x)$ → introduces non-linearity, mitigates vanishing gradient."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pooling Layer:"
      }), " Reduces spatial dimensions. Max pooling selects the maximum value in each $k \\times k$ window. Average pooling computes the mean."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fully Connected Layer:"
      }), " Every input neuron connects to every output neuron with a learned weight."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dropout:"
      }), " During training, randomly set a fraction $p$ of neurons to zero → prevents co-adaptation, acts as regularization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1352-algorithm-forward-pass-through-a-cnn",
      children: "13.5.2 Algorithm: Forward Pass Through a CNN"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Input image $X$ (e.g., $224 \\times 224 \\times 3$).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Apply $C_1$ convolution (filters: $96$, $11\\times11$, stride $4$, pad $0$). Output: $55 \\times 55 \\times 96$.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Apply ReLU activation.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Apply max pooling ($3\\times3$, stride $2$). Output: $27 \\times 27 \\times 96$.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Apply $C_2$ convolution ($256$ filters, $5\\times5$, pad $2$). Output: $27 \\times 27 \\times 256$.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6:"
      }), " Apply ReLU + Max Pool. Output: $13 \\times 13 \\times 256$.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 7:"
      }), " Apply $C_3$-$C_5$ convolutions + ReLU + Pooling progressively.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 8:"
      }), " Flatten 3D feature maps to 1D vector.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 9:"
      }), " Apply fully connected layers ($4096 \\rightarrow 4096 \\rightarrow 1000$).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 10:"
      }), " Apply Softmax: $P(y=i | x) = \\frac{e^{z_i}}{\\sum_j e^{z_j}}$ for 1000-class probabilities."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION cnn_forward(X, layers):\n    current ← X\n\n    FOR each conv_layer in layers:\n        // 2D convolution with learned weights W and bias b\n        Z ← convolve2d(current, conv_layer.W) + conv_layer.b\n        A ← relu(Z)\n        current ← max_pool(A, pool_size=2, stride=2)\n\n    flat ← FLATTEN(current)\n\n    FOR each fc_layer in layers.fc:\n        Z ← flat @ fc_layer.W + fc_layer.b\n        A ← relu(Z)                    // Or softmax for the last layer\n        flat ← A\n\n    probs ← softmax(flat)\n\n    RETURN probs                       // Shape: (1, 1000)\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace → Simple 1-Layer CNN on a 4×4 Input:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "4×4 Grid / Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\begin{bmatrix}1&2&0&1\\0&1&2&1\\2&1&0&0\\1&2&1&1\\end{bmatrix}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter $W$ (2×2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\begin{bmatrix}1&0\\-1&1\\end{bmatrix}$, bias = 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convolve at (0,0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$1(1) + 2(0) + 0(-1) + 1(1) = 2$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convolve at (0,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$2(1) + 0(0) + 1(-1) + 2(1) = 3$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convolve at (1,0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$0(1) + 1(0) + 2(-1) + 1(1) = -1$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convolve at (1,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$1(1) + 2(0) + 1(-1) + 0(1) = 0$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature map (2×2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\begin{bmatrix}2&3\\-1&0\\end{bmatrix}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ReLU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\begin{bmatrix}2&3\\0&0\\end{bmatrix}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max pool (2×2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$3$ (single value → the maximum of the 2×2 ReLU output)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1353-python-implementation-pytorch",
      children: "13.5.3 Python Implementation (PyTorch)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import torch\nimport torch.nn as nn\nimport torch.nn.functional as F\nimport torchvision\nimport torchvision.transforms as transforms\nfrom torch.utils.data import DataLoader\n\n# ===== Simple CNN for CIFAR-10 =====\nclass SimpleCNN(nn.Module):\n    def __init__(self, num_classes=10):\n        super().__init__()\n        self.conv1 = nn.Conv2d(in_channels=3, out_channels=32, kernel_size=3, padding=1)\n        self.bn1   = nn.BatchNorm2d(32)\n        self.conv2 = nn.Conv2d(32, 64, kernel_size=3, padding=1)\n        self.bn2   = nn.BatchNorm2d(64)\n        self.conv3 = nn.Conv2d(64, 128, kernel_size=3, padding=1)\n        self.bn3   = nn.BatchNorm2d(128)\n        self.pool  = nn.MaxPool2d(kernel_size=2, stride=2)\n        self.fc1   = nn.Linear(128 * 4 * 4, 256)\n        self.fc2   = nn.Linear(256, num_classes)\n        self.drop  = nn.Dropout(0.5)\n\n    def forward(self, x):\n        # Input: (B, 3, 32, 32)\n        x = self.pool(F.relu(self.bn1(self.conv1(x))))   # (B, 32, 16, 16)\n        x = self.pool(F.relu(self.bn2(self.conv2(x))))   # (B, 64, 8, 8)\n        x = self.pool(F.relu(self.bn3(self.conv3(x))))   # (B, 128, 4, 4)\n        x = x.view(x.size(0), -1)                         # (B, 2048)\n        x = F.relu(self.fc1(self.drop(x)))                # (B, 256)\n        x = self.fc2(x)                                   # (B, 10)\n        return x\n\n# ===== Training Loop =====\ndevice = torch.device('cuda' if torch.cuda.is_available() else 'cpu')\nmodel = SimpleCNN().to(device)\ncriterion = nn.CrossEntropyLoss()\noptimizer = torch.optim.Adam(model.parameters(), lr=0.001)\n\ntransform = transforms.Compose([\n    transforms.ToTensor(),\n    transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))\n])\ntrainset = torchvision.datasets.CIFAR10(root='./data', train=True, download=True, transform=transform)\ntrainloader = DataLoader(trainset, batch_size=64, shuffle=True, num_workers=2)\n\nfor epoch in range(10):\n    running_loss = 0.0\n    for images, labels in trainloader:\n        images, labels = images.to(device), labels.to(device)\n        optimizer.zero_grad()\n        outputs = model(images)\n        loss = criterion(outputs, labels)\n        loss.backward()\n        optimizer.step()\n        running_loss += loss.item()\n    print(f'Epoch {epoch+1}, Loss: {running_loss/len(trainloader):.4f}')\n\n# ===== Inference =====\nmodel.eval()\nwith torch.no_grad():\n    sample = torch.randn(1, 3, 32, 32).to(device)\n    pred = model(sample)\n    class_id = pred.argmax(dim=1).item()\n    print(f'Predicted class: {class_id}')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1354-complexity-analysis",
      children: "13.5.4 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Layer Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Parameters"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FLOPs for $224\\times224\\times3$ Input"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conv (11×11, 96 filters, s=4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$11^2 \\times 3 \\times 96 + 96 = 34,944$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$55^2 \\times 11^2 \\times 3 \\times 96 \\approx 105M$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each output pixel requires $k^2 \\times C_{\\text{in}}$ multiply-accumulate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conv (3×3, 256 filters, s=1, pad=1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$3^2 \\times 96 \\times 256 + 256 = 221,440$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$56^2 \\times 3^2 \\times 96 \\times 256 \\approx 693M$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High spatial resolution + many filters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max Pool (2×2, s=2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$56^2 \\times 96 \\times 4$ (comparisons)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No learned parameters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FC (4096→4096)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$4096^2 + 4096 = 16.8M$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$4096^2 \\approx 16.8M$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameters dominate in dense layers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " Parameter count is dominated by fully connected layers, while FLOPs are dominated by early convolutional layers (high resolution × many filters)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1355-advantages-and-disadvantages",
      children: "13.5.5 Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Parameter sharing"
            }), " → one filter across entire image drastically reduces parameters vs fully connected"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires large labeled datasets for good generalization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Translation invariance"
            }), " → learned features work regardless of position in image"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computationally expensive to train (days/weeks on GPU)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Hierarchical features"
            }), " → simple→complex feature learning automatically"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Black-box → difficult to interpret what each layer learns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Robust to spatial distortions"
            }), " → pooling provides local translation invariance"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensitive to adversarial examples (small pixel perturbations cause misclassification)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mature ecosystem (PyTorch, TensorFlow, JAX)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less sample-efficient than Vision Transformers with large data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1356-edge-cases",
      children: "13.5.6 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Occlusion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object partially hidden → features missing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use data augmentation (random erasing); ensemble models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Adversarial perturbations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invisible pixel changes flip prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adversarial training; input preprocessing (JPEG compression)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Domain shift"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Training on photos, testing on sketches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain adaptation; fine-tune on target domain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Class imbalance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some classes have few training examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted loss; oversampling; focal loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Small objects"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Objects occupy few pixels; detail lost after pooling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use feature pyramid networks (FPN); avoid aggressive early pooling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rotation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CNN conv layers are not inherently rotation invariant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data augmentation (random rotation); group-equivariant CNNs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "136-object-detection",
      children: "13.6 Object Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy → A Security Guard Scanning a Crowd"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Imagine a security guard scanning a crowded airport terminal. She needs to answer two questions for every person: (1) Is this a person? (classification), and (2) Where exactly is this person located? (localization). She doesn't just classify the whole scene as \"has people\" → she mentally draws a box around each individual, even when they overlap."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Object detection does the same: for every object in an image, it predicts a class label AND a bounding box $(x, y, w, h)$."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1361-evaluation-metric-iou-and-map",
      children: "13.6.1 Evaluation Metric: IoU and mAP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intersection over Union (IoU):"
      }), " Measures overlap between predicted box $B_p$ and ground truth $B_{gt}$:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\text{IoU} = \\frac{\\text{Area}(B_p \\cap B_{gt})}{\\text{Area}(B_p \\cup B_{gt})}$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A prediction is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "true positive"
      }), " if IoU ≥ threshold (typically 0.5) AND class matches."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "mean Average Precision (mAP):"
      }), " Average precision across all classes at a given IoU threshold."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1362-two-stage-detectors-r-cnn-family",
      children: "13.6.2 Two-Stage Detectors: R-CNN Family"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "R-CNN (Region-based CNN):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Generate ~2000 region proposals using Selective Search (grouping superpixels).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Warp each region proposal to a fixed size ($227 \\times 227$).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Run each warped region through a CNN (AlexNet) to extract a feature vector.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Classify each region with a class-specific SVM.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Refine bounding box coordinates with a linear regressor."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fast R-CNN:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Run the entire image through a CNN once to produce a feature map.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Project region proposals onto the feature map.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Apply ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RoI Pooling"
      }), " to extract fixed-size feature maps for each proposal.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Classify and regress bounding boxes in parallel using softmax + smooth L1 loss."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Faster R-CNN:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Run the image through a CNN backbone (e.g., VGG-16, ResNet-50).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Insert a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Region Proposal Network (RPN)"
      }), " that slides a small network over the feature map, predicting $k$ anchor boxes per location → \"objectness\" score + box refinement.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " RoI Pool features from proposals.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Classify and regress final boxes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode → Faster R-CNN Inference:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION faster_rcnn_infer(image, backbone, rpn, roi_head):\n    // Backbone feature extraction\n    feature_map ← backbone(image)          // (1, 1024, H/16, W/16)\n\n    // RPN: generate proposals\n    objectness, box_deltas ← rpn(feature_map)\n    proposals ← DECODE_ANCHORS(box_deltas, objectness)\n    proposals ← NMS(proposals, iou_thresh=0.7)\n    proposals ← TOP_K(proposals, k=300)\n\n    // RoI head: classify and refine\n    roi_features ← roi_pool(feature_map, proposals)       // Fixed-size (7×7)\n    class_scores, final_boxes ← roi_head(roi_features)\n    final_boxes ← NMS(final_boxes, iou_thresh=0.5)\n\n    RETURN final_boxes, class_scores\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace → Anchor Box Scoring at One Position:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assume a feature map position $(5, 5)$ with 3 anchor boxes (ratios 1:1, 1:2, 2:1):"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Anchor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prior (w, h)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RPN objectness"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "IoU with ground truth"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Decision"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anchor 1:1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(64, 64)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.92"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.85"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Positive (foreground)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anchor 1:2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(45, 91)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negative (background)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anchor 2:1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(91, 45)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negative"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After NMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep anchor 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Final proposal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RoI head"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class: \"car\" (0.94)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Box: (10, 20, 70, 65)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detection output"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1363-single-stage-detectors-yolo",
      children: "13.6.3 Single-Stage Detectors: YOLO"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "YOLO (You Only Look Once) treats detection as a single regression problem → one forward pass predicts all boxes simultaneously."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "YOLO Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Divide image into $S \\times S$ grid cells (e.g., $7 \\times 7$ in original YOLO).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Each cell predicts $B$ bounding boxes $(x, y, w, h)$ with confidence scores.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Each cell predicts $C$ class probabilities.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Apply a single CNN to predict an $S \\times S \\times (B \\times 5 + C)$ tensor.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Threshold predictions by confidence; apply Non-Maximum Suppression (NMS)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "YOLOv3+ improvements:"
      }), " Multi-scale predictions (3 scales), anchor boxes via k-means clustering, Darknet-53 backbone, skip connections, sigmoid class predictions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode → YOLO Inference:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION yolo_infer(image, model, S, B, C):\n    // Single forward pass\n    raw_output ← model(image)                   // (1, S, S, B*5 + C)\n    predictions ← []\n\n    FOR each cell (i, j):\n        FOR each box b in 1..B:\n            confidence ← sigmoid(raw_output[i][j][b*5])\n            if confidence < threshold: SKIP\n\n            x ← sigmoid(raw_output[i][j][b*5 + 1]) + i     // Center x (grid-relative)\n            y ← sigmoid(raw_output[i][j][b*5 + 2]) + j     // Center y\n            w ← exp(raw_output[i][j][b*5 + 3]) * anchor_w  // Width\n            h ← exp(raw_output[i][j][b*5 + 4]) * anchor_h  // Height\n            class_probs ← softmax(raw_output[i][j][B*5 : B*5 + C])\n            class_id ← ARGMAX(class_probs)\n            score ← confidence * class_probs[class_id]\n\n            APPEND {x, y, w, h, class_id, score} TO predictions\n\n    predictions ← NMS(predictions, iou_thresh=0.5)\n\n    RETURN predictions\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run Trace → YOLO Prediction on 7×7 Grid (One Cell):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assume grid cell (3, 4), 2 anchor boxes, 80 COCO classes:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Values"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw output for cell (3,4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[0.85, 0.3, 0.6, -0.2, 0.1, 0.1, 0.7, 0.2, 0.8, -0.3, ...class scores...]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decode box 1: confidence"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["sigmoid(0.85) = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "0.70"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Box 1: center x"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["sigmoid(0.3) + 3 = 0.57 + 3 = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "3.57"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Box 1: center y"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["sigmoid(0.6) + 4 = 0.65 + 4 = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "4.65"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Box 1: width"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["exp(-0.2) × anchor_w(116) = 0.82 × 116 = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "95.1"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Box 1: height"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["exp(0.1) × anchor_h(90) = 1.11 × 90 = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "99.9"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Box 1: class scores (top-3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "car: 0.82, truck: 0.10, bus: 0.05"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Box 1: final score"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["0.70 × 0.82 = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "0.57"
            }), " → \"car\""]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Box 2: confidence"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["sigmoid(0.1) = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "0.52"
            }), " [below threshold 0.5? depends]"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After NMS across grid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Final: 1 car detected at grid-aligned coordinates"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1364-python-implementation",
      children: "13.6.4 Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import cv2\nimport torch\n\n# ===== Load Pre-trained YOLOv5 (PyTorch Hub) =====\nmodel = torch.hub.load('ultralytics/yolov5', 'yolov5s', pretrained=True)\nmodel.conf = 0.25    # Confidence threshold\nmodel.iou = 0.45     # NMS IoU threshold\n\n# ===== Inference =====\nimg = cv2.imread('street.jpg')\nimg_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)\nresults = model(img_rgb)\n\n# Results as pandas DataFrame\nprint(results.pandas().xyxy[0])\n\n# Draw detections\nresults.render()  # Draws on img_rgb in-place\ncv2.imshow('YOLO', cv2.cvtColor(img_rgb, cv2.COLOR_RGB2BGR))\ncv2.waitKey(0)\ncv2.destroyAllWindows()\n\n# ===== Load Faster R-CNN (Torchvision) =====\nfrom torchvision.models.detection import fasterrcnn_resnet50_fpn\n\nmodel_frcnn = fasterrcnn_resnet50_fpn(pretrained=True)\nmodel_frcnn.eval()\n\nwith torch.no_grad():\n    img_tensor = torch.from_numpy(img_rgb).permute(2, 0, 1).float() / 255.0\n    predictions = model_frcnn([img_tensor])\n\n# predictions[0] contains 'boxes', 'labels', 'scores'\nboxes = predictions[0]['boxes'].numpy()\nlabels = predictions[0]['labels'].numpy()\nscores = predictions[0]['scores'].numpy()\n\nfor box, label, score in zip(boxes, labels, scores):\n    if score > 0.5:\n        x1, y1, x2, y2 = box.astype(int)\n        cv2.rectangle(img, (x1, y1), (x2, y2), (0, 255, 0), 2)\n        cv2.putText(img, f'{label} {score:.2f}', (x1, y1-5),\n                    cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0,255,0), 1)\n\ncv2.imshow('Faster R-CNN', img)\ncv2.waitKey(0)\ncv2.destroyAllWindows()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1365-complexity-analysis",
      children: "13.6.5 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inference Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Accuracy (mAP@0.5)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R-CNN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50s per image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~58%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2000 separate CNN forward passes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fast R-CNN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2s per image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~70%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single forward pass + RoI pooling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Faster R-CNN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0.2s per image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~73%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Learned RPN replaces Selective Search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "YOLO (original)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0.02s (45+ FPS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~63%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single regression, no proposals"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "YOLOv5s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0.01s (100+ FPS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~75%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient backbone, multi-scale predictions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "YOLOv8x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0.03s (30+ FPS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~85%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anchor-free, task-aligned loss"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1366-advantages-and-disadvantages",
      children: "13.6.6 Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
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
              children: "R-CNN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, clear pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extremely slow; redundant computations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fast R-CNN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Much faster than R-CNN; end-to-end training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Still uses external Selective Search (not learned)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Faster R-CNN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fully learnable; highest accuracy variant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower than single-stage for real-time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "YOLO"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blazing fast; sees full image context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Struggles with small objects and dense crowds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SSD"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast, multi-scale detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More false positives than Faster R-CNN"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1367-edge-cases",
      children: "13.6.7 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Small objects"
            }), " (pixels < 32×32)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YOLO grid may miss them"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use feature pyramid networks (FPN); multi-scale training"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Occlusion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial object → low confidence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use NMS with lower threshold; part-based detectors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dense crowds"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overlapping boxes suppressed by NMS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use soft-NMS; set-based losses (DETR)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Extreme aspect ratios"
            }), " (e.g., long poles)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed anchor boxes don't fit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use anchor-free methods (FCOS, CornerNet)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Motion blur"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blurry objects → poor features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deblur preprocessing; train with motion-blur augmentation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "137-segmentation",
      children: "13.7 Segmentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy → Coloring by Numbers with Boundaries"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Imagine you have a coloring book page showing a house with a blue sky, green grass, and a red roof. Semantic segmentation is like assigning every single pixel to a category → sky pixels are blue, grass pixels are green, roof pixels are red → regardless of which roof belongs to which house. Instance segmentation goes further: if there are two houses, the two roofs get different shades of red (each instance separately identified)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1371-semantic-segmentation",
      children: "13.7.1 Semantic Segmentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assigns a class label $c \\in {1, \\dots, K}$ to every pixel. Output: $H \\times W$ label map."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "U-Net Architecture (Ronneberger et al., 2015):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encoder (contracting path):"
        }), " Repeated conv+ReLU+max-pool. Captures context, reduces spatial size."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bottleneck:"
        }), " 2 conv layers at lowest resolution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decoder (expanding path):"
        }), " Upsampling + conv. Skip connections concatenate encoder features to decoder features → this preserves spatial detail lost during pooling."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Input image $I \\in \\mathbb{R}^{H \\times W \\times 3}$.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Encoder block 1: 2× conv(64) → max pool → Feature map: $(H/2, W/2, 64)$.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Encoder block 2: 2× conv(128) → max pool → Feature map: $(H/4, W/4, 128)$.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Encoder block 3: 2× conv(256) → max pool → Feature map: $(H/8, W/8, 256)$.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Encoder block 4: 2× conv(512) → max pool → Feature map: $(H/16, W/16, 512)$.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6:"
      }), " Bottleneck: 2× conv(1024).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 7:"
      }), " Decoder block 1: Up-conv(512) → concatenate with encoder block 4 → 2× conv(512).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 8:"
      }), " Decoder block 2: Up-conv(256) → concatenate with encoder block 3 → 2× conv(256).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 9:"
      }), " Decoder block 3: Up-conv(128) → concatenate with encoder block 2 → 2× conv(128).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 10:"
      }), " Decoder block 4: Up-conv(64) → concatenate with encoder block 1 → 2× conv(64).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 11:"
      }), " Final 1×1 conv( num_classes ) → softmax → pixel-wise class probabilities."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode → U-Net Forward:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION unet_forward(image):\n    // Encoder\n    e1 ← conv_relu(conv_relu(image, 64))\n    p1 ← max_pool(e1)                     // H/2 × W/2 × 64\n\n    e2 ← conv_relu(conv_relu(p1, 128))\n    p2 ← max_pool(e2)                     // H/4 × W/4 × 128\n\n    e3 ← conv_relu(conv_relu(p2, 256))\n    p3 ← max_pool(e3)                     // H/8 × W/8 × 256\n\n    e4 ← conv_relu(conv_relu(p3, 512))\n    p4 ← max_pool(e4)                     // H/16 × W/16 × 512\n\n    // Bottleneck\n    b ← conv_relu(conv_relu(p4, 1024))\n\n    // Decoder with skip connections\n    d4 ← up_conv(b, 512)\n    d4 ← concat(d4, e4)\n    d4 ← conv_relu(conv_relu(d4, 512))\n\n    d3 ← up_conv(d4, 256)\n    d3 ← concat(d3, e3)\n    d3 ← conv_relu(conv_relu(d3, 256))\n\n    d2 ← up_conv(d3, 128)\n    d2 ← concat(d2, e2)\n    d2 ← conv_relu(conv_relu(d2, 128))\n\n    d1 ← up_conv(d2, 64)\n    d1 ← concat(d1, e1)\n    d1 ← conv_relu(conv_relu(d1, 64))\n\n    // Output\n    logits ← conv_1x1(d1, num_classes)\n    probs ← softmax(logits)\n    RETURN probs                            // H × W × num_classes\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1372-instance-segmentation-mask-r-cnn",
      children: "13.7.2 Instance Segmentation: Mask R-CNN"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mask R-CNN (He et al., 2017) extends Faster R-CNN by adding a mask prediction branch for each RoI."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key innovation:"
      }), " RoI Align (instead of RoI Pool). RoI Pool quantizes coordinates, causing misalignment for pixel-level tasks. RoI Align uses bilinear interpolation for sub-pixel accuracy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Backbone (ResNet-FPN) extracts multi-scale features.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " RPN proposes candidate bounding boxes.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " RoI Align extracts $14 \\times 14$ feature maps per proposal.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Three parallel heads: classification (class), bounding box regression (box), and mask segmentation (mask).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Mask head: 4 conv layers producing a $28 \\times 28$ binary mask per class. During inference, the mask is upsampled and thresholded to produce the final segmentation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1373-python-implementation",
      children: "13.7.3 Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import torch\nimport torch.nn as nn\nimport torch.nn.functional as F\n\n# ===== U-Net Implementation (Simplified) =====\nclass DoubleConv(nn.Module):\n    def __init__(self, in_ch, out_ch):\n        super().__init__()\n        self.conv = nn.Sequential(\n            nn.Conv2d(in_ch, out_ch, 3, padding=1),\n            nn.BatchNorm2d(out_ch),\n            nn.ReLU(inplace=True),\n            nn.Conv2d(out_ch, out_ch, 3, padding=1),\n            nn.BatchNorm2d(out_ch),\n            nn.ReLU(inplace=True),\n        )\n    def forward(self, x):\n        return self.conv(x)\n\nclass UNet(nn.Module):\n    def __init__(self, in_channels=3, num_classes=2):\n        super().__init__()\n        self.enc1 = DoubleConv(in_channels, 64)\n        self.enc2 = DoubleConv(64, 128)\n        self.enc3 = DoubleConv(128, 256)\n        self.enc4 = DoubleConv(256, 512)\n        self.bottleneck = DoubleConv(512, 1024)\n\n        self.up4 = nn.ConvTranspose2d(1024, 512, 2, stride=2)\n        self.dec4 = DoubleConv(1024, 512)\n        self.up3 = nn.ConvTranspose2d(512, 256, 2, stride=2)\n        self.dec3 = DoubleConv(512, 256)\n        self.up2 = nn.ConvTranspose2d(256, 128, 2, stride=2)\n        self.dec2 = DoubleConv(256, 128)\n        self.up1 = nn.ConvTranspose2d(128, 64, 2, stride=2)\n        self.dec1 = DoubleConv(128, 64)\n        self.out = nn.Conv2d(64, num_classes, 1)\n\n        self.pool = nn.MaxPool2d(2)\n\n    def forward(self, x):\n        # Encoder\n        e1 = self.enc1(x)                       # (B, 64, H, W)\n        p1 = self.pool(e1)                      # (B, 64, H/2, W/2)\n        e2 = self.enc2(p1)                      # (B, 128, H/2, W/2)\n        p2 = self.pool(e2)                      # (B, 128, H/4, W/4)\n        e3 = self.enc3(p2)                      # (B, 256, H/4, W/4)\n        p3 = self.pool(e3)                      # (B, 256, H/8, W/8)\n        e4 = self.enc4(p3)                      # (B, 512, H/8, W/8)\n        p4 = self.pool(e4)                      # (B, 512, H/16, W/16)\n\n        b = self.bottleneck(p4)                 # (B, 1024, H/16, W/16)\n\n        # Decoder with skip connections\n        d4 = self.up4(b)                        # (B, 512, H/8, W/8)\n        d4 = torch.cat([d4, e4], dim=1)         # (B, 1024, H/8, W/8)\n        d4 = self.dec4(d4)                      # (B, 512, H/8, W/8)\n\n        d3 = self.up3(d4)                       # (B, 256, H/4, W/4)\n        d3 = torch.cat([d3, e3], dim=1)         # (B, 512, H/4, W/4)\n        d3 = self.dec3(d3)                      # (B, 256, H/4, W/4)\n\n        d2 = self.up2(d3)                       # (B, 128, H/2, W/2)\n        d2 = torch.cat([d2, e2], dim=1)         # (B, 256, H/2, W/2)\n        d2 = self.dec2(d2)                      # (B, 128, H/2, W/2)\n\n        d1 = self.up1(d2)                       # (B, 64, H, W)\n        d1 = torch.cat([d1, e1], dim=1)         # (B, 128, H, W)\n        d1 = self.dec1(d1)                      # (B, 64, H, W)\n\n        logits = self.out(d1)                   # (B, num_classes, H, W)\n        return logits\n\n# ===== Inference with Pre-trained Mask R-CNN =====\nfrom torchvision.models.detection import maskrcnn_resnet50_fpn\nimport cv2\nimport numpy as np\n\nmodel_mask = maskrcnn_resnet50_fpn(pretrained=True)\nmodel_mask.eval()\n\nimg = cv2.imread('street.jpg')\nimg_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)\nimg_tensor = torch.from_numpy(img_rgb).permute(2, 0, 1).float() / 255.0\n\nwith torch.no_grad():\n    pred = model_mask([img_tensor])\n\n# Visualize masks\nfor i in range(len(pred[0]['masks'])):\n    score = pred[0]['scores'][i].item()\n    if score > 0.5:\n        mask = pred[0]['masks'][i, 0].numpy()\n        mask = (mask > 0.5).astype(np.uint8)\n        contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)\n        cv2.drawContours(img, contours, -1, (0, 255, 0), 2)\n\ncv2.imshow('Mask R-CNN', img)\ncv2.waitKey(0)\ncv2.destroyAllWindows()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1374-complexity-analysis",
      children: "13.7.4 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter Count"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "U-Net inference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(H \\times W \\times C)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~31M (with 1024 bottleneck)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full-resolution encoder-decoder with skip connections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "U-Net training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(H \\times W \\times C \\times E)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backprop through entire U-Net for $E$ epochs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mask R-CNN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(H \\times W \\times C) + O(N_{\\text{prop}} \\times 14^2)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~44M (ResNet-50+FPN+heads)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backbone + RoI Align + per-proposal mask head"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DeepLabv3+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(H \\times W \\times C)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~59M (ResNet-101+ASPP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Atrous convolution at multiple rates"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1375-advantages-and-disadvantages",
      children: "13.7.5 Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
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
              children: "U-Net"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent with limited data; preserves spatial details via skip connections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input size constrained (patch-based for large images)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mask R-CNN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Joint detection + segmentation; RoI Align is sub-pixel accurate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower than single-shot methods; complex pipeline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DeepLab"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Atrous convolutions capture multi-scale context without downsampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High memory for large dilation rates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Panoptic FPN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unified semantic + instance segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very complex training procedure"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1376-edge-cases",
      children: "13.7.6 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Thin structures"
            }), " (e.g., bicycle spokes)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Downsampling loses thin details"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use higher input resolution; dilated convolutions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ambiguous boundaries"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacent objects of same class (two cars touching)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instance segmentation with boundary-aware loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Class imbalance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Background pixels vastly outnumber foreground"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted cross-entropy; Dice loss; focal loss"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Small objects"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pixels lost in early pooling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid aggressive stride; use input pyramid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Occlusion boundaries"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Where objects overlap, class boundary is unclear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boundary refinement modules; CRF post-processing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "138-cv-tasks-comparison",
      children: "13.8 CV Tasks Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Task"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Architecture"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Difficulty"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Image Classification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image $H \\times W \\times 3$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single class label $c \\in {1..K}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResNet, ViT, EfficientNet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Top-1 / Top-5 Accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Photo tagging, defect inspection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (well-studied)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Object Detection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image $H \\times W \\times 3$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bounding boxes ${(x_i, y_i, w_i, h_i, c_i)}_{i=1}^N$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YOLO, Faster R-CNN, DETR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mAP@0.5, mAP@0.5:0.95"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Autonomous driving, surveillance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Semantic Segmentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image $H \\times W \\times 3$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pixel labels $L \\in {1..K}^{H \\times W}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "U-Net, DeepLab, SegFormer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mIoU, Pixel Accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medical imaging, self-driving"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Instance Segmentation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image $H \\times W \\times 3$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-instance masks ${(M_i, c_i)}_{i=1}^N$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mask R-CNN, YOLACT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mask AP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microscopy, e-commerce"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Object Tracking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Video frames"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trajectories ${(x_i^t, y_i^t)}_{t=1}^T$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SORT, DeepSORT, ByteTrack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MOTA, IDF1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Surveillance, sports analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pose Estimation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image / Video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keypoints ${(k_x, k_y)}_{i=1}^{17}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OpenPose, HRNet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCK, OKS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AR/VR, fitness tracking, robotics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Depth Estimation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image(s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depth map $D \\in \\mathbb{R}^{H \\times W}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MiDaS, DPT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RMSE, $\\delta_1$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3D reconstruction, autonomous nav"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Image Generation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text / noise / label"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image $H' \\times W' \\times 3$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stable Diffusion, DALL-E, GAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FID, IS, CLIP score"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content creation, design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-selection-guide",
      children: "Task Selection Guide"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Choose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"Is there a cat in this image?\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classification (binary)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only need presence/absence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"Where are the cars in this traffic photo?\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need location + count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"Which pixels belong to the road?\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pixel-level understanding needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"Count the cells and measure each one\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instance segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need per-instance boundaries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"Follow this person across video frames\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporal association needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"Overlay a virtual hat on this person's head\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pose estimation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Need body keypoint locations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"Generate a photorealistic product image\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Image generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create new visual content"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "139-cnn-architectures-comparison",
      children: "13.9 CNN Architectures Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy → Evolution of Car Engines"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AlexNet was the Model T Ford → first to prove it works. VGG was a V12 engine → powerful but wasteful (massive parameter count). ResNet was the hybrid engine → added a clever bypass (skip connections) that made deep networks practical. EfficientNet was the modern turbo-diesel → optimally balanced all dimensions (depth, width, resolution). YOLO is a Formula 1 engine → optimized for raw speed. Mask R-CNN is a pickup truck → does everything (detect + segment) but burns more fuel."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Architecture"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Year"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Depth"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Parameters"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Top-1 Acc (ImageNet)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FLOPs"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Innovation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Training Time (8×V100)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AlexNet"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "62M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "56.5%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.7G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First deep CNN winner; ReLU; dropout; GPU training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~6 days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "VGG-16"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "138M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "71.6%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15.3G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uniform 3×3 conv stack; very deep for its time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~14 days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "VGG-19"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "144M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "72.1%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "19.6G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deeper VGG variant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~16 days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GoogLeNet (Inception v1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "69.8%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inception modules (parallel 1×1, 3×3, 5×5); Global avg pooling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~7 days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ResNet-50"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2015"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "26M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "76.0%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.1G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Residual (skip) connections; batch normalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~7 days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ResNet-152"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2015"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "152"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "78.6%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11.3G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deepest residual network; solved vanishing gradient"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10 days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DenseNet-121"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2017"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "121"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "75.0%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.8G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dense connectivity (each layer connects to all later layers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~8 days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SENet-154"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2018"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "154"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "69M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "81.3%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42.5G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Squeeze-and-Excitation (channel attention)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~15 days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EfficientNet-B0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2019"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.3M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "77.1%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.4G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compound scaling (depth+width+resolution together)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~5 days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EfficientNet-B7"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2019"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "81"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "66M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "84.3%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "37G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Largest EfficientNet; state-of-the-art efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~12 days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MobileNetV3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2019"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5.4M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "75.2%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.2G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depthwise separable convs; NAS-optimized for mobile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~4 days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "YOLOv5s"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7.2M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ (COCO 37.2 mAP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.5G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-shot detector; CSPDarknet backbone; Mosaic aug"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2 days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "YOLOv8x"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "57"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "68.2M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ (COCO 56.8 mAP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "257G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anchor-free; task-aligned loss; decoupled head"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~5 days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mask R-CNN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2017"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ (COCO 38.2 mask AP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RoI Align; mask head; FPN backbone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10 days"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ViT-L/16"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24 (transformer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "307M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "85.2% (JFT-300M pretrained)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "190G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pure transformer; patch embeddings; pre-training matters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~30 days"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1391-architecture-decision-guide",
      children: "13.9.1 Architecture Decision Guide"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "If You Need"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Choose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Because"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mobile / real-time inference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MobileNetV3, EfficientNet-lite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low FLOPs, small model size (<10 MB)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EfficientNet-B7, ViT-L/16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State-of-the-art ImageNet top-1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YOLOv8s, YOLOv5s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100+ FPS on GPU"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High-accuracy detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mask R-CNN, Cascade R-CNN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-stage refinement gives better masks/boxes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Training with limited data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResNet-50, U-Net"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate parameters, strong transfer learning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Feature extraction backbone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResNet-50, EfficientNet-B4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Well-tested, available in all frameworks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "U-Net (medical), DeepLabv3+ (scene), Mask R-CNN (instance)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specialized architectures per segmentation type"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1392-evolution-timeline",
      children: "13.9.2 Evolution Timeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "timeline\n    title CNN Architecture Evolution\n    2012 : AlexNet (8 layers, GPU breakthrough)\n    2014 : VGG (deep 3×3 stack)\n         : GoogLeNet (Inception modules)\n    2015 : ResNet (skip connections, 152 layers)\n    2016 : YOLO (real-time detection)\n         : SSD (multi-scale detection)\n    2017 : Mask R-CNN (instance segmentation)\n         : DenseNet (dense connections)\n    2018 : SENet (channel attention)\n    2019 : EfficientNet (compound scaling)\n         : MobileNetV3 (NAS-optimized)\n    2020 : YOLOv4/v5 (CSPDarknet, Mosaic)\n    2021 : ViT (vision transformer)\n         : Swin Transformer (hierarchical transformer)\n    2023 : YOLOv8 (anchor-free, task-aligned)\n         : ConvNeXt V2 (modernized ConvNet)\n         : DINOv2 (self-supervised ViT)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1310-interview-corner",
      children: "13.10 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-explain-the-convolution-operation-in-cnns-how-does-it-differ-from-correlation",
      children: "Q1: Explain the convolution operation in CNNs. How does it differ from correlation?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Convolution in CNNs is a mathematical operation where a filter (kernel) slides over the input, computing element-wise multiplication and summation at each position."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Standard correlation:"
      }), "  $C(i, j) = \\sum_m \\sum_n I[i+m, j+n] \\cdot K[m, n]$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Convolution:"
      }), "  $(I * K)[i, j] = \\sum_m \\sum_n I[i+m, j+n] \\cdot K[-m, -n]$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The only difference is that the kernel is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "flipped 180 degrees"
      }), " before application. In practice, deep learning frameworks implement ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cross-correlation"
      }), " (no flipping) but call it convolution. This doesn't matter because the network learns the kernel weights anyway → a flipped kernel is just a different set of learned weights."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key properties of convolution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sparse interactions:"
        }), " Each output pixel depends only on a local neighborhood (kernel size), not all pixels."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parameter sharing:"
        }), " The same kernel slides across the entire input → dramatically fewer parameters than fully connected."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Equivariance:"
        }), " If the input shifts, the output shifts by the same amount. This gives CNNs translation equivariance."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " A $3 \\times 3$ convolution on a $224 \\times 224 \\times 3$ image with 64 filters:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parameters: $3 \\times 3 \\times 3 \\times 64 + 64 = 1,792$"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Equivalent fully connected layer: $224 \\times 224 \\times 3$ input → output of same size would require $(224^2 \\times 3) \\times (224^2 \\times 64) \\approx 1.1 \\times 10^{11}$ parameters → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "61 million times more!"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-what-is-receptive-field-how-do-you-compute-it",
      children: "Q2: What is receptive field? How do you compute it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The receptive field is the region of the input image that influences a particular feature in the output (a single neuron's \"view\" of the input)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For a stack of convolutional layers, the receptive field grows with depth. For a single $k \\times k$ convolution, the receptive field is $k$. For a sequence of layers, the effective receptive field can be computed recursively:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["$$\\text{RF}", (0,jsx_runtime.jsx)(_components.em, {
        children: "{l} = \\text{RF}"
      }), "{l-1} + (k_l - 1) \\times \\prod_{i=1}^{l-1} s_i$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where $\\text{RF}_l$ is the receptive field at layer $l$, $k_l$ is kernel size, and $s_i$ is stride at layer $i$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example computation for VGG-16:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kernel"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stride"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cumulative RF"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conv1_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3×3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$0 + (3-1) \\times 1 = 2$ → effective: $2 + 1 = 3$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conv1_2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3×3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$3 + (3-1) \\times 1 = 5$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pool1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2×2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$5 + (2-1) \\times 1 = 6$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conv2_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3×3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$6 + (3-1) \\times 2 = 10$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conv2_2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3×3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$10 + (3-1) \\times 2 = 14$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pool2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2×2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$14 + (2-1) \\times 2 = 16$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conv3_1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3×3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$16 + (3-1) \\times 4 = 24$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conv3_2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3×3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$24 + (3-1) \\times 4 = 32$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conv3_3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3×3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$32 + (3-1) \\times 4 = 40$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pool3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2×2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$40 + (2-1) \\times 4 = 44$"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of VGG-16, each neuron in the final feature map \"sees\" a $404 \\times 404$ region of the input → larger than the $224 \\times 224$ input itself, meaning the network has full-image context."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why receptive field matters:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Too small:"
        }), " Network can't see large objects (e.g., a bus spanning most of the image)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Too large:"
        }), " Network may lose ability to localize fine details."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design choice: Dilated convolutions increase RF without downsampling."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-is-transfer-learning-when-and-why-do-we-use-it",
      children: "Q3: What is transfer learning? When and why do we use it?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Transfer learning takes a model trained on a large dataset (e.g., ImageNet with 14M images) and adapts it to a new, usually smaller, task."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Your dataset is small (<10K images per class)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Your task is visually similar to the pre-training task (natural images → natural images)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You have limited compute (1 GPU vs 100 GPUs)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You need faster convergence."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach 1 → Feature Extractor:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Freeze the pre-trained backbone (conv layers)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Replace the final classification head with a new randomly initialized head."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Train only the new head."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The backbone acts as a fixed feature extractor."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach 2 → Fine-tuning:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Load pre-trained weights for the entire network."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Replace the final classification layer to match your number of classes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Train all layers with a small learning rate (1/10th of original)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Earlier layers learn less (they capture generic features like edges); later layers adapt more."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode → Transfer Learning:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION transfer_learn(pretrained_model, new_dataset, mode):\n    // Remove old classifier head\n    backbone ← pretrained_model.features\n    num_features ← backbone.output_channels\n\n    // Add new classifier\n    new_head ← Sequential(\n        AdaptiveAvgPool2d(1),\n        Flatten(),\n        Dropout(0.5),\n        Linear(num_features, num_classes_new)\n    )\n    model ← Sequential(backbone, new_head)\n\n    IF mode == \"feature_extractor\":\n        FREEZE(backbone)              // No gradient updates\n        optimizer ← Adam(new_head.parameters, lr=1e-3)\n\n    ELSE IF mode == \"fine_tune\":\n        UNFREEZE_ALL()\n        optimizer ← Adam(model.parameters, lr=1e-4)   // 10× smaller than scratch\n\n    // Train as usual\n    FOR epoch in 1..num_epochs:\n        FOR batch in new_dataset:\n            loss ← cross_entropy(model(batch.images), batch.labels)\n            loss.backward()\n            optimizer.step()\n\n    RETURN model\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Performance comparison on a small medical dataset (1000 X-ray images):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Training Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Accuracy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Train from scratch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~4 hours"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "72%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overfitting (too few samples for 26M parameters)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Feature extractor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~15 minutes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "84%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generic features (edges, textures) transfer well"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fine-tune all layers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1 hour"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "91%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adapts mid-level features to X-ray specific patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fine-tune last 2 blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~30 minutes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "93%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preserves generic features while adapting task-specific ones"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-explain-the-vanishing-gradient-problem-and-how-resnet-solves-it",
      children: "Q4: Explain the vanishing gradient problem and how ResNet solves it."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " In very deep networks, gradients during backpropagation get multiplied by many small weights through the chain rule, causing them to shrink exponentially (vanish). Early layers learn very slowly or not at all."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ResNet solution → Skip connections (residual connections):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Instead of learning $H(x)$ directly, a residual block learns $F(x) = H(x) - x$, so $H(x) = F(x) + x$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The gradient flows directly through the skip connection during backprop:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\frac{\\partial \\text{Loss}}{\\partial x} = \\frac{\\partial \\text{Loss}}{\\partial H} \\left(1 + \\frac{\\partial F}{\\partial x}\\right)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The \"1\" term ensures the gradient never vanishes → even if $\\partial F/\\partial x$ is very small."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-is-the-difference-between-semantic-segmentation-and-instance-segmentation",
      children: "Q5: What is the difference between semantic segmentation and instance segmentation?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Semantic Segmentation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Instance Segmentation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-pixel class label"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-instance mask + class"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distinguishes instances?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (two cars = same mask)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (each car gets separate mask)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Number of classes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable (depends on instances)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation metric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mIoU (class-level)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mask AP (instance-level)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Example architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "U-Net, DeepLab"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mask R-CNN, YOLACT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Self-driving (road vs sidewalk)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medical (count each cell)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-how-does-non-maximum-suppression-nms-work",
      children: "Q6: How does Non-Maximum Suppression (NMS) work?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " NMS eliminates duplicate detections for the same object."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sort all detection boxes by confidence score (highest first)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select the box with the highest confidence."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute IoU of this box with all remaining boxes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove remaining boxes with IoU > threshold (typically 0.5)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat steps 2-4 until no boxes remain."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION nms(boxes, scores, iou_threshold):\n    indices ← ARGSORT(scores, descending=True)\n    keep ← []\n\n    WHILE length(indices) > 0:\n        current ← indices[0]\n        APPEND current TO keep\n\n        ious ← compute_iou(boxes[current], boxes[indices[1:]])\n        remaining ← []\n        FOR i, idx IN ENUMERATE(indices[1:]):\n            IF ious[i] ≤ iou_threshold:\n                APPEND idx TO remaining\n\n        indices ← remaining\n\n    RETURN keep\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-is-data-augmentation-and-why-is-it-critical-for-cv",
      children: "Q7: What is data augmentation and why is it critical for CV?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Data augmentation artificially expands the training dataset by applying label-preserving transformations to existing images. It prevents overfitting and improves generalization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common augmentations:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Augmentation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Random crop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crop a random region"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Translation invariance; focus on different regions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal flip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mirror image"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handles left/right variation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rotation (±15°)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rotate slightly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handles tilted images"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Color jitter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjust brightness, contrast, saturation, hue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Illumination invariance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gaussian noise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add random pixel noise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Robustness to sensor noise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cutout/Random Erase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mask random rectangular regions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Robustness to occlusion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mixup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blend two images linearly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smoother decision boundaries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RandAugment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Randomly select augmentation magnitude"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic augmentation search"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1311-applications-in-real-systems",
      children: "13.11 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy → CV Is the Eyes of Every Smart System"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Just as humans rely on vision for 80%+ of daily tasks (driving, reading faces, navigating spaces), modern AI systems depend on computer vision as their primary sensory modality. Every major tech breakthrough of the last decade → self-driving cars, face-unlock phones, AR filters, medical AI diagnostics → is fundamentally a computer vision problem."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13111-face-recognition",
      children: "13.11.1 Face Recognition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pipeline:"
      }), " Detection → Alignment → Feature Extraction → Matching"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1 → Face Detection:"
      }), " MTCNN or RetinaFace detects face bounding boxes and facial landmarks (eyes, nose, mouth corners).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2 → Face Alignment:"
      }), " Apply affine transformation to align the face to a canonical position using eye coordinates.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3 → Feature Extraction:"
      }), " Pass aligned face through a deep CNN (FaceNet, ArcFace, CosFace) to produce a 128-d or 512-d embedding vector.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4 → Matching:"
      }), " Compare embedding against enrolled embeddings using cosine similarity or Euclidean distance. If below threshold → match found."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture → FaceNet with Triplet Loss:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Anchor (Face A)  ──→ CNN ──→ Embedding: [0.23, 0.87, ..., 0.12]\nPositive (Face A) ──→ CNN ──→ Embedding: [0.25, 0.85, ..., 0.15]\nNegative (Face B) ──→ CNN ──→ Embedding: [0.91, 0.23, ..., 0.88]\n\nTriplet Loss: max(d(anchor, positive) - d(anchor, negative) + margin, 0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key challenges:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Illumination variation"
        }), " → same face looks different in shadow vs sunlight"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Aging"
        }), " → face changes over years"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pose variation"
        }), " → profile vs frontal"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Occlusion"
        }), " → sunglasses, masks, scarves"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spoofing"
        }), " → photos, videos, 3D masks (solved by liveness detection)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code → Face Recognition Inference:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import cv2\nimport numpy as np\nfrom facenet_pytorch import MTCNN, InceptionResnetV1\n\n# Load models\nmtcnn = MTCNN(image_size=160)\nresnet = InceptionResnetV1(pretrained='vggface2').eval()\n\n# Process image\nimg = cv2.imread('face.jpg')\nimg_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)\nface, prob = mtcnn(img_rgb, return_prob=True)\n\nif face is not None and prob > 0.9:\n    embedding = resnet(face.unsqueeze(0))     # (1, 512)\n    print(f'Face embedding shape: {embedding.shape}')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13112-autonomous-driving",
      children: "13.11.2 Autonomous Driving"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Autonomous vehicles use multiple CV tasks simultaneously:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Task"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Object detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YOLO, CenterNet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detect cars, pedestrians, cyclists, traffic signs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lane detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "U-Net, SCNN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify lane boundaries"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DeepLab, SegFormer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classify road, sidewalk, sky, vegetation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Depth estimation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MiDaS, MonoDepth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measure distance to objects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traffic sign recognition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResNet, MobileNet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read stop signs, speed limits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DeepSORT, ByteTrack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Track detected objects across frames"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BEV (Bird's Eye View)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lift-Splat-Shoot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convert camera views to top-down map"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Safety-critical requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Latency:"
        }), " <100ms from camera to actuation (ideally <30ms for highway)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reliability:"
        }), " False negative on a pedestrian = fatal. Precision matters more than recall in moderation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Redundancy:"
        }), " Multiple cameras + LiDAR + radar + ultrasonic for sensor fusion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Robustness:"
        }), " Must work in rain, fog, night, direct sunlight, falling snow"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13113-medical-imaging",
      children: "13.11.3 Medical Imaging"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CV is revolutionizing radiology, pathology, and ophthalmology:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Input Modality"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Task"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tumor detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CT / MRI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object detection (3D)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3D U-Net, nnUNet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Diabetic retinopathy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundus photo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classification + segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResNet + U-Net"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bone fracture detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X-ray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YOLO, EfficientDet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cell segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microscopy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instance segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cellpose, StarDist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cardiovascular MRI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cardiac MRI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segmentation (ventricle)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "U-Net, VoxelMorph"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Skin cancer screening"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dermoscopy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classification (binary)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EfficientNet, ViT"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Challenges specific to medical CV:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Limited labeled data"
        }), " → expert annotation is expensive and time-consuming"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Class imbalance"
        }), " → disease cases are rare compared to healthy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Regulatory approval"
        }), " → FDA, CE marking required before clinical use"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Domain shift"
        }), " → images from different hospitals use different scanners/protocols"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explainability"
        }), " → doctors need to understand why the model made a prediction (saliency maps, Grad-CAM)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code → Medical Image Segmentation Inference:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import torch\nimport torch.nn.functional as F\nimport nibabel as nib\nimport numpy as np\n\n# Load trained U-Net (see Section 13.7.3 for architecture)\nmodel = UNet(in_channels=1, num_classes=3)  # 3 classes: background, tumor, edema\nmodel.load_state_dict(torch.load('brain_tumor_unet.pth'))\nmodel.eval()\n\n# Load MRI volume\nnifti = nib.load('brain_mri.nii.gz')\nvolume = nifti.get_fdata()                    # (240, 240, 155) → 155 slices\nslice_2d = volume[:, :, 80]                   # Extract middle slice\nslice_norm = (slice_2d - slice_2d.mean()) / slice_2d.std()\n\n# Predict\nwith torch.no_grad():\n    tensor = torch.from_numpy(slice_norm).unsqueeze(0).unsqueeze(0).float()\n    logits = model(tensor)                     # (1, 3, 240, 240)\n    probs = F.softmax(logits, dim=1)\n    mask = probs.argmax(dim=1).squeeze().numpy()\n\nprint(f'Unique classes: {np.unique(mask)}')   # e.g., [0, 1, 2]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13114-augmented-reality-filters",
      children: "13.11.4 Augmented Reality Filters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AR filters (Snapchat, Instagram, TikTok, Apple Memoji) overlay virtual content on real-world faces in real-time."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pipeline:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1 → Face Detection:"
      }), " Detect faces at 30+ FPS using lightweight models (MobileNet-SSD, BlazeFace).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2 → Landmark Detection:"
      }), " Predict 68 or 468 facial landmarks (eyes, eyebrows, nose, mouth, jawline).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3 → Head Pose Estimation:"
      }), " Solve Perspective-n-Point (PnP) to estimate 3D head rotation and translation.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4 → 3D Mesh Fitting:"
      }), " Fit a 3D face mesh to landmarks (mediapipe, ARKit).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5 → Rendering:"
      }), " Render virtual content (hat, glasses, dog ears) anchored to 3D landmarks. Uses blending, lighting, and physics."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Performance requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "<10ms"
        }), " per frame for face tracking (to leave budget for rendering)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "30-60 FPS"
        }), " for smooth AR experience"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "<10MB"
        }), " model size for mobile download"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1312-vision-transformers-vit",
      children: "13.12 Vision Transformers (ViT)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy → Reading a Page vs Seeing the Whole Page"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A CNN processes an image like reading a book word-by-word in a small window → it sees local patterns and gradually builds up understanding. A Vision Transformer processes it like scanning the entire page at once → it sees how every patch relates to every other patch from the very first layer."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Vision Transformer (Dosovitskiy et al., 2021) applies the transformer architecture directly to image patches, showing that pure attention mechanisms can match or exceed CNNs when pre-trained on sufficient data."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13121-architecture",
      children: "13.12.1 Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key components:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Patch Embedding:"
      }), " Divide image $I \\in \\mathbb{R}^{H \\times W \\times C}$ into $P \\times P$ patches (typically $P=16$). For a $224 \\times 224$ image: $(224/16)^2 = 196$ patches. Each patch of size $16\\times16\\times3=768$ is flattened and linearly projected to a $D$-dimensional embedding (typically $D=768$)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Positional Embedding:"
      }), " Since self-attention is permutation-invariant, positional encodings are added to patch embeddings to retain spatial information. Learnable 1D position embeddings are typically used."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Transformer Encoder:"
      }), " $L$ layers of Multi-Head Self-Attention (MHSA) + MLP + LayerNorm + residual connections."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Self-Attention:"
        }), " $Q = XW_Q$, $K = XW_K$, $V = XW_V$. Output: $\\text{softmax}(QK^\\top / \\sqrt{d_k}) V$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-Head:"
        }), " 12-16 heads in parallel, each attending to different relationships."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MLP:"
        }), " Two-layer expansion (e.g., $D=768 \\rightarrow 3072 \\rightarrow 768$) with GELU activation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Classification Head:"
      }), " A special [CLS] token (like BERT) is prepended to the patch sequence. Its final representation passes through an MLP for class prediction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13122-algorithm-vit-forward-pass",
      children: "13.12.2 Algorithm: ViT Forward Pass"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Resize image to $224 \\times 224 \\times 3$.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Divide into $16 \\times 16$ patches → $196$ patches of dimension $768$.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Linear projection of each patch to $D=768$ → patch embeddings.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Add learnable positional embeddings (197 × 768 → includes [CLS] token).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Prepend [CLS] token embedding (also learned).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6:"
      }), " Pass through $L=12$ (ViT-Base) transformer encoder blocks.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 7:"
      }), " Extract the [CLS] token's final representation.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 8:"
      }), " Feed [CLS] through classification head (LayerNorm → MLP).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 9:"
      }), " Apply softmax to get class probabilities."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION vit_forward(image, model):\n    patches ← EXTRACT_PATCHES(image, patch_size=16)   // 196 × 768\n    embeddings ← LINEAR_PROJECTION(patches)            // 196 × 768\n\n    // Prepend [CLS] token\n    cls_token ← model.cls_embedding                    // 1 × 768\n    sequence ← CONCAT(cls_token, embeddings)           // 197 × 768\n\n    // Add positional embeddings\n    sequence ← sequence + model.pos_embedding          // 197 × 768\n\n    // Transformer encoder blocks\n    FOR each block in model.blocks:\n        norm1 ← LAYERNORM(sequence)\n        attn ← MULTIHEAD_ATTENTION(norm1)\n        sequence ← sequence + attn                      // Residual\n        norm2 ← LAYERNORM(sequence)\n        mlp ← MLP(norm2)\n        sequence ← sequence + mlp                       // Residual\n\n    // Classify\n    cls_out ← sequence[0]                               // [CLS] token only\n    logits ← model.classifier(cls_out)\n    probs ← softmax(logits)\n    RETURN probs\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13123-key-advantages-and-limitations",
      children: "13.12.3 Key Advantages and Limitations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Global receptive field from the start (attention sees all patches)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires large datasets (JFT-300M, ImageNet-21K) to outperform CNNs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture unified with NLP (text + images in same model)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quadratic complexity $O(N^2)$ in sequence length ($N=196$ for $224^2$, but $N=3136$ for $896^2$)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scales well with compute (more data + bigger model consistently improves)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lacks CNN-like inductive biases (translation equivariance, locality)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible to varying input resolutions (unlike fixed CNN downsampling)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computationally expensive for high-resolution images"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13124-efficient-variants",
      children: "13.12.4 Efficient Variants"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Variant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Innovation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FLOPs Reduction"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "DeiT"
            }), " (Data-efficient ViT)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distillation from CNN teacher; strong augmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as ViT, better data efficiency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Swin Transformer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hierarchical + shifted window attention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$O(N)$ instead of $O(N^2)$ via windowed attention"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "CvT"
            }), " (Convolutional ViT)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conv token embedding + conv attention projection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Better low-level feature capture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MaxViT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-axis attention (local + global)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SOTA efficiency on mobile"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MobileViT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lightweight ViT for mobile (combined conv + transformer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5M parameters, 2× faster than MobileNetV3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1313-generative-image-models",
      children: "13.13 Generative Image Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy → A Sketch Artist vs a Restorer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Imagine two artists: a sketch artist who has never seen a person but must draw a face from pure imagination (random noise), and a restorer who starts with a heavily damaged painting and progressively removes the damage to reveal the original."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GANs"
      }), " work like the sketch artist + a critic: the artist (generator) draws, the critic (discriminator) judges whether it's real or fake. The artist improves by trying to fool the critic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Diffusion models"
      }), " work like the restorer: they start with pure noise and learn to remove it step by step, turning noise into a coherent image."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13131-generative-adversarial-networks-gans",
      children: "13.13.1 Generative Adversarial Networks (GANs)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GANs (Goodfellow et al., 2014) consist of two networks competing in a minimax game:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generator $G$:"
        }), " Takes random noise $z \\sim \\mathcal{N}(0, 1)$ and produces an image $G(z)$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Discriminator $D$:"
        }), " Takes an image and outputs a probability of it being real (vs generated)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Objective:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["$$\\min_G \\max_D V(D, G) = \\mathbb{E}", (0,jsx_runtime.jsx)(_components.em, {
        children: "{x \\sim p"
      }), "{\\text{data}}}[\\log D(x)] + \\mathbb{E}_{z \\sim p_z}[\\log(1 - D(G(z)))]$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Training loop:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sample real images ${x^{(i)}}$ from training set."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sample noise vectors ${z^{(i)}}$ from prior."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate fake images ${G(z^{(i)})}$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Train discriminator to maximize $\\log D(x) + \\log(1 - D(G(z)))$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Train generator to minimize $\\log(1 - D(G(z)))$ (or maximize $\\log D(G(z))$ for better gradients)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repeat until Nash equilibrium (generator produces realistic images)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm → GAN Training:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION train_gan(generator, discriminator, data, epochs):\n    FOR epoch IN 1..epochs:\n        FOR batch IN data:\n            // Real images\n            real ← sample_batch(data)             // (B, 3, 64, 64)\n\n            // Generate fake images\n            z ← sample_noise(B, latent_dim=100)   // (B, 100)\n            fake ← generator(z)                   // (B, 3, 64, 64)\n\n            // Train discriminator (maximize log D(x) + log(1 - D(G(z))))\n            d_real ← discriminator(real)\n            d_fake ← discriminator(fake.detach()) // Stop gradient to generator\n            d_loss ← -(log(d_real).mean() + log(1 - d_fake).mean())\n            d_loss.backward()\n            d_optimizer.step()\n\n            // Train generator (minimize log(1 - D(G(z))) OR maximize log D(G(z)))\n            d_fake_again ← discriminator(fake)\n            g_loss ← -log(d_fake_again).mean()    // Generator wants discriminator to be wrong\n            g_loss.backward()\n            g_optimizer.step()\n\n        PRINT \"Epoch\", epoch, \"D loss:\", d_loss.item(), \"G loss:\", g_loss.item()\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Important GAN Variants:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Variant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Year"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Innovation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DCGAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2016"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conv layers in both G and D; architectural guidelines for stability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WGAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2017"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wasserstein distance instead of JS-divergence; gradient penalty"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "StyleGAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2019"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Style-based generator (mapping network + AdaIN); disentangled latent space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "StyleGAN2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2020"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Improved normalization; removed artifacts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "StyleGAN3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2021"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alias-free; equivariant to translation/rotation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BigGAN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2019"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large-scale GAN (512 batch, class-conditional) → SOTA FID"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13132-diffusion-models",
      children: "13.13.2 Diffusion Models"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Denoising Diffusion Probabilistic Models (DDPMs, Ho et al., 2020) learn to reverse a gradual noising process."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Forward process (fixed):"
      }), " Gradually add Gaussian noise over $T$ steps (typically $T=1000$):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$q(x_t | x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1 - \\beta_t} x_{t-1}, \\beta_t I)$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After $T$ steps, $x_T \\sim \\mathcal{N}(0, I)$ → pure noise."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reverse process (learned):"
      }), " Neural network $\\epsilon_\\theta$ predicts the noise added at each step:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$p_\\theta(x_{t-1} | x_t) = \\mathcal{N}(x_{t-1}; \\mu_\\theta(x_t, t), \\Sigma_\\theta(x_t, t))$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Training objective (simplified):"
      }), " $\\mathcal{L} = \\mathbb{E}", (0,jsx_runtime.jsx)(_components.em, {
        children: "{t, x_0, \\epsilon} [| \\epsilon - \\epsilon"
      }), "\\theta(x_t, t) |^2]$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The network simply predicts the noise $\\epsilon$ that was added. At inference, noise is iteratively removed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm → DDPM Sampling:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION sample_diffusion(model, num_steps=1000):\n    x_T ← randn(3, 64, 64)                  // Pure Gaussian noise\n\n    FOR t ← num_steps DOWNTO 1:\n        z ← 0 IF t == 1 ELSE randn_like(x)  // Random noise (except last step)\n\n        // Predict noise at step t\n        predicted_noise ← model(x_t, t)\n\n        // Compute x_{t-1} from x_t\n        alpha_bar ← PRODUCT(sqrt(1 - beta_s) FOR s = 1..t)\n        sigma ← sqrt((1 - alpha_bar_{t-1}) * beta_t / (1 - alpha_bar_t))\n\n        x_{t-1} ← 1/sqrt(1 - beta_t) * (x_t - beta_t/sqrt(1 - alpha_bar_t) * predicted_noise)\n        x_{t-1} ← x_{t-1} + sigma * z      // Add stochastic noise\n\n    RETURN x_0                              // Generated image\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13133-latent-diffusion-models-stable-diffusion",
      children: "13.13.3 Latent Diffusion Models (Stable Diffusion)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Standard diffusion models operate in pixel space → slow and memory-intensive. Latent diffusion (Rombach et al., 2022) operates in a compressed latent space learned by a VAE (Variational Autoencoder)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pipeline:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1 → Compression:"
      }), " VAE encoder compresses $512\\times512\\times3$ image → $64\\times64\\times4$ latent.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2 → Diffusion:"
      }), " U-Net denoises in the compressed $64\\times64$ latent space (128× fewer pixels).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3 → Conditioning:"
      }), " Text prompt → CLIP text encoder → cross-attention into U-Net.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4 → Decode:"
      }), " VAE decoder reconstructs $64\\times64\\times4$ latent → $512\\times512\\times3$ image."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why latent diffusion is faster:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pixel-space diffusion: $512^2 \\times 3 = 786K$ dimensions per step × 1000 steps."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Latent diffusion: $64^2 \\times 4 = 16K$ dimensions per step × 50 steps (DDIM sampler)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "~300× fewer total operations."
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13134-python-implementation",
      children: "13.13.4 Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import torch\nimport torch.nn as nn\nimport torch.nn.functional as F\n\n# ===== Simple Diffusion Model Components =====\nclass SinusoidalTimeEmbedding(nn.Module):\n    def __init__(self, dim):\n        super().__init__()\n        self.dim = dim\n\n    def forward(self, t):\n        half_dim = self.dim // 2\n        emb = torch.log(torch.tensor(10000.0)) / (half_dim - 1)\n        emb = torch.exp(torch.arange(half_dim, device=t.device) * -emb)\n        emb = t[:, None].float() * emb[None, :]\n        return torch.cat([torch.sin(emb), torch.cos(emb)], dim=-1)\n\nclass SimpleUNet(nn.Module):\n    def __init__(self, in_channels=3, time_dim=256):\n        super().__init__()\n        self.time_mlp = nn.Sequential(\n            SinusoidalTimeEmbedding(time_dim),\n            nn.Linear(time_dim, time_dim),\n            nn.ReLU(),\n        )\n        # Simplified U-Net structure (full implementation would have encoder/decoder)\n        self.conv1 = nn.Conv2d(in_channels + 1, 64, 3, padding=1)\n        self.conv2 = nn.Conv2d(64, 128, 3, stride=2, padding=1)\n        self.conv3 = nn.Conv2d(128, 256, 3, stride=2, padding=1)\n        self.conv4 = nn.Conv2d(256, 128, 3, padding=1)\n        self.conv5 = nn.Conv2d(128, in_channels, 3, padding=1)\n\n    def forward(self, x, t):\n        t_emb = self.time_mlp(t)                    # (B, time_dim)\n        t_img = t_emb[:, :, None, None].expand(-1, -1, x.shape[2], x.shape[3])\n        t_img = t_img[:, :1, :, :]                  # Use first channel for simplicity\n        x = torch.cat([x, t_img], dim=1)            # (B, 4, H, W)\n        x = F.relu(self.conv1(x))\n        skip = x\n        x = F.relu(self.conv2(x))\n        x = F.relu(self.conv3(x))\n        x = F.interpolate(F.relu(self.conv4(x)), scale_factor=2)\n        x = F.interpolate(F.relu(self.conv5(x + skip)), scale_factor=2)\n        return x\n\n# ===== Using Stable Diffusion via Hugging Face =====\nfrom diffusers import StableDiffusionPipeline\n\npipe = StableDiffusionPipeline.from_pretrained(\n    \"runwayml/stable-diffusion-v1-5\",\n    torch_dtype=torch.float16,\n)\npipe = pipe.to(\"cuda\")\n\n# Generate image from text\nprompt = \"A photorealistic cat wearing a spacesuit, digital art, highly detailed\"\nimage = pipe(prompt, num_inference_steps=50, guidance_scale=7.5).images[0]\nimage.save(\"cat_astronaut.png\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13135-evaluation-metrics",
      children: "13.13.5 Evaluation Metrics"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Measures"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Range"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Good Score"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "FID"
            }), " (Fréchet Inception Distance)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distribution distance between real and generated features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 = identical, higher = worse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<10 (excellent), <30 (good)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "IS"
            }), " (Inception Score)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both quality and diversity of generated images"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher = better"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ">100 (excellent, ImageNet)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CLIP Score"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alignment between generated image and text prompt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher = better"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ">30 (good alignment)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LPIPS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perceptual similarity between images"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 = identical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<0.1 (very similar)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13136-advantages-and-disadvantages",
      children: "13.13.6 Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "GANs"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Diffusion Models"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fast generation (single forward pass)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow generation (50-1000 steps)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prone to mode collapse (generates only one type of image)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diverse outputs; covers full data distribution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Training is unstable (minimax game is hard to converge)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stable training (simple MSE loss)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sharper images at lower resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher quality at high resolution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Less control over generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent text-conditioning via classifier-free guidance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best FID on constrained domains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best FID on diverse, large-scale datasets"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13137-edge-cases",
      children: "13.13.7 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "GAN"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Diffusion"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Unusual perspectives"
            }), " (top-down view)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Often fails (mode collapse to common views)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handles well with sufficient training data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Rare object combinations"
            }), " (e.g., \"purple elephant\")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blends into common objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generally handles accurately if text-encoder understands"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "High-frequency details"
            }), " (text, faces)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Produces artifacts (checkerboard patterns)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Better detail preservation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Composition"
            }), " (two objects, one relation)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Struggles with object relationships"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Better with large models (DALL-E 2, SDXL)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Task"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Architecture"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Key Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class label"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ResNet, ViT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Top-1/Top-5 accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(HWC)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Object Detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bounding boxes + classes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YOLO, Faster R-CNN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "mAP (mean Average Precision)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(HWC) + O(N_text{boxes})$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic Segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pixel class labels"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "U-Net, DeepLab"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "mIoU (Intersection over Union)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(HWCK)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Instance Segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-instance masks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mask R-CNN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Mask AP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(HWC) + O(N_text{inst} * 28^2)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image Generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New images"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAN, Diffusion Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "FID, IS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$O(HWC * T)$ where $T$ = steps"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-u2014-cnn-components",
      children: "Quick Reference \\u2014 CNN Components"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Parameters"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Output Size (for 224\\u00b2 \\u00d7 3)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Convolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slide kernel over input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detect local patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$k^2 C_text{in} C_text{out} + C_text{out}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$\\lfloor (W - k + 2p)/s \\rfloor + 1$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ReLU"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\max(0, x)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-linearity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Same as input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max Pooling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Downsample 2\\u00d72 blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce spatial dims"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$W/2 \\times H/2$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Global Avg Pool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Average entire feature map"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce to vector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$C$ (channels only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Batch Norm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normalize + scale + shift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stabilize training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$2C$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Same as input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dropout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Randomly zero fraction $p$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevent co-adaptation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Same as input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flatten"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2D to 1D vector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bridge to FC layers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$HWC$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fully Connected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$Wx + b$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classify features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$C_text{in} C_text{out} + C_text{out}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$C_text{out}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Softmax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$e^{x_i} / \\sum e^{x_j}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probability distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Same as input"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "ML"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "CV"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "NLP"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Robotics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Medical"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Security"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CNN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Object Detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2717"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2717"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Segmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2717"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2717"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2717"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vision Transformer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAN / Diffusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2717"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2717"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIFT / HOG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2717"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2717"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2717"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Face Recognition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2717"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2717"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2717"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2717"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optical Flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2717"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2717"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2717"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Feature Matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\u2713"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-key-innovation-enabled-resnet-to-train-152-layer-networks",
      children: "Q1: What key innovation enabled ResNet to train 152-layer networks?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Dropout regularization\nB) Skip connections (residual connections) solving the vanishing gradient problem\nC) Batch normalization\nD) Data augmentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** ResNet's skip connections allow gradients to flow directly through the network, bypassing layers and preventing vanishing gradients in very deep networks. Without skip connections, a 152-layer plain network would have near-zero gradient at early layers."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-what-is-the-main-advantage-of-yolo-over-r-cnn-style-detectors",
      children: "Q2: What is the main advantage of YOLO over R-CNN-style detectors?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) YOLO is more accurate\nB) YOLO uses a single forward pass for the entire image, achieving real-time speed\nC) YOLO requires less training data\nD) YOLO handles small objects better"
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** YOLO treats detection as a single regression problem, predicting bounding boxes and class probabilities in one pass without a separate region proposal stage. This enables 45-100+ FPS compared to Faster R-CNN's ~5 FPS."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-diffusion-models-generate-images-by",
      children: "Q3: Diffusion models generate images by:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Adversarial training between generator and discriminator\nB) Learning to reverse a gradual noising process step by step\nC) Autoencoding input images through a bottleneck\nD) Matching nearest neighbors in a training set"
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** Diffusion models learn the reverse of a Markov noising process, gradually converting random noise into structured images. The forward process adds noise over $T$ steps; the reverse process learns to denoise."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-does-non-maximum-suppression-nms-accomplish-in-object-detection",
      children: "Q4: What does Non-Maximum Suppression (NMS) accomplish in object detection?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) It suppresses low-confidence detections based on class probability\nB) It removes duplicate bounding boxes that overlap significantly with higher-scoring boxes\nC) It normalizes box coordinates to [0, 1]\nD) It augments the training data with random crops"
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** NMS removes duplicate detections for the same object by selecting the highest-confidence box and removing any box whose IoU with it exceeds a threshold (typically 0.5)."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-which-of-the-following-correctly-describes-the-receptive-field-of-a-cnn",
      children: "Q5: Which of the following correctly describes the receptive field of a CNN?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) The number of pixels in the input image that affect a single output neuron\nB) The total number of parameters in the network\nC) The spatial resolution of the output feature map\nD) The size of the training dataset"
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**A)** The receptive field is the region of the input image that influences a particular feature in the output. It grows with network depth \\u2014 deeper layers have larger receptive fields."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-a-3u00d73-convolution-with-64-filters-operating-on-a-224u00d7224u00d73-image-has-how-many-parameters-including-bias",
      children: "Q6: A 3\\u00d73 convolution with 64 filters operating on a 224\\u00d7224\\u00d73 image has how many parameters (including bias)?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) 576\nB) 1,792\nC) 64,000\nD) 442,368"
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** 3 \\u00d7 3 \\u00d7 3 \\u00d7 64 + 64 = 1,792. The equivalent fully connected layer would have 224\\u00b2 \\u00d7 3 \\u00d7 224\\u00b2 \\u00d7 64 \\u2248 1.1 \\u00d7 10\\u00b9\\u00b9 parameters \\u2014 61 million times more."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-is-the-key-advantage-of-vision-transformers-over-cnns",
      children: "Q7: What is the key advantage of Vision Transformers over CNNs?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) They have fewer parameters\nB) They have a global receptive field from the very first layer via self-attention\nC) They require less training data\nD) They are inherently translation invariant"
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** ViT's self-attention mechanism allows every patch to attend to every other patch from the first layer, giving a global receptive field. CNNs build receptive field gradually through stacking layers."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-in-the-canny-edge-detector-what-is-the-purpose-of-non-maximum-suppression",
      children: "Q8: In the Canny edge detector, what is the purpose of non-maximum suppression?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) To remove weak edges below a threshold\nB) To thin edges to single-pixel width by keeping only local gradient maxima\nC) To blur the image before edge detection\nD) To connect broken edge segments"
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** NMS checks each pixel against its neighbors along the gradient direction. If the pixel is not the local maximum, it is suppressed to 0. This produces thin, single-pixel-wide edges."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-what-does-the-triplet-loss-in-facenet-enforce",
      children: "Q9: What does the triplet loss in FaceNet enforce?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) That the anchor is classified correctly\nB) That anchor-positive distance is smaller than anchor-negative distance by at least a margin\nC) That all embeddings lie on a unit sphere\nD) That the model minimizes reconstruction error"
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** Triplet loss: $L = max(d(a,p) - d(a,n) + margin, 0)$. It ensures that embeddings of the same identity are closer together than embeddings of different identities by at least the margin."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-which-segmentation-task-distinguishes-between-individual-object-instances-eg-two-different-cars",
      children: "Q10: Which segmentation task distinguishes between individual object instances (e.g., two different cars)?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A) Semantic segmentation\nB) Instance segmentation\nC) Panoptic segmentation (it does both semantic + instance)\nD) Binary segmentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** Instance segmentation assigns a unique ID to each object instance. Semantic segmentation assigns the same class label to all pixels of the same type regardless of instance. Panoptic segmentation unifies both."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Computer vision transforms unstructured pixel data into structured understanding, progressing from low-level processing (image formation, filtering) through intermediate representations (edges, features) to high-level understanding (classification, detection, segmentation, generation)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key takeaways:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Images are data:"
          }), " A digital image is a matrix of pixel intensities. Color images have multiple channels (RGB). Preprocessing (normalization, color conversion) is essential before applying CV algorithms."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Convolution is fundamental:"
          }), " Filtering, edge detection, and CNN layers all rely on the convolution operation \\u2014 sliding a kernel across an image. The choice of kernel determines the operation (blur, sharpen, edge detect)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CNNs revolutionized CV:"
          }), " Hierarchical feature learning (edges \\u2192 patterns \\u2192 parts \\u2192 objects), parameter sharing, and translation invariance make CNNs highly effective for visual tasks. ResNet's skip connections enabled training networks with 100+ layers."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Detection and segmentation locate objects:"
          }), " Object detection provides bounding boxes; segmentation operates at the pixel level. Single-stage detectors (YOLO) prioritize speed; two-stage detectors (Faster R-CNN) prioritize accuracy."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Feature extraction bridges classical and deep CV:"
          }), " SIFT and HOG provide hand-crafted features that are invariant to transformations. Modern deep learning learns features automatically but the classical methods remain valuable for low-data scenarios."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Transformers challenge CNNs:"
          }), " Vision Transformers treat image patches like word tokens, using self-attention to capture global context. They excel with large datasets but remain less sample-efficient than CNNs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Generative models create new images:"
          }), " GANs use adversarial training for fast generation. Diffusion models (Stable Diffusion) produce higher quality by iteratively denoising. Latent diffusion makes the process practical by operating in a compressed space."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Transfer learning is practical:"
          }), " Pre-training on ImageNet and fine-tuning on target tasks works remarkably well. It reduces data requirements, training time, and compute costs dramatically."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Evaluation depends on the task:"
          }), " Classification uses accuracy; detection uses mAP; segmentation uses IoU; generation uses FID. Choosing the right metric is as important as choosing the right model."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CV is deployed everywhere:"
          }), " Face recognition unlocks phones. Object detection enables self-driving cars. Segmentation powers medical diagnosis. AR filters entertain billions. Diffusion models are transforming content creation."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain the role of non-maximum suppression in the Canny edge detector. What would happen if this step were skipped?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compare R-CNN, Fast R-CNN, Faster R-CNN, and YOLO in terms of (a) inference speed, (b) accuracy, and (c) architectural complexity."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How do Vision Transformers differ from CNNs in processing image structure? What inductive biases do CNNs have that ViTs lack?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain why skip connections in ResNet allow training of much deeper networks. Use the gradient flow equation in your answer."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the difference between semantic segmentation and instance segmentation? Give a real-world application for each."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Describe the forward and reverse processes in diffusion models. Why is latent diffusion more practical than pixel-space diffusion?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does transfer learning help when you have a small medical imaging dataset? Compare fine-tuning vs feature extraction."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the receptive field of a neuron in a CNN? Why does it matter when designing architectures for large objects?"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement Sobel edge detection from scratch (without OpenCV's Sobel). Apply it to a grayscale image and compare horizontal, vertical, and combined edge magnitudes. Visualize the gradient directions as a color wheel."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a simple CNN classifier for CIFAR-10 with at least 3 convolutional layers and batch normalization. Report test accuracy. Then add data augmentation (random crop, horizontal flip) and compare performance."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a script that uses a pre-trained YOLOv5 model to detect objects in a video file. Draw bounding boxes on each frame and save the output video. Measure FPS."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Implement a simple U-Net for semantic segmentation on a synthetic dataset of geometric shapes (circles, squares, triangles on plain background). Report per-class IoU. Visualize predictions vs ground truth."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Adversarial Attack:"
          }), " Implement the Fast Gradient Sign Method (FGSM) to generate adversarial examples for a pre-trained ResNet. Show images that look unchanged to humans but are misclassified. Then implement adversarial training to defend against it."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Neural Style Transfer:"
          }), " Implement Gatys et al.'s neural style transfer algorithm using a pre-trained VGG-19 network. Extract content features from one image and style features (Gram matrices) from another. Optimize a target image to match both."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Face Verification System:"
          }), " Build a complete face verification pipeline: detect faces with MTCNN, compute embeddings with a pre-trained FaceNet/ArcFace model, enroll faces into a database, and verify query faces against enrolled identities. Evaluate on LFW dataset."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom Object Detector:"
          }), " Train YOLOv5 on a custom dataset (e.g., drone footage, traffic signs, or your own collected images). Use Roboflow to annotate and export. Report mAP@0.5 after training for 100 epochs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Image Super-Resolution:"
          }), " Implement an ESRGAN (Enhanced Super-Resolution GAN) to upscale low-resolution images (32 \\u00d7 32 \\u2192 128 \\u00d7 128). Train on DIV2K dataset. Compare PSNR and SSIM with bicubic interpolation."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "project-real-time-face-filter-ar-application",
      children: "Project: Real-Time Face Filter AR Application"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Build a real-time application that detects faces via webcam and overlays virtual objects (sunglasses, hats, masks) anchored to facial landmarks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Capture webcam video with OpenCV (cv2.VideoCapture(0))."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect face bounding boxes and 468 landmarks using MediaPipe Face Mesh."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Map each landmark index to facial features (eyes, nose, jaw)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Load a virtual object image (e.g., sunglasses PNG with transparency)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute affine transform to scale/rotate the object to align with landmarks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overlay the object on each frame using alpha blending."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain 30+ FPS by optimizing processing pipeline."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add at least 3 different filter types (sunglasses, dog nose+ears, crown)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evaluation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FPS on CPU and GPU"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Robustness to head pose variations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accuracy of landmark overlay alignment"
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